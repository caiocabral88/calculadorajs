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


// declare a variable and reasing it to your favourite food. After this, alert the value

let food = "bananada"

alert(food);

// Declare a variable, assign it a string, alert the second character in the string (use your google)

let textoString = "macaya"

if (textoString.length >= 2) {
    alert(textoString[1];)
} else {
    alert("this string have no second character")
}

// Create a Function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the Function

function functionExercise(a,b,c) {
    let resultOne = ((a / b) * c);
    alert(resultOne);
}

//Create a function that takes in a month. If it is summer month alert YAY. If another other month, alert "boo"

function mesAno (a) {
    if (a === 1 || a === 2 || a === 3 || a === 4) {
        alert("o ano nem começou");
    } else {
        alert("cuida trabalhar vagabundo");
    }
}