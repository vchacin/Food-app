let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counterLeft');
let counterPlusElem = document.querySelector('.counterRight');

let count = 0;

updateDisplay();

function suma() {
    count++;
    updateDisplay();
};

function resta() {
    count--;
    updateDisplay();
};

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
