// Capturamos el formulario, los campos de entrada, sus etiquetas de error y el mensaje de éxito
const registroForm = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombreInput');
const correoInput = document.getElementById('correoInput');
const edadInput = document.getElementById('edadInput');

const errorNombre = document.getElementById('errorNombre');
const errorCorreo = document.getElementById('errorCorreo');
const errorEdad = document.getElementById('errorEdad');
const mensajeExito = document.getElementById('mensajeExito');

// Solo permite letras (con tildes y ñ) y espacios; rechaza números y símbolos
const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Muestra un mensaje de error debajo del campo correspondiente y resalta el input
function establecerError(inputEl, errorEl, mensaje) {
    errorEl.textContent = mensaje;
    inputEl.classList.add('invalido');
}

// Limpia el error de un campo y quita el borde rojo
function limpiarError(inputEl, errorEl) {
    errorEl.textContent = '';
    inputEl.classList.remove('invalido');
}

// Reinicia todos los mensajes de error y oculta el banner de éxito antes de validar
function limpiarEstadoFormulario() {
    limpiarError(nombreInput, errorNombre);
    limpiarError(correoInput, errorCorreo);
    limpiarError(edadInput, errorEdad);

    mensajeExito.textContent = '';
    mensajeExito.classList.remove('visible');
}

// Valida el campo nombre: no vacío y sin números ni símbolos
function validarNombre() {
    const valor = nombreInput.value.trim();
    if (valor === '') {
        establecerError(nombreInput, errorNombre, 'El nombre es obligatorio.');
        return false;
    }

    if (!regexSoloLetras.test(valor)) {
        establecerError(nombreInput, errorNombre, 'El nombre no puede contener números ni símbolos.');
        return false;
    }

    limpiarError(nombreInput, errorNombre);
    return true;
}

// Valida el campo correo: no vacío y debe incluir '@' con texto antes y después
function validarCorreo() {
    const valor = correoInput.value.trim();
    if (valor === '') {
        establecerError(correoInput, errorCorreo, 'El correo es obligatorio.');
        return false;
    }

    // Verificamos que contenga '@' y no empiece ni termine con '@'
    const indiceArroba = valor.indexOf('@');
    if (indiceArroba <= 0 || indiceArroba === valor.length - 1 || valor.includes(' ')) {
        establecerError(correoInput, errorCorreo, 'Escribe un correo válido.');
        return false;
    }

    limpiarError(correoInput, errorCorreo);
    return true;
}

// Valida el campo edad: no vacío, numérico y mayor o igual a 18
function validarEdad() {
    const textoEdad = edadInput.value.trim();
    if (textoEdad === '') {
        establecerError(edadInput, errorEdad, 'La edad es obligatoria.');
        return false;
    }

    const edadNumero = Number(textoEdad);
    if (Number.isNaN(edadNumero) || edadNumero < 18) {
        establecerError(edadInput, errorEdad, 'Debes tener 18 años o más para registrarte.');
        return false;
    }

    limpiarError(edadInput, errorEdad);
    return true;
}

// Evento submit del formulario: bloquea la recarga y evalúa todos los campos
registroForm.addEventListener('submit', (evento) => {
    // Evita que la página se recargue al enviar el formulario
    evento.preventDefault();

    // Ocultamos el mensaje de éxito previo mientras revisamos los campos
    mensajeExito.textContent = '';
    mensajeExito.classList.remove('visible');

    // Evaluamos cada regla por separado (sin cortocircuito) para mostrar todos los errores pertinentes
    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const edadValida = validarEdad();

    // Si algún campo falla, no mostramos mensaje de éxito
    if (!nombreValido || !correoValido || !edadValida) {
        return;
    }

    // Si todo es válido, los errores ya quedaron limpios y mostramos el mensaje de confirmación
    limpiarEstadoFormulario();
    mensajeExito.textContent = 'Registro completado correctamente';
    mensajeExito.classList.add('visible');
});