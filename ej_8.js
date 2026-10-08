// Ejercicio 8. Ventas sobre el promedio
// Qué practica: Dos recorridos donde el segundo depende del resultado del primero.
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let ventas = [];

for (let i = 0; i < dias.length; i++) {
    ventas.push(Number(prompt("Venta de " + dias[i] + ":")));
}

let promedio = Math.round(ventas.reduce((a, b) => a + b, 0) / ventas.length);

console.log("Promedio diario: $" + promedio);
console.log("Días por encima del promedio:");

let diasSobre = [];

for (let i = 0; i < ventas.length; i++) {
    if (ventas[i] > promedio) {
        console.log(dias[i] + ": $" + ventas[i]);
        diasSobre.push(dias[i]);
    }
}

console.log("Total: " + diasSobre.length + " días");