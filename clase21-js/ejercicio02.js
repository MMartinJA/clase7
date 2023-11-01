//Ejercicio 2

//Crear un código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

//0 a 1000 metros = pie
//1000 a 10000 metros = bicicleta
//10000 a 30000 metros = colectivo
//30000 a 100000 metros = auto
//+100000 = avión


veiculo = parseInt(prompt('ingrese la distancia'))

if(veiculo > 0 && veiculo <= 1000){
    alert('poder ir a pie')
}else if(veiculo > 1000 && veiculo <= 10000){
    alert('poder ir en bicicleta')
} else if(veiculo > 10000 && veiculo <= 30000){
    alert('poder ir en colectivo')
} else if(veiculo > 30000 && veiculo <= 100000){
    alert('poder ir en auto')
 } else{
    alert('poder ir en avion') 
}