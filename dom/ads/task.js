'use strict'

let rotator = Array.from( document.querySelectorAll('.rotator__case') );

let i = 0;
setInterval( function() {
	rotator[i].classList.toggle('rotator__case_active');
	i++;
	if (i === rotator.length) {
		i = 0;
	}
	rotator[i].classList.toggle('rotator__case_active');
}, 1000 );