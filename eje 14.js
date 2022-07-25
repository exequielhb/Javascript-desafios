// diseñar una función que reciba un flujo
// de caja como dato de entrada y retorne -1 si hay
// pérdidas, 1 si hay ganancias, 0 si los ingresos son
// iguales a las ganancias.


const pregunta = (ingreso, perdida) => {
    if(ingreso > perdida){
        return 1
    } else if(ingreso < perdida) {
        return "-1"
    } else if( ingreso === perdida) {
        return 0
    }
}

console.log(pregunta(2500, 2500))
console.log(pregunta(84683, 1155))
console.log(pregunta(4343354, 5434543))

// --------------------------------------------------

// crear una función que reciba el array
// de inversiones y retorne un array agregando a
// cada ítem el campo “interés” con la fórmula
// correspondiente.

const valores = [
    {nombre: "Plan 001", capital: 150000, plazo: 30, tasa: 0.15},
    {nombre: "Plan 002", capital: 300000, plazo: 180, tasa: 0.10},
    {nombre: "Plan 003", capital: 485000, plazo: 60, tasa: 0.23}
]


function inversiones() {
    let totales = []

    for (let i = 0; i < valores.length; i++) {
        totales.push( valores[i].nombre, (valores[i].capital * valores[i].plazo 
        * valores[i].tasa) / 100)
    }
    return totales
}

console.log(inversiones())

