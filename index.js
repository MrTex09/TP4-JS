// 1
// function esMayorEdad(edad) {
//     if (edad >= 18) {
//         return true;
//     }else {
//         return false
//     }
// }
// document.write(esMayorEdad(-10))
// 2
// function calcularAreaRectangulo(base, altura) {
//     var area = base * altura;
//     return area;
// }
// document.write(calcularAreaRectangulo(5,10))
// 3
// function esPalindromo(cadena){
//     let array = cadena.split ("")
//     let reverse = array.reverse()
//     return cadena == reverse.join("") ? "si es" : "no es "
    
// }
// document.write(esPalindromo("radara"))
// 4
// const generarNumeroAleatorio = (min,max) => {
//         return parseInt(Math.random() * (max - min)) + min + "<br>";
//     }
    
//     for (let i = 0; i < 100; i++) {
//         document.write(generarNumeroAleatorio(1,11))
// //actividad 2
//     }
// //1) 
// function obtenerSuma(arreglo){
//     let suma = 0;

//     for (let i = 0; i < arreglo.length; i++) {
//         suma += arreglo[i];
//     }

//     return suma;
// }

// let numeros = [1,2,3,4,5];
// document.write(obtenerSuma(numeros));
// //2)
// const obtenerPares = (Array) => {
//     const pares = [];
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] % 2 === 0) {
//             pares.push(Array[i]);
//         }
//     }
//     return pares;
// }
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// document.write(obtenerPares(numeros));

// //3) 
// const obtenerPromedioPonderado = (notas, pesos) =>{
//     if (notas.length !== pesos.length) {
//         throw new Error("Los arreglos deben tener la misma longitud.");
//     }

//     let sumaNotasPesos = 0;
//     let sumaPesos = 0;

//     for (let i = 0; i < notas.length; i++) {
//         sumaNotasPesos += notas[i] * pesos[i];
//         sumaPesos += pesos[i];
//     }
//     let promedioPonderado = sumaNotasPesos / sumaPesos;

//     return promedioPonderado.toFixed(2);
// }
// let notas = [8, 7, 9];
// let pesos = [0.3, 0.4, 0.3];
// let promedio = obtenerPromedioPonderado(notas, pesos);
// document.write("El promedio ponderado es: " + promedio);



// //4) 
// function obtenerMaximo(arr) {
//     if (arr.length === 0) {
//         throw new Error("El arreglo está vacío.");
//     }

//     let maximo = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maximo) {
//         maximo = arr[i];
//         }
//     }

//     return maximo;
// }

// let numeros = [5, 8, 3, 9, 2];
// document.write("el número máximo es: " + obtenerMaximo(numeros));

// //atividad 3
// //1) 
// let producto = {
//     nombre: "cargador para celular",
//     precio: 1500,
//     cantidad: 5
// }


// const calcularTotal = () => {
//     return producto.precio*producto.cantidad;
// }

// document.write(calcularTotal(producto));

// //2) 
// let persona = {
//     nombre: "Brian",
//     edad: 18,
//     profesion: "estudiante"
// }


// const presentarPersona = () => {
//     return `Hola, soy ${persona.nombre} y tengo ${persona.edad}, actualmete soy ${persona.profesion}`
// }


// document.write(presentarPersona(persona))

// //3) 
// const esMayorEdad = (persona) => {
//     if (persona >= 18) {
//         return true;
//     }
//     if (persona < 18) {
//         return false;
//     }
// }

// let persona1 = {
//     nombre: "Brian",
//     edad: 18,
//     profesion: "estudiante"
// }

// let persona2 = {
//     nombre: "Juan",
//     edad: 12,
//     profesion: "estudiante"
// }

// document.write(esMayorEdad(persona1.edad) + "<br>")
// document.write(esMayorEdad(persona2.edad))


// //atividad 4

// //1)
// const positivoNegativo = (num) => {
//     if (num > 0) {
//         return "El número es postivo";
//     }
//     if (num < 0) {
//         return "El número es negativo";
//     }
//     if (num == 0) {
//         return "El número es el cero";
//     }
// }

// let numero = prompt("ingrese un número");

// document.write(positivoNegativo(numero));


// //2) 

// let numero = prompt("Ingrese un número:");
// let esPrimo = true;
// if (numero <= 1) {
//     esPrimo = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//     if (numero % i === 0) {
//         esPrimo = false;
//         break;
//     }
//     }
// }
// if (esPrimo) {
//     document.write("El número " + numero + " es primo.");
// } else {
//     document.write("El número " + numero + " no es primo.");
// }



// //3)

// let temperatura = prompt("Ingrese la temperatura:");
// let unidad = prompt("Ingrese la unidad de temperatura ('C' para Celsius o 'F' para Fahrenheit):");


// function celsiusAFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }
// function fahrenheitACelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5/9;
// }
// let temperaturaConvertida;
// let unidadConvertida;

// if (unidad.toUpperCase() === 'C') {
//     temperaturaConvertida = celsiusAFahrenheit(parseFloat(temperatura));
//     unidadConvertida = 'Fahrenheit';
// } else if (unidad.toUpperCase() === 'F') {
//     temperaturaConvertida = fahrenheitACelsius(parseFloat(temperatura));
//     unidadConvertida = 'Celsius';
// }
// document.write(("La temperatura convertida es: " + temperaturaConvertida + " " + unidadConvertida));




// //4) 
// let precios = [];
// let total = 0;
// while (true) {
//     let precio = prompt("Ingrese el precio del producto (o escriba 'total' para obtener el total):");
//     if (precio.toLowerCase() === 'total') {
//         break;
//     }
//     precio = parseFloat(precio);
//     if (!isNaN(precio) && precio >= 0) {
//     precios.push(precio);
//     total += precio;
//     } else {
//     document.write("Precio inválido. Intente nuevamente.");
//     }
// }
// document.write("El total de la compra es: $" + total.toFixed(2));