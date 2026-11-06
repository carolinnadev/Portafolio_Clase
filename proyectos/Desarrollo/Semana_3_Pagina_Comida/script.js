// Lógica para el selector de Tema (Color)
const selectColor = document.querySelector("#color");

function cambiar_color(modo) {
    if (modo === "oscuro") {
        // Activamos el modo oscuro
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#f1f1f1";
        
        // Cambiar el fondo de las tarjetas y textos para que combinen
        document.querySelectorAll(".card-product").forEach(card => {
            card.style.backgroundColor = "#1e1e1e";
            card.style.color = "#f1f1f1";
            const h2 = card.querySelector("h2");
            if (h2) h2.style.color = "#ffffff";
            card.querySelectorAll("p").forEach(p => p.style.color = "#b0b0b0");
        });

    } else if (modo === "claro") {
        // Volvemos al modo claro original
        document.body.style.backgroundColor = "#bbbbbb";
        document.body.style.color = "#333333";
        
        // Restauramos el fondo de las tarjetas
        document.querySelectorAll(".card-product").forEach(card => {
            card.style.backgroundColor = "#ffffff";
            card.style.color = "#333333";
            const h2 = card.querySelector("h2");
            if (h2) h2.style.color = "#222222";
            card.querySelectorAll("p").forEach(p => p.style.color = "#666666");
        });
    }

    // Guardamos en LocalStorage
    localStorage.setItem("themeMode", modo);
}

// Evento cuando el usuario cambia manualmente el tema
if (selectColor) {
    selectColor.addEventListener("change", (e) => {
        const modo = e.target.value;
        cambiar_color(modo);
    });
}

// Cargar preferencia de tema al iniciar
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("themeMode");
    if (savedTheme && selectColor) {
        selectColor.value = savedTheme; // Sincroniza el select visualmente
        cambiar_color(savedTheme);
    }
});




// ==============================
// Traduccion de idioma 
// ==============================

