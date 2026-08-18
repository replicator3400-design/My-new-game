// ==========================================
// DARKPLAY
// SCRIPT PRINCIPAL
// ==========================================


// ==========================================
// ABRIR JOGO
// ==========================================

function openGame(game) {

    window.location.href = game;

}


// ==========================================
// JOGAR AGORA
// ==========================================

function scrollToGames() {

    const games =
        document.getElementById("jogos");

    if (!games) return;

    games.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// JOGO EM BREVE
// ==========================================

function comingSoon() {

    alert(
        "🚀 Este jogo ainda está sendo desenvolvido!"
    );

}


// ==========================================
// PESQUISA
// ==========================================

function searchGames() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const search =
        input.value
            .toLowerCase()
            .trim();

    const cards =
        document.querySelectorAll(".game-card");

    let visible = 0;


    cards.forEach(card => {

        const name =
            card
                .getAttribute("data-name")
                ?.toLowerCase() || "";


        if (
            name.includes(search)
        ) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";

        }

    });


    updateGameCount(visible);

}


// ==========================================
// PESQUISA AUTOMÁTICA
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById("searchInput");


        if (!input) return;


        input.addEventListener(
            "input",
            searchGames
        );

    }
);


// ==========================================
// FILTRO DE CATEGORIA
// ==========================================

function filterCategory(category) {

    const cards =
        document.querySelectorAll(".game-card");

    let visible = 0;


    cards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            cardCategory === category
        ) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";

        }

    });


    updateGameCount(visible);


    const games =
        document.getElementById("jogos");


    if (games) {

        games.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ==========================================
// MOSTRAR TODOS
// ==========================================

function showAllGames() {

    const cards =
        document.querySelectorAll(".game-card");


    cards.forEach(card => {

        card.style.display = "";

    });


    updateGameCount(cards.length);

}


// ==========================================
// CONTADOR DE JOGOS
// ==========================================

function updateGameCount(number) {

    const counter =
        document.getElementById("gameCount");


    if (!counter) return;


    counter.textContent =
        number +
        (
            number === 1
                ? " jogo"
                : " jogos"
        );

}


// ==========================================
// TECLA ESC
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        const input =
            document.getElementById("searchInput");


        if (!input) return;


        input.value = "";

        showAllGames();

    }
);


// ==========================================
// LOG
// ==========================================

console.log(
    "🎮 DarkPlay carregado!"
);
