'use strict'

let dead = document.getElementById('dead')
let lost = document.getElementById('lost')
let getHole = index => document.getElementById(`hole${index}`)

function result() {
    if(dead.textContent == 10) {
        alert('Победа!')
        dead.textContent = 0
        lost.textContent = 0
    }else if (lost.textContent == 5){
        alert('Вы проиграли!')
        dead.textContent = 0
        lost.textContent = 0
    }
}

for (let i = 1; i < 10; i++) {
    let hole = getHole(i)
    hole.onclick = function() {
        if(hole.className.includes('hole_has-mole')) {
            dead.textContent++
            result()
        }else{
            lost.textContent++
            result()
        }
    }
}