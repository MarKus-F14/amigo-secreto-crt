<img width="1920" height="932" alt="Capture" src="https://github.com/user-attachments/assets/78cf6d0d-2561-4375-829e-e2d4dbabd590" />

# 🎮 Amigo Secreto CRT

Este es un proyecto tipo *challenge* de **Alura**, realizado para poner en práctica lo aprendido en los cursos y aplicarlo en un reto real.  

El estilo visual lo diseñé investigando por mi cuenta e inspirándome en la estética retro de un monitor CRT, con ayuda de sugerencias de código generadas con ChatGPT.  
El objetivo principal del challenge fue reforzar conocimientos en **lógica de programación**, principalmente:  

- Uso de **variables**.  
- Manejo de **condicionales** (`if` y `else`).  
- Creación y uso de **funciones**.  
- Manipulación de **arrays** para añadir, validar y recorrer elementos.  
- **Eventos en JavaScript** para interactuar con botones e inputs.  

Además, añadí efectos visuales y animaciones para que el proyecto se sintiera como una experiencia completa.  

---

## ⚙️ Funcionalidades implementadas (según el código)

- **Entrada de nombres (`inputNombre`)**  
  - Se captura el valor del input y se elimina cualquier espacio innecesario con `.trim()`.  
  - Se valida que no esté vacío → si lo está, aparece un `alert("⚠️ Escribe un nombre válido.")`.  
  - Se valida que no esté repetido → usando `participantes.includes(nombre)` → si ya existe, aparece `alert("⚠️ Ese nombre ya está en la lista.")`.  

- **Agregar participantes (`btnAdicionar`)**  
  - Se añade el nombre al array `participantes.push(nombre)`.  
  - Se crea un nuevo elemento `<li>` y se agrega dinámicamente al DOM (`appendChild`).  
  - Se limpia el input y se devuelve el foco (`inputNombre.focus()`).  

- **Sortear participante (`btnSortear`)**  
  - Se valida que haya al menos 2 participantes → si no, aparece `alert("⚠️ Se necesitan al menos 2 participantes para sortear.")`.  
  - Se genera un índice aleatorio con `Math.floor(Math.random() * participantes.length)`.  
  - Se selecciona un ganador y se muestra en pantalla con la frase:  
    `El amigo secreto es: {ganador}...?`.  

- **Mostrar resultado (`mostrarResultado`)**  
  - Se inserta el texto en el elemento `#resultado`.  
  - Se reinicia la animación para que se ejecute cada vez que hay un nuevo sorteo.  
  - Se aplica una animación CSS tipo máquina de escribir con el efecto `typing` + `blinkCursor`.  

---

## 🎨 Estilo CRT (según el CSS)

- **Pantalla CRT simulada (`.crt-screen`)**  
  - Fondo radial oscuro y bordes verdes con brillo.  
  - `box-shadow` e `inset shadows` para dar la sensación de resplandor.  
  - Ligera perspectiva con `transform: perspective(1000px) rotateX(1.5deg) rotateY(-1.5deg)`.  
  - Animación de parpadeo `crtFlicker`.  

- **Reflejo en el vidrio (`::before`)**  
  - Gradiente radial curvado y difuso que da la sensación de vidrio abombado típico de los CRT.  
  - `filter: blur(8px)` para suavizar el reflejo.  
  - Perspectiva con `rotate(-8deg)` y `skewX(-10deg)`.  

- **Líneas horizontales (`::after`)**  
  - `repeating-linear-gradient` en verde translúcido → simula el barrido de líneas de un monitor CRT.  

- **Animaciones**  
  - `typing` → efecto máquina de escribir para el texto del ganador.  
  - `blinkCursor` → cursor parpadeante verde al final del texto.  
  - `crtFlicker` → efecto de parpadeo en la pantalla completa.  

---

## 🛠️ Tecnologías utilizadas

- **HTML5** → estructura del juego.  
- **CSS3** → diseño retro con reflejo curvo, líneas CRT, animaciones y flicker.  
- **JavaScript (ES6)** →  
  - Variables (`let participantes = []`).  
  - Condicionales (`if/else`) para validaciones.  
  - Arrays (`push`, `includes`) para añadir y verificar duplicados.  
  - Funciones (`mostrarResultado`) para modular el código.  
  - Aleatoriedad con `Math.random()` y `Math.floor()`.  
  - Manipulación del DOM con `getElementById`, `createElement`, `appendChild`.  
  - Eventos (`addEventListener`) en botones para interacción.  
  - Reinicio de animaciones con `element.style.animation`.  

---

## 🚀 Cómo probarlo

1. Ingresa al sitio publicado con **GitHub Pages**:  
   👉 [Jugar ahora](https://MarKus-F14.github.io/amigo-secreto-crt/)  

2. Escribe los nombres de tus amigos en el campo de texto y añádelos con el botón **“Adicionar”**.  

3. Cuando tengas al menos 2 nombres, presiona **“Sortear”** para descubrir quién es el **Amigo Secreto** 🎉.  

---

## 👨‍💻 Autor

Proyecto realizado como parte del *challenge* de **Alura Latam**, con investigación adicional y mejoras propias.  
Gracias a la ayuda de **ChatGPT** logré perfeccionar la lógica y el estilo visual CRT para darle un aspecto muy Fallout 3 al proyecto.  

