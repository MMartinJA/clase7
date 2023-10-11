let x = 1;
const cuantos = 5;
let suma = 0;

while (x <= cuantos) {
    const valor = parseInt(prompt(`Ingrese el valor ${x} de ${cuantos}`, ''))
    suma += valor; // suma+valor que completa el usuario = se guarda en la variable suma
    x++
}

// suma = suma + valor
// suma +=valor
// suma y x > let > van modificando, se reasigna.

console.log(`La suma de los valores es ${suma}`)