module.exports = {
  name: 'autorole',
  description: 'Asigna un rol al reaccionar con un emoji',
  options: [
    {
      name: 'rol',
      type: 8, // ROLE
      description: 'El rol que se asignará',
      required: true,
    },
    {
      name: 'mensaje',
      type: 3, // STRING
      description: 'El mensaje a mostrar con el botón de asignación de rol',
      required: true,
    },
  ],
  async execute(interaction) {
    const role = interaction.options.getRole('rol');
    const messageContent = interaction.options.getString('mensaje');

    // Enviar el mensaje con el botón de reacción
    const message = await interaction.channel.send(messageContent);
    await message.react('🔒');

    const filter = (reaction, user) => reaction.emoji.name === '🔒' && !user.bot;
    const collector = message.createReactionCollector({ filter, time: 60000 });

    collector.on('collect', async (reaction, user) => {
      // Asignar el rol al usuario que reaccionó
      const member = await interaction.guild.members.fetch(user.id);
      member.roles.add(role);

      // Quitar la reacción para que no pueda reaccionar nuevamente
      reaction.users.remove(user.id);
    });

    collector.on('end', () => {
      message.reactions.removeAll();
    });

    await interaction.reply('Se ha configurado el autorole.');
  },
};
