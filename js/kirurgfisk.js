"use strict";

console.log("1: scriptet kører");
const kiste = document.getElementById("skattekiste");
const link = document.getElementById("skattekisteLink")

console.log("2: kiste er:", kiste);

const lukketKiste = "img/skattekiste-statisk.svg";
const aabenKiste = "img/skattekiste-aaben.svg";

const forudindlaes = new Image();
forudindlaes.src = aabenKiste;

function skiftKiste(event) {
  console.log("3: funktionen kører, hændelse:", event.type);

  if (event.type === "mouseenter") {
    kiste.src = aabenKiste;
    kiste.classList.add("aktiv");
  } else {
    kiste.src = lukketKiste;
    kiste.classList.remove("aktiv");
  }
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

// Fiskene svømmer
kiste.addEventListener("mouseenter", svoemHenTilKiste);
kiste.addEventListener("mouseleave", svoemHenTilKiste);