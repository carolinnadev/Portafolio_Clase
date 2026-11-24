// Obtenemos las referencias de los elementos clave del DOM una sola vez
const tareaInput = document.getElementById('tareaInput');
const resultadoArea = document.getElementById('resultadoArea');

// Escuchamos cada tecla presionada dentro del input de tarea
tareaInput.addEventListener('keydown', (evento) => {
    // Cláusula de guarda: si la tecla presionada no es 'Enter', salimos sin hacer nada
    if (evento.key !== 'Enter') {
        return;
    }

    // .trim() quita espacios en blanco al inicio y al final para evitar tareas vacías o solo espacios
    const textoLimpio = tareaInput.value.trim();

    // Si tras limpiar espacios el texto queda vacío, no mostramos nada
    if (textoLimpio === '') {
        return;
    }

    // Limpiamos el contenido previo del área de resultado antes de mostrar la nueva tarea
    resultadoArea.textContent = '';

    // Creamos el contenedor principal del mensaje (<p>) y le asignamos su clase CSS
    const parrafo = document.createElement('p');
    parrafo.className = 'task-message';

    // Creamos un <span> para el prefijo ("Nueva tarea: ") y le aplicamos estilo propio
    const prefijo = document.createElement('span');
    prefijo.className = 'task-prefix';
    prefijo.textContent = 'Nueva tarea: ';

    // Creamos un segundo <span> para el texto ingresado por el usuario
    // Usar .textContent evita que se interprete HTML malicioso o etiquetas sueltas
    const contenido = document.createElement('span');
    contenido.textContent = textoLimpio;

    // Armamos la estructura interna del párrafo y lo insertamos en el DOM
    parrafo.appendChild(prefijo);
    parrafo.appendChild(contenido);
    resultadoArea.appendChild(parrafo);

    // Vaciamos el input para dejarlo listo para escribir la siguiente tarea
    tareaInput.value = '';
});