'use strict'

let quest = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

let pollsAnswers = (answer) => {
  let pollAnswer = document.createElement('button');
  pollAnswer.classList.add('poll__answer');
  pollAnswer.innerText = answer;
  pollAnswer.setAttribute('type', 'submit');
  return pollAnswer;
};

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    var poll = JSON.parse(xhr.responseText);
    quest.innerText = poll.data.title;
    let selectAnswers = poll.data.answers;
    for (let item of selectAnswers) {
      answers.appendChild(pollsAnswers(item));
    }
    let buttonsanswers = answers.getElementsByClassName('poll__answer');
    for (let buttonItem of buttonsanswers) {
      buttonItem.addEventListener('click', event => {
        event.preventDefault();
        alert('Спасибо, ваш голос засчитан!');
      });
    }
  }
});