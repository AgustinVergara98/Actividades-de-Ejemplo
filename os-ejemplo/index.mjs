// os
// Objetivo: Proporciona información sobre el sistema donde se ejecuta Node.js.

import os from 'os';
// Obtener la arquitectura del sistema
console.log('Arquitectura:', os.arch());
// Obtener el tipo de sistema operativo consolé.log('Plataforma:', os.platform());
// Obtener la cantidad total de memoria consolé.log('Memoria total:', os.totalmem());
// Obtener la memoria libre
console.log('Memoria libre:', os.freemem());
// Obtener la información de la CPU
console.log('Información de la CPU:', os.cpus());

// En el Git Bash aparece así:
// $ node index.mjs
// Arquitectura: x64
// Memoria libre: 825552896
// Información de la CPU: [
//  {
//    model: 'AMD Ryzen 3 3200G with Radeon Vega Graphics    ',
//   speed: 3600,
//    times: { user: 515250, nice: 0, sys: 783937, idle: 6329234, irq: 60796 }
// },
// {
//    model: 'AMD Ryzen 3 3200G with Radeon Vega Graphics    ',
//  speed: 3600,
//   times: { user: 874421, nice: 0, sys: 580343, idle: 6173453, irq: 14843 }
//},
//  {
//    model: 'AMD Ryzen 3 3200G with Radeon Vega Graphics    ',
//    speed: 3600,
//   times: { user: 804343, nice: 0, sys: 493875, idle: 6330000, irq: 13890 }
//  },
//  {
//    model: 'AMD Ryzen 3 3200G with Radeon Vega Graphics    ',
//    speed: 3600,
//    times: { user: 857921, nice: 0, sys: 545546, idle: 6224750, irq: 14468 }
//  }
//]
