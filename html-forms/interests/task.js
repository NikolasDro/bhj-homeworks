'use strict'

const interests = document.querySelectorAll('.interest__check');

interests[0].addEventListener('change', function() {
	if (interests[0].checked) {
		interests[1].checked = true;
		interests[2].checked = true;
	} else {
		interests[1].checked = false;
		interests[2].checked = false;
	}
});

interests[3].addEventListener('change', function() {
	if (interests[3].checked) {
		interests[4].checked = true;
		interests[5].checked = true;
	} else {
		interests[4].checked = false;
		interests[5].checked = false;
	}
});