
# 🚲 Asistente de Taquilla - Rueda Libre (v1.0 - Producto Final)

Repositorio oficial del proyecto de algoritmos y lógica de programación para **Rueda Libre**, el emprendimiento de Medellín enfocado en el alquiler de bicicletas y la organización de recorridos guiados.

---

## 📋 Descripción del Producto Final (v1.0)
En la agencia **Nodo Digital**, se desarrolló este asistente lógico para automatizar y estandarizar el proceso de taquilla de Rueda Libre. Esta versión final (**v1.0**) consolida las tres semanas de trabajo: cotizaciones básicas y de recorridos, validaciones de identidad y datos con leyes de De Morgan, tarifas diferenciadas por tipo de bicicleta, control de turnos con ciclos centinela, acumuladores para el cierre de caja, tablas de tarifas con ciclos anidados y una arquitectura modular basada en **SubProcesos**.

---

## 🗂️ Estructura del Repositorio

El repositorio se encuentra organizado de la siguiente manera:

* **`algoritmos/`**: Contiene los archivos ejecutables en pseudocódigo desarrollados en PSeInt:
  * `01_cotizacion_basica.psc`: Cotización de alquiler por horas.
  * `02_cotizacion_recorrido.psc`: Cotización de recorridos guiados (anticipo y saldo).
  * `03_cuenta_grupo.psc`: Cuenta integrada de grupo con aportes voluntarios y redondeo a la centena (v0.1)[cite: 1].
  * `04_validacion_edad.psc`: Control de acceso por edad y autorizaciones (MiniReto 5)[cite: 1].
  * `05_validacion_reserva.psc`: Validación de reservas con leyes de De Morgan (MiniReto 6)[cite: 1].
  * `06_tarifas_bicicletas.psc`: Tarifas múltiples por tipo de bicicleta (MiniReto 7)[cite: 1].
  * `07_cotizador_v02.psc`: Cotizador integrado con reglas y descuentos del 10% (v0.2)[cite: 1].
  * `08_cierre_caja.psc`: Cierre de caja con ciclos centinela y acumuladores (MiniReto 9)[cite: 1].
  * `09_revision_flota.psc`: Revisión de flota, banderas y máximos (MiniReto 10)[cite: 1].
  * `10_tabla_tarifas.psc`: Tabla de tarifas con ciclos anidados (MiniReto 11)[cite: 1].
  * `11_asistente_v1.0.psc`: Asistente modularizado con SubProcesos (v1.0)[cite: 1].
* **`diagramas/`**: Contiene las imágenes exportadas de los diagramas de flujo generados en PSeInt[cite: 1].
* **`bitacora.md`**: Registro detallado de la evolución del proyecto, análisis de algoritmos, tablas EPS, pruebas de escritorio y casos de prueba[cite: 1].

---

## 🚀 Cómo abrir y ejecutar los algoritmos

Para probar y ejecutar estos códigos de manera local:

1. Asegúrate de tener instalado **PSeInt** en tu equipo (descargable desde su [sitio oficial](https://pseint.sourceforge.net/))[cite: 1].
2. Configura el perfil de PSeInt para que exija la definición estricta de variables (`Definir ... Como`)[cite: 1].
3. Clona este repositorio o descarga los archivos:
   ```bash
   git clone [https://github.com/carolinnadev/Rueda_libre_Algoritmia.git](https://github.com/carolinnadev/Rueda_libre_Algoritmia.git)