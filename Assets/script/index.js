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
const heading = select('.heading');


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

onEvent('click', checkBtn, function () {
    tries();
    let userInput = input.value;
    if (valid(userInput)) {
        if (userInput == random) {
            feedback.innerText = `Restart to Play Again.`;
            triesPara.innerText = 'Congrulations! You dit it.';
            heading.style.visibility = 'hidden';
        } else if (userInput < random) {
            feedback.innerText = `Try your Luck with a larger number`;
        } else if (userInput > random) {
            feedback.innerText = `Try your Luck with a smaller number`;
        }
    } else {
        feedback.innerText = `Please enter a valid number between 1 and zero`;
    }

});


let n = 9;

function tries() {
    if (n >= 1) {
        triesPara.innerText = `Tries Left : \xa0\ ${n}`
    }
    else {
        triesPara.innerText = `Restart to try agin. \n Prevoius number was : ${random} `;
        input.value = '';
        feedback.innerText = '';
    }
    n--;
};



onEvent('click', restartBtn, function () {
    window.location.reload();
    input.value = '';
});

