'use strict'

let tabs = Array.from(document.querySelectorAll('.tab'))
let tabContent = Array.from(document.querySelectorAll('.tab__content'))

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', function() {
		tabs[i].classList.toggle('tab_active');
		tabContent[i].classList.toggle('tab__content_active');
		for(let j = 0; j < tabs.length; j++) {
			if (i != j && tabs[j].classList.contains('tab_active')) {
				tabs[j].classList.toggle('tab_active');
				tabContent[j].classList.toggle('tab__content_active');
			}
		}
	});
}