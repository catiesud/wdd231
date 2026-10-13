

      import { locais } from "../dados/locais.mjs";

document.addEventListener("DOMContentLoaded", () => {
  exibirLocais(locais);
  carregarClima();
});

function exibirLocais(lista) {
  const container = document.getElementById("locais");
  container.innerHTML = "";

  lista.forEach(local => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img 
        src="${local.link_foto}" 
        alt="Foto de ${local.nome}" 
        loading="lazy" 
        width="300" height="200">
      <h3>${local.nome}</h3>
      <p>${local.descricao}</p>
      <p><strong>Endereço:</strong> ${local.endereco}</p>
      <p><strong>Custo:</strong> ${local.custo}</p>
    `;

    container.appendChild(card);
  });
}


// Clima
function carregarClima() {
  const url = "https://api.openweathermap.org/data/2.5/forecast?q=São Paulo&appid=SUA_CHAVE&units=metric&lang=pt_br";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temp").textContent = data.list[0].main.temp.toFixed(1);
      document.getElementById("desc").textContent = data.list[0].weather[0].description;
    })
    .catch(error => console.error("Erro ao carregar clima:", error)); 

    card.innerHTML = `
  <h2>${item.nome}</h2>
  <figure>
    <img 
      src="${item.link_foto}" 
      alt="${item.nome}" 
      width="300" 
      height="200" 
      loading="lazy">
  </figure>
  <address>${item.endereco}</address>
  <p>${item.descricao}</p>
  <p><strong>Custo:</strong> ${item.custo}</p>
  <button>Saiba mais</button>
  ';