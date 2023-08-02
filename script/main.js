let inputNumber = document.querySelector("#inputNumber");
let display = document.querySelector("#display");


function checkOddEven() {
    let num = inputNumber.value
    let num2 = num % 2;

    if (num2 == 0) {
        display.innerHTML = "Even"
    }
    else if (num2 == 1) {
        display.innerHTML = "Odd"
    }
    else {
        display.innerHTML = "Please input a valid number"
    }
}
