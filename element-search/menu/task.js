'use strict'

let menuLinks = document.querySelectorAll('.menu__link');
let menuSub = document.querySelectorAll('.menu_sub');

document.querySelector('.menu_main').onclick = function(event) {
	if (event.target === menuLinks[1] && menuSub[1].classList.contains('menu_active')) {
		menuSub[1].classList.toggle('menu_active');
		menuSub[0].classList.toggle('menu_active');
		return false;
	} else if (event.target === menuLinks[1]) {
		menuSub[0].classList.toggle('menu_active');
		return false;
	} else if (event.target === menuLinks[5] && menuSub[0].classList.contains('menu_active')) {
		menuSub[0].classList.toggle('menu_active');
		menuSub[1].classList.toggle('menu_active');
		return false;
	} else if (event.target === menuLinks[5]) {
		menuSub[1].classList.toggle('menu_active');
		return false;
	}
}