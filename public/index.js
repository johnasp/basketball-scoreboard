
// File: src/index.js

// Get references to the score digit elements               
let homeDigitEl = document.getElementById('home-digit');
let guestDigitEl = document.getElementById('guest-digit');

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

// Functions to increment the home and guest scores
function homeAddOne() {
   homeDigitValue ++
   homeDigitEl.textContent = homeDigitValue;
}
function homeAddTwo() {
   homeDigitValue += 2;
   homeDigitEl.textContent = homeDigitValue;
}
function homeAddThree() {
   homeDigitValue += 3;
   homeDigitEl.textContent = homeDigitValue;
}
function guestAddOne() {
   guestDigitValue ++;
   guestDigitEl.textContent = guestDigitValue;
}
function guestAddTwo() {
   guestDigitValue += 2;
   guestDigitEl.textContent = guestDigitValue;
}
function guestAddThree() {
   guestDigitValue += 3;
   guestDigitEl.textContent = guestDigitValue;
}

