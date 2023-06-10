


//atividad 4

//1)
const positivoNegativo = (num) => {
    if (num > 0) {
        return "El número es postivo";
    }
    if (num < 0) {
        return "El número es negativo";
    }
    if (num == 0) {
        return "El número es el cero";
    }
}

let numero1 = prompt("ingrese un número");

document.write(positivoNegativo(numero1));


//2) 

let numero = prompt("Ingrese un número:");
let esPrimo = true;
if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
    }
}
if (esPrimo) {
    document.write("El número " + numero + " es primo.");
} else {
    document.write("El número " + numero + " no es primo.");
}



//3)

let temperatura = prompt("Ingrese la temperatura:");
let unidad = prompt("Ingrese la unidad de temperatura ('C' para Celsius o 'F' para Fahrenheit):");


function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
let temperaturaConvertida;
let unidadConvertida;

if (unidad.toUpperCase() === 'C') {
    temperaturaConvertida = celsiusAFahrenheit(parseFloat(temperatura));
    unidadConvertida = 'Fahrenheit';
} else if (unidad.toUpperCase() === 'F') {
    temperaturaConvertida = fahrenheitACelsius(parseFloat(temperatura));
    unidadConvertida = 'Celsius';
}
document.write(("La temperatura convertida es: " + temperaturaConvertida + " " + unidadConvertida));




//4) 
let precios = [];
let total = 0;
while (true) {
    let precio = prompt("Ingrese el precio del producto (o escriba 'total' para obtener el total):");
    if (precio.toLowerCase() === 'total') {
        break;
    }
    precio = parseFloat(precio);
    if (!isNaN(precio) && precio >= 0) {
    precios.push(precio);
    total += precio;
    } else {
    document.write("Precio inválido. Intente nuevamente.");
    }
}
document.write("El total de la compra es: $" + total.toFixed(2));