//Las traducciones para todos los textos de la página
const traducciones = {
    español: {
        selectIdioma: "Seleccione el idioma:",
        selectColor: "Seleccione el color:",
        opcionClaro: "Claro",
        opcionOscuro: "Oscuro",
        btnComprar: "Comprar",
        productos: [
            { nombre: "BBQ Crunch", desc: "1 Sandwich BBQ Crunch (1 Filete de pollo apanado)" },
            { nombre: "Kentucky Sandwich", desc: "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)" },
            { nombre: "Combo BBQ Crunch", desc: "1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 papa pequeña + 1 Gaseosa PET..." },
            { nombre: "Kentucky Coronel Sandwich", desc: "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)" },
            { nombre: "Combo Kentucky Sandwich", desc: "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)" },
            { nombre: "Combo Kentucky Coronel Sandwich", desc: "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)" },
            { nombre: "Sandwich Crispy BBQ", desc: "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)" },
            { nombre: "Combo Sandwich Crispy BBQ", desc: "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)" }
        ],
        footerTexts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nemo iste quae corrupti omnis tenetur, nihil beatae exercitationem et totam laudantium fuga in nulla cum? Numquam voluptas fuga animi.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quos libero sint, magnam velit consequuntur amet in quaerat ipsum vitae animi minus? Sequi sed vitae nihil ea voluptates magnam facilis?",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit facilies voluptates consequuntur veniam maxime voluptatum fuga molestias odit vero voluptas, alias iusto quos iure, excepturi possimus, eligendi recusandae."
        ]
    },
    ingles: {
        selectIdioma: "Select language:",
        selectColor: "Select color:",
        opcionClaro: "Light",
        opcionOscuro: "Dark",
        btnComprar: "Buy",
        productos: [
            { nombre: "BBQ Crunch", desc: "1 BBQ Crunch Sandwich (1 Breaded chicken fillet)" },
            { nombre: "Kentucky Sandwich", desc: "1 Kentucky burger / Sandwich (1 Breaded chicken breast fillet, pickles...)" },
            { nombre: "Combo BBQ Crunch", desc: "1 BBQ Crunch Sandwich (1 Breaded chicken fillet) + 1 small fries + 1 PET soda..." },
            { nombre: "Kentucky Coronel Sandwich", desc: "1 Kentucky Coronel burger / Sandwich (1 Breaded chicken breast fillet, Salad...)" },
            { nombre: "Combo Kentucky Sandwich", desc: "1 Kentucky burger / Sandwich (1 Breaded chicken breast fillet, pickles...)" },
            { nombre: "Combo Kentucky Coronel Sandwich", desc: "1 Kentucky Coronel burger / Sandwich (1 Breaded chicken fillet, Salad...)" },
            { nombre: "Sandwich Crispy BBQ", desc: "1 Crispy BBQ Sandwich (1 Extra large breast fillet, triple breaded, crispy onion...)" },
            { nombre: "Combo Sandwich Crispy BBQ", desc: "1 Crispy BBQ Sandwich (1 Extra large breast fillet, triple breaded, crispy onion...)" }
        ],
        footerTexts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. English translation placeholder for footer column one content details.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. English translation placeholder for footer column two content details.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. English translation placeholder for footer column three content details."
        ]
    },
    portugues: {
        selectIdioma: "Selecione o idioma:",
        selectColor: "Selecione a cor:",
        opcionClaro: "Claro",
        opcionOscuro: "Escuro",
        btnComprar: "Comprar",
        productos: [
            { nombre: "BBQ Crunch", desc: "1 Sandwich BBQ Crunch (1 Filé de frango empanado)" },
            { nombre: "Kentucky Sandwich", desc: "1 Kentucky hambúrguer / Sandwich (1 Filé de peito de frango empanado, picles...)" },
            { nombre: "Combo BBQ Crunch", desc: "1 Sandwich BBQ Crunch (1 Filé de frango empanado) + 1 batata pequena + 1 Refrigerante PET..." },
            { nombre: "Kentucky Coronel Sandwich", desc: "1 Kentucky Coronel hambúrguer / Sandwich (1 Filé de peito de frango empanado, Salada...)" },
            { nombre: "Combo Kentucky Sandwich", desc: "1 Kentucky hambúrguer / Sandwich (1 Filé de peito de frango empanado, picles...)" },
            { nombre: "Combo Kentucky Coronel Sandwich", desc: "1 Kentucky Coronel hambúrguer / Sandwich (1 Filé de peito de frango empanado, Salada...)" },
            { nombre: "Sandwich Crispy BBQ", desc: "1 Sandwich Crispy BBQ (1 Filé de peito extra grande, triplo empanado, cebola crispy...)" },
            { nombre: "Combo Sandwich Crispy BBQ", desc: "1 Sandwich Crispy BBQ (1 Filé de peito extra grande, triplo empanado, cebola crispy...)" }
        ],
        footerTexts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Texto em português para a primeira coluna do rodapé.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Texto em português para a segunda coluna do rodapé.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Texto em português para a terceira coluna do rodapé."
        ]
    },
    mandarin: {
        selectIdioma: "选择语言：",
        selectColor: "选择颜色：",
        opcionClaro: "浅色",
        opcionOscuro: "深色",
        btnComprar: "购买",
        productos: [
            { nombre: "BBQ 脆皮三明治", desc: "1个 BBQ 脆皮三明治（1块面包鸡肉排）" },
            { nombre: "肯德基三明治", desc: "1个肯德基汉堡/三明治（1块面包鸡胸肉排，酸黄瓜...）" },
            { nombre: "BBQ 脆皮套餐", desc: "1个 BBQ 脆皮三明治 + 1份小薯条 + 1瓶汽水..." },
            { nombre: "肯德基上校三明治", desc: "1个肯德基上校汉堡/三明治（1块面包鸡胸肉排，沙拉...）" },
            { nombre: "肯德基套餐", desc: "1个肯德基汉堡/三明治（1块面包鸡胸肉排，酸黄瓜...）" },
            { nombre: "肯德基上校套餐", desc: "1个肯德基上校汉堡/三明治（1块面包鸡肉排，沙拉...）" },
            { nombre: "香脆 BBQ 三明治", desc: "1个香脆 BBQ 三明治（1块特大鸡胸肉排，三层面包屑，脆洋葱...）" },
            { nombre: "香脆 BBQ 套餐", desc: "1个香脆 BBQ 三明治（1块特大鸡胸肉排，三层面包屑，脆洋葱...）" }
        ],
        footerTexts: [
            "关于页脚第一列内容的中文占位文本说明文字...",
            "关于页脚第二列内容的中文占位文本说明文字...",
            "关于页脚第三列内容的中文占位文本说明文字..."
        ]
    },
    frances: {
        selectIdioma: "Sélectionnez la langue:",
        selectColor: "Sélectionnez la couleur:",
        opcionClaro: "Clair",
        opcionOscuro: "Sombre",
        btnComprar: "Acheter",
        productos: [
            { nombre: "BBQ Crunch", desc: "1 Sandwich BBQ Crunch (1 Filet de poulet pané)" },
            { nombre: "Kentucky Sandwich", desc: "1 Burger / Sandwich Kentucky (1 Filet de blanc de poulet pané, cornichons...)" },
            { nombre: "Combo BBQ Crunch", desc: "1 Sandwich BBQ Crunch (1 Filet de poulet pané) + 1 petite frite + 1 Boisson PET..." },
            { nombre: "Kentucky Coronel Sandwich", desc: "1 Burger / Sandwich Kentucky Coronel (1 Filet de poulet pané, Salade...)" },
            { nombre: "Combo Kentucky Sandwich", desc: "1 Burger / Sandwich Kentucky (1 Filet de blanc de poulet pané, cornichons...)" },
            { nombre: "Combo Kentucky Coronel Sandwich", desc: "1 Burger / Sandwich Kentucky Coronel (1 Filet de poulet pané, Salade...)" },
            { nombre: "Sandwich Crispy BBQ", desc: "1 Sandwich Crispy BBQ (1 Filet de blanc extra large, triple panure, oignon croustillant...)" },
            { nombre: "Combo Sandwich Crispy BBQ", desc: "1 Sandwich Crispy BBQ (1 Filet de blanc extra large, triple panure, oignon croustillant...)" }
        ],
        footerTexts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Texte en français pour la première colonne du pied de page.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Texte en français pour la deuxième colonne du pied de page.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Texte en français pour la troisième colonne du pied de page."
        ]
    }
};



