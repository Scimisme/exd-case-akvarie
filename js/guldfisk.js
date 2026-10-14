
"use strict";

// GULDFISKENS UNIVERS - NAT OG DAG-funktionen: start
// Hent elementerne fra HTML
const solKnap = document.getElementById("solKnap");
const maaneKnap = document.getElementById("maaneKnap");
const billede = document.getElementById("guld-baggrund");

// Min funktion til dag
function visDag() {
  billede.src = "/img/guld-dag.svg";
}

// Min funktion til nat
function visNat() {
  billede.src = "/img/guld-nat.svg";
}

solKnap.addEventListener("click", visDag);
maaneKnap.addEventListener("click", visNat);

// GULDFISKENS UNIVERS - NAT OG DAG-funktionen: slut