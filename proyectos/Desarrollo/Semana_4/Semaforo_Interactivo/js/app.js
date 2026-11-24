// Capturamos las referencias de las tres luces, el mensaje de estado y los tres botones
const luzRoja = document.getElementById('luzRoja');
const luzAmarilla = document.getElementById('luzAmarilla');
const luzVerde = document.getElementById('luzVerde');

const mensajeEstado = document.getElementById('mensajeEstado');

const btnRojo = document.getElementById('btnRojo');
const btnAmarillo = document.getElementById('btnAmarillo');
const btnVerde = document.getElementById('btnVerde');

// Configuración centralizada de cada estado para evitar repetir lógica condicional
const ESTADOS_SEMAFORO = {
    rojo: {
        elementoLuz: luzRoja,
        mensaje: 'Detente',
        claseEstado: 'estado-rojo'
    },
    amarillo: {
        elementoLuz: luzAmarilla,
        mensaje: 'Precaución',
        claseEstado: 'estado-amarillo'
    },
    verde: {
        elementoLuz: luzVerde,
        mensaje: 'Puedes avanzar',
        claseEstado: 'estado-verde'
    }
};

// Apaga todas las luces y limpia las clases de color del mensaje antes de encender la nueva
function apagarTodasLasLuces() {
    luzRoja.classList.remove('encendida');
    luzAmarilla.classList.remove('encendida');
    luzVerde.classList.remove('encendida');

    mensajeEstado.classList.remove('estado-rojo', 'estado-amarillo', 'estado-verde');
}

// Activa únicamente el color indicado y actualiza el texto de estado
function activarLuz(color) {
    const config = ESTADOS_SEMAFORO[color];
    if (!config) {
        return;
    }

    // Primero apagamos todas para garantizar que solo quede una luz encendida a la vez
    apagarTodasLasLuces();

    config.elementoLuz.classList.add('encendida');
    mensajeEstado.textContent = config.mensaje;
    mensajeEstado.classList.add(config.claseEstado);
}

// Eventos de clic para cada botón del semáforo
btnRojo.addEventListener('click', () => {
    activarLuz('rojo');
});

btnAmarillo.addEventListener('click', () => {
    activarLuz('amarillo');
});

btnVerde.addEventListener('click', () => {
    activarLuz('verde');
});