let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');

let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let divideButton = document.querySelector('.divide');
let multiplyButton = document.querySelector('.multiply');

let clearButton = document.querySelector('.clear');

let resultText = document.querySelector('.resut');

// функция очистки
clearButton.addEventListener('click', function () {
  resultText.innerText = '';
  numberOne.value = '';
  numberTwo.value = '';
});

// функции сложения, вычитания, деления, умножения
plusButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);
  let sum = numOne + numTwo;
  resultText.innerText = sum;
});

minusButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);
  let diff = numOne - numTwo;
  resultText.innerText = diff;
});

divideButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);
  let den = numOne / numTwo;
  resultText.innerText = den;
});

multiplyButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);
  let comp = numOne * numTwo;
  resultText.innerText = comp;
});
