//actividad 2
//1) 
function obtenerSuma(arreglo){
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}

let numeros1 = [1,2,3,4,5];
document.write(obtenerSuma(numeros1));
//2)
const obtenerPares = (Array) => {
    const pares = [];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 === 0) {
            pares.push(Array[i]);
        }
    }
    return pares;
}
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write(obtenerPares(numeros2));

//3) 
const obtenerPromedioPonderado = (notas, pesos) =>{
    if (notas.length !== pesos.length) {
        throw new Error("Los arreglos deben tener la misma longitud.");
    }

    let sumaNotasPesos = 0;
    let sumaPesos = 0;

    for (let i = 0; i < notas.length; i++) {
        sumaNotasPesos += notas[i] * pesos[i];
        sumaPesos += pesos[i];
    }
    let promedioPonderado = sumaNotasPesos / sumaPesos;

    return promedioPonderado.toFixed(2);
}
let notas = [8, 7, 9];
let pesos = [0.3, 0.4, 0.3];
let promedio = obtenerPromedioPonderado(notas, pesos);
document.write("El promedio ponderado es: " + promedio);



//4) 
function obtenerMaximo(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo está vacío.");
    }

    let maximo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
        maximo = arr[i];
        }
    }

    return maximo;
}

let numeros = [5, 8, 3, 9, 2];
document.write("el número máximo es: " + obtenerMaximo(numeros));
