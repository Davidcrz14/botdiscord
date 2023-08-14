// /suggest Command Implementation
module.exports = {
    name: 'sugerencia',
    description: 'Permite a los usuarios enviar sugerencias al servidor.',
    options: [
      {
        name: 'sugerencia',
        type: 3, // STRING
        description: 'Escribe tu sugerencia.',
        required: true,
      },
    ],
    async execute(interaction) {
      const suggestion = interaction.options.getString('sugerencia');
      
      // Puedes enviar la sugerencia a un canal específico para revisión
      const suggestionChannel = interaction.guild.channels.cache.get('1100227894468415488');
      
      if (!suggestionChannel) {
        await interaction.reply('Lo siento, el canal de sugerencias no está configurado.');
        return;
      }
      
      // Crea un mensaje con la sugerencia y el autor
      const suggestionEmbed = {
        title: 'Nueva Sugerencia',
        description: suggestion,
        color: 0xffcc00, // Color amarillo, puedes cambiarlo
        footer: {
          text: `Enviado por ${interaction.user.tag}`,
          icon_url: interaction.user.avatarURL(),
        },
      };
      
      // Envía la sugerencia al canal de sugerencias y reacciona con emoticonos para votar
      const suggestionMessage = await suggestionChannel.send({ embeds: [suggestionEmbed] });
      await suggestionMessage.react('👍');
      await suggestionMessage.react('👎');
      
      await interaction.reply('¡Gracias por tu sugerencia! Será revisada por el equipo.');
    },
  };
  