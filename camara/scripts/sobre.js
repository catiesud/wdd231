// Importa os locais do arquivo locais.mjs
import { locais } from "../data/locais.mjs";

// Seleciona o container dos cards
const container = document.getElementById("locais");

// Cria os cards dinamicamente
locais.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.gridArea = `c${index+1}`;

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

// Atualiza a data da última visita
localStorage.setItem("ultimaVisita", agora);




// -----------------------------
// ELEMENTOS PRINCIPAIS
// -----------------------------
const membrosContainer = document.querySelector("#membros");
const botaoGrade = document.querySelector("#grade");
const botaoLista = document.querySelector("#lista");
const menuBotao = document.querySelector("#menu-botao");
const navegacao = document.querySelector("#navegacao");

// -----------------------------
// CARREGAR MEMBROS
// -----------------------------
async function carregarMembros() {
  try {
    const resposta = await fetch("dados/membros.json");
    if (!resposta.ok) throw new Error("Não foi possível carregar o arquivo JSON.");
    const membros = await resposta.json();
    exibirMembros(membros);
  } catch (erro) {
    console.error("Erro:", erro);
    membrosContainer.innerHTML = `<p class="erro">Não foi possível carregar os dados das empresas.</p>`;
  }
}

// -----------------------------
// EXIBIR MEMBROS
// -----------------------------
function exibirMembros(membros) {
  membrosContainer.innerHTML = "";
  membros.forEach((membro) => {
    const card = document.createElement("article");
    card.classList.add("membro-card");
    card.innerHTML = `
      <div class="imagem-container">
        <img src="${membro.imagem}" alt="Logo da empresa ${membro.nome}" loading="lazy">
      </div>
      <div class="membro-conteudo">
        <h3>${membro.nome}</h3>
        <p class="endereco">${membro.endereco}</p>
        <p class="telefone">${membro.telefone}</p>
        <p class="informacao">${membro.info}</p>
        <p class="nivel">${nomeNivel(membro.nivel)}</p>
        <a href="${membro.site}" target="_blank" rel="noopener noreferrer">Visitar site</a>
      </div>
    `;
    membrosContainer.appendChild(card);
  });
}

// -----------------------------
// NÍVEL DE ASSOCIAÇÃO
// -----------------------------
function nomeNivel(nivel) {
  switch (nivel) {
    case 1: return "Membro";
    case 2: return "Membro Prata";
    case 3: return "Membro Ouro";
    default: return "Membro";
  }
}

// -----------------------------
// VISUALIZAÇÃO EM GRADE
// -----------------------------
botaoGrade.addEventListener("click", () => {
  membrosContainer.classList.remove("lista");
  membrosContainer.classList.add("grade");
  botaoGrade.classList.add("selecionado");
  botaoLista.classList.remove("selecionado");
  botaoGrade.setAttribute("aria-pressed", "true");
  botaoLista.setAttribute("aria-pressed", "false");
});

// -----------------------------
// VISUALIZAÇÃO EM LISTA
// -----------------------------
botaoLista.addEventListener("click", () => {
  membrosContainer.classList.remove("grade");
  membrosContainer.classList.add("lista");
  botaoLista.classList.add("selecionado");
  botaoGrade.classList.remove("selecionado");
  botaoLista.setAttribute("aria-pressed", "true");
  botaoGrade.setAttribute("aria-pressed", "false");
});

// -----------------------------
// MENU MOBILE
// -----------------------------
menuBotao.addEventListener("click", () => {
  const aberto = navegacao.classList.toggle("aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
});

// -----------------------------
// ANO DO COPYRIGHT
// -----------------------------
const anoEl = document.querySelector("#ano");
if (anoEl) anoEl.textContent = new Date().getFullYear();

// -----------------------------
// ÚLTIMA MODIFICAÇÃO
// -----------------------------
const dataModificacao = new Date(document.lastModified);
document.querySelector("#ultima-modificacao").textContent =
  dataModificacao.toLocaleDateString("pt-BR") + " " + dataModificacao.toLocaleTimeString("pt-BR");

// -----------------------------
// MODAIS
// -----------------------------
document.querySelectorAll(".cartao a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href").replace("#", "");
    const modal = document.getElementById(targetId);
    if (modal) modal.style.display = "flex";
  });
});

document.querySelectorAll(".fechar").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  });
});

window.addEventListener("click", event => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

// -----------------------------
// CLIMA (OpenWeather)
// -----------------------------
const apiKey = "c5d89ab9def893c4973f6e9b1a329f36";
const city = "São Paulo";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById("temp").textContent = data.list[0].main.temp.toFixed(1);
    document.getElementById("desc").textContent = data.list[0].weather[0].description;
  })
  .catch(error => console.error("Erro ao carregar clima:", error));

// -----------------------------
// INICIAR
// -----------------------------
carregarMembros();
