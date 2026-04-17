function generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function actualizarDatos() {
    let vehiculos = generarNumero(100, 500);
    let velocidad = generarNumero(10, 60);

    let estado = "";

    if (velocidad > 40) {
        estado = "Fluido";
    } else if (velocidad > 20) {
        estado = "Moderado";
    } else {
        estado = "Congestionado";
    }

    document.getElementById("vehiculos").innerText = vehiculos;
    document.getElementById("velocidad").innerText = velocidad;
    document.getElementById("estado").innerText = estado;
actualizarDatos();
}
