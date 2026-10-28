// Mi numero favorito
const numeroInput = document.getElementById("numeroInput");
const mensajeNumero = document.getElementById("mensajeNumero");
const numeroFavorito = 23;

numeroInput.addEventListener("input", function() {
    let valor = Number(numeroInput.value);

    if (numeroInput.value === "") {
        mensajeNumero.textContent = "";
        return;
    }

    if (valor < numeroFavorito) {
        mensajeNumero.textContent = "Más Arriba";
    } else if (valor > numeroFavorito) {
        mensajeNumero.textContent = "Más Abajo";
    } else {
        mensajeNumero.textContent = "Profe, Rompiste, LO ADIVINÓ";
    }
});


// === 2. SELECTOR CON TEXTO E IMAGEN DINÁMICA ===
const gustosSelect = document.getElementById("gustosSelect");
const textoGusto = document.getElementById("textoGusto");
const imagenGusto = document.getElementById("imagenGusto");

gustosSelect.addEventListener("change", function() {
    let opcion = gustosSelect.value;

    if (opcion === "futbol") {
        textoGusto.textContent = "Mi posicion favorita en el futbol es: Portero";
        imagenGusto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfN8W_WH8Kc6tAT2uQsT14oyjYUvCESjraWV8obSMq1g&s=10";
        imagenGusto.style.display = "block";
    } else if (opcion === "musica") {
        textoGusto.textContent = "Mi Cantante Favorito es: Mora";
        imagenGusto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdd1YlOOvdgEG1vdDEOFPSTWVBkDfHoBB5tzvTBG_P6FrP6wsKcEXBjc&s=10";
        imagenGusto.style.display = "block";
    } else if (opcion === "tenis") {
        textoGusto.textContent = "Mi estilo de vestir es: Ropa Ancha";
        imagenGusto.src = "https://ezzetacompany.com/wp-content/uploads/2025/11/JEAN-BAGGY-TWO-COLOR.jpg";
        imagenGusto.style.display = "block";
    } else {
        textoGusto.textContent = "";
        imagenGusto.style.display = "none";
    }
});

// === 3. BOTÓN DE ALERTA ===
const botonAlerta = document.getElementById("botonAlerta");

botonAlerta.addEventListener("click", function() {
    alert("Profe, la buena");
});