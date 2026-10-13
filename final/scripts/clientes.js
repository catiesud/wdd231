// cliente.js
import { criarCardCliente } from "./parceria.js";

async function carregarClientes() {
  try {
    const response = await fetch("dados/clientes.json");
    const clientes = await response.json();

    const container = document.getElementById("lista-clientes");
    if (container) {
      clientes.forEach(cliente => {
        const card = criarCardCliente(cliente);
        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Erro ao carregar clientes:", error);
  }
}

carregarClientes();
