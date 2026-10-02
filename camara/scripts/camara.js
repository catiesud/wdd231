// Weather API
const apiKey = "c5d89ab9def893c4973f6e9b1a329f36";
const city = "São Paulo";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

fetch(url)
  .then(response => response.json())
  .then(dados => {
    // Temperatura atual
    document.getElementById("temp").textContent = dados.list[0].main.temp.toFixed(1);
    document.getElementById("desc").textContent = dados.list[0].weather[0].description;

    // Previsão para os próximos 3 dias
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const day = dados.list[i * 8]; // previsão a cada 24h
      forecastDiv.innerHTML += `<p>Dia ${i}: ${day.main.temp.toFixed(1)}°C</p>`;
    }
  })
  .catch(err => console.error("Erro na API de clima:", err));

// Featured Members (pasta 'dados')
fetch("dados/membros.json")
  .then(response => response.json())
  .then(membros => {
    const featured = membros.filter(m => m.level === "Ouro" || m.level === "Prata");
    const random = featured.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById("featured-members");
    random.forEach(m => {
      container.innerHTML += `
        <div class="card">
          <img src="${m.logo}" alt="Logo de ${m.name}">
          <h3>${m.name}</h3>
          <p>Telefone: ${m.phone}</p>
          <p>Endereço: ${m.address}</p>
          <a href="${m.website}" target="_blank">Visite o site</a>
          <p>Nível: ${m.level}</p>
        </div>
      `;
    });
  })
  .catch(err => console.error("Erro ao carregar membros:", err));

document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const menu = document.getElementById("menu");
      if (menu) {
        menu.classList.toggle("hidden");
      }
    });
  }

  // Última modificação no rodapé
  const data = new Date(document.lastModified);
  const formatada = data.toLocaleString("pt-BR");
  const ultima = document.getElementById("ultima-modificacao");
  if (ultima) {
    ultima.textContent = formatada;
  }

  // Registro de data/hora do carregamento do formulário
  const registro = document.getElementById("registro");
  if (registro) {
    registro.value = new Date().toISOString();
  }

  // Abrir modal ao clicar em "Mais informações"
  const links = document.querySelectorAll(".cartao a");
  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // evita rolagem para o id
      const modalId = link.getAttribute("href").substring(1); // remove o #
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // Fechar modal ao clicar no botão ×
  const fecharBtns = document.querySelectorAll(".fechar");
  fecharBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Fechar modal clicando fora do conteúdo
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});
