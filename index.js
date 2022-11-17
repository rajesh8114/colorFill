const color = document.getElementById('click')
const textcolor = document.getElementById('color_change')
const body = document.body;

function randomColor(){
    return Math.floor(Math.random()*255);
}

color.addEventListener('click',changecolor)

function changecolor(){
    const color1 = randomColor();
    const color2 = randomColor();
    const color3 = randomColor();
const rgbString = `rgb(${color1},${color2},${color3})`

body.style.background = rgbString;
textcolor.innerText = rgbString;
}