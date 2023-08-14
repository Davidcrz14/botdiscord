module.exports = {
    name: 'encuesta',
    description: 'Crea una encuesta con opciones y reacciones',
    options: [
      {
        name: 'pregunta',
        type: 3, // STRING
        description: 'Ingresa la pregunta',
        required: true,
      },
      {
        name: 'opciones',
        type: 3, // STRING
        description: 'Ingresa las opciones separadas por espacios',
        required: true,
      },
    ],
    async execute(interaction) {
      // Obtén los argumentos de la interacción
      const question = interaction.options.getString('pregunta');
      const options = interaction.options.getString('opciones').split(' ');
  
      // Verifica si hay una pregunta y al menos dos opciones
      if (!question || options.length < 2) {
        await interaction.reply('Formato de comando incorrecto. Ingresa una pregunta y al menos dos opciones.');
        return;
      }
  
      // Crear y enviar la encuesta
      const animationColors = [
        0xFF0000, // Rojo
        0x00FF00, // Verde
        0x0000FF, // Azul
      ];
  
      const interval = 1000; // Cambio de color cada 3 segundos
      let colorIndex = 0;
  
      setInterval(() => {
        const currentColor = animationColors[colorIndex];
        colorIndex = (colorIndex + 1) % animationColors.length;
  
        const pollEmbed = {
          title: question,
          description: options.map((option, index) => `${index + 1}. ${option}`).join('\n'),
          color: currentColor,
        };
  
        pollMessage.edit({ embeds: [pollEmbed] });
      }, interval);
  
      const pollEmbed = {
        title: question,
        description: options.map((option, index) => `${index + 1}. ${option}`).join('\n'),
        color: animationColors[colorIndex], // Inicializa con el primer color
      };
  
      const pollMessage = await interaction.channel.send({ embeds: [pollEmbed] });
  
      // Agrega reacciones a las opciones
      for (let i = 0; i < options.length; i++) {
        await pollMessage.react(`${i + 1}️⃣`);
      }
  
      await interaction.reply('Encuesta creada con éxito!');
    },
  };
  