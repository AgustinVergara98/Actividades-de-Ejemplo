//fs
// Objetivo: Permite interactuar con el sistema de archivos para leer, escribir y manipular archivos y directorios.
// •  Operaciones asincrónicas y sin bloqueo.
// •  Manejo de archivos y directorios.

import fs from 'fs';

// Leer un archivo de manera asincrónica
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

// Escribir en un nuevo archivo
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});


