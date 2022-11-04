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
const checkBtn = select('.chech-btn');
const feedback = select('.feedback-p');
