// Estado principal del contador en memoria (inicia en 0)
let count = 0;

// Referencias a los elementos del DOM (evita buscarlos en cada clic)
const contadorEl = document.getElementById('contador');
const estadoAlerta = document.getElementById('estadoAlerta');
const sumarBtn = document.getElementById('sumarBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');

// Evento para incrementar el contador al hacer clic en "Sumar"
sumarBtn.addEventListener('click', () => {
    // Cláusula de guarda: frena el incremento si ya llegamos al tope de 99
    if (count >= 99) return;

    // Suma 1 a 'count' y refresca número, colores, mensaje y estado de botones
    count++;
    actualizarVista();
});

// Evento para devolver el contador a su estado inicial
reiniciarBtn.addEventListener('click', () => {
    // Reinicia la variable de estado y vuelve a pintar la vista desde 0
    count = 0;
    actualizarVista();
});

// Centraliza la actualización visual según el valor actual de 'count'
function actualizarVista() {
    // Muestra el número actualizado en el DOM
    contadorEl.textContent = count;
    
    // Limpiamos clases y reactivamos el botón de sumar
    // (evita que queden colores o el bloqueo de un rango anterior)
    contadorEl.className = 'counter-display';
    sumarBtn.disabled = false;

    // Evalúa los rangos de 'count' en orden para asignar color y aviso
    if (count === 0) {
        estadoAlerta.textContent = 'Sistema operando con normalidad';
        estadoAlerta.style.color = '#8a8d9f';
    } 
    else if (count >= 1 && count <= 55) {
        // Rango seguro/óptimo: aplica clase 'verde' al número y tono verde al aviso
        contadorEl.classList.add('verde');
        estadoAlerta.textContent = 'Estado óptimo';
        estadoAlerta.style.color = '#5cffb1';
    } 
    else if (count >= 56 && count <= 75) {
        // Rango intermedio: avisa que se está elevando el conteo
        contadorEl.classList.add('amarillo');
        estadoAlerta.textContent = '⚠️ Precaución: Nivel elevado';
        estadoAlerta.style.color = '#fbbf24';
    } 
    else if (count >= 76) {
        // Rango crítico: alerta visual en rojo a partir de 76
        contadorEl.classList.add('rojo');
        estadoAlerta.textContent = '🛑 Límite alcanzado: Sistema pausado';
        estadoAlerta.style.color = '#ef4444';
        
        // Al llegar a 99 deshabilita el botón para no pasar del límite
        if (count >= 99) {
            sumarBtn.disabled = true;
        }
    }
}