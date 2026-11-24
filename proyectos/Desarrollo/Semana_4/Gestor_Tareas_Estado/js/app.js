// Referencias a elementos del formulario, controles, filtros y lista en el DOM
const tareaForm = document.getElementById('tareaForm');
const tareaInput = document.getElementById('tareaInput');
const prioridadSelect = document.getElementById('prioridadSelect');
const mensajeAviso = document.getElementById('mensajeAviso');

const contadorPendientes = document.getElementById('contadorPendientes');
const botonesFiltro = document.querySelectorAll('.filter-btn');
const mensajeHover = document.getElementById('mensajeHover');
const listaTareas = document.getElementById('listaTareas');
const listaVacia = document.getElementById('listaVacia');

// Expresión regular para evitar números y caracteres especiales en el nombre de la tarea
const regexTextoTarea = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Estado central de la aplicación en memoria
let tareas = [];
let filtroActual = 'todas'; // Valores posibles: 'todas' | 'pendientes' | 'completadas'

// Calcula y actualiza el número de tareas aún pendientes (completada === false)
function actualizarContadorPendientes() {
    let pendientes = 0;
    for (let i = 0; i < tareas.length; i++) {
        if (!tareas[i].completada) {
            pendientes++;
        }
    }
    contadorPendientes.textContent = pendientes;
}

// Devuelve solo las tareas que coinciden con el filtro seleccionado
function obtenerTareasFiltradas() {
    const resultado = [];
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        if (filtroActual === 'pendientes' && !tarea.completada) {
            resultado.push(tarea);
        } else if (filtroActual === 'completadas' && tarea.completada) {
            resultado.push(tarea);
        } else if (filtroActual === 'todas') {
            resultado.push(tarea);
        }
    }
    return resultado;
}

// Alterna el estado completada/pendiente de una tarea y refresca contador y vista
function alternarCompletada(idTarea) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === idTarea) {
            tareas[i].completada = !tareas[i].completada;
            break;
        }
    }
    actualizarContadorPendientes();
    renderizarTareas();
}

// Elimina una tarea del arreglo por su id único
function eliminarTarea(idTarea) {
    const nuevasTareas = [];
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id !== idTarea) {
            nuevasTareas.push(tareas[i]);
        }
    }
    tareas = nuevasTareas;
    actualizarContadorPendientes();
    renderizarTareas();
}

// Renderiza la lista de tareas aplicando el filtro activo
function renderizarTareas() {
    listaTareas.textContent = '';

    const visibles = obtenerTareasFiltradas();
    if (visibles.length === 0) {
        listaVacia.style.display = 'block';
        return;
    }

    listaVacia.style.display = 'none';

    for (let i = 0; i < visibles.length; i++) {
        const tarea = visibles[i];

        const item = document.createElement('li');
        item.className = tarea.completada ? 'task-item completada' : 'task-item';

        // Reto extra: mensaje al pasar el mouse sobre una tarea (y al salir)
        item.addEventListener('mouseenter', () => {
            const estadoTexto = tarea.completada ? 'Completada' : 'Pendiente';
            mensajeHover.textContent = `Tarea: "${tarea.nombre}" · Prioridad: ${tarea.prioridad.toUpperCase()} · Estado: ${estadoTexto}`;
        });

        item.addEventListener('mouseleave', () => {
            mensajeHover.textContent = 'Pasa el cursor sobre una tarea para ver su detalle.';
        });

        const infoDiv = document.createElement('div');
        infoDiv.className = 'task-info';

        const nombreSpan = document.createElement('span');
        nombreSpan.className = 'task-name';
        nombreSpan.textContent = tarea.nombre;

        const badgePrioridad = document.createElement('span');
        badgePrioridad.className = `priority-badge prioridad-${tarea.prioridad}`;
        badgePrioridad.textContent = `Prioridad ${tarea.prioridad}`;

        infoDiv.appendChild(nombreSpan);
        infoDiv.appendChild(badgePrioridad);

        const accionesDiv = document.createElement('div');
        accionesDiv.className = 'task-actions';

        const completarBtn = document.createElement('button');
        completarBtn.type = 'button';
        completarBtn.className = 'complete-btn';
        completarBtn.textContent = tarea.completada ? 'Completada ✓' : 'Completar';
        completarBtn.addEventListener('click', () => {
            alternarCompletada(tarea.id);
        });

        const eliminarBtn = document.createElement('button');
        eliminarBtn.type = 'button';
        eliminarBtn.className = 'delete-btn';
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => {
            eliminarTarea(tarea.id);
        });

        accionesDiv.appendChild(completarBtn);
        accionesDiv.appendChild(eliminarBtn);

        item.appendChild(infoDiv);
        item.appendChild(accionesDiv);

        listaTareas.appendChild(item);
    }
}

// Configura los botones de filtro (Todas / Pendientes / Completadas)
for (let i = 0; i < botonesFiltro.length; i++) {
    botonesFiltro[i].addEventListener('click', () => {
        filtroActual = botonesFiltro[i].dataset.filtro;

        for (let j = 0; j < botonesFiltro.length; j++) {
            botonesFiltro[j].classList.remove('activa');
        }
        botonesFiltro[i].classList.add('activa');

        renderizarTareas();
    });
}

// Valida y registra una nueva tarea al enviar el formulario
tareaForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    mensajeAviso.textContent = '';

    const nombreLimpio = tareaInput.value.trim();
    const prioridadElegida = prioridadSelect.value;

    if (nombreLimpio === '') {
        mensajeAviso.textContent = '⚠️ Escribe una tarea antes de agregar.';
        return;
    }

    if (!regexTextoTarea.test(nombreLimpio)) {
        mensajeAviso.textContent = '⚠️ El nombre de la tarea no debe contener números ni símbolos.';
        return;
    }

    const nuevaTarea = {
        id: Date.now() + '-' + Math.floor(Math.random() * 1000),
        nombre: nombreLimpio,
        prioridad: prioridadElegida,
        completada: false
    };

    tareas.push(nuevaTarea);
    tareaInput.value = '';
    tareaInput.focus();

    actualizarContadorPendientes();
    renderizarTareas();
});

// Inicialización al cargar la página
actualizarContadorPendientes();
renderizarTareas();