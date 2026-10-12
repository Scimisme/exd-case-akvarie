"use strict";

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

cars.forEach(function(carObj) {
   console.log(`${carObj.brand} ${carObj.model}`);
});

//getters for DOM elementer
const getTooltip = document.getElementById("tooltip");
const getSun = document.getElementById("sun");
const getScene = document.getElementById("scene");

//til skift mellem dag og nat (skal nok fjernes)
getSun.addEventListener("click", function() {
   getScene.classList.toggle("night");
});


// Denne variabel husker tooltip'ens timer (bruges nederst i showTooltip)
let tooltipTimer;

//funktion til at vise tooltip med bilens informationer
function showTooltip(car) {

    getTooltip.innerHTML = `
         <strong>${car.brand} ${car.model}</strong><br>
         Årgang: ${car.year}<br>
         Farve: ${car.color}<br>
         Brændstof: ${car.fuel}<br>
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

//funktion til at afspille bilens lyd
function playSound(car) {
   const audio = new Audio(car.sound);
   audio.play();
}

//forEach loop, der går igennem alle bilerne i cars-arrayet
cars.forEach(function(car) {

    // Eksempel: hent bilens <img> ved hjælp af id'et fra dataen
   const getCarElem = document.getElementById(car.id);

    // Eksempel: når musen kommer ind over bilen, vises bilens informationer.
    // Nyt i dag: "mouseenter" er en ny event - ligesom "click", bare når musen kommer ind over elementet.
   getCarElem.addEventListener("mouseenter", function() {
        showTooltip(car);
   });

    // Skriv selv: lyt efter "click" på getCarElem og kald playSound(car) inde i en anonym function.
   getCarElem.addEventListener("click", function() {
      playSound(car)
   });
});