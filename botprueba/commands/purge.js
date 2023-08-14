module.exports = {
    name: 'purge',
    description: 'Borra una cantidad de mensajes en un canal',
    options: [
      {
        name: 'cantidad',
        type: 4, // INTEGER
        description: 'La cantidad de mensajes a borrar (entre 1 y 100)',
        required: true,
      },
    ],
    async execute(interaction) {
      const cantidad = interaction.options.getInteger('cantidad');
  
      // Verifica si la cantidad está dentro del rango permitido
      if (cantidad < 1 || cantidad > 100) {
        await interaction.reply('La cantidad debe ser entre 1 y 100.');
        return;
      }
  
      const messages = await interaction.channel.messages.fetch({ limit: cantidad + 1 });
      await interaction.channel.bulkDelete(messages);
  
      await interaction.reply(`Se han eliminado ${cantidad} mensajes.`);
    },
  };
  