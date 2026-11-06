/**
 * Lógica del Formulario de Contacto (RF-11 a RF-13)
 */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const contactSuccess = document.getElementById("contact-success");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // RF-12: Validación de campos obligatorios
            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const subject = document.getElementById("contact-subject").value.trim();
            const message = document.getElementById("contact-message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Por favor completa todos los campos requeridos.");
                return;
            }

            // RF-13: Mostrar mensaje de confirmación
            contactSuccess.classList.remove("hidden");
            contactForm.reset();

            // Ocultar la alerta de éxito tras 5 segundos
            setTimeout(() => {
                contactSuccess.classList.add("hidden");
            }, 5000);
        });
    }
});