function openGame(game) {
    window.location.href = game;
}


function scrollToGames() {

    const games = document.getElementById("gamesGrid");

    games.scrollIntoView({
        behavior: "smooth"
    });

}


function comingSoon() {

    alert(
        "🚀 Este jogo ainda está em desenvolvimento!"
    );

}


/* =========================
   PESQUISA
========================= */

function searchGames() {

    const input =
        document.getElementById("searchInput");

    const search =
        input.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".game-card");


    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        if (name.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


document
    .getElementById("searchInput")
    .addEventListener(
        "keyup",
        searchGames
    );


/* =========================
   CATEGORIAS
========================= */

function filterCategory(category) {

    const cards =
        document.querySelectorAll(".game-card");


    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (
            category === "Arcade" &&
            text.includes("arcade")
        ) {

            card.style.display = "block";

        } else if (
            category === "Casual" &&
            text.includes("casual")
        ) {

            card.style.display = "block";

        } else if (
            category === "Aventura" &&
            text.includes("aventura")
        ) {

            card.style.display = "block";

        } else if (
            category === "Corrida" &&
            text.includes("corrida")
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
