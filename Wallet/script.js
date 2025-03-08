function openn() {
    window.navigator.vibrate(400)
    const bg = document.querySelector(".bg")
    bg.style = "top: 150%; width: 260px; height: 260px;"
    document.querySelector(".open").style = "opacity: 0;"
    const wallet = document.querySelector(".wallet")
    wallet.style = "width: 260px; height: 260px;"
}

function openCards() {
    const background = document.querySelector(".card-background")
    background.querySelector(".cards").style.display = "block"
    background.style.display = "block"
    background.style.opacity = 1
}

function openPhoto() {
    const background = document.querySelector(".card-background")
    background.querySelector(".photo").style.display = "block"
    background.style.display = "block"
    background.style.opacity = 1
}

function openNote() {
    const background = document.querySelector(".card-background")
    background.querySelector(".note").style.display = "block"
    background.style.display = "block"
    background.style.opacity = 1
}

function back() {
    const background = document.querySelector(".card-background")
    background.style.opacity = 0
    setTimeout(function(){
        background.style.display = "none"
        background.querySelector(".cards").style.display = "none"
        background.querySelector(".photo").style.display = "none"
        background.querySelector(".note").style.display = "none"
    }, 400)
}
