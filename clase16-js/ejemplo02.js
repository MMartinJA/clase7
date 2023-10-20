const link = document.getElementById('link');

link.addEventListener('click',function(e){

    //evita el funcionamiento del boton
    e.preventDefault();
    alert('Quisiste ir a: ' + e.currentTarget.href)

    
})