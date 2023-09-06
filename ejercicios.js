alert("Bienvenidos al restaurante. Su cuenta es...");
//Ingresar Datos
var entrada = parseInt(prompt("Ingrese el costo de la entrada"));
var segundo = parseInt(prompt("Ingrese el costo del segundo"));
var postre = parseInt(prompt("Ingrese el costo del postre"));

//Procesar Datos 
var total = entrada + segundo + postre;
var igv = total + total*0.18

alert("Presione la tecla F12 para mostrar los resutados");
//Mostrar Datos
console.log("El costo de la entrada es: " + entrada);
console.log("El costo del segundo es: " + segundo);
console.log("El costo del postre es: " + postre);
console.log("El costo del total es: " + total);
console.log("El costo del IGV es: " + igv);

