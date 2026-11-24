// Referencias a la tarjeta y al selector desplegable en el DOM
const tarjetaColor = document.getElementById('tarjetaColor');
const selectorColor = document.getElementById('selectorColor');

// Clave única en localStorage y lista blanca de colores válidos
const CLAVE_COLOR_TARJETA = 'color_tarjeta_seleccionado';
const coloresPermitidos = ['azul', 'verde', 'amarillo', 'rosa'];

// Elimina cualquier clase de tema anterior para que no queden estilos mezclados
function limpiarTemas() {
    for (let i = 0; i < coloresPermitidos.length; i++) {
        tarjetaColor.classList.remove(`tema-${coloresPermitidos[i]}`);
    }
}

// Aplica el tema a la tarjeta y mantiene sincronizado el <select>
function aplicarColorTarjeta(color) {
    limpiarTemas();

    // Solo aplicamos tema si el color está dentro de los permitidos
    if (coloresPermitidos.includes(color)) {
        tarjetaColor.classList.add(`tema-${color}`);
        selectorColor.value = color;
        return;
    }

    // Si está vacío o no es válido, volvemos al estado por defecto
    selectorColor.value = '';
}

// Escucha cuando el usuario elige una opción distinta en el <select>
selectorColor.addEventListener('change', () => {
    const colorSeleccionado = selectorColor.value;

    aplicarColorTarjeta(colorSeleccionado);

    // Guardamos la elección (o limpiamos la clave si vuelve a la opción por defecto)
    if (coloresPermitidos.includes(colorSeleccionado)) {
        localStorage.setItem(CLAVE_COLOR_TARJETA, colorSeleccionado);
    } else {
        localStorage.removeItem(CLAVE_COLOR_TARJETA);
    }
});

// Al cargar la página, recuperamos el último color guardado y lo aplicamos
const colorGuardado = localStorage.getItem(CLAVE_COLOR_TARJETA);
if (colorGuardado) {
    aplicarColorTarjeta(colorGuardado);
}