# Sesión 02: Validaciones y Algoritmos en PSeInt

Este repositorio contiene las soluciones en pseudocódigo y sus respectivas pruebas de escritorio para la **Sesión 02**.

---

## 📁 Archivos en esta sesión

1. `ValidarRegistro.psc` - Validación de campos obligatorios y longitud de clave.
2. `ValidarEdad.psc` - Verificación de mayoría de edad.
3. `Parqueadero.psc` - Cálculo de cobro de estacionamiento por horas.
4. `Semaforo.psc` - Control de acciones según el color del semáforo.
5. `Bisiesto.psc` - Evaluación de años bisiestos.

---

## 📊 Tablas de Pruebas de Escritorio

### 1. `ValidarRegistro.psc`

| Caso de Prueba | Entrada (nombre, correo, clave) | Condición Evaluada | Resultado Esperado / Salida |
| :--- | :--- | :--- | :--- |
| **Caso 1: Registro Válido** | `"Ana"`, `"ana@email.com"`, `"123456"` | `Longitud > 0 Y Clave >= 6` | `"¡Registro exitoso! Bienvenido/a, Ana."` |
| **Caso 2: Clave Corta** | `"Carlos"`, `"carlos@email.com"`, `"123"` | `Clave < 6` | `"Error en el registro. Verifique que..."` |
| **Caso 3: Campo Vacío** | `""`, `"correo@email.com"`, `"123456"` | `Nombre == ""` | `"Error en el registro. Verifique que..."` |

---

### 2. `ValidarEdad.psc`

| Caso de Prueba | Entrada (edad) | Condición Evaluada | Resultado Esperado / Salida |
| :--- | :--- | :--- | :--- |
| **Caso 1: Mayor de edad** | `20` | `edad >= 18` | `"Acceso permitido: Eres mayor de edad."` |
| **Caso 2: Menor de edad** | `15` | `edad < 18 Y edad >= 0` | `"Acceso denegado: Eres menor de edad."` |
| **Caso 3: Valor Inválido** | `-5` | `edad < 0` | `"Error: La edad ingresada no es válida."` |

---

### 3. `Parqueadero.psc`

| Caso de Prueba | Entrada (horas) | Operación | Total a Pagar | Salida Esperada |
| :--- | :--- | :--- | :--- | :--- |
| **Caso 1: 3 horas** | `3` | `3 * 3500` | `$10,500` | `"Total a pagar: $10500"` |
| **Caso 2: 1 hora** | `1` | `1 * 3500` | `$3,500` | `"Total a pagar: $3500"` |
| **Caso 3: Inválido** | `0` | `horas <= 0` | `N/A` | `"Error: El número de horas debe ser mayor a 0."` |

---

### 4. `Semaforo.psc`

| Caso de Prueba | Entrada (color) | Caso en `Según` | Salida Esperada |
| :--- | :--- | :--- | :--- |
| **Caso 1: Verde** | `"Verde"` | `"verde"` | `"Avance: El paso está permitido."` |
| **Caso 2: Amarillo** | `"AMARILLO"` | `"amarillo"` | `"Precaución: El semáforo va a cambiar..."` |
| **Caso 3: Rojo** | `"rojo"` | `"rojo"` | `"Alto: Deténgase inmediatamente."` |
| **Caso 4: Inválido** | `"Azul"` | `De Otro Modo` | `"Color no reconocido..."` |

---

### 5. `Bisiesto.psc`

| Caso de Prueba | Entrada (anio) | Condición Evaluada | Salida Esperada |
| :--- | :--- | :--- | :--- |
| **Caso 1: Bisiesto estándar** | `2024` | `2024 % 4 == 0 Y 2024 % 100 != 0` | `"El año 2024 ES bisiesto."` |
| **Caso 2: No bisiesto** | `2023` | No cumple condición | `"El año 2023 NO es bisiesto."` |
| **Caso 3: Siglo bisiesto** | `2000` | `2000 % 400 == 0` | `"El año 2000 ES bisiesto."` |
| **Caso 4: Siglo no bisiesto**| `1900` | `1900 % 100 == 0 Y 1900 % 400 != 0`| `"El año 1900 NO es bisiesto."` |