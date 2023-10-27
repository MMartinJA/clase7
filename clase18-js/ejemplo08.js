const datosUsuarios = [
    {
        nombre: 'Martin',
        password: 'as1234'
    },
    {
        nombre: 'jose',
        password: 'DD1562'
    },
    {
        nombre: 'nico',
        password: 'CC1650'
    },
    {
        nombre: 'Mari',
        password: 'AA9802'
    },
    {
        nombre: 'Cristina',
        password: 'BB12'
    },
]

const soloPass = datosUsuarios.map(function (p) {
    return p.password
})

console.log(soloPass);

const soloNombre = datosUsuarios.map(function (p) {
    return p.nombre
})

console.log(soloNombre)