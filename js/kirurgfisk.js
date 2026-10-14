"use strict";

const kiste = document.getElementById("skattekiste");

function aabenKiste(event) {
  if (event.type === "mouseenter") {
    // Musen hover over: viser den animerede kiste
    kiste.src = "img/skattekiste-aaben.svg";
    kiste.classList.add("aktiv");
  } else {
    // Ellers vis den statiske kiste
    kiste.src = "img/skattekiste-statisk.svg";
    kiste.classList.remove("aktiv");
  }
}
link.addEventListener("mouseenter", aabenKiste);
link.addEventListener("mouseleave", aabenKiste);

