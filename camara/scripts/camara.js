const apiKey = "c5d89ab9def893c4973f6e9b1a329f36";
const city = "São Paulo";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById("temp").textContent = data.list[0].main.temp.toFixed(1);
    document.getElementById("desc").textContent = data.list[0].weather[0].description;

    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const day = data.list[i * 8]; // previsão a cada 24h
      forecastDiv.innerHTML += `<p>Dia ${i}: ${day.main.temp.toFixed(1)}°C</p>`;
    }
  })
  .catch(err => console.error(err));


  fetch("data/members.json")
  .then(response => response.json())
  .then(members => {
    const featured = members.filter(m => m.level === "Ouro" || m.level === "Prata");
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
  });
