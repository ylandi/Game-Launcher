const libraryDiv = document.getElementById('library');

const gameData = {
    windblown: {
        name: "Windblown",
        img: "WhatsApp Image 2026-03-01 at 10.59.24.jpeg"
    },
    re4: {
        name: "Resident Evil 4",
        img: "https://cdn.alza.cz/Foto/ImgGalery/Image/resident-evil-4-remake-recenze-cover.jpg"
    },
    phantom: {
        name: "Phantom Blade",
        img: "WhatsApp Image 2026-03-01 at 11.00.11.jpeg"
    },
    hollow: {
        name: "Hollow Knight",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg"
    },
    silenthill: {
        name: "Silent Hill",
        img: "https://tse3.mm.bing.net/th/id/OIP.3-jIfTr5gKQ9NtvjYij6bAHaDF"
    },
    baroque: {
        name: "Baroque",
        img: "https://tse3.mm.bing.net/th/id/OIP.Uyq71uk3ZIIq2X6sEZGz6wHaEK"
    },
    planetcrafter: {
        name: "Planet Crafter",
        img: "https://static.newmobilelife.com/wp-content/uploads/2023/10/The-Planet-Crafter.jpg"
    },
    hades: {
        name: "Hades",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg"
    },
    terraria: {
        name: "Terraria",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"
    },
    celeste: {
        name: "Celeste",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg"
    },
    loophero: {
        name: "Loop Hero",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1282730/header.jpg"
    },
    backpackhero: {
        name: "Backpack Hero",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1599660/header.jpg"
    },
    outerwilds: {
    name: "Outer Wilds",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/753640/header.jpg"
}   ,
    gris: {
    name: "GRIS",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/683320/header.jpg"
    },
    deadcells: {
    name: "Dead Cells",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/757320/header.jpg"
    },
    eastward: {
    name: "Eastward",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/977880/header.jpg"
    },
    noita: {
    name: "Noita",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/881100/header.jpg"
    },
    hyperlight: {
    name: "Hyper Light Drifter",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/257850/header.jpg"
    }
};

let library = JSON.parse(localStorage.getItem("library")) || [];

function saveLibrary() {
    localStorage.setItem("library", JSON.stringify(library));
}

function renderLibrary() {
    if (!libraryDiv) return;

    libraryDiv.innerHTML = "";

    if (library.length === 0) {
        libraryDiv.innerHTML = "<p>Библиотека пустая 😢</p>";
        return;
    }

    library.forEach(gameId => {
        const game = gameData[gameId];

        if (!game) return;

        const card = document.createElement("div");
        card.classList.add("game-card");

        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <h3>${game.name}</h3>

            <div class="buttons">
                <button class="play-btn" data-game="${gameId}">Играть</button>
                <button class="remove-btn" data-game="${gameId}">Удалить</button>
            </div>
        `;

        libraryDiv.appendChild(card);
    });
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const gameId = e.target.dataset.game;

        library = library.filter(game => game !== gameId);
        localStorage.setItem("library", JSON.stringify(library));

        renderLibrary();
    }
});


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("play-btn")) {
        const gameId = e.target.dataset.game;
        const game = gameData[gameId];

        if (game?.path) {
            window.open(game.path, "_blank");
        } else {
            alert("Игра пока не доступна ❌");
        }
    }
});


renderLibrary();
