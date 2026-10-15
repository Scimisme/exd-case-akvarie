
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

// Hent guldfisken fra HTML
const guldfisk = document.getElementById("orangeFish");

// Funktion der får guldfisken til at svømme
function svoem() {
    guldfisk.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(1500px)" }
        ],
        {
            duration: 15000,
            iterations: Infinity,
            easing: "linear"
        }
    );
}
// Kald funktionen
svoem();

// GULDFISKENS SVØMME-FUNKTION: slut
