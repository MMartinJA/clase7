const alumnos = [
    {
        nombre: 'Martin',
        edad: 2
    },
    {
        nombre: 'Belu',
        edad: 4
    },
    {
        nombre: 'Majo',
        edad: 3
    },
    {
        nombre: 'Cristina',
        edad: 9
    },
    {
        nombre: 'Nico',
        edad: 8
    },
]

// quiero saber que alumno tiene edad mayor o igual a 4 
const mayorA4 = alumnos.filter(alumno => alumno.edad >= 4)

console.log(mayorA4);

// despues imprimir en pantalla puede ser un p o li (buble)

for (let i = 0; i < mayorA4.length; i++) {

    document.write(`<li> Niño: ${mayorA4[i].nombre} , cuya edad es ${mayorA4[i].edad} </li>`)
}
