"use strict";

const rejeKnap = document .querySelector("#reje-knap");
const rejeInfo = document.querySelector("#reje-info");
const lukInfo = document.querySelector("#luk-info");

// FOR AT ÅBNE INFORMATIONSBOKSEN 
rejeKnap.addEventListener("click", () => {
    rejeInfo.hidden = false;
});

// FOR AT LUKKE INFORMATIONSBOKSEN
lukInfo.addEventListener("click", () => {
    rejeInfo.hidden = true;
});