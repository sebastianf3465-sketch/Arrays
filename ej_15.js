// Ejercicio 15. Cobertura de domicilios
// Practica: filter y find, y combinar un metodo con length.

function obtenerEnvioGratis(distancias) {
    return distancias.filter(function(distancia) {
        return distancia <= 3;
    });
}

function contarConEnvio(distancias) {
    return distancias.filter(function(distancia) {
        return distancia > 3 && distancia <= 10;
    }).length;
}

function buscarPrimeroFuera(distancias) {
    return distancias.find(function(distancia) {
        return distancia > 10;
    });
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

let n = Number(prompt("¿Cuántos pedidos?"));
let distancias = [];

for (let i = 0; i < n; i++) {
    let distancia = Number(prompt("Distancia " + (i + 1) + ":"));
    distancias.push(distancia);
}

let envioGratis = obtenerEnvioGratis(distancias);
let conEnvio = contarConEnvio(distancias);
let primeroFuera = buscarPrimeroFuera(distancias);

console.log("Envío gratis (" + envioGratis.length + "): " + unirConComas(envioGratis));
console.log("Pagan envío: " + conEnvio);

if (primeroFuera === undefined) {
    console.log("Todos los pedidos están en cobertura");
} else {
    console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
}