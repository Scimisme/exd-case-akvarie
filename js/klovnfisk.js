"use strict";

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

    //Starter animation af blå fisk ved klik
    const blueFishImage = document.getElementById("Palettkirurg");
    let blueFishTimer;

    blueFishImage.addEventListener("click", function() {
        blueFishImage.src = "img/blue_fish_interactive_animation.svg";

        clearTimeout(blueFishTimer);
        blueFishTimer = setTimeout(function() {
            blueFishImage.src = "img/blue_fish.svg";
        }, 5000);
    });

     //Starter animation af blå fisk ved klik
    const clownFishImage = document.getElementById("Klovnfisk");
    let clownFishTimer;

    clownFishImage.addEventListener("click", function() {
        clownFishImage.src = "img/klovnfisk_interactive_animation.svg";

        clearTimeout(clownFishTimer);
        clownFishTimer = setTimeout(function() {
            clownFishImage.src = "img/clown_fish.svg";
        }, 2000);
    });

    //Info box til blå fisk
    const blueFishForInfo = document.getElementById("Palettkirurg");
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
    const clownFishForInfo = document.getElementById("Klovnfisk");
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
