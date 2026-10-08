// Un local de empanadas registra sus ventas diarias. El programa arranca con este array fijo: let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; Pedir la venta de cada dia usando el nombre del dia en el mensaje, guardarlas en otro array y mostrar un reporte dia por dia con el total de la semana.

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let ventas = [];

for (let i = 0; i < dias.length; i++) {
    let venta = parseFloat(prompt("Ingrese la venta del dia " + dias[i] + ":"));
    ventas.push(venta);
}

let totalSemana = 0;
console.log("Reporte de ventas:");
for (let i = 0; i < dias.length; i++) {
    console.log(dias[i] + ": $" + ventas[i].toFixed(2));
    totalSemana += ventas[i];
}
console.log("Total de la semana: $" + totalSemana.toFixed(2));