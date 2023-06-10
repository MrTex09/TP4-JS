// 1 funciones
function esMayorEdad(edad) {
    if (edad >= 18) {
        return true;
    }else {
        return false
    }
}
document.write(esMayorEdad(-10))
// 2
function calcularAreaRectangulo(base, altura) {
    var area = base * altura;
    return area;
}
document.write(calcularAreaRectangulo(5,10))
// 3
function esPalindromo(cadena){
    let array = cadena.split ("")
    let reverse = array.reverse()
    return cadena == reverse.join("") ? "si es" : "no es "
    
}
document.write(esPalindromo("radara"))
// 4
const generarNumeroAleatorio = (min,max) => {
        return parseInt(Math.random() * (max - min)) + min + "<br>";
    }
    
    for (let i = 0; i < 100; i++) {
        document.write(generarNumeroAleatorio(1,11))   }