// Lógica para el selector de Idioma
const selectIdioma = document.querySelector("#idioma");

function cambio_idioma(lang) {
    if (traducciones[lang]) {
        const t = traducciones[lang];

        // Traducir textos de los selectores
        selectIdioma.options[0].text = t.selectIdioma;
        const selectColor = document.querySelector("#color");
        if (selectColor) {
            selectColor.options[0].text = t.selectColor;
            selectColor.options[1].text = t.opcionClaro;
            selectColor.options[2].text = t.opcionOscuro;
        }

        // Traducir todas las tarjetas de productos
        const tarjetas = document.querySelectorAll(".card-product");
        tarjetas.forEach((tarjeta, index) => {
            if (t.productos[index]) {
                tarjeta.querySelector("h2").textContent = t.productos[index].nombre;
                tarjeta.querySelector("p").textContent = t.productos[index].desc;
                tarjeta.querySelector(".btn-buy").textContent = t.btnComprar;
            }
        });

        // Traducir los párrafos del footer
        const footerParagraphs = document.querySelectorAll(".footer-container p");
        footerParagraphs.forEach((p, index) => {
            if (t.footerTexts[index]) {
                p.textContent = t.footerTexts[index];
            }
        });

        localStorage.setItem("selectedLanguage", lang); // Guardamos en LocalStorage
    }
}

// Evento cuando el usuario cambia manualmente el idioma
if (selectIdioma) {
    selectIdioma.addEventListener("change", (e) => {
        const lang = e.target.value;
        cambio_idioma(lang);
    });
}

// Cargar preferencia de idioma al iniciar
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && selectIdioma) {
        selectIdioma.value = savedLang; // Sincroniza el select visualmente
        cambio_idioma(savedLang);
    }
});