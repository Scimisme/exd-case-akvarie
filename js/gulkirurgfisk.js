"use strict";

const gulfisk = {
  navn: "Bubbles",
  foede: "Kirurgfisken, Bubbles spiser alger fra klipper og koraller",
  levevis: "Han lever i Koralrev ved Det Indiske Ocean",
  levealder: "Han bliver mellem 5-10 år",
  stoerrelse: "Han kan blive mellem 15-40 cm stor",
  humoer: "Bubbles er nysgerrig og lidt territorial overfor deres hjem",
};
    document.getElementById("fisk-navn").textContent = gulfisk.navn;
    document.getElementById("fisk-foede").textContent = gulfisk.foede;
    document.getElementById("fisk-levevis").textContent = gulfisk.levevis;
    document.getElementById("fisk-levealder").textContent = gulfisk.levealder;
    document.getElementById("fisk-stoerrelse").textContent = gulfisk.stoerrelse;
    document.getElementById("fisk-humoer").textContent = gulfisk.humoer;


const kiste = document.getElementById("skattekiste");

console.log("kiste er:", kiste);

const lukketKiste = "img/skattekiste-statisk.svg";
const aabenKiste = "img/skattekiste-aaben.svg";

//funktionen der får kisten il at åbne sig. Henter svg som er kaldet ved aaben/lukket.
//aktiveres ved mouseleave/mouseenter
function skiftKiste(event) {
  console.log("funktionen kører, hændelse:", event.type);
  if (event.type === "mouseenter") {
    kiste.src = aabenKiste;
    kiste.classList.add("aktiv");
  } else {
    kiste.src = lukketKiste;
    kiste.classList.remove("aktiv");
  }
  //classList.add tilføjer klassen "aktiv" til elementet ved interaktionen,
  //fordi CSS'en så kan ændre udseendet (størrelse og placering), uden at JS skal sætte stilen direkte.
}
//Kisten skifter mellem åben og luk
kiste.addEventListener("mouseenter", skiftKiste);
kiste.addEventListener("mouseleave", skiftKiste);



function svoemHenTilKiste(event) {
  if (event.type === "mouseenter") {
    // Fiskene svømmer hen mod kisten
      document.querySelector(".fisk1").style.translate = "600px 400px";
      document.querySelector(".fisk1").style.scale = "1 1";

      document.querySelector(".fisk2").style.translate = "-150px 100px";
      document.querySelector(".fisk2").style.scale = "-1 1";

      document.querySelector(".fisk3").style.translate = "600px -100px";
      document.querySelector(".fisk3").style.scale = "1 1";

      document.querySelector(".fisk4").style.translate = "-200px -150px";
      document.querySelector(".fisk4").style.scale = "-1 1";
  } else {
    // scale fordi simulerer fiskene skifter retning
    document.querySelector(".fisk1").style.translate = "0px 0px";
      document.querySelector(".fisk1").style.scale = "-1 1";

      document.querySelector(".fisk2").style.translate = "0px 0px";
      document.querySelector(".fisk2").style.scale = "1 1";

      document.querySelector(".fisk3").style.translate = "0px 0px";
      document.querySelector(".fisk3").style.scale = "-1 1";

      document.querySelector(".fisk4").style.translate = "0px 0px";
      document.querySelector(".fisk4").style.scale = "1 1";
  }
}


kiste.addEventListener("mouseenter", svoemHenTilKiste);
kiste.addEventListener("mouseleave", svoemHenTilKiste);

// ---------- Infoboks ved klik på en fisk ----------
const infoBoks = document.getElementById("info-kirurgfisk");
const lukKnap = document.getElementById("luk-info");
const alleFisk = document.querySelectorAll(".gulfisk");

function visInfo(event) {
  infoBoks.classList.add("synlig");
}

function skjulInfo() {
  infoBoks.classList.remove("synlig");
}

// Klik på en fisk viser boksen
alleFisk.forEach((enFisk) => {
  enFisk.addEventListener("click", visInfo);
});

lukKnap.addEventListener("click", skjulInfo);

// Escape lukker den også
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    skjulInfo();
  }
});
