const alternar = document.getElementsByClassName('alternar')[0];
console.log(alternar)
alternar.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('activo')
});

//classList > representa la lista de clase asignada a un elenemto.
//toggle > cambio,e ejemplo "prender" 0 "apagar".
// add o remove