// Ejercicio 14. Precios con IVA
// Practica: map para transformar cada elemento, y comparar con la version manual.

function calcularConIva(precio) {
    return Math.round(precio * 1.19);
}

function aplicarIvaConMap(precios) {
    return precios.map(function(precio) {
        return calcularConIva(precio);
    });
}

function aplicarIvaConFor(precios) {
    let conIva = [];
    for (let i = 0; i < precios.length; i++) {
        conIva.push(calcularConIva(precios[i]));
    }
    return conIva;
}

function calcularTotal(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

function unirConComas(lista) {
    let resultado = "";
    for (let i = 0; i < lista.length; i++) {
        if (i < lista.length - 1) {
            resultado += lista[i] + ", ";
        } else {
            resultado += lista[i];
        }
    }
    return resultado;
}

let n = Number(prompt("¿Cuántos productos?"));
let precios = [];

for (let i = 0; i < n; i++) {
    let precio = Number(prompt("Precio " + (i + 1) + ":"));
    precios.push(precio);
}

let conIvaMap = aplicarIvaConMap(precios);
let conIvaFor = aplicarIvaConFor(precios);
let total = calcularTotal(conIvaMap);

console.log("Sin IVA: " + unirConComas(precios));
console.log("Con IVA: " + unirConComas(conIvaMap));
console.log("Total con IVA: $" + total);

console.log("\nVerificacion (For): " + unirConComas(conIvaFor));
console.log("¿Map y For dan el mismo resultado? " + (conIvaMap.join(",") === conIvaFor.join(",")));