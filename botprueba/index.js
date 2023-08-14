const fs = require('fs');
const { Client, GatewayIntentBits, Collection, MessageMentions } = require('discord.js');
const { prefix } = require('./config.json');
const { token } = require('./token.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const responseMessages = [
  `${MessageMentions.USERS} ¡Qué necesitas? En este momento estoy ocupado haciendo muchas cosas. Por favor, si no es necesario, no me etiquetes.`,
  `${MessageMentions.USERS} Hola dime qué pasó amor, estoy para escucharte.`,
  `${MessageMentions.USERS} ¿Qué quieres? ¿No ves que estoy atendiendo un servidor entero?`,
  `${MessageMentions.USERS} ¿Qué shushas, qué pasó?`,
  `${MessageMentions.USERS} ¿Me llamaste? Estoy aquí para servirte.`,
  `${MessageMentions.USERS} ¿En qué puedo ayudarte hoy?`,
  `${MessageMentions.USERS} ¡Hola! ¿Necesitas algo?`,
  `${MessageMentions.USERS} Oh, me mencionaste. ¿En qué puedo asistirte?`,
  `${MessageMentions.USERS} ¡Al rescate! ¿Qué puedo hacer por ti?`,
  `${MessageMentions.USERS} ¡Estoy listo para responder a tus necesidades!`,
  // Agrega más respuestas aquí
];

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`Iniciado como ${client.user.tag}`);
  client.user.setActivity('HentaiLA');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'No se puede xd', ephemeral: true });
  }
});

client.on('messageCreate', async message => {
  if (message.mentions.has(client.user) && !message.author.bot) {
    const randomResponse = responseMessages[Math.floor(Math.random() * responseMessages.length)];
    await message.reply(randomResponse.replace(MessageMentions.USERS, message.author));
  }
});

client.login(token);
