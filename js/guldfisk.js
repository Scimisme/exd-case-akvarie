
"use strict";

// Hent elementerne fra HTML
const solKnap = document.getElementById("solKnap");
const maaneKnap = document.getElementById("maaneKnap");
const billede = document.getElementById("guld-baggrund");

// Min funktion til at skifte til dag
function visDag() {
  billede.src = "/img/guld-dag.svg";
}

// Min funktion til at skifte til nat
function visNat() {
  billede.src = "/img/guld-nat.svg";
}

solKnap.addEventListener("click", visDag);
maaneKnap.addEventListener("click", visNat);

// GULDFISKENS SVØMME-FUNKTION: start

// Hent alle guldfiskene
const guldfisk = document.querySelectorAll(".fish");

// Få alle guldfiskene til at svømme - index afgør hvilken numme fisk der er tale om
guldfisk.forEach(function(fisk, index) {

// Placering på skærmen
fisk.style.top = (25 + index * 20) + "%";

// Hver anden fisk svømmer i modsat retning
if (index % 2 === 0) { // Fra venstre mod højre
    fisk.style.left = "-120px";

fisk.animate(
    [
        { transform: "translateX(0) scaleX(-1)" },
        { transform: `translateX(${window.innerWidth + 120}px) scaleX(-1)` }
    ],
    {
        duration: 15000,
        iterations: Infinity,
        easing: "linear",
        delay: index * 3000
    }
);

} else { // Fra højre mod venstre
    fisk.style.left = "100%";

    fisk.animate(
        [
            { transform: "translateX(0)" },
            { transform: `translateX(-${window.innerWidth + 120}px)` }
        ],
        {
            duration: 15000,
            iterations: Infinity,
            easing: "linear",
            delay: index * 3000
        }
    );
}
});
// GULDFISKENS SVØMME-FUNKTION: slut
