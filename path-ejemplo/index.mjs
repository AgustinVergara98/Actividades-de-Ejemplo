// path 
//Objetivo: Permite resolver y construir rutas de archivos de forma portable.
// •  Evita problemas con rutas en Windows y Linux.
// •  Permite obtener nombres, extensiones y directorios.

import console from 'console';
import path from 'path';
// Definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';
// Obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);
// Obtener el nombre del archivo sin extensión const baseName = path.basename(filePath, '.txt'); consolé.log('Nombre del archivo:', baseName);
// Obtener la extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);
// Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt')
console.log('Nueva ruta:', newPath);

// En el Git Bash aparece así:
// Directorio base: ./data
// Extensión del archivo: .txt
// Nueva ruta: \user\docs\newfile.txt
