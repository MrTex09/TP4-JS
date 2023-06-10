//atividad 3
//1) 
let producto = {
    nombre: "cargador para celular",
    precio: 1500,
    cantidad: 5
}


const calcularTotal = () => {
    return producto.precio*producto.cantidad;
}

document.write(calcularTotal(producto));

//2) 
let persona = {
    nombre: "Brian",
    edad: 18,
    profesion: "estudiante"
}


const presentarPersona = () => {
    return `Hola, soy ${persona.nombre} y tengo ${persona.edad}, actualmete soy ${persona.profesion}`
}


document.write(presentarPersona(persona))

//3) 
const esMayorEdad = (persona) => {
    if (persona >= 18) {
        return true;
    }
    if (persona < 18) {
        return false;
    }
}

let persona1 = {
    nombre: "Brian",
    edad: 18,
    profesion: "estudiante"
}

let persona2 = {
    nombre: "Juan",
    edad: 12,
    profesion: "estudiante"
}

document.write(esMayorEdad(persona1.edad) + "<br>")
document.write(esMayorEdad(persona2.edad))

