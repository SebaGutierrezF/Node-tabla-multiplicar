const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Es el limite de la tabla de multiplicar'
            })
            .check((argv, options) =>{
                if( isNaN(argv.b&&argv.h)){
                    throw 'La base y el limite hasta, tiene que ser un numero'
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'muestra la trabla en consola'
            })
            .option('c', {
                alias: 'colors',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Cambia el color del listado'
            }).argv;

module.exports = argv;   