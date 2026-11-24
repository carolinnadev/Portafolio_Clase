// Referencias a los elementos clave del DOM para no buscarlos repetidamente en cada clic
const formularioImc = document.getElementById('formularioImc');
const pesoInput = document.getElementById('pesoInput');
const estaturaInput = document.getElementById('estaturaInput');
const mensajeResultado = document.getElementById('mensajeResultado');
const categoriaResultado = document.getElementById('categoriaResultado');

// Lista de clases de rango para limpiarlas antes de asignar un nuevo color
const clasesRango = ['rango-bajo', 'rango-normal', 'rango-sobrepeso', 'rango-obesidad'];

// Limpia clases de color previas y resetea el texto secundario
function limpiarEstilosResultado() {
    mensajeResultado.className = '';
    categoriaResultado.textContent = '';

    for (let i = 0; i < clasesRango.length; i++) {
        mensajeResultado.classList.remove(clasesRango[i]);
        categoriaResultado.classList.remove(clasesRango[i]);
    }
}

// Muestra un mensaje de validación cuando falta algún dato o el valor no es válido
function mostrarError(textoError) {
    limpiarEstilosResultado();
    mensajeResultado.textContent = textoError;
    mensajeResultado.classList.add('result-error');
}

// Evalúa el valor del IMC y devuelve etiqueta + clase CSS según rangos estándar de referencia
function obtenerClasificacionImc(imc) {
    if (imc < 18.5) {
        return { etiqueta: 'Bajo peso', clase: 'rango-bajo' };
    }
    if (imc < 25) {
        return { etiqueta: 'Peso normal', clase: 'rango-normal' };
    }
    if (imc < 30) {
        return { etiqueta: 'Sobrepeso', clase: 'rango-sobrepeso' };
    }
    return { etiqueta: 'Obesidad', clase: 'rango-obesidad' };
}

// Escuchamos el envío del formulario (sirve tanto con clic en el botón como con Enter)
formularioImc.addEventListener('submit', (evento) => {
    // Evita que el formulario recargue la página por defecto
    evento.preventDefault();

    // ParseFloat convierte el string del input a número decimal; si está vacío o no es número, da NaN
    const peso = parseFloat(pesoInput.value);
    const estatura = parseFloat(estaturaInput.value);

    const pesoValido = !Number.isNaN(peso) && peso > 0;
    const estaturaValida = !Number.isNaN(estatura) && estatura > 0;

    // Validación explícita para indicar qué dato falta o debe corregirse
    if (!pesoValido && !estaturaValida) {
        mostrarError('Completa un peso válido en kg y una estatura válida en metros.');
        return;
    }
    if (!pesoValido) {
        mostrarError('Falta completar el peso en kilogramos (debe ser mayor que 0).');
        return;
    }
    if (!estaturaValida) {
        mostrarError('Falta completar la estatura en metros (debe ser mayor que 0).');
        return;
    }

    // Fórmula solicitada: imc = peso / (estatura * estatura)
    const imc = peso / (estatura * estatura);
    const imcRedondeado = imc.toFixed(2);
    const clasificacion = obtenerClasificacionImc(imc);

    limpiarEstilosResultado();
    mensajeResultado.textContent = `Tu IMC es ${imcRedondeado}`;
    mensajeResultado.classList.add('result-value', clasificacion.clase);

    categoriaResultado.textContent = `Clasificación: ${clasificacion.etiqueta}`;
    categoriaResultado.classList.add(clasificacion.clase);
});