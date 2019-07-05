'use strict'

let editor = document.getElementById('editor');
let clearKey = document.getElementById('clearKey');
let clearAll = document.getElementById('clearAll');

editor.addEventListener('input', saveText);
window.addEventListener('load', printTextFromLocalStorage);
clearKey.addEventListener('click', clear);
clearAll.addEventListener('click', clear);


function saveText(event) {
    localStorage.text = editor.value;
}

function printTextFromLocalStorage(event) {
    if (localStorage.text) {
        editor.value = localStorage.text;
    }
}

function clear(event) {

    event.preventDefault();

    if (event.target === clearKey) {
        localStorage.removeItem('text');
        editor.value = '';
    } else {
        localStorage.clear();
        editor.value = '';
    }
}