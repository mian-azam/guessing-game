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
const correctPara = select('.correct-p');


function valid(number) {
    let givennumber = number.trim();
    if (givennumber.length > 0 && !isNaN(givennumber))
        return true;
    return false;
}

function randomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    return randomNum
}

let random = randomNumber();

let n = 4;
function tries() {
    if (n >= 1) {
        triesPara.innerText = `Tries Left: ${n}`
    }
    else {
        triesPara.innerText = `Sory! Try agin. My number was : ${random} `;
        input.value = '';
        feedback.innerText = '';
    }
    n--;
}

onEvent('click', checkBtn, function () {
    let userInput = input.value;
    console.log(random);
    if (valid(userInput)) {
        if (userInput == random) {
            feedback.innerText = `Congrats`;
        } else if (userInput < random) {
            feedback.innerText = `Larger`;
        } else if (userInput > random) {
            feedback.innerText = `smaller`;
        }
    } else {
        feedback.innerText = `enter a vlaid nmbr`;
    }
    tries();
});

onEvent('click', restartBtn, () => {
    input.value = '';
    feedback.innerText = '';
    triesPara.innerText = '';
    randomNumber();
});