const previousOperationText = document.querySelector("#previousOperation")
const currentOperationText = document.querySelector("#currentOperation")
const buttons = document.querySelectorAll("#buttonsContainer button")


class Calculator {
    constructor (previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }
// Adicionando Digito a Calculadora
    addDigit(digit){
        if(digt = "." && this.currentOperationText.innerText.inclues(".")) {
            return;
        }


        this.currentOperation = digit;
        this.updateScreen();
    }

    //Change values of the calculator screen
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
       
        const value = e.target.innerText;
        if (+value >= 0 | value ===".") {
            calc.addDigit(value);
        } else {
           console.log("op : " + value) 
        }
    })
}); 
