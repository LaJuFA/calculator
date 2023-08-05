function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            substract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculatorDisplay = document.getElementById('display');
const numberButtons = document.querySelectorAll(".number-button");

let display = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

numberButtons.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
        let currentText = currentButton.textContent;

        if (!operator) {
            firstNumber += currentText;
        } else {
            secondNumber += currentText;
        }

        display += currentText;
        calculatorDisplay.textContent = display;
        console.log(display);
    });
});