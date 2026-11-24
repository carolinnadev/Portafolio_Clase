document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');

    // Base de conocimiento simulada con fuentes RAG (Explicabilidad)
    const guiasDelCurso = [
        {
            tema: "reglas",
            contenido: "Las reglas (programación tradicional) son instrucciones fijas de tipo if/else. Si el dato cambia y no hay regla, el sistema falla.",
            fuente: "Guía de Fundamentos - Módulo 1.pdf"
        },
        {
            tema: "ejemplos",
            contenido: "El aprendizaje a partir de ejemplos (Machine Learning) entrena al sistema con datos etiquetados para que el modelo infiera patrones estadísticos.",
            fuente: "Lectura de Machine Learning.pdf"
        },
        {
            tema: "generativa",
            contenido: "La IA generativa utiliza modelos entrenados con grandes volúmenes de datos para redactar explicaciones o crear contenido basado en contexto.",
            fuente: "Resumen de IA Generativa.pdf"
        }
    ];

    chatForm.addEventListener('submit', procesarConsulta);

    // ==========================================
    // 1. REGLA ÉTICA: Anonimización (Ley 1581)
    // ==========================================
    function anonimizarDatos(texto) {
        let textoLimpio = texto;
        const regexEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const regexTelefono = /\b(\+57\s?)?3\d{9}\b/g;
        const regexCedula = /\b\d{7,10}\b/g;

        textoLimpio = textoLimpio.replace(regexEmail, '[CORREO_OCULTO]');
        textoLimpio = textoLimpio.replace(regexTelefono, '[TELÉFONO_OCULTO]');
        textoLimpio = textoLimpio.replace(regexCedula, '[DATO_PRIVADO_OCULTO]');

        return textoLimpio;
    }

    function procesarConsulta(e) {
        e.preventDefault();
        const rawInput = userInput.value.trim();
        if (!rawInput) return;

        // Limpiamos datos sensibles antes de procesar
        const inputLimpio = anonimizarDatos(rawInput);
        const query = inputLimpio.toLowerCase();

        appendMessage(inputLimpio, 'user');
        userInput.value = '';

        const loadingId = appendLoadingIndicator();

        setTimeout(() => {
            removeLoadingIndicator(loadingId);

            // ==========================================
            // 2. REGLA ÉTICA: Control de Alto Impacto
            // ==========================================
            const temasAltoImpacto = ['nota', 'calificacion', 'asistencia', 'falta', 'salud', 'expulsion', 'cancelar'];
            const esAltoImpacto = temasAltoImpacto.some(word => query.includes(word));

            if (esAltoImpacto) {
                appendMessage('<strong>[Control Humano]</strong> Este tema académico o crítico requiere revisión de un tutor. Por ética, la IA no puede decidir sobre esto.', 'bot', 'H');
                return;
            }

            // Búsqueda RAG normal (Modelo M)
            let respuestaEncontrada = guiasDelCurso.find(guia => query.includes(guia.tema));

            if (respuestaEncontrada) {
                const mensajeConFuente = `${respuestaEncontrada.contenido}
                    <div class="source-citation">
                        📌 Fuente: <a href="#fuente" onclick="alert('Abriendo documento: ${respuestaEncontrada.fuente}'); return false;">${respuestaEncontrada.fuente}</a>
                    </div>`;
                appendMessage(mensajeConFuente, 'bot', 'M', true);
            } else {
                // Estado de Error / Honestidad
                const mensajeError = `Lo siento, no encontré información exacta sobre "${query}" en las guías. Para evitar alucinaciones, prefiero avisarte. ¿Deseas hablar con un coach?`;
                appendMessage(mensajeError, 'bot', 'H');
            }
        }, 800);
    }

    function appendMessage(text, sender, tagType = null, isHtml = false) {
        const msgNode = document.createElement('article');
        msgNode.className = `message ${sender}`;

        let tagHTML = '';
        if (tagType === 'R') tagHTML = '<span class="message-tag tag-r">Regla R</span><br>';
        if (tagType === 'M') tagHTML = '<span class="message-tag tag-m">Modelo M</span><br>';
        if (tagType === 'H') tagHTML = '<span class="message-tag tag-h">Humano H</span><br>';

        msgNode.innerHTML = `${tagHTML}${text}`;
        chatBody.appendChild(msgNode);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function appendLoadingIndicator() {
        const id = 'loading-' + Date.now();
        const loadingNode = document.createElement('article');
        loadingNode.className = 'message bot';
        loadingNode.id = id;
        loadingNode.innerHTML = `
            <span class="message-tag tag-m">Modelo M</span><br>
            <div class="loading-indicator">
                <div class="spinner"></div>
                <span>Pensando y consultando fuentes...</span>
            </div>
        `;
        chatBody.appendChild(loadingNode);
        chatBody.scrollTop = chatBody.scrollHeight;
        return id;
    }

    function removeLoadingIndicator(id) {
        const element = document.getElementById(id);
        if (element) element.remove();
    }
});