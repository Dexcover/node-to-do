const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marco como completado o pendiente'
};

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea de hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento to do', {
        descripcion
    })
    .command('actualizar', 'Actualiza la tarea', {
        descripcion,
        completado,
    })
    .command('borrar', 'Borrar la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}