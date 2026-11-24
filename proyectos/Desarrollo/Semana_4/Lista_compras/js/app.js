// Captura de referencias clave del DOM
const formularioProducto = document.getElementById('formularioProducto');
const productoInput = document.getElementById('productoInput');
const listaProductos = document.getElementById('listaProductos');
const mensajeAviso = document.getElementById('mensajeAviso');

// Clave usada para guardar la lista en localStorage
const CLAVE_STORAGE = 'productos_lista';

// Expresión regular que permite únicamente letras (incluyendo acentos y ñ) y espacios internos
const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Cargamos los productos guardados al iniciar; si no hay nada, empezamos con un arreglo vacío
let productos = cargarProductos();

// Lee el arreglo desde localStorage de forma segura
function cargarProductos() {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    if (!guardado) {
        return [];
    }

    try {
        const parsed = JSON.parse(guardado);
        // Verificamos que sea un arreglo antes de devolverlo
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        // Si el JSON está corrupto, evitamos que rompa la app y devolvemos vacío
        return [];
    }
}

// Guarda el estado actual del arreglo en localStorage en formato texto JSON
function guardarProductos() {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(productos));
}

// Limpia el mensaje de aviso en pantalla
function limpiarAviso() {
    mensajeAviso.textContent = '';
}

// Despliega una advertencia en el espacio asignado
function mostrarAviso(texto) {
    mensajeAviso.textContent = texto;
}

// Crea un <li> para un producto y borra ese índice del arreglo y de localStorage al hacer clic en X
function renderizarProducto(nombreProducto, indice) {
    const nuevoItem = document.createElement('li');
    nuevoItem.className = 'product-item';

    const spanTexto = document.createElement('span');
    spanTexto.className = 'product-text';
    spanTexto.textContent = nombreProducto;

    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.className = 'delete-btn';
    botonEliminar.textContent = '✖';
    botonEliminar.title = 'Eliminar producto';

    botonEliminar.addEventListener('click', () => {
        // Quitamos 1 elemento en la posición del índice actual
        productos.splice(indice, 1);
        guardarProductos();
        renderizarListaCompleta();
    });

    nuevoItem.appendChild(spanTexto);
    nuevoItem.appendChild(botonEliminar);
    listaProductos.appendChild(nuevoItem);
}

// Limpia el <ul> y vuelve a pintar todos los productos actuales según su índice vigente
function renderizarListaCompleta() {
    listaProductos.textContent = '';

    for (let i = 0; i < productos.length; i++) {
        renderizarProducto(productos[i], i);
    }
}

// Manejo del evento submit para agregar productos
formularioProducto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const productoLimpio = productoInput.value.trim();

    // 1. Validación de campo vacío
    if (productoLimpio === '') {
        mostrarAviso('Escribe un producto antes de presionar Agregar.');
        productoInput.focus();
        return;
    }

    // 2. Validación estricta: No se permiten números ni caracteres especiales
    if (!regexSoloLetras.test(productoLimpio)) {
        mostrarAviso('No se permiten números ni caracteres especiales. Solo letras.');
        productoInput.focus();
        return;
    }

    limpiarAviso();

    // Agregamos al arreglo, guardamos en localStorage y redibujamos la lista
    productos.push(productoLimpio);
    guardarProductos();
    renderizarListaCompleta();

    productoInput.value = '';
    productoInput.focus();
});

// Pintamos los productos guardados apenas carga la página
renderizarListaCompleta();