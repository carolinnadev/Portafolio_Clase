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



---

## 💻 MiniReto 2 · La primera cotización en PSeInt

### 1. Modelo Entrada – Proceso – Salida (EPS)

| Entrada (Variables y Tipos) | Proceso (Operaciones y Fórmulas) | Salida (Resultados Muestra) |
| :--- | :--- | :--- |
| • `nombre` (Caracter)<br>• `horas` (Entero) | • Definir constante `VALOR_HORA <- 10000`<br>• `total <- horas * VALOR_HORA` | • Mensaje: "Hola, [nombre]: tu alquiler de [horas] horas cuesta $[total]" |

---

### 2. Casos de Prueba (Ejecución vs. Esperado)

| Caso | Entrada (Horas) | Resultado Esperado (A mano) | Resultado Obtenido (PSeInt) | Estado |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 1 hora | $10.000 | $10.000 | ✅ Correcto |
| 2 | 3 horas | $30.000 | $30.000 | ✅ Correcto |
| 3 | 8 horas | $80.000 | $80.000 | ✅ Correcto |

---

### 3. Registro de Casos Borde / Pendientes para Semana 2
* **Ingreso de 0 horas:** El sistema calcula $0, lo cual no es lógico para un alquiler.
* **Ingreso de horas negativas (ej. -2):** El sistema calcula un total negativo (-$20.000), lo que representa una falla lógica.
* **Solución pendiente:** Estos casos se controlarán en la **Semana 2** utilizando condicionales (`Si ... Entonces`).


---

## 🗺️ MiniReto 3 · Recorridos guiados y diagrama de flujo

### 1. Prueba de Escritorio (Caso: 4 personas en Sabores de Barrio)
| Paso / Instrucción | `nombreRecorrido` | `precioPersona` | `personas` | `total` | `anticipo` | `saldo` |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `Leer nombreRecorrido` | "Sabores de Barrio" | - | - | - | - | - |
| `Leer precioPersona` | "Sabores de Barrio" | 60000 | - | - | - | - |
| `Leer personas` | "Sabores de Barrio" | 60000 | 4 | - | - | - |
| `total <- precioPersona * personas` | "Sabores de Barrio" | 60000 | 4 | 240000 | - | - |
| `anticipo <- redon(total * 0.30)` | "Sabores de Barrio" | 60000 | 4 | 240000 | 72000 | - |
| `saldo <- total - anticipo` | "Sabores de Barrio" | 60000 | 4 | 240000 | 72000 | 168000 |

---

### 2. Identificación de Símbolos en el Diagrama de Flujo
* **Óvalos (Inicio / Fin):** Delimitan el comienzo y cierre del flujo lógico del algoritmo.
* **Paralelogramos (Entrada / Salida):** Utilizados para leer las variables ingresadas por el usuario (`Leer`) y para mostrar los resultados en pantalla (`Escribir`).
* **Rectángulos (Proceso):** Utilizados para las operaciones matemáticas (`total`, `anticipo`, `saldo`).



---

## 📦 MiniReto 4 · Asistente de taquilla v0.1 (Cuenta del Grupo)

### 1. Descomposición del Problema (Pasos Secuenciales)
1. **Entrada de datos:** Leer cantidad de bicicletas urbanas, horas de alquiler, precio del recorrido guiado por persona y cantidad de personas del grupo.
2. **Cálculo de bicicletas:** `valorBicicletas <- cantBicicletas * horasBici * VALOR_HORA_BICI`
3. **Cálculo de recorridos:** `valorRecorrido <- precioRecorrido * personas`
4. **Subtotal:** `subtotal <- valorBicicletas + valorRecorrido`
5. **Aporte voluntario:** `aporteVoluntario <- subtotal * 0.10` (se toma la parte entera con `trunc`).
6. **Total general:** `total <- subtotal + trunc(aporteVoluntario)`
7. **División y Redondeo por Persona:** `valorPorPersona <- trunc((total / personas + 99) / 100) * 100` (asegura que sea múltiplo de 100 hacia arriba).

### 2. Explicación de la Fórmula de Redondeo a la Centena
Para cumplir con la regla de redondear hacia arriba a la centena (ej: $71.500 o $90.800), se divide el total entre las personas, se le suman 99 para desplujar el residuo hacia la siguiente centena, se aplica `trunc` para eliminar decimales y se multiplica por 100. Esto garantiza que el valor cobrado nunca sea inferior al exacto.

### 3. Casos de Prueba Registrados
* **Caso 1:** 3 personas, 3 bicicletas por 2 horas y *Río y Parques* ($45.000).
  * *Total esperado:* $214.500 | *Valor por persona:* $71.500
* **Caso 2:** 4 personas, 3 bicicletas por 3 horas y *Sabores de Barrio* ($60.000).
  * *Total esperado:* $363.000 | *Valor por persona:* $90.800



  ---

## 🚦 MiniReto 5 · ¿Quién puede alquilar? De la regla a la condición

### 1. Análisis de Reglas de Negocio (Proposiciones)
* **Regla 1:** El usuario debe ser mayor de edad o contar con autorización firmada.
  * *Proposición P:* `edad >= 18`
  * *Proposición Q:* `tieneAutorizacion == "S"`
  * *Condición lógica:* `P O Q` (`edad >= 18 O tieneAutorizacion == "S"`)
* **Regla 2:** El usuario debe presentar un documento de identidad válido.
  * *Condición lógica:* `tieneDocumento == "S"`

### 2. Tabla de Verdad de la Validación de Alquiler (`edad >= 18 O tieneAutorizacion`)
| Edad >= 18 (`P`) | Tiene Autorización (`Q`) | ¿Puede Alquilar? (`P O Q`) |
| :---: | :---: | :---: |
| Verdadero | Verdadero | Verdadero |
| Verdadero | Falso | Verdadero |
| Falso | Verdadero | Verdadero |
| Falso | Falso | Falso |



