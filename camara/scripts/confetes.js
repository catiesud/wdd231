// scripts/confetes.js
document.addEventListener("DOMContentLoaded", () => {
  const confetesContainer = document.createElement("div");
  confetesContainer.classList.add("confetes");
  document.body.appendChild(confetesContainer);

  for (let i = 0; i < 100; i++) {
    const confete = document.createElement("div");
    confete.classList.add("confete");
    confete.style.left = Math.random() * 100 + "vw";
    confete.style.animationDelay = Math.random() * 5 + "s";
    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetesContainer.appendChild(confete);
  }
});
