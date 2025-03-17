let nombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let nombre of nombres) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<strong>El amigo secreto es:</strong> ${amigoSecreto}`;
}

function reiniciarSorteo() {
    nombres = []; // Vacía el array de nombres
    document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Borra el resultado del sorteo
}



