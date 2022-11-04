'use strict';



function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// ----------------------------------------------------------------------------------------

const triesPara = select('.tries-p');
const input = select('.input');
const checkBtn = select('.check-btn');
const feedback = select('.feedback-p');
const restartBtn = select('.restart-btn');


function valid(number) {
    let input = number.trim();
    if (input.length > 0 && !isNaN(input))
        return true;
    return false;
}

function randomNumber() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    return randomNum
}
randomNumber();
let b = randomNumber();

function checkingGuess() {
    let a = input.value;
    if (valid(a) && a == b) {
        feedback.innerText = 'Congrats';
    } else if (valid(a) && a < b) {
        feedback.innerText = 'Try a larger number';
    } else if (valid(a) && a > 100) {
        feedback.innerText = 'Try a number b/w 1 and 100';
    } else if (valid(a) && a > b) {
        feedback.innerText = 'Try a smaller number';
    }
    else {
        feedback.innerText = 'Enter a valid number';
    }
}

onEvent('click', checkBtn, () => {
    checkingGuess();
});

onEvent('click', restartBtn, () => {
    input.value = '';
    feedback.innerText = '';
    checkBtn.innerText = randomNumber();
});