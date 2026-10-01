// script.js - Projeto Pintura 360

// Função para abrir/fechar menu em mobile
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰"; // ícone hambúrguer
    toggleBtn.classList.add("menu-toggle");

    // Adiciona o botão apenas em telas pequenas
    if (window.innerWidth <= 768) {
        document.querySelector("header").appendChild(toggleBtn);
    }

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Scroll suave para links de navegação
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Alerta ao clicar no botão de orçamento
    const ctaButton = document.querySelector(".banner button");
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("Obrigado pelo interesse! Em breve entraremos em contato com seu orçamento.");
        });
    }
});
