"use strict";

const link = document.getElementById("skattekisteLink");
const kiste = document.getElementById("skattekiste");

function skiftKiste(event) {
    if (event.type === "mouseenter") {
        // Musen hover over: viser den animerede kiste
        kiste.src = "img/skattekiste-animeret.svg";
        kiste.classList.add("aktiv");
    } else {
        // Ellers vis den statiske kiste
        kiste.src = "img/skattekiste-statisk.svg";
        kiste.classList.remove("aktiv");
    }
}

link.addEventListener("mouseenter", skiftKiste);
link.addEventListener("mouseleave", skiftKiste);

//variabler skal opdateres så de matcher med vores egen tabel
const fish = [
    {
        id: "Palettkirurg",
        superpower: "Har mikroskopiske giftige knive i halen",
        diet: "Krebsdyr og krill",
        habitat: "Koralrev",
        color: "Blå og gul",
        name: "Dory",
        lifespan: "8 til 30 år",
        size: "25 til 30 cm",
        mood: "Fredelig og rolig"
    },
    {
        id: "Klovnfisk",
        superpower: "Immun overfor giftige planter",
        diet: "Krebsdyr og alger",
        habitat: "Søanemoner",
        color: "Orange, sort og hvid",
        name: "Nemo",
        lifespan: "6 til 10 år",
        size: "8 til 11 cm",
        mood: "Modig og frygtløs"
    },
    {
        id: "søstjerne",
        superpower: "Gro nye armer",
        diet: "Blåmuslinger",
        habitat: "Alle verdenshave, bare ikke ferskvand",
        color: "Mange forskellige farver",
        name: "Peach",
        lifespan: "5 til 10 år",
        size: "5 til 15 cm",
        mood: "Udholdende og rolig"
    },
    {
        id: "Guldfisk",
        superpower: "Sover med åbne øjne",
        diet: "Planter og smådyr",
        habitat: "Ferskvandsområder i Østasien",
        color: "Orange",
        name: "Goldie",
        lifespan: "10 til 20 år",
        size: "20 til 35 cm",
        mood: "Social, aktiv"
    },
    {
        id: "Søhest",
        superpower: "Kan gøre sig selv usynlig",
        diet: "Små rejer",
        habitat: "Tangområder",
        color: "Forskellige farver",
        name: "Sheldon",
        lifespan: "1 til 5 år",
        size: "2 til 20 cm",
        mood: "Legesyg og glad"
    },
    {
        id: "Kirurgfisk",
        superpower: "Hurtig algsstøvsuger",
        diet: "Alger fra klipper og koraller",
        habitat: "Koralrev ved Det Indiske Ocean",
        color: "Gul",
        name: "Bubbles",
        lifespan: "5 til 10 år",
        size: "15 til 40 cm",
        mood: "Nysgerrig men territorial"
    }
];



//forEach loop, der går igennem alle fiskene i fish-arrayet og logger deres navn og art til konsollen
fish.forEach(function(fishObj) {
    console.log(`${fishObj.id} (${fishObj.name})`);
});

//getters for DOM elementer
const getTooltip = document.getElementById("tooltip");
const getScene = document.getElementById("scene");

// Denne variabel husker tooltip'ens timer (bruges nederst i showTooltip)
let tooltipTimer;

//funktion til at vise tooltip med fiskens informationer
function showTooltip(fish) {

    getTooltip.innerHTML = `
         <strong>${fish.id} (${fish.name})</strong><br>
         Længde: ${fish.size}<br>
         Levealder: ${fish.lifespan}<br>
         Levested: ${fish.habitat}<br>
    `;

    //tilføjer klassen "is-visible" til tooltip'en, så den bliver synlig
    getTooltip.classList.add("is-visible");

    //opretter en timer til at skjule tooltip'en efter 4 sekunder. Hvis der allerede er en timer, skal den først ryddes med clearTimeout.
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(hideTooltip, 4000);
}

//funktion til at skjule tooltip'en
function hideTooltip() {
   getTooltip.classList.remove("is-visible");
}

//funktion til at afspille fiskens lyd
function playSound(fish) {
   const audio = new Audio(fish.sound);
   audio.play();
}

//forEach loop, der går igennem alle fiskene i fish-arrayet
fish.forEach(function(fish) {
const getFishElem = document.getElementById(fish.id);

// Tjek om fisken findes i HTML
if (getFishElem) {
    getFishElem.addEventListener("mouseenter", function() {
            showTooltip(fish);
});
getFishElem.addEventListener("click", function() {
playSound(fish);
});

    }
});

//GULDFISK

const guldfiskLink = document.getElementById("guldfiskLink");
const sandslot = document.getElementById("sandslot");

console.log("Guldfisk-link:", guldfiskLink);
console.log("Sandslot:", sandslot);

function skiftSlot(event) {
    console.log("Hover virker!", event.type);

    if (event.type === "mouseenter") {
        sandslot.src = "img/sandslot.svg";
        sandslot.classList.add("aktiv");
    } else {
        sandslot.src = "img/sandslotstatisk.svg";
        sandslot.classList.remove("aktiv");
    }
}

guldfiskLink.addEventListener("mouseenter", skiftSlot);
guldfiskLink.addEventListener("mouseleave", skiftSlot);