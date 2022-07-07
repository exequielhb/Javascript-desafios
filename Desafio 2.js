
// ejercicio 1
// Como primer ejercicio, te proponemos pedir
// la edad del usuario y validar si es mayor a
// 18 años. En caso correcto, deberás mostrar
// un mensaje de bienvenida.
// En caso de que no lo sea, deberás mostrar un
// mensaje de error.

let edad = Number(prompt("Ingrese su edad: "))

edad >= 18 ? console.log("Bienvenido") : console.log("Usted no puede acceder")   //(operador ternario)    condición ? expr1 : expr2

// --------------------------------------------------------


// Ejercicio 2
// Para este caso, te proponemos solicitar un
// usuario y clave.
// El usuario estará validado si es “admin” y su
// clave es “1234

let usuario = prompt("ingresa tu usuario: ")
let passW = prompt("ingresa tu contraseña: ")

if(usuario == "admin" && passW == 1234) {
    console.log("Bienvenido")
} else {
    console.log("Contraseña o usuario incorrecto")
}