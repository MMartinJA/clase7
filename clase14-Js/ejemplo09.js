function validarForm(){
    const nombreValido = true;
    const passWordValido = validarLargo(document.form1.text1.value , 5);


    const resultado = nombreValido && passWordValido;

    if(resultado){
        alert ('es valido');
    }else {
        alert('NO ES VALIDO')
    }
}

function validarLargo(texto, largoRequerido){
    return texto.length >= largoRequerido
}