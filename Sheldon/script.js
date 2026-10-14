"use strict";

const rejeKnap = document .querySelector("#reje-knap");
const rejeInfo = document.querySelector("#reje-info");
const lukInfo = document.querySelector("#luk-info");

// FOR AT ÅBNE INFORMATIONSBOKSEN 
rejeKnap.addEventListener("click", () => {
    rejeInfo.hidden = false;

//STOP DEN GAMLE SVØMMEANIMATION
getSheldon.classList.remove("svommer");

//SHELDON SVØMMER HEN TIL REJERNE
getSheldon.classList.remove("ved-grotten");
getSheldon.classList.add("ved-rejerne")
});

// FOR AT LUKKE INFORMATIONSBOKSEN
lukInfo.addEventListener("click", () => {
    rejeInfo.hidden = true;
});



//GROTTENS INTERAKTIVE ELEMENTER
const grotteKnap = document .querySelector("#grotte-knap");
const grotteInfo = document.querySelector("#grotte-info");
const lukGrotte = document.querySelector("#luk-grotte");

// FOR AT ÅBNE INFORMATIONSBOKSEN
grotteKnap.addEventListener("click", () => {
    grotteInfo.hidden = false;
    rejeInfo.hidden = true;        //Lukker reje-info boksen, hvis den er åben

//STOP DEN GAMLE SVØMMEANIMATION
getSheldon.classList.remove("svommer");

//SHELDON SVØMMER HEN TIL GROTTEN 
getSheldon.classList.remove("ved-rejerne");
getSheldon.classList.add("ved-grotten")
});

// FOR AT LUKKE INFORMATIONSBOKSEN
lukGrotte.addEventListener("click", () => {
    grotteInfo.hidden = true;
});

//HER HAR JEG HENTET SHELDON FRA HTML'EN, SÅ JEG KAN LAVE EN EVENTLISTENER PÅ HAM
const getSheldon = document.getElementById("sheldon");
const sheldonInfo = document.getElementById("sheldon-info");
const lukSheldon = document.getElementById("luk-sheldon");

//LYT EFTER KLIK PÅ SHELDON 
getSheldon.addEventListener("click", function() {
    getSheldon.classList.toggle("svommer");
    sheldonInfo.hidden = !sheldonInfo.hidden; //TALEBOBLEN SKIFTER MELLEM AT VÆRE SYNLIG OG SKJULT
});

//LUK TALEBOBLEN 
lukSheldon.addEventListener("click", () => {
    sheldonInfo.hidden = true;
    getSheldon.classList.remove ("svommer");
});




