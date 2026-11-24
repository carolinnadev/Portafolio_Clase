**Proyecto:** Asistente de Conocimiento · Módulo IA  
**Autor:** Caro (`carolinnadev`)  
**Caso de Uso:** Asistente conversacional interno para coders, con énfasis crítico en protección de datos personales (Ley 1581) y explicabilidad RAG.

---

## 📊 Criterios y Ponderación de Evaluación
Para nuestra aplicación, los pesos asignados suman **1.0**, priorizando drásticamente la privacidad de los usuarios:
* **Privacidad (Peso: 0.40):** Cumplimiento normativo, no retención de datos para entrenamiento de terceros y cifrado estricto.
* **Calidad / Desempeño (Peso: 0.30):** Capacidad del modelo para comprender instrucciones técnicas y explicar conceptos correctamente.
* **Costo (Peso: 0.20):** Sostenibilidad económica del consumo por API o infraestructura.
* **Latencia (Peso: 0.10):** Velocidad de respuesta en la interfaz de usuario.

---

## 📐 Matriz Comparativa Ponderada

| Opciones Evaluadas | Privacidad (0.40) | Calidad (0.30) | Costo (0.20) | Latencia (0.10) | Puntaje Ponderado |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Opción A: Comercial de Frontera (API Directa)** | 3 / 5 | 5 / 5 | 3 / 5 | 4 / 5 | **3.80** |
| **Opción B: Intermediario de Modelos (Agregador)** | 2 / 5 | 5 / 5 | 4 / 5 | 3 / 5 | **3.50** |
| **Opción C: Modelo Abierto Local / Servidor Propio** | 5 / 5 | 4 / 5 | 4 / 5 | 3 / 5 | **4.30** |

---

## 🧮 Justificación Matemática y Decisión

* **Opción C (Modelo Abierto Local):** Obtiene el puntaje más alto (**4.30**) debido a que maximiza la **privacidad (5/5)**, garantizando que los datos de los coders nunca salgan de nuestra infraestructura ni sean interceptados por terceros, cumpliendo a cabalidad con la Ley 1581 de 2012. Su balance en costo y calidad compensa la latencia estándar.
* **Opción A (Comercial de Frontera):** Excelente calidad técnica (5/5), pero penalizada en privacidad (3/5) por las políticas de retención de datos corporativos de las APIs comerciales estándar.
* **Opción B (Intermediario):** Descartada como primera opción principal porque añade un eslabón adicional en la ruta de los datos, aumentando el riesgo de exposición de información sensible.

### 🔄 Análisis de Sensibilidad (Cambio de Prioridades)
Si el proyecto cambiara su enfoque hacia un entorno público masivo donde el costo y la calidad primen sobre la privacidad (ej. *Costo: 0.4, Calidad: 0.4, Privacidad: 0.1, Latencia: 0.1*), la **Opción A** tomaría el liderazgo. Sin embargo, para nuestro asistente de coders, **la privacidad manda**.
