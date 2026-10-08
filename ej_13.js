// Ejercicio 13. La lista con forEach
// Practica: forEach usando el indice del callback.

function mostrarLista(productos) {
    console.log("Lista de la compra:");
    productos.forEach(function(producto, indice) {
        console.log((indice + 1) + ". " + producto);
    });
    console.log("Total de productos: " + productos.length);
}

let cantidad = Number(prompt("¿Cuántos productos vas a comprar?"));
let productos = [];

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
    productos.push(nombre);
}

mostrarLista(productos);

