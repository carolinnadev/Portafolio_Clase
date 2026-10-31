document.addEventListener('DOMContentLoaded', () => {
    const ring = document.getElementById('carouselRing');
    const cards = document.querySelectorAll('.carousel-3d-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const viewport = document.querySelector('.carousel-3d-viewport');

    const totalCards = cards.length;
    const angleStep = 360 / totalCards;
    
    // Aumentamos ligeramente la profundidad (radius) a +120 para que se abra más la rueda 3D
    const radius = Math.round((135 / Math.tan(Math.PI / totalCards))) + 120; 

    let currentAngle = 0;
    let startX = 0;
    let isDragging = false;

    // Colocar las tarjetas en un círculo 3D
    cards.forEach((card, index) => {
        const cardAngle = angleStep * index;
        card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
    });

    // Función para actualizar la rotación del carrusel
    function updateRotation() {
        ring.style.transform = `rotateY(${currentAngle}deg)`;
    }

    // Botón Siguiente
    nextBtn.addEventListener('click', () => {
        currentAngle -= angleStep;
        updateRotation();
    });

    // Botón Anterior
    prevBtn.addEventListener('click', () => {
        currentAngle += angleStep;
        updateRotation();
    });

    // --- Arrastre con Mouse / Touch ---
    viewport.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        ring.style.transition = 'none';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const rotationChange = deltaX * 0.4; 
        ring.style.transform = `rotateY(${currentAngle + rotationChange}deg)`;
    });

    window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const deltaX = e.clientX - startX;
        
        currentAngle += deltaX * 0.4;
        ring.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        updateRotation();
    });

    // Eventos táctiles para dispositivos móviles
    viewport.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        ring.style.transition = 'none';
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        const rotationChange = deltaX * 0.4;
        ring.style.transform = `rotateY(${currentAngle + rotationChange}deg)`;
    });

    window.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        ring.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        updateRotation();
    });
});