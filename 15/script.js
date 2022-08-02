
let costoFijo = document.getElementById('costofijo')

let precioVenta = document.getElementById('preciodeventa')

let costoVariable = document.getElementById('costvariable')

const boton = document.getElementById('boton')

let resultado = document.getElementById('result')

// ------------------------------------

boton.addEventListener('click', ()=>{
    resultado.textContent = costoFijo.valueAsNumber / (precioVenta.valueAsNumber - costoVariable.valueAsNumber)
})