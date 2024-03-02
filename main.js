const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'blue', 'yellow', 'coral', 'teal']

body.style.background = "slategray"

//adding events on click

button.addEventListener("click", changecolor)
function changecolor(){
    const colorIndex = Math.floor(Math.random()*color.length)
    console.log ( colorIndex)
    body.style.background = color[colorIndex]
}