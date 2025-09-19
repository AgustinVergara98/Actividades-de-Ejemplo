//events
// Objetivo: Implementa un sistema de eventos personalizado en Node.js.

import { EventEmitter } from 'events';

// Crear una instancia de EventEmitter
const emisor = new EventEmitter();

// Definir un evento personalizado
emisor.on('saludo', (nombre) => {
console.log('¡Hola, Agustin!');
});

// Emitir el evento 'saludo'
emisor.emit('saludo', 'Mundo');