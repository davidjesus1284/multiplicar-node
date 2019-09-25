const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(listarTabla(argv.base, argv.limite));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch((e) => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// let parametros = argv[2];
// let base = parametros.split('=')[1];

// console.log('Limite', argv.limite);