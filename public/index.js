
// File: src/index.js
           
let homeDigitEl = document.getElementById('home-digit');
let guestDigitEl = document.getElementById('guest-digit');

let homeTitleEl = document.getElementById('home-title');
let guestTitleEl = document.getElementById('guest-title');

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

function checkLeader(){
   if (homeDigitValue > guestDigitValue) {
      guestTitleEl.textContent = 'Guest'
      homeTitleEl.textContent = 'Home 👑'
   }
   if (guestDigitValue > homeDigitValue) {
      guestTitleEl.textContent = 'Guest'
      guestTitleEl.textContent = 'Guest 👑'
   }
   else if (guestDigitValue === homeDigitValue) {
      guestTitleEl.textContent = 'Guest'
      homeTitleEl.textContent = 'Home'
      console.log('Its a draw')
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

