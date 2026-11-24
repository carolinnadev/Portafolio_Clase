// Obtenemos las referencias al campo de entrada y al contenedor de vista previa en el DOM
const textoInput = document.getElementById('textoInput');
const vistaPrevia = document.getElementById('vistaPrevia');

// El evento 'input' se dispara cada vez que cambia el valor del campo (escribir, borrar, pegar o cortar)
textoInput.addEventListener('input', () => {
    // Leemos el texto tal como está escrito para conservar espacios y saltos de línea en la vista previa
    const valor = textoInput.value;

    // Evaluamos con .trim() si el contenido está vacío o solo tiene espacios en blanco
    if (valor.trim() === '') {
        // Restauramos el mensaje marcador (placeholder visual) y su color tenue
        vistaPrevia.textContent = 'Tu texto aparecerá aquí en tiempo real...';
        vistaPrevia.style.color = '#8a8d9f';
    } else {
        // Reflejamos el texto ingresado al instante y cambiamos a color claro para destacar el contenido real
        vistaPrevia.textContent = valor;
        vistaPrevia.style.color = '#fff';
    }
});