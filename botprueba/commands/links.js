module.exports = {
	name: 'links',
	description: 'Envía una lista de enlaces al canal',
	async execute(interaction) {
	  const links = [
		'Enlace 1: ',
		'Enlace 2: ',
		'Enlace 3: S',
	  ];
  
	  const response = links.map(link => `[](${link})`).join('\n');
  
	  await interaction.reply(`Lista de enlaces del servidor:\n\n${response}`);
	},
  };
  