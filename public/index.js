
// File: src/index.js

// Get references to the score digit elements               
let homeDigitEl = document.getElementById('home-digit');
let guestDigitEl = document.getElementById('guest-digit');

// Convert the text content of the elements to numbers for calculations
let homeDigitValue = Number(homeDigitEl.textContent);
let guestDigitValue = Number(guestDigitEl.textContent);

// Get references to the buttons for incrementing scores
let homeOneBtn = document.getElementById('home-one');
let homeTwoBtn = document.getElementById('home-two');
let homeThreeBtn = document.getElementById('home-three');
let guestOneBtn = document.getElementById('guest-one');  
let guestTwoBtn = document.getElementById('guest-two');
let guestThreeBtn = document.getElementById('guest-three');

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

