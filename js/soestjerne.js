"use strict"

//info ved blå musling 
const muslingForInfo = document.getElementById('info-ved-musling');
const muslingInfo = document.getElementById('info-ved-musling');

let infoShowTimer;
let infoHideTimer; 

blueFishForInfo.blueFishForInfo.addEventListener("click", () => {
  clearTimeout(infoShowTimer);
  clearTimeout(infoHideTimer);
  muslingInfo.hidden = true;   
  
  infoShowtimer = setTimeout( () => {
    muslingInfo.hidden = false; 

    infoHideTimer = setTimeout( () => {
        muslingInfo.hidden = true;
    }, 4000);    
    }, 3500);
  });


  //søstjerne der bevæger sig//
  const soestjerne = document.getElementById("soestjerne");
const stadier = 
    [
    "img/soestjerne1", 
    "img/soestjerne2", 
    "img/soestjerne3", 
    "img/soestjerne4" 
    ];

    stadier.forEach((sti) => {
    const forudindlaes = new Image ();
    forudindlaes.src = `img/${sti}.svg`;
    }); 

let aktueltStadie = 0;
 function naesteStadie() {
    aktueltStadie = aktueltStadie + 1;
    if (aktueltStadie >= stadier.length) {
        aktueltStadie = 0;
    }
    soestjerne.src = `img/${stadier[aktueltStadie]}.svg`;
 }

 soestjerne.addEventListener("click", naesteStadie);