---

## 🛡️ MiniReto 6 · Reservas sin errores: validar los datos

### 1. Aplicación de Leyes de De Morgan en Validaciones
* **Condición de Entrada Válida:** `horas > 0 Y cantBicicletas > 0`
* **Condición de Error (Negación total):** `NO (horas > 0 Y cantBicicletas > 0)`
* **Equivalente de De Morgan:** `(horas <= 0) O (cantBicicletas <= 0)`
* **Justificación:** Si las horas son menores o iguales a 0, **O** si la cantidad de bicicletas es menor o igual a 0, la entrada es completamente inválida y el algoritmo debe rechazar el procesamiento.

### 2. Tabla de Pruebas de Validación
| Horas Ingresadas | Bicicletas Ingresadas | ¿Es Válido? | Mensaje del Sistema |
| :---: | :---: | :---: | :--- |
| 3 | 2 | ✅ Sí | Procesa la cotización correctamente. |
| 0 | 2 | ❌ No | Error: La cantidad de horas debe ser mayor a 0. |
| 2 | -1 | ❌ No | Error: La cantidad de bicicletas debe ser mayor a 0. |


---

## 📊 MiniReto 7 · Tarifas claras: la tabla de decisión

### 1. Tabla de Decisión de Tarifas por Tipo de Bicicleta
| Tipo de Bicicleta (`tipoBici`) | Características | Valor por Hora (`valorHora`) |
| :--- | :--- | :--- |
| `1` o "Urbana" | Estándar para ciudad, casco y candado incluidos. | $10.000 |
| `2` o "Electrica" | Asistencia de pedaleo, mayor rendimiento. | $20.000 |
| `3` o "MTB" | Montañera, ideal para recorridos complejos. | $15.000 |

### 2. Análisis del Flujo de Decisión Múltiple
Cuando la persona de taquilla ingresa el tipo de bicicleta, el sistema evalúa opciones en cadena. Si no coincide con ninguna de las opciones válidas, se activa una rama de error por opción no encontrada.


---

## 🚀 MiniReto 8 · Asistente de taquilla v0.2 (Cotizador con Reglas)

### 1. Resumen de Reglas Integradas
* **Validación de Identidad:** Exige documento válido (`S`). Si es menor de 18 años, requiere autorización firmada.
* **Validación de Cantidades:** Verifica que las horas y la cantidad de bicicletas sean mayores a 0.
* **Tarifas Diferenciadas:** Urbana ($10.000/h), Eléctrica ($20.000/h), MTB ($15.000/h).
* **Descuento por Larga Duración:** Se aplica un **10% de descuento** sobre el subtotal si el tiempo de alquiler es de **5 horas o más**.

### 2. Tabla de Casos de Prueba (Versión v0.2)

| Caso | Cliente | Edad / Aut. | Bici / Cantidad | Horas | Resultado Esperado | Resultado PSeInt | Estado |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | Carlos | 20 / S | Urbana (1) | 3 h | Total: $30.000 (Sin desc.) | $30.000 | ✅ Correcto |
| 2 | Andrea | 16 / S | Eléctrica (2) | 5 h | Sub: $200.000 - Desc(10%): $20.000 = **$180.000** | $180.000 | ✅ Correcto |
| 3 | Mateo | 25 / N | MTB (1) | 2 h | **Acceso denegado** (Sin documento) | Acceso denegado | ✅ Correcto |


---

## 💰 MiniReto 9 · Cierre de caja (Centinela y Acumuladores)

### 1. Definición de Variables de Control
* **Centinela (`continuar`):** Variable de tipo carácter o entero que decide si el ciclo se repite. Mientras sea diferente de una opción de salida (ej. "N"), el sistema sigue pidiendo alquileres.
* **Acumulador (`recaudoTotal`):** Suma progresivamente el valor de cada transacción del día. Su estructura es `recaudoTotal <- recaudoTotal + totalAlquiler`.
* **Contador (`totalTransacciones`):** Incrementa en 1 por cada alquiler registrado exitosamente (`totalTransacciones <- totalTransacciones + 1`).

### 2. Tabla de Traza del Ciclo (Ejemplo con 2 transacciones)
| Ciclo / Acción | Entrada (`continuar`) | Transacción (`total`) | `recaudoTotal` (Acumulador) | `totalTransacciones` (Contador) |
| :---: | :---: | :---: | :---: | :---: |
| Inicio | "S" | - | 0 | 0 |
| Transacción 1 | "S" | $30.000 | 30.000 | 1 |
| Transacción 2 | "N" | $20.000 | 50.000 | 2 |
| Fin del Ciclo | Salida | - | $50.000 (Cierre final) | 2 |


---

## 🚀 MiniReto 12 · Asistente de Taquilla v1.0 (Producto Final)

### 1. Árbol de Componentes y Descomposición por SubProcesos
* **`FuncionBienvenida`**: Muestra la interfaz inicial del sistema y el menú principal del día.
* **`SubProceso CotizarAlquiler`**: Gestiona de forma encapsulada la selección de bicicletas, validación de horas y cálculo de subtotales con descuentos.
* **`SubProceso MostrarCierreCaja`**: Presenta los acumuladores totales de transacciones y el recaudo final al terminar el turno de la taquilla.

### 2. Conclusión del Proyecto v1.0
El Asistente de Taquilla Rueda Libre v1.0 integra algoritmos secuenciales, estructuras de decisión avanzadas, validaciones con leyes de De Morgan, ciclos de control para turnos de trabajo y modularización por SubProcesos, estandarizando por completo la operación del negocio en Medellín.

