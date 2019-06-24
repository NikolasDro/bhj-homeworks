'use strict'


let reveal = document.getElementsByClassName(`reveal`);
let revealLength = reveal.length;

let isInViewport = function(event) {
    let viewPortHeight = window.innerHeight;

    for (let i = 0; i < revealLength; i++) {
        let elementBottom = reveal.item(i).getBoundingClientRect().bottom;

        if (elementBottom < viewPortHeight) {
            reveal.item(i).classList.add(`reveal_active`);
        };

        if (reveal.item(i).classList.contains(`reveal_active`)) {       // Дополнительное условие чтобы элемент исчезал 

            if (elementBottom > viewPortHeight || elementBottom < 0) {
                reveal.item(i).classList.remove(`reveal_active`);
            };
            
        }            
    }    
}

document.addEventListener(`scroll`, isInViewport);