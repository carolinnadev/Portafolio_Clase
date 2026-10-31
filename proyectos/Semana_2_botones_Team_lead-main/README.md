# README — Ejercicio 100

### Explicación del Botón 100 (`btn-original`)

El botón de diseño original combina 4 técnicas avanzadas de distintas categorías:

* **Categoría 4 (Degradados):** Fondo en degradado multicolor vivo animado mediante `linear-gradient` y `background-size`.
* **Categoría 6 (Transformaciones):** Efecto de elevación 3D y escalado suave al interactuar usando `transform: translateY() scale()`.
* **Categoría 8 (Pseudoelementos):** Destello de brillo diagonal (*shine*) pasando por la superficie con el pseudoelemento `::before` y `overflow: hidden`.
* **Categoría 10 (Efectos de Neón):** Sombra resplandeciente exterior (*glow*) en tono cyan `#22D3EE` al hacer hover/focus.

---

## Prueba de Combinaciones de Clases

| N.º | Combinación de Clases | Texto del Botón |
| :--- | :--- | :--- |
| **1** | `Primary` + `Pill` + `Grow` | Guardar |
| **2** | `Success` + `Large` + `Lift` | Confirmar |
| **3** | `Danger` + `Rounded` + `Hover Shadow` | Eliminar |
| **4** | `Outline` + `Small` + `Hover Background` | Editar |
| **5** | `Gradient Ocean` + `Pill` + `Glow Pulse` | Explorar |

---

### Reglas de Prevalencia en CSS para Combinaciones

Cuando dos o más clases modifican la misma propiedad CSS:

1. **Especificidad e importación en la hoja de estilos:** Prevalece la regla definida más abajo en el archivo `styles.css` si las clases tienen la misma especificidad (1 clase de selector).
2. **Colores vs. Efectos/Formas:** Clases de forma (`.btn-pill`) o efecto (`.btn-grow`) no sobrescriben las variables de color de la clase base o variante de categoría (`.btn-primary`).
3. **Excepción (Hover en Outline):** La combinación 4 define explícitamente que al hacer hover en un botón outline, la clase de interacción (`.btn-hover-background`) sobrescribe el fondo transparente original.