// Referencias a los campos del formulario
const nombreInput = document.getElementById('nombreInput');
const profesionInput = document.getElementById('profesionInput');
const fotoUrlInput = document.getElementById('fotoUrlInput');
const estadoImagen = document.getElementById('estadoImagen');

// Referencias a los elementos visibles dentro de la tarjeta de perfil
const fotoPerfil = document.getElementById('fotoPerfil');
const nombrePerfil = document.getElementById('nombrePerfil');
const profesionPerfil = document.getElementById('profesionPerfil');

// Datos por defecto cuando el usuario aún no escribe o borra los campos
const NOMBRE_POR_DEFECTO = 'Tu nombre';
const PROFESION_POR_DEFECTO = 'Tu profesión';

// Permite solo letras (con tildes y ñ) y espacios; rechaza números y símbolos
const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Avatar SVG local de respaldo para no depender de servidores externos ni dejar imagen rota
const AVATAR_POR_DEFECTO =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
            <rect width="160" height="160" fill="#111219"/>
            <circle cx="80" cy="60" r="28" fill="#e822fe" opacity="0.85"/>
            <path d="M28 142 C28 110, 52 96, 80 96 C108 96, 132 110, 132 142" fill="#e822fe" opacity="0.65"/>
        </svg>
    `);

// Muestra un mensaje de aviso o estado en el área inferior del formulario
function mostrarAviso(texto, tipo = '') {
    estadoImagen.textContent = texto;
    estadoImagen.className = tipo ? `status-note ${tipo}` : 'status-note';
}

// Actualiza el nombre en vivo; si está vacío o contiene números/símbolos, restaura el texto por defecto
nombreInput.addEventListener('input', () => {
    const limpio = nombreInput.value.trim();

    if (limpio === '') {
        nombrePerfil.textContent = NOMBRE_POR_DEFECTO;
        mostrarAviso('');
        return;
    }

    if (!regexSoloLetras.test(limpio)) {
        nombrePerfil.textContent = NOMBRE_POR_DEFECTO;
        mostrarAviso('El nombre no puede contener números ni caracteres especiales.', 'error');
        return;
    }

    nombrePerfil.textContent = limpio;
    mostrarAviso('');
});

// Actualiza la profesión en vivo; si está vacía o contiene números/símbolos, restaura el texto por defecto
profesionInput.addEventListener('input', () => {
    const limpio = profesionInput.value.trim();

    if (limpio === '') {
        profesionPerfil.textContent = PROFESION_POR_DEFECTO;
        mostrarAviso('');
        return;
    }

    if (!regexSoloLetras.test(limpio)) {
        profesionPerfil.textContent = PROFESION_POR_DEFECTO;
        mostrarAviso('La profesión no puede contener números ni caracteres especiales.', 'error');
        return;
    }

    profesionPerfil.textContent = limpio;
    mostrarAviso('');
});

// Valida que la URL use protocolo http: o https: para evitar esquemas peligrosos como javascript:
function esUrlHttpValida(urlTexto) {
    try {
        const urlParseada = new URL(urlTexto);
        return urlParseada.protocol === 'http:' || urlParseada.protocol === 'https:';
    } catch (error) {
        return false;
    }
}

// Escucha cambios en el campo de URL para intentar cargar la imagen en la tarjeta
fotoUrlInput.addEventListener('input', () => {
    const urlLimpia = fotoUrlInput.value.trim();

    // Si el campo queda vacío, volvemos al avatar por defecto
    if (urlLimpia === '') {
        fotoPerfil.src = AVATAR_POR_DEFECTO;
        mostrarAviso('Mostrando avatar por defecto.');
        return;
    }

    // Si no es una URL http/https válida, mostramos aviso y mantenemos/restauramos respaldo
    if (!esUrlHttpValida(urlLimpia)) {
        mostrarAviso('Ingresa una URL válida que empiece por http:// o https://.', 'error');
        return;
    }

    // Asignamos la URL; los eventos 'load' y 'error' de <img> confirmarán si cargó bien
    fotoPerfil.src = urlLimpia;
});

// Se dispara cuando el navegador logra descargar y decodificar la imagen
fotoPerfil.addEventListener('load', () => {
    // Evitamos marcar "actualizada" cuando se está pintando el avatar por defecto
    if (fotoPerfil.src === AVATAR_POR_DEFECTO) {
        return;
    }
    mostrarAviso('Foto actualizada en la tarjeta.', 'ok');
});

// Se dispara si la URL apunta a un enlace roto, bloqueado o que no es imagen
fotoPerfil.addEventListener('error', () => {
    // Solo mostramos error si el usuario había escrito algo; luego restauramos el respaldo
    if (fotoUrlInput.value.trim() !== '') {
        mostrarAviso('No se pudo cargar esa imagen. Se restauró el avatar por defecto.', 'error');
    }
    fotoPerfil.src = AVATAR_POR_DEFECTO;
});

// Inicializamos la tarjeta con los valores por defecto al cargar la página
nombrePerfil.textContent = NOMBRE_POR_DEFECTO;
profesionPerfil.textContent = PROFESION_POR_DEFECTO;
fotoPerfil.src = AVATAR_POR_DEFECTO;
mostrarAviso('Mostrando avatar por defecto.');