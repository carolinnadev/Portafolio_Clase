// 1. Un año es bisiesto si es divisible entre 4 y no entre 100, o si es divisible entre 400.
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// 2. Stock 0 -> "Agotado"; entre 1 y 10 -> "Bajo"; más de 10 -> "Disponible"; negativo -> "Error".
function semaforoInventario(stock) {
    if (stock < 0) {
        return "Error";
    } else if (stock === 0) {
        return "Agotado";
    } else if (stock <= 10) {
        return "Bajo";
    } else {
        return "Disponible";
    }
}

// Pruebas en consola
console.log("Año 2024 es bisiesto:", esBisiesto(2024)); // true
console.log("Inventario con stock 5:", semaforoInventario(5));   // "Bajo"