'use strict'

let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')
let modalClose = document.getElementsByClassName('modal__close_times')
let modalShow = document.getElementsByClassName('show-success').item(0)

modalMain.classList.toggle('modal_active')
document.body.onclick = function(event) {
    if (event.target === modalClose[0]) {
        modalMain.classList.toggle('modal_active')
    }else if (event.target === modalClose[1]) {
        modalSuccess.classList.toggle('modal_active')
    }
}

modalShow.onclick = function() {
    modalMain.classList.toggle('modal_active')
    modalSuccess.classList.toggle('modal_active')
}