// nossos parceiros
export function criarCardCliente(cliente) {
  const card = document.createElement("article");
  card.innerHTML = `
    <img src="${cliente.imagem}" alt="Logo ${cliente.nome}">
    <h3>${cliente.nome}</h3>
    <p>Email: <a href="mailto:${cliente.email}">${cliente.email}</a></p>
    <p>Site: <a href="${cliente.site}" target="_blank">${cliente.site}</a></p>
  `;
  return card;
}