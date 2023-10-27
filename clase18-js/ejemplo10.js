const empleados = [
    {
        nombre: 'Martin',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'ana',
        trabajo: 'docente'
    },
    {
        nombre: 'sol',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'maria',
        trabajo: 'medica'
    },
    {
        nombre: 'majo',
        trabajo: 'desarrollador'
    },

]

//metodo array¿? > que solo me muestre los desarrolladores

const desarr = empleados.filter(empleados => empleados.trabajo === 'desarrollador')

console.log(desarr);

for (let i = 0; i < desarr.length; i++) {
    document.write(`<h4>Desarrollador</h4><li>${desarr[i].nombre}. </li>`)
}