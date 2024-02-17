'use strict';

let canvas;
let context;

window.onload = main();

function main() {

  const audioContext = new AudioContext();

  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  const sfx = Object.freeze({
    HIT: new Audio('./assets/hit.ogg'),
    PRESS: new Audio('./assets/press.ogg'),
    REACHED: new Audio('./assets/reached.ogg'),
  })

  sfx.HIT.play()

  draw()
}

function draw() {

  // Get a random color, red or blue
  let randomColor = Math.random() > 0.5 ? '#c1c1c1' : '#00000';

  // Draw a rectangle
  context.fillStyle = randomColor;
  context.fillRect(20, 50, 200, 175);
}

