
// Array de cursos
   const cursos = [
  { code: "WDD 130", name: "Introdução ao Desenvolvimento Web", type: "WDD", completed: true },
  { code: "WDD 131", name: "CSS Avançado", type: "WDD", completed: false },
  { code: "WDD 231", name: "JavaScript Intermediário", type: "WDD", completed: false },
  { code: "CSE 110", name: "Fundamentos de Programação", type: "CSE", completed: true },
  { code: "CSE 210", name: "Estruturas de Dados", type: "CSE", completed: false }
];

// Renderização dinâmica
const listaCursos = document.querySelector(".lista-cursos");

function renderCursos(filtro = "Todos") {
  listaCursos.innerHTML = "";
  let filtrados = cursos;

  if (filtro !== "Todos") {
    filtrados = cursos.filter(curso => curso.type === filtro);
  }

  filtrados.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso");
    div.textContent = `${curso.code} - ${curso.name}`;
    div.style.backgroundColor = curso.completed ? "var(--cor-destaque)" : "var(--cor-secundaria)";
    listaCursos.appendChild(div);
  });
}

// Botões de filtro
document.querySelectorAll(".filtros button").forEach(btn => {
  btn.addEventListener("click", () => {
    renderCursos(btn.textContent);
  });
});

// Inicialização
renderCursos();
