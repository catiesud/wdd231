// Função para carregar os membros do JSON
async function carregarMembros() {
  try {
    const resposta = await fetch('dados/membros.json');
    const membros = await resposta.json();

    const container = document.getElementById('membros-container');
    container.innerHTML = '';

    membros.forEach(m => {
      const card = document.createElement('div');
      card.classList.add('membro-card');

      card.innerHTML = `
        <img src="imagens/${m.imagem}" alt="${m.nome}">
        <h3>${m.nome}</h3>
        <p><strong>Endereço:</strong> ${m.endereco}</p>
        <p><strong>Telefone:</strong> ${m.telefone}</p>
        <p><a href="${m.site}" target="_blank">Visite o site</a></p>
        <p><strong>Nível:</strong> ${m.nivel}</p>
        <p>${m.info}</p>
      `;

      // Destaque visual para membros ouro
      if (m.nivel === 3) {
        card.style.border = "3px solid gold";
      }

      container.appendChild(card);
    });
  } catch (erro) {
    console.error("Erro ao carregar membros:", erro);
  }
}

// Alternar layout entre grade e lista
function configurarLayout() {
  const container = document.getElementById('membros-container');
  const btnGrade = document.getElementById('btn-grade');
  const btnLista = document.getElementById('btn-lista');

  btnGrade.addEventListener('click', () => {
    container.classList.remove('lista');
    container.classList.add('grade');
  });

  btnLista.addEventListener('click', () => {
    container.classList.remove('grade');
    container.classList.add('lista');
  });
}

// Atualizar rodapé com ano atual e última modificação
function atualizarRodape() {
  const anoAtual = new Date().getFullYear();
  const ultimaModificacao = new Date(document.lastModified).toLocaleString("pt-BR");

  document.querySelector("footer p").innerHTML = `© ${anoAtual} - 🌻 Catiana Guillaume 🌻 - São Paulo, Brasil`;
  document.getElementById("ultima-modificacao").textContent = ultimaModificacao;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  carregarMembros();
  configurarLayout();
  atualizarRodape();
});

 <script>
    const data = new Date(document.lastModified);
    const formatada = data.toLocaleString("pt-BR"); 
    document.getElementById("ultima-modificacao").textContent = formatada;
  </script>