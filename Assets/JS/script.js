const displayOperationText = document.querySelector(".display-operation");
const calculatorOperationText = document.querySelector(".calculator-operation");
const buttons = document.querySelectorAll("#calculator-btn button");

class calculator {
    constructor(displayOperationText, calculatorOperationText) {
        this.displayOperationText = displayOperationText;
        this.calculatorOperationText = calculatorOperationText;
        this.calculatorOperation = "";
    }

    addDigit(digit) {

        if(digit === "." && this.calculatorOperationText.innerText.includes(".")) {
            return
        }

        this.calculatorOperation = digit
        this.updateScreen()
    }

    processOperation() 

    updateScreen() {
        this.calculatorOperationText.innerText += this.calculatorOperation;
    }

}

const calc = new calculator(displayOperationText, calculatorOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            console.log(value);
        } else {
            console.log("Op: " + value);
        }
    });
});