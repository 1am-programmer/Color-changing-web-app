//JavaScript
const button = document.querySelector("button");
const body = document.querySelector("body");

//adding events on click. We'll need functions
button.addEventListener("click",changecolor);

function changecolor() {
// Generate radom RGB values
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

// Set the background color using the generated RGB values
body.style.backgroundColor = 'rgb(${red}, ${green}, ${blue})';
}