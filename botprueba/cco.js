const { REST } = require('@discordjs/rest');

const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require('./config.json');
const commands = [
  {
    name: 'anuncio',
    description: 'Mensaje',
    options: [
      {
        name: 'message',
        type: 3, // STRING
        description: 'El mensaje del anuncio',
        required: true,
      },
      {
        name: 'channel',
        type: 7, // CHANNEL
        description: 'El canal donde se enviará el anuncio',
        required: true,
      },
    ],
  },
  
  {
    name: 'links',
    description: 'Redes del servidor',
  },
  
{  
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
  },
  {
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
  },
  {
    name: 'suma',
    description: 'Suma varios números separados por +',
    options: [
      {
        name: 'numeros',
        type: 3, // STRING
        description: 'Números separados por + a sumar',
        required: true,
      },
    ],
  },
  {
    name: 'encuesta',
    description: 'Crea una encuesta con opciones y reacciones',
    options: [
      {
        name: 'pregunta',
        type: 3, // STRING
        description: 'La pregunta de la encuesta',
        required: true,
      },
      {
        name: 'opciones',
        type: 3, // STRING
        description: 'Ingresa las opciones saparadas por espacios',
        required: true,
      },
    ],
  },
  {
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
  },
  {
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
  },
  {
    name: 'panel',
    description: 'Crea un panel para abrir un ticket',
    options: [
      {
        name: 'mensaje',
        type: 3, // STRING
        description: 'El mensaje que se mostrará en el panel',
        required: true,
      },
      {
        name: 'opcion1',
        type: 3, // STRING
        description: 'La primera opción para abrir el ticket',
        required: true,
      },
      {
        name: 'opcion2',
        type: 3, // STRING
        description: 'La segunda opción para abrir el ticket',
        required: true,
      },
    ],
  },
  {
    name: 'dado',
    description: 'Lanza un dado 🎲 y muestra el resultado',
  },
  {
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
  },
  // ... 
];




const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Empezando a actualizar los comandos de la aplicación (/)...');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('¡Comandos registrados correctamente!');
  } catch (error) {
    console.error(error);
  }
})();
