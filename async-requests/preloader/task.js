'use strict'

let loader = document.getElementsByClassName('loader_active')[0];
let items = document.getElementById('items');

let exchangeTemplate = (CharCode, Value) => {
  let exchangeItem = document.createElement('div');
  exchangeItem.classList.add('item');
  let exchangeCode = document.createElement('div');
  exchangeCode.classList.add('item__code');
  exchangeCode.innerText = CharCode;
  let exchangeValue = document.createElement('div');
  exchangeValue.classList.add('item__value');
  exchangeValue.innerText = Value;
  let exchangeCurrency = document.createElement('div');
  exchangeCurrency.classList.add('item__currency');
  exchangeCurrency.innerText = 'руб.';
  exchangeItem.appendChild(exchangeCode);
  exchangeItem.appendChild(exchangeValue);
  exchangeItem.appendChild(exchangeCurrency);
  return exchangeItem;
};

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    var exchangeRates = JSON.parse(xhr.responseText);
    let exchangeRatesValute = exchangeRates.response.Valute;
    for (let item in exchangeRatesValute) {
      items.appendChild(exchangeTemplate(exchangeRatesValute[item].CharCode, exchangeRatesValute[item].Value));
    }
  }
});