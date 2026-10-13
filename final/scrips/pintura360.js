//
const botaoTema = document.getElementById("tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");
});

//Array de serviço
const servicos = ["Pintura interna", "Pintura externa", "Textura decorativa"];
servicos.forEach(s => {
  document.querySelector("#lista-servicos").innerHTML += `<li>${s}</li>`;
});

//hora e dia
const cliente = "Maria";
console.log(`Bem-vinda, ${cliente}! Sua casa ficará incrível.`);



//  eventos e localStorage

// Botão de orçamento na Home
const orcamentoBtn = document.getElementById('orcamentoBtn');
if (orcamentoBtn) {
  orcamentoBtn.addEventListener('click', () => {
    alert("Preencha o formulário de contato para solicitar seu orçamento!");
  });
}

// Formulário de contato
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

// Exemplo de uso de arrays e métodos
const servicos = ["Residencial", "Comercial", "Fachadas"];
servicos.forEach(s => console.log(`Serviço disponível: ${s}`));

// Recuperar tema salvo ao carregar a página
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark") {
  document.body.classList.add("dark");
}

// Botão de alternar tema
const botaoTema = document.getElementById("tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "tema",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});


const ultimoContato = JSON.parse(localStorage.getItem("ultimoContato"));
if (ultimoContato) {
  console.log("Último contato:", ultimoContato.nome, ultimoContato.email, ultimoContato.mensagem);
}

// Recuperar tema salvo
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark") {
  document.body.classList.add("dark");
}
