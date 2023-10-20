const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e) {

    e.preventDefault();

    if (e.currentTarget.nombre.value == '') {
        alert('El campo nombre es requerido');
        return;
    }

    if (e.currentTarget.comentarios.value == '') {
        alert('El comentarios es requerido');
        return;
    }

    alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente comentario: ${e.currentTarget.comentarios.value}.`)

})