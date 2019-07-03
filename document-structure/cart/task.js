'use strict'

let products = document.querySelectorAll('.product');
let controls = document.querySelectorAll('.product__quantity-controls');
let decrease = document.querySelectorAll('.product__quantity-control_dec');
let increase = document.querySelectorAll('.product__quantity-control_inc');
let number = document.querySelectorAll('.product__quantity-value');
let cart = document.querySelector('.cart__products');

for (let i = 0; i < products.length; i++) {
	controls[i].addEventListener('click', (event) => {
		if (event.target === decrease[i] && number[i].textContent == 0) {
			number[i].textContent;
		} else if (event.target === decrease[i]) {
			number[i].textContent--;
		} else if (event.target === increase[i]) {
			number[i].textContent++;
		}
	});
}

document.querySelector('.products').addEventListener('click', (event) => {
	let target = event.target;
	if (target.className != 'product__add') return;
	let productId = target.closest('.product').dataset.id;
	let productQuantity = target.closest('.product').querySelector('.product__quantity-value').textContent;
	if ( !cart.querySelector(`[data-id = "${productId}"]`) ) {
		let cartProduct = document.createElement('div');
		cart.appendChild(cartProduct);
		cartProduct.setAttribute('class', 'cart__product');
		cartProduct.setAttribute('data-id', productId);

		let productImg = document.createElement('img');
		cartProduct.appendChild(productImg);
		productImg.setAttribute('class', 'cart__product-image');
		productImg.setAttribute('src', target.closest('.product').querySelector('.product__image').getAttribute('src'));

		let productCount = document.createElement('div');
		cartProduct.appendChild(productCount);
		productCount.setAttribute('class', 'cart__product-count');
		productCount.innerText = productQuantity;
	} else {
		let item = cart.querySelector(`[data-id = "${productId}"]`);
		let addNumber = Number(productQuantity) + Number(item.textContent);
		item.querySelector('.cart__product-count').innerText = addNumber;
	}
});