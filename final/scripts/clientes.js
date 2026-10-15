// cliente.js
import { criarCardCliente } from "./parceria.js";

async function carregarClientes() {
  try {
    const response = await fetch("dados/clientes.json");
    const clientes = await response.json();
    console.log(clientes);

    const container = document.getElementById("lista-clientes");
    if (container) {
      clientes.forEach(cliente => {
        const card = criarCardCliente(cliente);
        container.appendChild(card);
      });

      // só roda depois que os cards existem
      const primeiroCard = container.querySelector(".card");
      if (primeiroCard) {
        primeiroCard.classList.add("ativo");
      }
    }
  } catch (error) {
    console.error("Erro ao carregar clientes:", error);
  }
}

carregarClientes();

// Atualiza o título dinamicamente
const titulo = document.getElementById("titulo");
if (titulo) {
  if (window.location.pathname.includes("index.html")) {
    titulo.innerText = "Pintura 360 ";
  } else if (window.location.pathname.includes("sobre.html")) {
    titulo.innerText = "Pintura 360 - Nossa História";
  } else if (window.location.pathname.includes("contato.html")) {
    titulo.innerText = "Pintura 360 - Fale Conosco";
  } else if (window.location.pathname.includes("servicos.html")) {
    titulo.innerText = "Pintura 360 - Serviços";
  } else if (window.location.pathname.includes("clientes.html")) {
    titulo.innerText = "Pintura 360 - Nossos Clientes";
  }
}

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("aberto");
});

