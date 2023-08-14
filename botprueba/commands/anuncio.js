module.exports = {
    name: 'anuncio',
    description: 'Envia un mensaje especial a un canal',
    options: [
      {
        name: 'message',
        type: 'STRING',
        description: 'El mensaje del anuncio',
        required: true,
      },
      {
        name: 'channel',
        type: 'CHANNEL',
        description: 'El canal donde se enviará el anuncio',
        required: true,
      },
    ],
    async execute(interaction) {
        const message = interaction.options.getString('message');
        const channel = interaction.options.getChannel('channel');
      
        await channel.send(message);
        await interaction.reply({ content: 'Anuncio enviado correctamente', ephemeral: true });
      },
      
  };
  