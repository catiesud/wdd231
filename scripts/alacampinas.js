// Carregar o JSON e exibir os membros
fetch('alacampinas.json')
  .then(response => response.json())
  .then(membros => {
    const container = document.getElementById('lista-membros');

    membros.forEach(membro => {
      const div = document.createElement('div');
      div.className = 'membro';

      div.innerHTML = `
        <h2>${membro.nome}</h2>
        <p>${membro.endereco}</p>
        <p>${membro.telefone}</p>
        <a href="${membro.site}" target="_blank">Site da Empresa</a>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => console.error('Erro ao carregar JSON:', error));