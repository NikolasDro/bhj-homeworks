'use strict'

let robot = [
    'Вам кого?',
    'У нас обед! Да, три дня',
    'Вот это меня меньше всего интересует',
    'Только за отдельную плату',
    'Это вам на Яндекс',
    'Вас много - я один',
    'Что вы без очереди постоянно лезете?'
]

let chatWidgetSide = document.querySelector('.chat-widget__side');
let chatWidget = document.querySelector('.chat-widget');
let widgetInput = document.getElementById('chat-widget__input');



chatWidgetSide.addEventListener('click', function() {
	chatWidget.classList.toggle('chat-widget_active');
});

chatWidget.addEventListener('keydown', function(event) {
	let message = widgetInput.value;
	if (event.key === "Enter" && widgetInput.checkValidity()) {
		let time = new Date().getHours() + ":" + new Date().getMinutes();
		let messages = document.querySelector( '.chat-widget__messages' );
		messages.innerHTML += `
			<div class="message message_client">
				<div class="message__time"> ${time} </div>
				<div class="message__text">
				  ${message}
				</div>
			</div>
			<div class="message">
				<div class="message__time"> ${time} </div>
				<div class="message__text">` + robot[Math.floor(Math.random() * robot.length)] +`
				  
				</div>
			</div>
		`;
		widgetInput.value = "";
	}
});