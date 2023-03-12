//variable declartion 
let clnBtn = document.getElementById("clear");
let display = document.getElementById("display");
let btn = document.getElementsByClassName("btn");
let sqrtBtn = document.getElementById("sqrtBtn");
let showResult = document.getElementById("showResult");
//Funtion Declartion
function calSqre(event) {
    event.preventDefault();

    display.value = Math.sqrt(display.value, 2);
}
function showAns() {
    // console.log(display.value)
    if (display.value.split('').filter((ele) => { return ele !== ' ' && ele !== '\n' }).length === 0) {
        alert("Please Enter Number")

    }
    else {
        ans = eval(display.value);
        display.value = ans;
    }

}
function clear() {
    display.value = "";
}

//accessing all button of btn
for (button of btn) {
    //adding eventlistener in each button
    button.addEventListener('click', (e) => {
        btnValue = e.target.value;
        // display.value = display.value + e.target.value;
        //short hand operation
        display.value += btnValue;
    })
}
//Event Listener
clnBtn.addEventListener('click', clear);
showResult.addEventListener('click', showAns)
sqrtBtn.addEventListener('click', calSqre)




//Vibration on key press 
function vibrate() {
    if (navigator) {
        navigator.vibrate(10);
    }
}