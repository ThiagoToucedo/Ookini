function calcularPrecio(preciounitario, cantidad){
    const total= preciounitario * cantidad;
    return total;
}

function puedeReservar (tazasDisponibles) {
    return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

     if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        botonReservar.textContent = "Reserva hecha"
        console.log("Reserva registrada")
    }else{
          botonReservar.textContent = "Sin cupos";
        botonReservar.disabled = true;
        console.log("Reserva rechazada")
    }
    
});
