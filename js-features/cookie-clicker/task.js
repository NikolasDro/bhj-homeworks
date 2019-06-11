'use strict'

let cookie = document.getElementById('cookie')
let counter = document.getElementById('clicker__counter')

cookie.onclick = function() {
    counter.textContent ++

    if(counter.textContent % 2 !== 0) {
        cookie.width = 220
        cookie.height = 148
        
    }else{
        cookie.width = 200
        cookie.height = 128
    }
}