const membrosContainer = document.querySelector("#membros");
const botaoGrade = document.querySelector("#grade");
const botaoLista = document.querySelector("#lista");
const menuBotao = document.querySelector("#menu-botao");
const navegacao = document.querySelector("#navegacao");


// -----------------------------
// CARREGAR MEMBROS
// -----------------------------

async function carregarMembros() {

    try {

        const resposta = await fetch("dados/membros.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o arquivo JSON.");
        }

        const membros = await resposta.json();

        exibirMembros(membros);

    } catch (erro) {

        console.error("Erro:", erro);

        membrosContainer.innerHTML = `
            <p class="erro">
                Não foi possível carregar os dados das empresas.
            </p>
        `;
    }
}


// -----------------------------
// EXIBIR MEMBROS
// -----------------------------

function exibirMembros(membros) {

    membrosContainer.innerHTML = "";

    membros.forEach((membro) => {

        const card = document.createElement("article");

        card.classList.add("membro-card");

        card.innerHTML = `
            <div class="imagem-container">
                <img
                    src="${membro.imagem}"
                    alt="Logo da empresa ${membro.nome}"
                    loading="lazy"
                >
            </div>

            <div class="membro-conteudo">

                <h3>${membro.nome}</h3>

                <p class="endereco">
                    ${membro.endereco}
                </p>

                <p class="telefone">
                    ${membro.telefone}
                </p>

                <p class="informacao">
                    ${membro.info}
                </p>

                <p class="nivel">
                    ${nomeNivel(membro.nivel)}
                </p>

                <a
                    href="${membro.site}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visitar site
                </a>

            </div>
        `;

        membrosContainer.appendChild(card);
    });
}


// -----------------------------
// NÍVEL DE ASSOCIAÇÃO
// -----------------------------

function nomeNivel(nivel) {

    switch (nivel) {

        case 1:
            return "Membro";

        case 2:
            return "Membro Prata";

        case 3:
            return "Membro Ouro";

        default:
            return "Membro";
    }
}


// -----------------------------
// VISUALIZAÇÃO EM GRADE
// -----------------------------

botaoGrade.addEventListener("click", () => {

    membrosContainer.classList.remove("lista");
    membrosContainer.classList.add("grade");

    botaoGrade.classList.add("selecionado");
    botaoLista.classList.remove("selecionado");

    botaoGrade.setAttribute("aria-pressed", "true");
    botaoLista.setAttribute("aria-pressed", "false");
});


// -----------------------------
// VISUALIZAÇÃO EM LISTA
// -----------------------------

botaoLista.addEventListener("click", () => {

    membrosContainer.classList.remove("grade");
    membrosContainer.classList.add("lista");

    botaoLista.classList.add("selecionado");
    botaoGrade.classList.remove("selecionado");

    botaoLista.setAttribute("aria-pressed", "true");
    botaoGrade.setAttribute("aria-pressed", "false");
});


// -----------------------------
// MENU MOBILE
// -----------------------------

menuBotao.addEventListener("click", () => {

    const aberto = navegacao.classList.toggle("aberto");

    menuBotao.setAttribute("aria-expanded", aberto);
});


// -----------------------------
// ANO DO COPYRIGHT
// -----------------------------

document.querySelector("#ano").textContent =
    new Date().getFullYear();

     
    
// -----------------------------
// ÚLTIMA MODIFICAÇÃO
// -----------------------------

const dataModificacao = new Date(document.lastModified);

document.querySelector("#ultima-modificacao").textContent =
    dataModificacao.toLocaleDateString("pt-BR") +
    " " +
    dataModificacao.toLocaleTimeString("pt-BR");


// -----------------------------
// INICIAR
// -----------------------------

carregarMembros();
