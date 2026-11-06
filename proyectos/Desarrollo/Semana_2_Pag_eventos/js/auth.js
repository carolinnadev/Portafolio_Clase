/**
 * Lógica de Autenticación Simulada (RF-02 a RF-06, RF-09)
 * Utiliza sessionStorage para mantener la sesión activa temporalmente.
 */

// Credenciales fijas exigidas
const VALID_USER = "admin";
const VALID_PASS = "123456";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginAlert = document.getElementById("login-alert");
    const loginAlertText = document.getElementById("login-alert-text");
    const logoutBtn = document.getElementById("logout-btn");

    // Verificar si ya existe una sesión guardada al cargar la página
    checkSessionState();

    // Evento del formulario de Login (RF-04)
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const userInput = document.getElementById("username").value.trim();
            const passInput = document.getElementById("password").value.trim();

            // RF-04: Comparación de credenciales
            if (userInput === VALID_USER && passInput === VALID_PASS) {
                // RF-06: Credenciales correctas
                sessionStorage.setItem("user_authenticated", "true");
                sessionStorage.setItem("username", userInput);

                loginAlert.classList.add("hidden");
                loginForm.reset();

                // Actualizar interfaz y redirigir a eventos
                checkSessionState();
                window.location.hash = "#eventos";
            } else {
                // RF-05: Credenciales incorrectas
                loginAlertText.textContent = "Usuario o contraseña incorrectos. Intenta con admin / 123456";
                loginAlert.classList.remove("hidden");
            }
        });
    }

    // Evento para Cerrar Sesión (RF-09)
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("user_authenticated");
            sessionStorage.removeItem("username");
            checkSessionState();
            window.location.hash = "#inicio";
        });
    }
});

/**
 * Función que actualiza la visibilidad de los elementos según el estado de la sesión
 */
function checkSessionState() {
    const isAuthenticated = sessionStorage.getItem("user_authenticated") === "true";
    const username = sessionStorage.getItem("username") || "Admin";

    const eventsLocked = document.getElementById("events-locked");
    const eventsUnlocked = document.getElementById("events-unlocked");
    const navLoginBtn = document.getElementById("nav-login-btn");
    const userInfo = document.getElementById("user-info");
    const navEventsLink = document.getElementById("nav-events-link");
    const userNameDisplay = document.getElementById("user-name-display");

    if (isAuthenticated) {
        // Usuario autenticado
        if (eventsLocked) eventsLocked.classList.add("hidden");
        if (eventsUnlocked) eventsUnlocked.classList.remove("hidden");
        if (navLoginBtn) navLoginBtn.classList.add("hidden");
        if (userInfo) userInfo.classList.remove("hidden");
        if (userNameDisplay) userNameDisplay.textContent = username;

        if (navEventsLink) {
            navEventsLink.classList.remove("opacity-50", "cursor-not-allowed");
            navEventsLink.removeAttribute("title");
        }
    } else {
        // Usuario NO autenticado
        if (eventsLocked) eventsLocked.classList.remove("hidden");
        if (eventsUnlocked) eventsUnlocked.classList.add("hidden");
        if (navLoginBtn) navLoginBtn.classList.remove("hidden");
        if (userInfo) userInfo.classList.add("hidden");

        if (navEventsLink) {
            navEventsLink.classList.add("opacity-50", "cursor-not-allowed");
            navEventsLink.setAttribute("title", "Inicia sesión para acceder");
        }
    }
}