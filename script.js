// SIMPLE CALC PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === "%") {
        display.value += "/100";
    } else {
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}

function removeLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = new Function("return " + display.value)(); 
    }
    catch(error){
        display.value = "Error";
    }
}
