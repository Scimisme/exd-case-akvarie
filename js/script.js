"use strict";

const cars = [
   {
      id: "redCar",
      brand: "Ford",
      model: "Mustang",
      year: 1974,
      color: "Rød",
      fuel: "Benzin",
      sound: "sound/red-car-horn.wav"
   },

   {
      id: "policeCar",
      brand: "Volvo",
      model: "242",
      year: 1982,
      color: "Blå og hvid",
      fuel: "Diesel",
      sound: "sound/police-car-sound.wav"
   },

   {
      id: "blueCar",
      brand: "Volkswagen",
      model: "Passat",
      year: 1979,
      color: "Lyseblå",
      fuel: "Diesel",
      sound: "sound/blue-car-sound.wav"
   },

   {
      id: "bus",
      brand: "Mercedes",
      model: "Benz",
      year: 2017,
      color: "Gul",
      fuel: "Diesel",
      sound: "sound/bus-sound.wav"
   },

   {
      id: "truck",
      brand: "Scania",
      model: "Gunnings",
      year: 2008,
      color: "Orange",
      fuel: "Diesel",
      sound: "sound/truck-sound.wav"
   }
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