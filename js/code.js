"use strict"

// Assigning JavaScript values to HTML classes

const buttonAdd = document.querySelector(".plus");
const buttonSub = document.querySelector(".minus");
const buttonMult = document.querySelector(".multiply");
const buttonDiv = document.querySelector(".divide");
const buttonMod = document.querySelector(".mod");
const buttonClear = document.querySelector(".nill");
const buttonClose = document.querySelector(".end");

let sum = 0;

// Checks if numerical value has been inputted, and displays the calculation result or error message

function printResult(){
    if (isNaN(sum)){
        document.querySelector(".answer").textContent = "Result:  [ERROR] input numerical values";
    }else{
        document.querySelector(".answer").textContent = "Result:  " + sum;
    }  
}

// Calculator: buttons and calculations

buttonAdd.addEventListener("click", (e) =>{ // +
    let num1 = parseFloat(document.querySelector(".fnum").value);
    let num2 = parseFloat(document.querySelector(".snum").value);
    sum = num1 + num2;
    printResult();
});

buttonSub.addEventListener("click", (e) =>{ // -
    let num1 = parseFloat(document.querySelector(".fnum").value);
    let num2 = parseFloat(document.querySelector(".snum").value);
    sum = num1 - num2;
    printResult();
});

buttonMult.addEventListener("click", (e) =>{ // *
    let num1 = parseFloat(document.querySelector(".fnum").value);
    let num2 = parseFloat(document.querySelector(".snum").value);
    sum = num1 * num2;
    printResult(); 
});

buttonDiv.addEventListener("click", (e) =>{ // /
    let num1 = parseFloat(document.querySelector(".fnum").value);
    let num2 = parseFloat(document.querySelector(".snum").value);
    sum = num1 / num2;
    printResult(); 
});

buttonMod.addEventListener("click", (e) =>{ // %
    let num1 = parseFloat(document.querySelector(".fnum").value);
    let num2 = parseFloat(document.querySelector(".snum").value);
    sum = num1 % num2;
    printResult();
});

buttonClear.addEventListener("click", (e) =>{ // clears input + output
    document.querySelector(".fnum").value = '';
    document.querySelector(".snum").value = '';
    document.querySelector(".answer").textContent = "Result:  ";
});

// Close button: closes calculator, shows message

const container = document.querySelector(".calculator");
const closeCalculator = document.querySelector(".end");

closeCalculator.addEventListener("click", (e) =>{
    container.innerHTML = "Thank you for using this calculator!";
    container.style.fontSize = '1.7rem';
    container.style.fontWeight = 'bold';
    container.style.textAlign = 'center';
    closeCalculator.style.display = 'none';
})

// Hover effect

const allButtons = document.querySelectorAll("button");

allButtons.forEach(allButtons => {
    allButtons.addEventListener("mouseenter", (e) =>{
        allButtons.style.backgroundColor = 'rgb(211, 143, 202)';
        allButtons.style.border = '2px white solid';
        allButtons.style.cursor = 'pointer';
    })
    
    allButtons.addEventListener("mouseleave", (e) =>{
        allButtons.style.backgroundColor = 'rgb(214, 182, 243)';
        allButtons.style.border = '2px purple solid';
        allButtons.style.cursor = 'auto';
    })
});