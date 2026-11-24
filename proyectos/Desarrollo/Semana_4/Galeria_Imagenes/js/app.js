// Referencias a los elementos principales de la galería en el DOM
const imagenPrincipal = document.getElementById('imagenPrincipal');
const tituloImagen = document.getElementById('tituloImagen');
const contenedorMiniaturas = document.getElementById('contenedorMiniaturas');

// Catálogo de la galería con enlaces de imágenes reales
const itemsGaleria = [
    {
        id: 'img-1',
        titulo: 'Montañas y Cordilleras',
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        alt: 'Paisaje de montañas con picos nevados al atardecer'
    },
    {
        id: 'img-2',
        titulo: 'Noche Estrellada y Galaxia',
        src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
        alt: 'Cielo nocturno estrellado sobre las montañas'
    },
    {
        id: 'img-3',
        titulo: 'Bosque en la Niebla',
        src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
        alt: 'Bosque denso envuelto en niebla matutina'
    },
    {
        id: 'img-4',
        titulo: 'Atardecer en la Playa',
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        alt: 'Playa tropical al atardecer con olas suaves'
    }
];

// Quita la clase 'activa' de todas las miniaturas para evitar múltiples selecciones
function limpiarMiniaturasActivas() {
    const botones = contenedorMiniaturas.querySelectorAll('.thumb-btn');
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove('activa');
    }
}

// Actualiza la imagen grande, su título y marca la miniatura seleccionada como activa
function seleccionarItem(item, botonSeleccionado) {
    imagenPrincipal.src = item.src;
    imagenPrincipal.alt = item.alt;
    tituloImagen.textContent = item.titulo;

    limpiarMiniaturasActivas();
    botonSeleccionado.classList.add('activa');
}

// Construye las miniaturas dinámicamente a partir del arreglo de items
function renderizarMiniaturas() {
    for (let i = 0; i < itemsGaleria.length; i++) {
        const item = itemsGaleria[i];

        const botonMiniatura = document.createElement('button');
        botonMiniatura.type = 'button';
        botonMiniatura.className = 'thumb-btn';
        botonMiniatura.setAttribute('aria-label', `Ver ${item.titulo}`);

        const imgMiniatura = document.createElement('img');
        imgMiniatura.src = item.src;
        imgMiniatura.alt = item.alt;
        imgMiniatura.className = 'thumb-img';

        botonMiniatura.appendChild(imgMiniatura);

        // Al hacer clic en una miniatura, actualizamos la vista principal y el estado activo
        botonMiniatura.addEventListener('click', () => {
            seleccionarItem(item, botonMiniatura);
        });

        contenedorMiniaturas.appendChild(botonMiniatura);

        // Seleccionamos la primera miniatura por defecto al cargar la galería
        if (i === 0) {
            seleccionarItem(item, botonMiniatura);
        }
    }
}

// Inicializamos la galería al cargar el script
renderizarMiniaturas();