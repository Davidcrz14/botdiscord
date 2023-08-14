module.exports = {
    name: 'dado',
    description: 'Lanza un dado y muestra el resultado',
    async execute(interaction) {
      // Genera un número aleatorio entre 1 y 6 para simular el lanzamiento del dado
      const resultado = Math.floor(Math.random() * 6) + 1;
      await interaction.reply(`Has lanzado un dado 🎲 y el resultado es: ${resultado}`);
    },
  };
  