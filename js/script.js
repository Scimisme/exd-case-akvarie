"use strict";

//variabler skal opdateres så de matcher med vores egen tabel
const fish = [
    {
        id: "blueFish",
        name: "Blå Fisk",
        species: "Torsk",
        length: 30,
        weight: 2.5,
        habitat: "Havet",
        sound: "sound/blue-fish-sound.wav"
    },

    {
        id: "clownFish",
        name: "Klovnefisk",
        species: "Klovnefisk",
        length: 15,
        weight: 0.5,
        habitat: "Rødt koralrev",
        sound: "sound/clown-fish-sound.wav"
    },

    {
        id: "greenFish",
        name: "Grøn Fisk",
        species: "Grøn Fisk",
        length: 25,
        weight: 1.5,
        habitat: "Havet",
        sound: "sound/green-fish-sound.wav"
    },

    {
        id: "orangeFish",
        name: "Orange Fisk",
        species: "Orange Fisk",
        length: 20,
        weight: 1.0,
        habitat: "Havet",
        sound: "sound/orange-fish-sound.wav"
    },

    {
        id: "redFish",
        name: "Rød Fisk",
        species: "Rød Fisk",
        length: 35,
        weight: 3.0,
        habitat: "Havet",
        sound: "sound/red-fish-sound.wav"
    },
 
    {
        id: "yellowFish",
        name: "Gul Fisk",
        species: "Gul Fisk",
        length: 18,
        weight: 0.8,
        habitat: "Havet",
        sound: "sound/yellow-fish-sound.wav"
    },
];



//forEach loop, der går igennem alle fiskene i fish-arrayet og logger deres navn og art til konsollen
fish.forEach(function(fishObj) {
    console.log(`${fishObj.name} (${fishObj.species})`);
});

//getters for DOM elementer
const getTooltip = document.getElementById("tooltip");
const getScene = document.getElementById("scene");

// Denne variabel husker tooltip'ens timer (bruges nederst i showTooltip)
let tooltipTimer;

//funktion til at vise tooltip med fiskens informationer
function showTooltip(fish) {

    getTooltip.innerHTML = `
         <strong>${fish.name} (${fish.species})</strong><br>
         Længde: ${fish.length} cm<br>
         Vægt: ${fish.weight} kg<br>
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

    // Eksempel: hent fiskens <img> ved hjælp af id'et fra dataen
   const getFishElem = document.getElementById(fish.id);

    // Eksempel: når musen kommer ind over bilen, vises bilens informationer.
    // Nyt i dag: "mouseenter" er en ny event - ligesom "click", bare når musen kommer ind over elementet.
   getFishElem.addEventListener("mouseenter", function() {
        showTooltip(fish);
   });

    // Skriv selv: lyt efter "click" på getFishElem og kald playSound(fish) inde i en anonym function.
   getFishElem.addEventListener("click", function() {
      playSound(fish)
   });

   //Starter animation af blå fisk ved klik
   const blueFishImage = document.getElementById("blueFish");
    let blueFishTimer;

    blueFishImage.addEventListener("click", function() {
        blueFishImage.src = "img/blue_fish_interactive_animation.svg";

        clearTimeout(blueFishTimer);
        blueFishTimer = setTimeout(function() {
            blueFishImage.src = "img/blue_fish.svg";
        }, 5000);
    });

     //Starter animation af blå fisk ved klik
    const clownFishImage = document.getElementById("clownFish");
    let clownFishTimer;

    clownFishImage.addEventListener("click", function() {
        clownFishImage.src = "img/klovnfisk_interactive_animation.svg";

        clearTimeout(clownFishTimer);
        clownFishTimer = setTimeout(function() {
            clownFishImage.src = "img/clown_fish.svg";
        }, 2000);
    });

});



const link = document.getElementById("skattekisteLink");
const kiste = document.getElementById("skattekiste");
console.log(link, kiste);

const statiskBillede = "img/skattekiste-statisk.svg";
const animeretBillede = "img/skattekiste-animeret.svg";

const forudindlaes = new Image();
forudindlaes.src = animeretBillede;

link.addEventListener("mouseenter", () => {
  kiste.src = animeretBillede;
  kiste.classList.add("aktiv");
});

link.addEventListener("mouseleave", () => {
  kiste.src = statiskBillede;
  kiste.classList.remove("aktiv");
});