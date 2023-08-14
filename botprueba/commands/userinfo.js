module.exports = {
    name: 'userinfo',
    description: 'Muestra información sobre un usuario',
    options: [
      {
        name: 'usuario',
        type: 6, // USER
        description: 'El usuario del que deseas obtener información',
        required: false,
      },
    ],
    async execute(interaction) {
      const targetUser = interaction.options.getMember('usuario') || interaction.member;
  
      const userEmbed = {
        title: `Información de: ${targetUser.user.tag}`,
        thumbnail: {
          url: targetUser.user.avatarURL({ dynamic: true }),
        },
        fields: [
          {
            name: 'Nombre de usuario:',
            value: targetUser.user.username,
            inline: true,
          },
          {
            name: 'ID:',
            value: targetUser.user.id,
            inline: true,
          },
          {
            name: 'Apodo:',
            value: targetUser.nickname || 'Ninguno',
            inline: true,
          },
          {
            name: 'Creación de su Discord:',
            value: targetUser.user.createdAt.toUTCString(),
          },
          {
            name: 'Fecha de ingreso a Leyend:',
            value: targetUser.joinedAt.toUTCString(),
          },
        ],
      };
  
      await interaction.reply({ embeds: [userEmbed] });
    },
  };
  