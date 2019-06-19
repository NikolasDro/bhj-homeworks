'use strict'

let dropDownList = Array.from(document.querySelectorAll('.dropdown__list'))
let links = Array.from(document.querySelectorAll('.dropdown__link'))
let values = Array.from(document.querySelectorAll('.dropdown__value'))

for (let i = 0; i < dropDownList.length; i++) {
	dropDownList[i].closest('div').addEventListener('click', function() {
		dropDownList[i].classList.toggle('dropdown__list_active')
	})

	for (let j = 0; j < links.length; j++) {
		links[j].closest('li').addEventListener('click', function(event) {
			event.preventDefault();
			values[i].textContent = links[j].textContent;
		})
	}
}