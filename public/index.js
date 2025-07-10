
// File: src/index.js
           
let homeDigitEl = document.getElementById('home-digit');
let guestDigitEl = document.getElementById('guest-digit');



let scoresIsTiedEl = document.getElementById('scores-tied');

// Convert the text content of the elements to numbers for calculations
let homeDigitValue = Number(homeDigitEl.textContent);
let guestDigitValue = Number(guestDigitEl.textContent);

let newGameBtn = document.getElementById('btn-new-game');

function resetScores() {
   homeDigitValue = 0;
   guestDigitValue = 0;
   homeDigitEl.textContent = homeDigitValue;
   guestDigitEl.textContent = guestDigitValue;
   console.log(homeDigitValue, guestDigitValue);
}

// Check who's leading (or drawing) and add crown to leader
let homeTitleEl = document.getElementById('home-title');
let guestTitleEl = document.getElementById('guest-title');

function checkLeader(){
   // Clear crowns before assigning
   homeTitleEl.textContent = '';
   guestTitleEl.textContent = '';
   if (homeDigitValue > guestDigitValue) {
      homeTitleEl.textContent = '👑';
   } else if (guestDigitValue > homeDigitValue) {
      guestTitleEl.textContent = '👑';
   }
   else if (guestDigitValue === homeDigitValue) {
      homeTitleEl.textContent = '👔';
      guestTitleEl.textContent = '👔';
   }
}

// Count scores and check for leader
function homeAddOne() {
   homeDigitValue ++;
   homeDigitEl.textContent = homeDigitValue;
   checkLeader();
}
function homeAddTwo() {
   homeDigitValue += 2;
   homeDigitEl.textContent = homeDigitValue;
   checkLeader();
}
function homeAddThree() {
   homeDigitValue += 3;
   homeDigitEl.textContent = homeDigitValue;
   checkLeader();
}
function guestAddOne() {
   guestDigitValue ++;
   guestDigitEl.textContent = guestDigitValue;
   checkLeader();
}
function guestAddTwo() {
   guestDigitValue += 2;
   guestDigitEl.textContent = guestDigitValue;
   checkLeader();
}
function guestAddThree() {
   guestDigitValue += 3;
   guestDigitEl.textContent = guestDigitValue;
   checkLeader();
}

