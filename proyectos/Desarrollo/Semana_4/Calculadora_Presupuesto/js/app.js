// Referencias a campos, formulario, resumen y lista en el DOM
const presupuestoInput = document.getElementById('presupuestoInput');
const gastoForm = document.getElementById('gastoForm');
const nombreGastoInput = document.getElementById('nombreGastoInput');
const valorGastoInput = document.getElementById('valorGastoInput');
const mensajeAviso = document.getElementById('mensajeAviso');

const resumenInicial = document.getElementById('resumenInicial');
const resumenGastado = document.getElementById('resumenGastado');
const resumenRestante = document.getElementById('resumenRestante');
const alertaPresupuesto = document.getElementById('alertaPresupuesto');

const listaGastos = document.getElementById('listaGastos');
const listaVacia = document.getElementById('listaVacia');

// Solo permite letras (incluyendo tildes y ñ) y espacios para el nombre del gasto
const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Estado en memoria de los gastos registrados
let gastos = [];

// Formatea un número con dos decimales y signo de moneda
function formatearDinero(monto) {
    return `$${monto.toFixed(2)}`;
}

// Obtiene el presupuesto inicial numérico (0 si está vacío o no es un número válido)
function obtenerPresupuestoInicial() {
    const texto = presupuestoInput.value.trim();
    if (texto === '') {
        return 0;
    }
    const numero = Number(texto);
    if (Number.isNaN(numero) || numero < 0) {
        return 0;
    }
    return numero;
}

// Calcula total gastado y restante, y actualiza el resumen visual
function actualizarResumen() {
    const inicial = obtenerPresupuestoInicial();

    let totalGastado = 0;
    for (let i = 0; i < gastos.length; i++) {
        totalGastado += gastos[i].valor;
    }

    const restante = inicial - totalGastado;

    resumenInicial.textContent = formatearDinero(inicial);
    resumenGastado.textContent = formatearDinero(totalGastado);
    resumenRestante.textContent = formatearDinero(restante);

    // Reto extra: si el dinero restante es negativo, pintar de rojo y mostrar aviso
    resumenRestante.classList.remove('negativo');
    alertaPresupuesto.textContent = '';

    if (restante < 0) {
        resumenRestante.classList.add('negativo');
        alertaPresupuesto.textContent = 'Has superado tu presupuesto';
    }
}

// Renderiza la lista completa de gastos a partir del arreglo 'gastos'
function renderizarGastos() {
    listaGastos.textContent = '';

    if (gastos.length === 0) {
        listaVacia.style.display = 'block';
        return;
    }

    listaVacia.style.display = 'none';

    for (let i = 0; i < gastos.length; i++) {
        const gasto = gastos[i];

        const item = document.createElement('li');
        item.className = 'expense-item';

        const nombreSpan = document.createElement('span');
        nombreSpan.className = 'expense-name';
        nombreSpan.textContent = gasto.nombre;

        const derecha = document.createElement('div');
        derecha.className = 'expense-right';

        const valorSpan = document.createElement('span');
        valorSpan.className = 'expense-amount';
        valorSpan.textContent = formatearDinero(gasto.valor);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.type = 'button';
        eliminarBtn.className = 'delete-btn';
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.setAttribute('aria-label', `Eliminar gasto ${gasto.nombre}`);

        // Al eliminar un gasto, lo quitamos del arreglo y recalculamos vista y resumen
        eliminarBtn.addEventListener('click', () => {
            gastos.splice(i, 1);
            renderizarGastos();
            actualizarResumen();
        });

        derecha.appendChild(valorSpan);
        derecha.appendChild(eliminarBtn);

        item.appendChild(nombreSpan);
        item.appendChild(derecha);

        listaGastos.appendChild(item);
    }
}

// Recalcula el resumen en vivo si el usuario modifica el presupuesto inicial
presupuestoInput.addEventListener('input', () => {
    const texto = presupuestoInput.value.trim();

    if (texto !== '' && (Number.isNaN(Number(texto)) || Number(texto) < 0)) {
        mensajeAviso.textContent = '⚠️ El presupuesto inicial debe ser un número igual o mayor a 0.';
    } else {
        mensajeAviso.textContent = '';
    }

    actualizarResumen();
});

// Valida y agrega un nuevo gasto al enviar el formulario
gastoForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    mensajeAviso.textContent = '';

    const nombre = nombreGastoInput.value.trim();
    const textoValor = valorGastoInput.value.trim();

    if (nombre === '') {
        mensajeAviso.textContent = '⚠️ Escribe un nombre para el gasto.';
        return;
    }

    // Evita números y caracteres especiales en el nombre del gasto
    if (!regexSoloLetras.test(nombre)) {
        mensajeAviso.textContent = '⚠️ El nombre del gasto solo debe contener letras.';
        return;
    }

    if (textoValor === '') {
        mensajeAviso.textContent = '⚠️ Ingresa el valor del gasto.';
        return;
    }

    const valor = Number(textoValor);
    if (Number.isNaN(valor) || valor <= 0) {
        mensajeAviso.textContent = '⚠️ El valor del gasto debe ser un número mayor que 0.';
        return;
    }

    gastos.push({
        nombre: nombre,
        valor: valor
    });

    nombreGastoInput.value = '';
    valorGastoInput.value = '';
    nombreGastoInput.focus();

    renderizarGastos();
    actualizarResumen();
});

// Estado inicial al cargar la página
renderizarGastos();
actualizarResumen();