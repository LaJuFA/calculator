function operate(a, b, operator) {
    a = parseInt(a);
    b = parseInt(b);
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = substract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => Math.round(a / b);

const calculatorDisplay = document.getElementById('display');
const equalsButton = document.getElementById('equals');

const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let calculation = [];
let display = "";
let currentNumber = ""; 

numberButtons.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
        currentNumber += currentButton.textContent;
        display += currentButton.textContent;
        calculatorDisplay.textContent = display;
    });
});

operatorButtons.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
        if (currentNumber) {
            calculation.push(currentNumber, currentButton.textContent);
            display = calculation.join("");
            calculatorDisplay.textContent = display;
            currentNumber = "";
        }

        if (calculation.length > 3) {
            calculation.splice(0, 3, operate(calculation[0], calculation[2], calculation[1]));
            display = calculation.join("");
            calculatorDisplay.textContent = display;
        }
    });
});

equalsButton.addEventListener("click", () => {
    if (calculation.length === 2 && currentNumber) {
        currentNumber = operate(calculation[0], currentNumber, calculation[1]);
        calculation.splice(0, 3);
        display = currentNumber;
        calculatorDisplay.textContent = display;
    }
});