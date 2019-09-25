//requireds
const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('========================'.yellow);
    console.log(`===== Tabla del ${base} =====`.blue);
    console.log('========================'.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let datos = '';

        for (let i = 1; i <= limite; i++) {

            datos += `${base} * ${i} = ${base*i}\n`;

        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`.blue);
            // console.log(`El Archivo tabla-${base}.txt ha sido creado`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};