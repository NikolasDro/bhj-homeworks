'use strict'

function stopwatch() {
    let span = document.getElementById('timer')
    span.textContent --;
    //console.log(span);
    if(span.textContent <= 0) {
        span.textContent = 0;
        alert ('Вы победили в конкурсе!');
    }


}

setInterval (stopwatch, 1000)