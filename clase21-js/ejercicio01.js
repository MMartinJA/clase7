//Ejercicio 1
//Pide la edad y si es mayor de 18 años indica si puede conducir.



edad = parseInt(prompt('ingrede edad en numero',''))

if(Number.isNaN(edad)){
    document.write('la edad tiene que ser en numero')
}else if(edad <= 17){
    document.write('No puede conducir')
}else{
    document.write('Puede Conducir')
}


//function determinarMedioDeTransporte(distancia) {
//    if (distancia >= 0 && distancia <= 1000) {
//        return "A pie";
//    } else if (distancia > 1000 && distancia <= 10000) {
//        return "En bicicleta";
//    } else if (distancia > 10000 && distancia <= 30000) {
//        return "En colectivo";
//    } else if (distancia > 30000 && distancia <= 100000) {
//        return "En auto";
//    } else {
//        return "En avión";
//    }
//}

//const distancia = prompt("Ingrese la distancia en metros: "); 

//const medioDeTransporte = determinarMedioDeTransporte(parseFloat(distancia));

//document.write(`Para ${distancia} metros, el medio de transporte apropiado es: ${medioDeTransporte}`);