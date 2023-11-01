//Ejercicio 3

//Haciendo uso de bucles, recorrer un array de (5) números  y determinar cuál es el mayor.


const num = [1,8,3,7,2,4,9]

let mayor = 0;

for (let i = 0; i < num.length; i++){
    if(num[i] > mayor){
        mayor = num[i];
    }    
}

alert('El numero mayor en el array es: ' + mayor)


/*Modo 2*/
/*const numero1 = parseInt(prompt("ingrese el primer numero: "))
const numero2 = parseInt(prompt("ingrese el segundo numero: "))
const numero3 = parseInt(prompt("ingrese el tercer numero: "))
const numero4 = parseInt(prompt("ingrese el cuarto numero: "))
const numero5 = parseInt(prompt("ingrese el quinto numero: "))

const arreglo = [numero1, numero2, numero3, numero4, numero5];

let mayor = 0

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i]
    }
}
alert(`Los valores numericos son: [${arreglo}] y el mayor es: ${mayor}`);*/


/*let array = [];
const cuantos = 5;
let mayor = 0;

while (array.length < cuantos) {
    array[array.length] = parseInt(prompt(`Ingrese el valor ${array.length + 1}  de ${cuantos}:`, ''));
}

for (var i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
        mayor = array[i];
    }
}

document.write(mayor);*/