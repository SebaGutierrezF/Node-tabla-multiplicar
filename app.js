
//const { Console } = require('console');
//const { argv, options } = require('yargs');
const { crearArchivo } = require('./help/multiplicar')
const  argv  = require('./config/yargs')
const colors = require('colors');
         
console.clear();

//console.log( process.argv);
console.log( argv );

//console.log('base: yargs', argv.base );

//const [ , , arg3 ='base=5'] = process.argv;
//const [, base = 5]= arg3.split('=');


crearArchivo(argv.b, argv.l, argv.c, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.green, colors.black('Archivo creado correctamente').bgGreen))
    .catch(err => console.log(err));
