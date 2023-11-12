const display = document.querySelector('.display'); // display element
const buttons = document.querySelectorAll('button'); // select all buttons   
const specialChars = ["%", "*", "-", "/","+", "="]
let output = ""; // output string

const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !=="") {
        //if output has %
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue === "AC") {
        output = "";
    }  
    else if (btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }
    else{
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
}); // add event listener to each button    