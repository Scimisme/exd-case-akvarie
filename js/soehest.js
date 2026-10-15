"use strict";


//REJER
const rejeKnap = document.querySelector("#reje-knap");
const rejeInfo = document.querySelector("#reje-info");
const lukInfo = document.querySelector("#luk-info");

//GROTTEN
//GROTTENS INTERAKTIVE ELEMENTER
const grotteKnap = document.querySelector("#grotte-knap");
const grotteInfo = document.querySelector("#grotte-info");
const lukGrotte = document.querySelector("#luk-grotte");

//SHELDON
//HER HAR JEG HENTET SHELDON FRA HTML'EN, SÅ JEG KAN LAVE EN EVENTLISTENER PÅ HAM
const getSheldon = document.getElementById("sheldon");
const sheldonInfo = document.getElementById("sheldon-info");
const lukSheldon = document.getElementById("luk-sheldon");

//DEN GULE SØHEST 
const gulSoehestKnap = document.querySelector("#gul-soehest-knap");
const gulSoehestInfo = document.querySelector("#gul-soehest-info");
const lukGulSoehest = document.querySelector("#luk-gul-soehest");




//INTERAKTION VED REJERNE
// NÅR MAN KLIKKER PÅ SPØRGSMÅLSTEGNET
    rejeKnap.addEventListener("click", () => {

//VISER REJERNES FAKTABOKS
    rejeInfo.hidden = false;
    sheldonInfo.hidden = true; //LUKKER TALEBOBLE
    grotteInfo.hidden = true; //LUKKER DE ANDRE FAKTABOKSE
    gulSoehestInfo.hidden = true; //LUKKER DE ANDRE FAKTABOKSE

//STOPPER SHELDONS OP-OG-NED ANIMATION
    getSheldon.classList.remove("svommer");

//SHELDON SVØMMER HEN TIL REJERNE
    getSheldon.classList.remove("ved-grotten", "ved-gul-soehest"); //SIKRER AT SHELDON IKKE HAR TO FORSKELLIGE POSITIONSKLASSER SAMTIDIGT
    getSheldon.classList.add("ved-rejerne");
});

// FOR AT LUKKE INFORMATIONSBOKSEN
    lukInfo.addEventListener("click", () => {
    rejeInfo.hidden = true;

//SHELDON SVØMMER TILBAGE 
    getSheldon.classList.remove("ved-rejerne");
});




//INTERAKTION 2 - VED GROTTEN 
//FOR AT ÅBNE INFORMATIONSBOKSEN VED GROTTEN
    grotteKnap.addEventListener("click", () => {

//VISER GROTTENS FAKTABOKS
    grotteInfo.hidden = false;

    gulSoehestInfo.hidden = true; //LUKKER DE ANDRE FAKTABOKSE
    rejeInfo.hidden = true; //LUKKER REJEBOKSEN
    sheldonInfo.hidden = true; //LUKKER SHELDONS TALEBOBLE

//STOPPER SHELDONS OP-OG-NED ANIMATION
    getSheldon.classList.remove("svommer");

//FJERNER SHELDONS TIDLIGERE POSITIONER
    getSheldon.classList.remove("ved-rejerne", "ved-gul-soehest");

//SHELDON SVØMMER HEN TIL GROTTEN
    getSheldon.classList.add("ved-grotten");
});

// FOR AT LUKKE INFORMATIONSBOKSEN VED GROTTEN
    lukGrotte.addEventListener("click", () => {
    grotteInfo.hidden = true;

//SHELDON SVØMMER TILBAGE TIL STARTPOSITION
    getSheldon.classList.remove("ved-grotten");
});




//INTERAKTION 3 - SHELDONS TALEBOBLE
//LYT EFTER KLIK PÅ SHELDON, NÅR MAN KLIKKER DIREKTE PÅ HAM
    getSheldon.addEventListener("click", function() {

//STARTER ELLER STOPPER SHELDONS SVØMMEANIMATION
    getSheldon.classList.toggle("svommer");

 //TALEBOBLEN SKIFTER MELLEM AT VÆRE SYNLIG OG SKJULT
    sheldonInfo.hidden = !sheldonInfo.hidden;
});



//NÅR MAN KLIKKER PÅ X I TALEBOBLEN 
//LUK TALEBOBLEN 
    lukSheldon.addEventListener("click", () => {

//SKJULER TALEBOBLEN 
    sheldonInfo.hidden = true;

//STOPPER SHELDONS SVØMMEANIMATION
    getSheldon.classList.remove ("svommer");
});




//INTERAKTION 4 - DEN GULE SØHEST
//ÅBEN FAKTABOKS VED DEN GULE SØHEST
    gulSoehestKnap.addEventListener("click", () => {

//VISER FAKTABOKSEN
    gulSoehestInfo.hidden = false;

    rejeInfo.hidden = true; //LUKKER DE ANDRE FAKTABOKSE
    grotteInfo.hidden = true; //LUKKER DE ANDRE FAKTABOKSE
    sheldonInfo.hidden = true; //LUKKER SHELDONS TALEBOBLE

//STOPPER SHELDONS OP-OG-NED ANIMATION
    getSheldon.classList.remove("svommer");

//FJERNE SHELDONS TIDLIGERE POSITIONER
    getSheldon.classList.remove("ved-rejerne", "ved-grotten");

//SVØMMER HEN TIL DEN GULE SØHEST
   getSheldon.classList.add("ved-gul-soehest");
});

//LUKKER FAKTABOKSEN VED DEN GULE SØHEST
    lukGulSoehest.addEventListener("click", () => {

    gulSoehestInfo.hidden = true; //SKJULER FAKTABOKSEN

    getSheldon.classList.remove("ved-gul-soehest"); //SHELDON VENDER TILBAGE TIL STARTPOSITIONEN
});