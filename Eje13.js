// Diseñar una aplicación JavaScript que,
// recibiendo el flujo de caja del último año de la
// empresa, muestre si dicho flujo genera o no
// pérdidas. 


let ingresos = [1500, 2500, 84683, 135353, 1535, 
    4343354, 435453, 78351, 1878, 48483, 35483, 3843]

let egresos = [1500, 2500, 1155, 1553, 5434, 5434543, 
4543, 7816, 95634, 9433, 53133, 348133]

let totalI = ingresos.reduce((a, b) => a + b)
let totalE = egresos.reduce((a, b) => a + b)

console.log(totalI)
console.log(totalE)
console.log(totalI > totalE) // se pierde dinero.

// --------------------------------------------------------
// --------------------------------------------------------

// Diseñar un programa JavaScript que recorra
// todas esas alternativas de crédito y genere un
// array con la información de dichas alternativas
// sumando el dato calculado del interés.

// interes = (capital * plazo * tasa) / 100

const valores = [
    {capital: 150000, plazo: 30, tasa: 0.15},
    {capital: 300000, plazo: 180, tasa: 0.10},
    {capital: 485000, plazo: 60, tasa: 0.23}
]

let totales = []

for (let i = 0; i < valores.length; i++) {
    totales.push((valores[i].capital * valores[i].plazo * valores[i].tasa) / 100)
}

const valoresTotales = totales.map((valor, indice) => `Total Plan00${indice + 1} = ${valor} `)

console.log(valoresTotales)

