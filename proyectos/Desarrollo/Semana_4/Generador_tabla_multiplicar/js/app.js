// Referencias a los elementos de la interfaz
const numeroInput = document.getElementById('numeroInput');
const generarBtn = document.getElementById('generarBtn');
const mensajeAviso = document.getElementById('mensajeAviso');
const contenedorResultado = document.getElementById('contenedorResultado');

// Limpia avisos y la tabla generada anteriormente
function limpiarTabla() {
    mensajeAviso.textContent = '';
    contenedorResultado.textContent = '';
}

// Crea la estructura de tabla HTML (<table>) dinámicamente con filas (<tr>) y celdas (<td>)
function construirTablaHTML(numero) {
    const tabla = document.createElement('table');
    tabla.className = 'multiplication-table';

    // Encabezado de la tabla
    const thead = document.createElement('thead');
    const filaEncabezado = document.createElement('tr');

    const thOperacion = document.createElement('th');
    thOperacion.textContent = `Tabla del ${numero}`;

    const thResultado = document.createElement('th');
    thResultado.textContent = 'Resultado';

    filaEncabezado.appendChild(thOperacion);
    filaEncabezado.appendChild(thResultado);
    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);

    // Cuerpo de la tabla con los cálculos del 1 al 10
    const tbody = document.createElement('tbody');

    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement('tr');

        const celdaOperacion = document.createElement('td');
        celdaOperacion.className = 'col-operation';
        celdaOperacion.textContent = `${numero} × ${i}`;

        const celdaResultado = document.createElement('td');
        celdaResultado.className = 'col-result';
        celdaResultado.textContent = numero * i;

        fila.appendChild(celdaOperacion);
        fila.appendChild(celdaResultado);
        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
    return tabla;
}

// Procesa el valor ingresado y genera la tabla correspondiente
function procesarGeneracion() {
    const textoIngresado = numeroInput.value.trim();

    limpiarTabla();

    // 1. Validación de campo vacío
    if (textoIngresado === '') {
        mensajeAviso.textContent = '⚠️ Por favor, ingresa un número.';
        return;
    }

    const numero = Number(textoIngresado);

    // 2. Validación de número válido
    if (Number.isNaN(numero)) {
        mensajeAviso.textContent = '⚠️ Ingresa un valor numérico válido.';
        return;
    }

    // Construimos la tabla y la agregamos al contenedor en el DOM
    const tablaElemento = construirTablaHTML(numero);
    contenedorResultado.appendChild(tablaElemento);
}

// Escucha el clic en el botón Generar
generarBtn.addEventListener('click', procesarGeneracion);

// Permite generar la tabla también presionando la tecla Enter dentro del input
numeroInput.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        procesarGeneracion();
    }
});