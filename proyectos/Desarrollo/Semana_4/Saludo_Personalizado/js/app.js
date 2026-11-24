// Obtenemos referencias a los elementos del DOM (campo de texto, botón y zona de salida)
const input = document.getElementById('nombreInput');
const btn = document.getElementById('saludarBtn');
const resultado = document.getElementById('resultado');

// Expresión regular que solo permite letras (con tildes y ñ) y espacios
const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Escuchamos el clic en el botón para validar la entrada y mostrar el saludo
btn.addEventListener('click', () => {
    // .trim() elimina espacios sobrantes al principio y al final para detectar campos vacíos
    const nombre = input.value.trim();

    // 1. Validación de campo vacío: muestra aviso de error y corta la ejecución con return
    if (nombre === '') {
        resultado.textContent = '⚠️ Por favor, escribe un nombre primero.';
        resultado.className = 'mensaje-salida error';
        return;
    }

    // 2. Validación de formato: .test() devuelve true si cumple la regex; con ! negamos para atrapar inválidos
    if (!soloLetrasRegex.test(nombre)) {
        resultado.textContent = '⚠️ Error: El nombre no puede contener números ni símbolos.';
        resultado.className = 'mensaje-salida error';
        return;
    }

    // Si pasó ambas validaciones, interpolamos el nombre en el saludo y aplicamos estilo de éxito
    // .textContent asegura que el texto se inserte de forma segura sin interpretar etiquetas HTML
    resultado.textContent = `¡Hola, ${nombre}! Bienvenida.`;
    resultado.className = 'mensaje-salida exito';
});