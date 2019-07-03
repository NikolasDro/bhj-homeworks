'use strict'

const tasks = document.getElementById('tasks');
const tasksList = document.getElementById('tasks__list');

tasks.addEventListener('keydown', function(event) {
	let task = document.getElementById('task__input').value;
	if (event.key === 'Enter') {
		event.preventDefault();
		tasksList.insertAdjacentHTML('afterBegin',
			`<div class="task">
				<div class="task__title">
					${task}
				</div>
				<a href="#" class="task__remove">&times;</a>
			</div>`);
		document.getElementById('task__input').value = "";

		const removeTask = Array.from( document.querySelectorAll('.task__remove') );
		removeTask.forEach( function(item) {
			item.addEventListener('click', function(event) {
				event.preventDefault();
				item.closest('div').remove();
			});
		}); 
	}
});