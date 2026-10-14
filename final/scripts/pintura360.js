
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

