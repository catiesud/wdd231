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
