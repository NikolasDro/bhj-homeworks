'use strict'

let formDiv = document.getElementById('signin');
formDiv.classList.add('signin_active');

let welcome = document.getElementById('welcome');
let signinBtn = document.getElementById('signin__btn');
let userId = document.getElementById('user_id');

signinBtn.addEventListener('click', sendForm);


function sendForm(event) {

    event.preventDefault();

    let form = document.getElementById('signin__form');
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', showData);
    xhr.send(formData);

    function showData(event) {

        if (xhr.readyState === 4 && xhr.status === 200) {

            let response = JSON.parse(xhr.responseText);

            if (response.success) {

                localStorage.userId = response.user_id;

                formDiv.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;

            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
}

function init() {

    if (localStorage.userId) {
        formDiv.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    }
}

init();