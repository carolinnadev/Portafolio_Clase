document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const userInput = document.getElementById('userInput');

    // 1. Base de conocimiento simulada
    const guiasDelCurso = [
        {
            tema: "reglas",
            contenido: "Las reglas (programación tradicional) son instrucciones fijas de tipo if/else. Si el dato cambia y no hay regla para él, el sistema falla. Ejemplo: ordenar tarjetas paso a paso."
        },
        {
            tema: "ejemplos",
            contenido: "El aprendizaje a partir de ejemplos (Machine Learning) entrena al sistema con datos etiquetados (como spam vs deseado) para que el modelo infiera patrones estadísticos por sí mismo."
        },
        {
            tema: "generativa",
            contenido: "La IA generativa utiliza modelos entrenados con grandes volúmenes de datos para redactar explicaciones, crear contenido o responder preguntas basándose en contexto."
        }
    ];

    chatForm.addEventListener('submit', procesarConsulta);

    function procesarConsulta(e) {
        e.preventDefault();
        const query = userInput.value.trim().toLowerCase();

        if (!query) return;

        appendMessage(userInput.value, 'user');
        userInput.value = '';

        // Simulación del pipeline de procesamiento
        setTimeout(() => {
            // R: Regla para casos administrativos o humanos
            if (query.includes('nota') || query.includes('asistencia') || query.includes('falta')) {
                appendMessage('Esta consulta sobre registros oficiales requiere derivación a revisión humana.', 'bot', 'H');
                return;
            }

            // M: Búsqueda en las "guías del curso" (Simulando RAG / Modelo)
            let respuestaEncontrada = guiasDelCurso.find(guia => query.includes(guia.tema));

            if (respuestaEncontrada) {
                appendMessage(`[Basado en las guías del curso]: ${respuestaEncontrada.contenido}`, 'bot', 'M');
            } else {
                appendMessage(`Sobre "${query}": Mi base de conocimiento actual en las guías no cubre este detalle exacto. ¿Quieres que un tutor humano lo revise?`, 'bot', 'M');
            }
        }, 600);
    }

    function appendMessage(text, sender, tagType = null) {
        const chatBody = document.getElementById('chatBody');
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
});