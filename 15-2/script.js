
let presupuesto = document.getElementById('presupuesto');

let gastosNecesarios = document.getElementById('gastosnecesarios');
let gastosOpc = document.getElementById('gastosopcionales');
let ahorros = document.getElementById('ahorros');

let boton = document.querySelector('button');

boton.addEventListener('click', ()=>{
    gastosNecesarios.textContent = presupuesto.valueAsNumber * 0.5
    gastosOpc.textContent = presupuesto.valueAsNumber * 0.3
    ahorros.textContent = presupuesto.valueAsNumber * 0.2

});