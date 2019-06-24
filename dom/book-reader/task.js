'use strict'

let fontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');

for (let i = 0; i < fontSize.length; i++) {
	fontSize[i].addEventListener('click', function(e) {
		e.preventDefault();
		fontSize[i].classList.add('font-size_active');
		if (fontSize[i].classList.contains('font-size_small')) {
			book.classList.add('book_fs-small');
		} else if (fontSize[i].classList.contains('font-size_big')) {
			book.classList.add('book_fs-big');
		}

		for (let j = 0; j < fontSize.length; j++) {
			if (j != i && fontSize[j].classList.contains('font-size_active') && fontSize[j].classList.contains('font-size_big')) {
				fontSize[j].classList.remove('font-size_active');
				book.classList.remove('book_fs-big');
			} else if (j != i && fontSize[j].classList.contains('font-size_active') && fontSize[j].classList.contains('font-size_small')) {
				fontSize[j].classList.remove('font-size_active');
				book.classList.remove('book_fs-small');
			} else if (j != i && fontSize[j].classList.contains('font-size_active')) {
				fontSize[j].classList.remove('font-size_active');
			}
		}
	});
}