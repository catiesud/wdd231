// Menu responsivo
const nav = document.querySelector("nav ul");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "☰";
toggleBtn.classList.add("menu-toggle");
document.querySelector("header").prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Copyright dinâmico
const anoAtual = new Date().getFullYear();
document.getElementById("copyright").textContent =
  `© ${anoAtual} - Cat Gui - São Paulo, Brasil`;

// Última modificação
document.getElementById("ultimaModificacao").textContent =
  `Última Modificação: ${document.lastModified}`;
