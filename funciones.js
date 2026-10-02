function calcularPrecio(preciounitario, cantidad){
    const total = preciounitario * cantidad;
    return total;
}

console.log(calcularPrecio(5, 2))
console.log(calcularPrecio(3, 4))
console.log(calcularPrecio(7, 1))

function puedeReservar(cantidad, tazasReservadasHoy){
    if(cantidad<=2 && tazasReservadasHoy + cantidad<=50){
        return true;
    }else{
        return false;
    }
}
function puedeReservar(cantidad, tazasReservadasHoy) {
    if (cantidad > 2) {
        console.log("Lo siento, máximo 2 tazas por persona");
    } else if (tazasReservadasHoy + cantidad > 50) {
        console.log("Lo siento, se alcanzó el límite de 50 tazas por día");
    } else {
        console.log("Reserva confirmada");
    }
}
