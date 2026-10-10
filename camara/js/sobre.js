import { locais } from "../data/locais.mjs";

const container = document.getElementById("locais");

locais.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.gridArea = `card${index+1}`;

  card.innerHTML = `
    <h2>${item.nome}</h2>
    <figure>
      <img src="${item.link_foto}" alt="${item.nome}" width="300" height="200">
    </figure>
    <address>${item.endereco}</address>
    <p>${item.descricao}</p>
    <p><strong>Custo:</strong> ${item.custo}</p>
    <button>Saiba mais</button>
  `;
  container.appendChild(card);
});

// Mensagem de visita com localStorage
const mensagem = document.getElementById("mensagem-visita");
const ultimaVisita = localStorage.getItem("ultimaVisita");
const agora = Date.now();

if (!ultimaVisita) {
  mensagem.textContent = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
} else {
  const diffDias = Math.floor((agora - ultimaVisita) / (1000 * 60 * 60 * 24));
  if (diffDias < 1) {
    mensagem.textContent = "Já voltou? Que legal!";
  } else if (diffDias === 1) {
    mensagem.textContent = `Seu último acesso foi há 1 dia.`;
  } else {
    mensagem.textContent = `Seu último acesso foi há ${diffDias} dias.`;
  }
}

localStorage.setItem("ultimaVisita", agora);
