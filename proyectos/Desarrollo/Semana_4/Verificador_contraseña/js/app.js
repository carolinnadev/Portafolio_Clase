// Obtenemos las referencias del DOM una sola vez al cargar el script
const passwordInput = document.getElementById('passwordInput');
const pistaPassword = document.getElementById('pistaPassword');

// Clases visuales asociadas a cada estado para limpiarlas antes de aplicar la nueva
const clasesEstado = ['hint-neutral', 'hint-corta', 'hint-aceptable', 'hint-fuerte'];

// Quita cualquier clase de estado previa para no acumular colores conflictivos
function limpiarClasesEstado() {
    for (let i = 0; i < clasesEstado.length; i++) {
        pistaPassword.classList.remove(clasesEstado[i]);
    }
}

// Evalúa la longitud actual de la contraseña y actualiza mensaje + color
function evaluarLongitudPassword(longitud) {
    limpiarClasesEstado();

    // Si el campo está vacío, volvemos al estado inicial neutral
    if (longitud === 0) {
        pistaPassword.textContent = 'Esperando contraseña...';
        pistaPassword.classList.add('hint-neutral');
        return;
    }

    // Regla 1: menos de 6 caracteres -> roja
    if (longitud < 6) {
        pistaPassword.textContent = 'Contraseña muy corta';
        pistaPassword.classList.add('hint-corta');
        return;
    }

    // Regla 2: entre 6 y 9 caracteres (inclusive) -> amarilla
    if (longitud <= 9) {
        pistaPassword.textContent = 'Contraseña aceptable';
        pistaPassword.classList.add('hint-aceptable');
        return;
    }

    // Regla 3: 10 o más caracteres -> verde
    pistaPassword.textContent = 'Contraseña fuerte';
    pistaPassword.classList.add('hint-fuerte');
}

// El evento 'input' se dispara cada vez que se escribe o se borra un carácter
passwordInput.addEventListener('input', () => {
    const longitudActual = passwordInput.value.length;
    evaluarLongitudPassword(longitudActual);
});