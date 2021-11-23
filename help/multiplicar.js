const fs = require('fs');
const colors = require('colors');



const crearArchivo = ( base, listar, colors, hasta) =>{


try {
    
    const nombreArchivo = `Tabla-del-${base}`;
    
    return new Promise(( resolve, reject) => {
        
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${i*base}\n`;
            
            
        }

        if (listar) {
            if (colors) {
            console.log('================================='.rainbow);
            console.log('         ',nombreArchivo.rainbow,'x'.rainbow, hasta);
            console.log('================================='.rainbow);
            console.log(salida.rainbow);
            }else{
            console.log('=================================');
            console.log(        nombreArchivo,'x'.rainbow,hasta.blue);
            console.log('=================================');
            console.log(salida);
            }
        };
       // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`./salida/${nombreArchivo}.txt`, salida, (err) => {
        if (err) throw err;
        //console.log(`${nombreArchivo}`,' The file has been saved!');
        });
        
        (nombreArchivo)
        ? resolve (nombreArchivo)
        : reject (`error base ${ base }`);

        
        
        
    });
} catch (error) {
    throw error;
}
                  
}

module.exports = {
    crearArchivo
}