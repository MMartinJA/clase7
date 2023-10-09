const num1 = parseInt(prompt('Ingrese un numero',''))//11
const num2 = parseInt(prompt('Ingrese un numero',''))//12
const num3 = parseInt(prompt('Ingrese un numero',''))//13

if(num1 > num2 && num1 > num3){
    console.log(`el mayor es es ${num1}`)
}else if(num2 > num3){
    console.log(`el mayor es el ${num2}`)
}else{
    console.log(`el mayor es el ${num3}`)
}