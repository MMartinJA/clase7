const nombre = 'Martin';
const edad = 22;

console.log(`Hola ${nombre}. Vos tenes ${edad}`);
//interpolacion strings

const edad1 = 18;
const edad2 = 32;

const mensaje1 =` La cuota para personas de ${edad1} es de ${edad1 >= 21 ? 5000 : 3500}`
// operador ternario > version simplificada del if. condicion ? true : false
console.log(mensaje1);

const mensaje2 =` La cuota para personas de ${edad2} es de ${edad2 >= 21 ? 5000 : 3500}`
// operador ternario > version simplificada del if. condicion ? true : false
console.log(mensaje2);