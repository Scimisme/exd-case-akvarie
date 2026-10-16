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
