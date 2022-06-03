//function calculating basic arithmetic operations
function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  let minus = num1 - num2;
  return minus; 
}

function multiply(num1, num2) {
  let mul = num1 * num2;
  return mul; 
}

function divide(num1, num2) {
  let div = num1 / num2;
  return div; 
}

function remainder(num1, num2) {
  let rem = num1 % num2;
  return rem
}

//performs operation based on arithmetic operator selected 
function operate(num1, num2) {
  if (operator == "+") {
    add(num1, num2);
    console.log(add(num1, num2));
  } else if (operator == "-") {
    subtract(num1, num2);
    console.log(add(num1, num2));
  } else if (operator == "*") {
    multiply(num1, num2);
    console.log(add(num1, num2));
  } else if (operator == "/") {
    divide(num1, num2);
    console.log(add(num1, num2));
  } else if (operator == "+") {
    remainder(num1, num2);
    console.log(add(num1, num2));
  }
}
const mainDisplay = document.querySelector('main-display')
const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    mainDisplay.append(e.target.textContent);
  });
});