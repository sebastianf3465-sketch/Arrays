// Enunciado: Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones validando el rango. Contar cuantas hubo de cada valor usando un array de 5 contadores (no cinco variables) y mostrar un grafico con asteriscos. Mostrar tambien la calificacion mas frecuente.

let contadores = [0, 0, 0, 0, 0];

for (let i = 0; i < 10; i++) {
    let calificacion;
    do {
        calificacion = parseInt(prompt("Ingrese la calificacion (1 a 5 estrellas):"));
        if (isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
            alert("Calificacion invalida. Ingrese un valor entre 1 y 5.");
        }
    } while (isNaN(calificacion) || calificacion < 1 || calificacion > 5);
    contadores[calificacion - 1]++;
}

console.log("Grafico de calificaciones:");
for (let i = 0; i < contadores.length; i++) {
    let asteriscos = "";
    for (let j = 0; j < contadores[i]; j++) {
        asteriscos += "*";
    }
    console.log((i + 1) + " estrellas: " + asteriscos + " (" + contadores[i] + ")");
}

let maxCalificacion = 0;
let maxIndice = 0;
for (let i = 0; i < contadores.length; i++) {
    if (contadores[i] > maxCalificacion) {
        maxCalificacion = contadores[i];
        maxIndice = i;
    }
}

console.log("Calificacion mas frecuente: " + (maxIndice + 1) + " estrellas con " + maxCalificacion + " votos.");