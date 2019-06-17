'use strict'

let sliderPrev = document.getElementsByClassName('slider__arrow_prev').item(0);
let sliderNext = document.getElementsByClassName('slider__arrow_next').item(0);
let navigation = document.querySelector('.slider__arrows');
let sliderItems = document.getElementsByClassName('slider__item');
let sliderItemsArr = Array.from(sliderItems);
let activeSlide = 0;



navigation.onclick = function(event) {
	if (event.target === sliderNext && activeSlide === sliderItemsArr.length - 1) {
		sliderItems[sliderItemsArr.length - 1].classList.toggle('slider__item_active');
		activeSlide = 0;
	} else if (event.target === sliderNext) {
		activeSlide++;
		sliderItems[activeSlide - 1].classList.toggle('slider__item_active');
	} else if (event.target === sliderPrev && activeSlide === 0) {
		sliderItems[0].classList.toggle('slider__item_active');
		activeSlide = sliderItemsArr.length - 1;
	} else if (event.target === sliderPrev) {
		activeSlide--;
		sliderItems[activeSlide + 1].classList.toggle('slider__item_active');
	}

	sliderItems[activeSlide].classList.toggle('slider__item_active');
}