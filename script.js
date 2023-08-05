function operate(a, b, operator) {
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
const divide = (a, b) => a / b;

const calculatorDisplay = document.getElementById('display');
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let display = "";
let stringNumber = "";
let operator = "";

numberButtons.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
        let currentText = currentButton.textContent;

        stringNumber += currentText;

        if (operator) {
            operator = "";
        }

        display += currentText;
        calculatorDisplay.textContent = display;
        console.log(display);
    });
});

operatorButtons.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
        let currentText = currentButton.textContent;

        if (stringNumber && !operator) {
            operator = currentText;
            stringNumber += "|" + currentText + "|";
            display += operator
            calculatorDisplay.textContent = display;
        }
    });
});

equalsButton.addEventListener("click", () => {

    const baseArray = stringNumber.split("|");

    if (baseArray.length >= 3) {
        const numberList = baseArray.filter(currentValue => !(["+", "-", "*", "/"].includes(currentValue)));
        const operatorList = baseArray.filter(currentValue => ["+", "-", "*", "/"].includes(currentValue));

        function reducer(accumulator, currentNumber, index) {
            const intNumber = parseInt(currentNumber);
            return index === 0 ? operate(accumulator, intNumber, "+") : operate(accumulator, intNumber, operatorList[index - 1]);
        }

        display = numberList.reduce(reducer, 0);
        
        calculatorDisplay.textContent = display;
    }
});