let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');

let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let divideButton = document.querySelector('.divide');
let multiplyButton = document.querySelector('.multiply');

let clearButton = document.querySelector('.clear');

let resultText = document.querySelector('.resut');

plusButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);

  let sum numOne + numTwo; 

  resultText.innerText = sum;
});
