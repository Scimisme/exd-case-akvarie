"use strict";

const fish = [
    {
        id: "blueFish",
        name: "Blå Fisk",
        species: "Torsk",
        length: 30,
        weight: 2.5,
        habitat: "Havet",
        sound: "sound/blue-fish-sound.wav",
    },
    {
        id: "clownFish",
        name: "Klovnefisk",
        species: "Klovnefisk",
        length: 15,
        weight: 0.5,
        habitat: "Rødt koralrev",
        sound: "sound/clown-fish-sound.wav",
    }
];

const tooltip = document.getElementById("tooltip");
let tooltipTimer;

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

    //Info box til blå fisk
    const blueFishForInfo = document.getElementById("blueFish");
    const blueFishInfo = document.getElementById("blue-fish-info");
    let infoShowTimer;
    let infoHideTimer;

    blueFishForInfo.addEventListener("click", () => {
        clearTimeout(infoShowTimer);
        clearTimeout(infoHideTimer);
        blueFishInfo.hidden = true;

        infoShowTimer = setTimeout(() => {
            blueFishInfo.hidden = false;

        infoHideTimer = setTimeout(() => {
            blueFishInfo.hidden = true;
            }, 4000);
        }, 3500);
    });

    //Info box til klovnfisk
    const clownFishForInfo = document.getElementById("clownFish");
    const clownFishInfo = document.getElementById("clown-fish-info");
    let infoHideTimer2; 

    clownFishForInfo.addEventListener("click", () => {
        clearTimeout(infoHideTimer2);
        clownFishInfo.hidden = false;

        infoHideTimer2 = setTimeout(() => {
            clownFishInfo.hidden = true;
        }, 4000);
    });
});
