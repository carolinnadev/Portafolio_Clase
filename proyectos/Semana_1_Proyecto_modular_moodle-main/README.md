# 🌿 EcoAura - Sitio Web Sostenible

Este proyecto es la evidencia del sitio web multipágina, responsive e interactivo para el emprendimiento **EcoAura**, enfocado en brindar soluciones ecológicas, eficiencia energética y paisajismo sustentable para hogares y empresas en Medellín y el Valle de Aburrá.

## 🚀 Sitio Publicado
Puedes visitar la versión en vivo del proyecto en GitHub Pages:  
👉 [https://github.com/carolinnadev/Semana_1_Proyecto_modular_moodle.git](https://github.com/carolinnadev/Semana_1_Proyecto_modular_moodle.git/)

---

## 🛠️ Justificación del Framework CSS y Separación de Modulos
Para la construcción de la interfaz se combinó **Tailwind CSS (vía CDN)** con una **Hoja de Estilos Externa (`styles.css`)** y un archivo JavaScript interactivo (`main.js`):

1. **Agilidad y Consistencia (*Utility-First*):** Tailwind CSS permite aplicar estilos de forma ágil mediante clases atómicas, garantizando un diseño responsivo nativo en teléfonos, tablets y computadores.
2. **Componentes Tridimensionales Avanzados:** La lógica pesada de cálculo espacial en 3D y el overlay de imágenes se manejó en CSS/JS nativo para mantener un código limpio y desacoplado.
3. **Mantenibilidad:** Separación clara entre marcado (`HTML`), presentación y animaciones (`CSS`) e interacción dinámica (`JS`).

---

## ✨ Nuevas Características e Interacciones Implementadas

* **Hero Section con Background Overlay:** Sección principal estilizada con la clase CSS `.carousel-bg-overlay`, que combina un gradiente esmeralda oscuro semi-transparente sobre la imagen de fondo para maximizar el contraste y la legibilidad.
* **Carrusel 3D Giratorio e Interactivo:** 
  * 8 tarjetas tridimensionales giratorias (*Parques Solares, Cero Residuos Urbano, Jardines Verticales, Auditoría Verde, Energía Eólica Micro, Reforestación Urbana, Huertos Orgánicos y Electromovilidad*).
  * Soporte completo para arrastre dinámico con mouse y gestos táctiles (*touch events*).
  * Cálculo geométrico en JavaScript para distribución cilíndrica equitativa sin recortes de bordes (`overflow: visible`).
* **Catálogo de Servicios Geolocalizado (`servicios.html`):**
  * Integración de las 8 tarjetas corporativas con imágenes representativas.
  * Badges con icono SVG de ubicación (`📌`) geolocalizados en sectores clave de Medellín y Antioquia (*El Poblado, Laureles, Guayabal, Belén, Envigado, Sabaneta, Aranjuez, Centro*).
* **Sección "¿Quiénes Somos?" Reorganizada:**
  * Maquetación en dos columnas con tarjetas de métricas impactantes (`+100 Hogares Sostenibles`, `100% Energía Limpia`) y espacio para fotografía institucional con sombras y bordes suaves (`rounded-3xl`).
* **Sección "Nuestros Pilares" Dinámica:**
  * Tarjetas interactivas de valores corporativos con efecto de elevación suave (`hover:-translate-y-2`), sombras de profundidad (`hover:shadow-2xl`) y zoom progresivo en las imágenes (`group-hover:scale-110`).
  * Badges flotantes en la esquina con efecto *glassmorphism* (`backdrop-blur-md`).
* **Formulario de Contacto Integrado (`contacto.html`):**
  * Menú desplegable (`<select>`) sincronizado dinámicamente con los títulos de las 8 tarjetas de servicios.
  * Panel lateral con canales directos de atención (Teléfono/WhatsApp, Correo, Horarios y Ubicación principal).

---

## 🎨 Hoja de Estilos Externa (`assets/css/styles.css`)

El archivo CSS externo cuenta con:
* **Variables CSS (`:root`):** Centralización de la paleta corporativa (`#047857` Esmeralda, `#f59e0b` Ámbar, `#064e3b` Verde Oscuro), tipografía y bordes.
* **Espaciados consistentes en `rem`:** Sistema escalable de márgenes y paddings (`--spacing-xs` a `--spacing-2xl`).
* **Clase `.carousel-bg-overlay`:** Sombreado técnico mediante `linear-gradient` combinado con `background-image: url(...)`.
* **Estructura 3D (`perspective: 1200px`, `transform-style: preserve-3d`):** Reglas para permitir el renderizado tridimensional fluido del carrusel.

---

## 📁 Estructura del Proyecto

```text
.
├── index.html              # Landing page principal (Hero, Quiénes Somos, Pilares, Carrusel 3D)
├── servicios.html          # Catálogo de los 8 servicios con geolocalización en Medellín
├── contacto.html           # Formulario dinámico con selector de servicios y datos directos
├── README.md               # Documentación completa del proyecto
└── assets/
    ├── css/
    │   └── styles.css      # Variables CSS, overlay de imágenes y perspectiva 3D
    └── js/
        └── main.js         # Lógica matemática del carrusel giratorio 3D y eventos táctiles