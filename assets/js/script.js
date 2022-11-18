const contextMenu = document.querySelector(".wrapper")
const shareMenu = document.querySelector(".share-menu")

document.addEventListener("contextmenu", event => {
    event.preventDefault()

    let x = event.offsetX
    let y = event.offsetY

    let winWidth = window.innerWidth
    let winHeight = window.innerHeight

    let cmWidth = contextMenu.offsetWidth
    let cmHeight = contextMenu.offsetHeight

    if (x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px"

    }

    else {

        shareMenu.style.right = "-200px"
        shareMenu.style.left = ""
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y

    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
    contextMenu.style.visibility = "visible"
})

document.addEventListener("click", () => contextMenu.style.visibility = "hidden")