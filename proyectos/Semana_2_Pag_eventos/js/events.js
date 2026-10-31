/**
 * Lógica para renderizar las tarjetas de eventos y controlar la rueda libre / carrusel 3D
 */

let currentAngle = 0; // Ángulo actual para la rotación 3D

document.addEventListener("DOMContentLoaded", () => {
    render3DCarousel();
    renderEventsGrid(eventsData);
    setupCarouselControls();
    setupFilters();
    setupModal();
});

/**
 * Renderiza la rueda libre 3D en la sección de inicio
 */
function render3DCarousel() {
    const track = document.getElementById("carousel-3d");
    if (!track) return;

    track.innerHTML = "";
    const total = eventsData.length;
    const radius = 280; // Radio del círculo 3D

    eventsData.forEach((event, index) => {
        const angle = (index * 360) / total;
        const card = document.createElement("div");
        card.className = "carousel-3d-item flex flex-col justify-between p-4";
        
        // Posicionamiento matemático 3D
        card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="w-full h-32 object-cover rounded-lg mb-3">
            <div>
                <span class="text-[10px] uppercase font-bold text-[#e822fe] tracking-wider">${event.category}</span>
                <h4 class="text-sm font-bold line-clamp-1">${event.title}</h4>
                <p class="text-[11px] text-gray-400 mt-1"><i class="fa-solid fa-calendar mr-1"></i>${event.date}</p>
            </div>
            <button onclick="openEventModal(${event.id})" class="mt-3 w-full bg-gray-800 hover:bg-[#e822fe] text-xs py-1.5 rounded transition font-medium">
                Ver detalle
            </button>
        `;

        track.appendChild(card);
    });
}

/**
 * Controladores para girar la rueda 3D (Botones y arrastre)
 */
function setupCarouselControls() {
    const track = document.getElementById("carousel-3d");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    if (!track) return;

    const angleStep = 360 / eventsData.length;

    const rotateTrack = (direction) => {
        currentAngle += direction * angleStep;
        track.style.transform = `rotateY(${currentAngle}deg)`;
    };

    if (prevBtn) prevBtn.addEventListener("click", () => rotateTrack(1));
    if (nextBtn) nextBtn.addEventListener("click", () => rotateTrack(-1));

    // Soporte para arrastrar con el mouse o dedo en móviles
    let startX = 0;
    let isDragging = false;

    track.parentElement.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 40) {
            rotateTrack(diff > 0 ? 1 : -1);
            startX = e.clientX;
        }
    });

    window.addEventListener("mouseup", () => isDragging = false);
}

/**
 * Renderiza la grilla principal de 6 eventos (RF-07, RF-08)
 */
function renderEventsGrid(items) {
    const grid = document.getElementById("events-grid");
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">No se encontraron eventos coincidentes.</p>`;
        return;
    }

    grid.innerHTML = items.map(e => `
        <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:border-[#e822fe]/50 transition duration-300 flex flex-col justify-between">
            <div>
                <div class="relative">
                    <img src="${e.image}" alt="${e.title}" class="w-full h-44 object-cover">
                    <span class="absolute top-3 right-3 bg-gray-950/80 text-[#e822fe] border border-[#e822fe]/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        ${e.category}
                    </span>
                </div>
                <div class="p-5">
                    <h3 class="text-lg font-bold mb-2 text-white hover:text-[#e822fe] transition">${e.title}</h3>
                    <p class="text-xs text-gray-400 mb-4 line-clamp-2">${e.description}</p>
                    
                    <div class="space-y-1.5 text-xs text-gray-300">
                        <p><i class="fa-solid fa-calendar-day text-[#e822fe] w-5"></i> ${e.date}</p>
                        <p><i class="fa-solid fa-clock text-[#e822fe] w-5"></i> ${e.time}</p>
                        <p><i class="fa-solid fa-location-dot text-[#e822fe] w-5"></i> ${e.location}</p>
                    </div>
                </div>
            </div>
            <div class="p-5 pt-0">
                <button onclick="openEventModal(${e.id})" class="w-full bg-gray-800 hover:bg-[#e822fe] text-white py-2 rounded-lg text-xs font-semibold transition">
                    Más Información
                </button>
            </div>
        </div>
    `).join("");
}

/**
 * Filtros y buscador opcionales
 */
function setupFilters() {
    const searchInput = document.getElementById("event-search");
    const filterSelect = document.getElementById("event-filter");

    const filterData = () => {
        const query = searchInput.value.toLowerCase();
        const category = filterSelect.value;

        const filtered = eventsData.filter(e => {
            const matchesQuery = e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query);
            const matchesCat = category === "todos" || e.category === category;
            return matchesQuery && matchesCat;
        });

        renderEventsGrid(filtered);
    };

    if (searchInput) searchInput.addEventListener("input", filterData);
    if (filterSelect) filterSelect.addEventListener("change", filterData);
}

/**
 * Modal de Detalle de Evento
 */
function setupModal() {
    const modal = document.getElementById("event-modal");
    const closeBtn = document.getElementById("close-modal");

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.add("hidden");
        });
    }
}

function openEventModal(id) {
    const event = eventsData.find(e => e.id === id);
    if (!event) return;

    document.getElementById("modal-img").src = event.image;
    document.getElementById("modal-title").textContent = event.title;
    document.getElementById("modal-category").textContent = event.category;
    document.getElementById("modal-description").textContent = event.description;
    document.getElementById("modal-date").textContent = event.date;
    document.getElementById("modal-time").textContent = event.time;
    document.getElementById("modal-location").textContent = event.location;

    const modal = document.getElementById("event-modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}