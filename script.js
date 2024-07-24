const output = document.querySelector(".display-paragraph");

let array = [0, 0]; // Let index 0 be the first number, index 1 be the operator
let equalsCheck = false;

document
    .querySelector(".calculator")
    .addEventListener("click", function (event) {
        // console.log(event.target.className);
        // console.log(typeof event.target.className);
        if (event.target.className === "number-button") {
            if (!equalsCheck) {
                numberFunc(event.target.innerText);
            } else {
                output.innerText = "0";
                numberFunc(event.target.innerText);
                equalsCheck = false;
            }
        }

        if (event.target.className === "backspace-button") {
            backspaceFunc();
        }

        if (event.target.className === "clear-button") {
            output.innerText = "0";
        }

        if (event.target.className === "operator-button") {
            operatorFunc(event.target.innerText, array);

            // Special case: If you hit something after hitting the "=" operator, it should erase the result and start over.
            if (event.target.innerText === "=") {
                equalsCheck = true;
            }
        }
    });


const numberFunc = function (number) {
    if (output.innerText === "0") {
        output.innerText = number;
    } else {
        output.innerText = output.innerText + number;
    }
}

const backspaceFunc = function () {
    if (output.innerText !== "0" && output.innerText.length > 1) {
        output.innerText = output.innerText.substring(0, output.innerText.length - 1);
    } else {
        output.innerText = "0";
    }
}

const operatorFunc = function (operator, array) {
    if (operator !== "=") {
        array[0] = output.innerText;
        array[1] = operator;
        output.innerText = "0";
    } else {
        //operation to execute: array[0] ? output.innerText
        switch (array[1]) {
            case "/":
                output.innerText = parseInt(array[0]) / parseInt(output.innerText);
                break;
            case "x":
                output.innerText = parseInt(array[0]) * parseInt(output.innerText);
                break;
            case "-":
                output.innerText = parseInt(array[0]) - parseInt(output.innerText);
                break;
            case "+":
                output.innerText = parseInt(array[0]) + parseInt(output.innerText);
                break;
            default:
                break;
        }
    }
}