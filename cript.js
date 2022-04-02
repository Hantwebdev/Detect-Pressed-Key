var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var eResult = document.querySelector('.result')
var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')


document.addEventListener('keydown', (e) => {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    eResult.innerText = e.which

    alert.classList.add('hide')
    box.classList.remove('hide')
})