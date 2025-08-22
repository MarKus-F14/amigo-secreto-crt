const inputNombre = document.getElementById("nombreInput"); 
const btnAdicionar = document.getElementById("btnAdicionar");
const btnSortear = document.getElementById("btnSortear");
const listaNombres = document.getElementById("listaNombres");
const resultado = document.getElementById("resultado");

let participantes = [];

// ---- Función para adicionar un nombre ----
btnAdicionar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("⚠️ Escribe un nombre válido.");
    return;
  }

  if (participantes.includes(nombre)) {
    alert("⚠️ Ese nombre ya está en la lista.");
    return;
  }

  participantes.push(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  listaNombres.appendChild(li);

  inputNombre.value = "";
  inputNombre.focus();
});

// ---- Función para sortear un amigo ----
btnSortear.addEventListener("click", () => {
  if (participantes.length < 2) {
    alert("⚠️ Se necesitan al menos 2 participantes para sortear.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * participantes.length);
  const ganador = participantes[randomIndex];

  mostrarResultado(`El amigo secreto es: ${ganador}...?`);
});

// ---- Función para animar el resultado ----
function mostrarResultado(texto) {
  resultado.textContent = texto;

  resultado.style.animation = "none";
  resultado.offsetHeight; // Reinicia animación
  resultado.style.animation = null;

  resultado.style.width = "0";
  resultado.style.animation =
    "typing 3s steps(30, end) forwards, blinkCursor 0.7s infinite";
}

