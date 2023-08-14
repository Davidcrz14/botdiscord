module.exports = {
  name: 'ping',
  description: 'Muestra la latencia del bot',
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;

    interaction.editReply(`Pong! Latencia: ${latency}ms, Latencia de la API: ${interaction.client.ws.ping}ms`);
  },
};
