// global variables
const operator = prompt("What operator will you be using?)");
const num1 = parseInt(prompt("1st Number: "));
const num2 = parseInt(prompt("2nd Number: "));

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

//performs operation based on arithmetic operator selected 
function operate(num1, num2) {
    if (operator == "+") {
        add(num1, num2);
        console.log(add(num1, num2));
    }
}
operate(num1, num2);