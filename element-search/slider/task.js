'use strict'

//let sliderPrev = document.getElementsByClassName('slider__arrow_prev').item(0);
//let sliderNext = document.getElementsByClassName('slider__arrow_next').item(0);
let navigation = Array.from(document.getElementsByClassName('slider__arrow'));
let sliderItems = Array.from(document.getElementsByClassName('slider__item'));
//let sliderItemsArr = Array.from(sliderItems);
let activeSlide = 0;



for (let item of navigation) {
	if (item.className.includes('slider__arrow_next')) {
		item.onclick = function() {
			sliderItems[activeSlide].className = 'slider__item';
			activeSlide++;
			if (activeSlide === sliderItems.length) {
			activeSlide = 0;
			}
			sliderItems[activeSlide].className = 'slider__item slider__item_active';
		}
	}
	if (item.className.includes('slider__arrow_prev')) {
		item.onclick = function() {
			sliderItems[activeSlide].className = 'slider__item';
			activeSlide--;
			if (activeSlide < 0 ) {
				activeSlide = sliderItems.length - 1;
			}
			sliderItems[activeSlide].className = 'slider__item slider__item_active';
		}
	}
}