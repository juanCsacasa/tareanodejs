const fs = require('fs');
const readline = require('readline');

function crearArchivo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Ingresa una lista de palabras separadas por espacios: ", (palabras) => {
    fs.writeFileSync("palabras.txt", palabras);
    rl.close();
  });
}

function buscarPalabra() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Ingresa la palabra que deseas buscar: ", (palabraBuscada) => {
    const contenido = fs.readFileSync("palabras.txt", "utf8");
    const ocurrencias = contenido.split(" ").filter(palabra => palabra === palabraBuscada).length;
    console.log(`La palabra '${palabraBuscada}' aparece ${ocurrencias} veces en el archivo.`);
    rl.close();
  });
}

crearArchivo();
buscarPalabra();

