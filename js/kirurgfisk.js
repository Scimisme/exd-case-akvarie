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

kiste.addEventListener("mouseenter", skiftKiste);
kiste.addEventListener("mouseleave", skiftKiste);


const akvarieScene = document.getElementById("scene");