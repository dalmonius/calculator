const display = document.body.querySelector(".display");
const clr = document.body.querySelector("#clr");

clr.addEventListener("click", function(){
    display.textContent = "CLEAR"
});

const zero = document.body.querySelector("#zero");
const one = document.body.querySelector("#one");
const two = document.body.querySelector("#two");
const three = document.body.querySelector("#three");
const four = document.body.querySelector("#four");
const five = document.body.querySelector("#five");
const six = document.body.querySelector("#six");
const seven = document.body.querySelector("#seven");
const eight = document.body.querySelector("#eight");
const nine = document.body.querySelector("#nine");
const dot = document.body.querySelector("#dot");
const equals = document.body.querySelector("#equals");
const add = document.body.querySelector("#add");
const subtract = document.body.querySelector("#subtract");
const divide = document.body.querySelector("#divide");
const multiply = document.body.querySelector("#multiply");

var inputTextArea = []; // using an array to store input

zero.addEventListener("click", function(){
    inputTextArea.push(0);
    display.textContent = inputTextArea; // problem: it pushes to the array instantly. How can I push two digits or more into the array?
});

add.addEventListener("click", function(){
    display.textContent = "+";
});

// todo: maybe I can creat a loop instead of declaring 17 constants...

var buttonsLength = document.body.querySelectorAll("input").length;
var buttonSelector = document.body.querySelectorAll("input");

/*

for(i = 0; i <= buttonsLength; i++){
    buttonSelector[i].
}

maybe... I need a while loop there.

*/