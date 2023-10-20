const parrafo = document.getElementById('parrafo'); // la palabra en amarrillo es el id (html)
const menos = document.getElementById('menos');
const mas = document.getElementById('mas');
const normal = document.getElementById('normal');

//fontSize > css > font-size ........fontSize(le saque el guion y la primera letra va Mayuscula.)


menos.addEventListener('click',function(){
    parrafo.style.fontSize = '10px'
})

mas.addEventListener('click',function(){
    parrafo.style.fontSize = '30px'
})

normal.addEventListener('click',function(){
    parrafo.style.fontSize = '16px'
})