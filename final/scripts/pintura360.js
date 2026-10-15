
// --- Alternar tema ---
const botaoTema = document.getElementById("tema");
if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

// Recuperar tema salvo ao carregar a página
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark") {
  document.body.classList.add("dark");
}

// --- Lista de serviços (na Home ou Serviços) ---
const listaServicos = document.querySelector("#lista-servicos");
if (listaServicos) {
  const servicos = ["Pintura interna", "Pintura externa", "Textura decorativa"];
  servicos.forEach(s => {
    listaServicos.innerHTML += `<li>${s}</li>`;
  });
}

// --- Mensagem de boas-vindas ---
const cliente = "Maria";
console.log(`Bem-vinda, ${cliente}! Sua casa ficará incrível.`);

// --- Botão de orçamento na Home ---
const orcamentoBtn = document.getElementById('orcamentoBtn');
if (orcamentoBtn) {
  orcamentoBtn.addEventListener('click', () => {
    alert("Preencha o formulário de contato para solicitar seu orçamento!");
  });
}

// --- Formulário de contato ---
const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
  contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Guardar no localStorage
    localStorage.setItem('ultimoContato', JSON.stringify({ nome, email, mensagem }));

    // Exibir mensagem de confirmação
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    contatoForm.reset();
  });
}

// Recuperar último contato
const ultimoContato = JSON.parse(localStorage.getItem("ultimoContato"));
if (ultimoContato) {
  console.log("Último contato:", ultimoContato.nome, ultimoContato.email, ultimoContato.mensagem);
}

function mostrarUltimaAtualizacao() {
  const agora = new Date();
  
  // Formata a data e hora em estilo brasileiro
  const opcoes = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  const formatado = agora.toLocaleString("pt-BR", opcoes);

  // Insere no rodapé
  const rodape = document.getElementById("ultima-atualizacao");
  if (rodape) {
    rodape.textContent = `Última atualização: ${formatado}`;
  }
}

// Executa ao carregar a página
mostrarUltimaAtualizacao();


// Modal
const modal = document.getElementById("impactoModal");
const fechar = document.querySelector(".fechar");
const btnContato = document.getElementById("btnContato");

// Exibir modal automaticamente após 2 segundos
window.addEventListener("load", () => {
  setTimeout(() => {
    modal.style.display = "block";
  }, 2000);
});

// Fechar modal ao clicar no X
fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar modal ao clicar fora
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Botão leva para página de contato
btnContato.addEventListener("click", () => {
  window.location.href = "contato.html";
});

