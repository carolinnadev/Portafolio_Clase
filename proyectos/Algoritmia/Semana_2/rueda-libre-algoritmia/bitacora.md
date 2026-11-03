# Bitácora de Desarrollo - Rueda Libre Algoritmia
**Proyecto:** Asistente de taquilla Rueda Libre v0.1  
**Autor/a:** Carolinna  
**Semana 1 · Sesión 1:** Introducción a la algoritmia y pensamiento computacional  

---

## 🚴 MiniReto 1 · Kilómetro 0: el alquiler sin ambigüedades

### 1. Versión 1 del Algoritmo de Alquiler (Lenguaje Natural)
1. El cliente llega al mostrador de Rueda Libre.
2. La persona de taquilla saluda al cliente.
3. El cliente dice qué quiere alquilar.
4. Se le pide el documento de identidad.
5. Se le cobra el dinero del alquiler.
6. Se le entrega la bicicleta, el casco y el candado.
7. El cliente se va.

---

### 2. Detección de Ambigüedades (Prueba en voz alta)
Al simular el proceso de forma estrictamente literal con un compañero, se encontraron los siguientes baches y ambigüedades:
* **Paso 3:** ¿Qué pasa si el cliente no sabe qué modelo de bicicleta quiere o si ya están agotadas? El texto no dice cómo verificar el inventario.
* **Paso 4:** ¿En qué momento exacto se toma el documento y dónde se guarda? Si el cliente se niega a dejarlo, el proceso se detiene sin instrucciones de qué hacer.
* **Paso 5:** ¿Cómo se calcula el cobro? No especifica si se cobra por horas, por día, ni los métodos de pago aceptados.
* **Paso 6:** ¿Se revisa el estado de la bicicleta antes de entregarla? Podría entregarse una bicicleta desinflada o dañada.

---

### 3. Versión 2 del Algoritmo de Alquiler (Corregido y Preciso)
1. **Inicio.**
2. Recibir al cliente en el mostrador y saludar cordialmente.
3. Preguntar al cliente el tipo de bicicleta que desea alquilar (urbana o de ruta) y la cantidad de horas.
4. **Decisión:** Verificar en el sistema si hay disponibilidad de ese tipo de bicicleta en el inventario actual:
   * *Si NO hay disponibilidad:* Informar al cliente amablemente que no hay bicicletas libres, sugerir otra opción o finalizar el proceso. **(Fin del flujo)**.
   * *Si SÍ hay disponibilidad:* Continuar con el proceso.
5. Solicitar al cliente su documento de identidad original y registrar sus datos personales en el sistema.
6. Realizar la inspección visual rápida de la bicicleta junto con el cliente para verificar que los frenos y llantas estén en buen estado.
7. Calcular el valor total del alquiler según las horas solicitadas y cobrar el dinero correspondiente, entregando el recibo de pago.
8. Entregar físicamente la bicicleta, un casco ajustado a su medida y un candado de seguridad.
9. Indicar al cliente las normas básicas de seguridad vial y desearle un buen recorrido.
10. **Fin.**

---

### 4. Justificación de las 5 Características de un Algoritmo
* **Precisión:** El paso 7 indica de forma exacta cómo calcular el cobro y entregar el recibo sin dejar espacio a la improvisación del cajero.
* **Finitud:** El proceso cuenta con un número finito de pasos (10 pasos en total) y siempre termina ya sea entregando la bicicleta o finalizando en el paso 4 si no hay inventario.
* **Orden:** Los pasos poseen una secuencia lógica inalterable; por ejemplo, el documento se solicita (paso 5) y se verifica el estado (paso 6) *antes* de cobrar y entregar los implementos (pasos 7 y 8).
* **Determinismo:** Ante las mismas entradas (ej. cliente solicita una bicicleta urbana por 2 horas y hay inventario), el algoritmo arrojará exactamente los mismos pasos a seguir por cualquier persona en taquilla.
* **Efectividad:** Cada instrucción es básica y realizable (saludar, verificar disponibilidad en pantalla, cobrar, entregar elementos físicos).

---

### 5. Análisis de los 4 Pilares del Pensamiento Computacional
* **Descomposición:** Se dividió el problema general de "atender un alquiler" en etapas manejables: recepción, verificación de inventario, registro de identidad, cobro y entrega del equipo.
* **Reconocimiento de patrones:** Se identificó que cada vez que llega un cliente se repite una estructura cíclica común: capturar datos $\rightarrow$ validar recursos $\rightarrow$ procesar pago $\rightarrow$ entregar producto.
* **Abstracción:** Se eliminaron detalles irrelevantes para el sistema lógico de la taquilla, tales como la marca de la ropa del cliente, el clima exacto del día o el color de los cascos disponibles en la bodega.
* **Diseño del algoritmo:** Es la secuencia lógica paso a paso reflejada en la **Versión 2**, lista para convertirse posteriormente en código ejecutable.