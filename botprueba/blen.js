// Importar la biblioteca transformers
const transformers = require('@huggingface/transformers');

// Crear una instancia del modelo BART-base
const model = new transformers.BartBase();

// Definir una función asincrónica para generar texto a partir de una entrada de texto
async function generateText(text) {
  // Pasar el texto al modelo y obtener el texto generado
  const generatedText = await model(text);
  // Devolver el texto generado
  return generatedText;
}

// Definir una función asincrónica para ejecutar el proceso
async function main() {
  // Probar la función con un ejemplo de entrada
  const input = "Hola, ¿qué tal?";
  const output = await generateText(input);
  console.log(output); // Hola, muy bien, ¿y tú?
}

// Llamar a la función principal
main().catch(error => {
  console.error('Error:', error);
});
