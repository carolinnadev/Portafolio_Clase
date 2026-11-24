document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. GESTIÓN DE TEMA CLARO / OSCURO (LOCALSTORAGE)
    // ==========================================
    const themeToggleBtn = document.getElementById('themeToggle');
    const bodyElement = document.body;

    const updateButtonState = (isDark) => {
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('aria-pressed', isDark);
        }
    };

    // Aplicar el tema guardado al cargar cualquier página
    if (localStorage.getItem('biblioTheme') === 'dark') {
        bodyElement.classList.add('dark-theme');
        updateButtonState(true);
    } else {
        updateButtonState(false);
    }

    // Escuchar el clic en el botón de cambio de tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            bodyElement.classList.toggle('dark-theme');

            const isDarkMode = bodyElement.classList.contains('dark-theme');

            if (isDarkMode) {
                localStorage.setItem('biblioTheme', 'dark');
                updateButtonState(true);
            } else {
                localStorage.setItem('biblioTheme', 'light');
                updateButtonState(false);
            }
        });
    }

    // ==========================================
    // 2. INTERACTIVIDAD DEL CAMPO DE CONTRASEÑA
    // ==========================================
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');

    const svgEyeOpen = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>
    `;

    const svgEyeClosed = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
    `;

    if (passwordInput && togglePasswordIcon) {
        passwordInput.addEventListener('input', () => {
            if (passwordInput.value.length > 0) {
                passwordInput.type = 'password';
                togglePasswordIcon.innerHTML = svgEyeClosed;
            } else {
                togglePasswordIcon.innerHTML = svgEyeOpen;
            }
        });

        togglePasswordIcon.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            togglePasswordIcon.innerHTML = isPassword ? svgEyeOpen : svgEyeClosed;
        });
    }

    // ==========================================
    // 3. RECORDAR SESIÓN Y LIMPIEZA
    // ==========================================
    const emailInput = document.getElementById('email');
    const rememberCheckbox = document.getElementById('remember');

    const savedEmail = localStorage.getItem('rememberedEmail');
    const isRemembered = localStorage.getItem('rememberedStatus') === 'true';

    if (isRemembered && savedEmail && emailInput && rememberCheckbox) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }

    if (rememberCheckbox && emailInput) {
        rememberCheckbox.addEventListener('change', () => {
            if (!rememberCheckbox.checked) {
                localStorage.removeItem('rememberedEmail');
                localStorage.removeItem('rememberedStatus');
                emailInput.value = '';
            }
        });
    }

    // ==========================================
    // 4. INICIO DE SESIÓN Y VALIDACIÓN DE CREDENCIALES
    // ==========================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailVal = emailInput ? emailInput.value.trim() : '';
            const passwordVal = passwordInput ? passwordInput.value.trim() : '';

            if (emailVal === 'admin@biblioweb.test' && passwordVal === 'Admin123') {
                if (rememberCheckbox && rememberCheckbox.checked) {
                    localStorage.setItem('rememberedEmail', emailVal);
                    localStorage.setItem('rememberedStatus', 'true');
                } else {
                    localStorage.removeItem('rememberedEmail');
                    localStorage.removeItem('rememberedStatus');
                }

                sessionStorage.setItem('isAdminAuthenticated', 'true');
                window.location.href = 'admin.html';
            } else {
                const errorAlert = document.getElementById('authErrorAlert');
                if (errorAlert) {
                    errorAlert.classList.remove('d-none');
                    errorAlert.classList.add('d-flex');
                } else {
                    alert('Correo o contraseña incorrectos');
                }
            }
        });
    }

    // ==========================================
    // 5. PROTECCIÓN CENTRALIZADA DE RUTAS
    // ==========================================
    const currentPath = window.location.pathname;
    if (currentPath.includes('admin.html')) {
        const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
        if (!isAuthenticated || isAuthenticated !== 'true') {
            window.location.href = 'login.html';
        }
    }

});
// Cerrar sesión: borra la sesión y vuelve al inicio
document.getElementById('btnCerrarSesion').addEventListener('click', () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    window.location.href = '../index.html';
});
//
