// seleccione los elementos en este caso li que tenia la clase item (6)

const items = document.getElementsByClassName('item');

//for > bucle, que nos sirve para recorrer
//valor inicial; condicion o valor tope; incremento (para dar las vueltas)
//let i > es una variable que va a ir actualizando su valor

for(let i = 0; i < items.length; i++){
    items[i].style = 'color:blue; padding-left: ' + (10*i) + 'px';
}