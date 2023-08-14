module.exports = {
    name: 'bnt',
    description: 'Crea un mensaje con un botón para redireccionar a un link',
    options: [
      {
        name: 'canal',
        type: 7, // CHANNEL
        description: 'El canal donde quieres enviar el mensaje',
        required: true,
      },
      {
        name: 'link',
        type: 3, // STRING
        description: 'El enlace al que se redirigirá',
        required: true,
      },
      {
        name: 'mensaje',
        type: 3, // STRING
        description: 'El mensaje a mostrar en el enlace y el botón',
        required: true,
      },
    ],
    async execute(interaction) {
      const channel = interaction.options.getChannel('canal');
      const link = interaction.options.getString('link');
      const mensajePersonalizado = interaction.options.getString('mensaje');
  
      // Crear un mensaje con el enlace y el botón
      const messageContent = `${mensajePersonalizado}: (${link})`;
      const message = await channel.send({
        content: messageContent,
        components: [
          {
            type: 1,
            components: [
              {
                type: 2,
                label: 'Redirigir',
                style: 5, // Botón con estilo "Link"
                url: link,
              },
            ],
          },
        ],
      });
  
      await interaction.reply(`Botón URL hecho en: ${channel}.`);
    },
  };
  