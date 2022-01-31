// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const shakeButton = document.querySelector('.shake');
const increaseButton = document.querySelector('.increase-width');
const decreaseButton = document.querySelector('.decrease-width');
const squareButton = document.querySelector('.square');

// Setup our canvas for drawing
const ctx = canvas.getContext('2d');

// make a variable called height and width from the same properties on our canvas.
// create random x and y starting points on the canvas
const { height, width } = canvas;
const startX = Math.floor(Math.random() * width);
const startY = Math.floor(Math.random() * height);
let lineWidth = 5;
let hue = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.lineWidth = lineWidth;
ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(startX, startY);
ctx.stroke();

let x = startX;
let y = startY;

// write a draw function
function draw({ key }) {
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= lineWidth;
      break;
    case 'ArrowDown':
      y += lineWidth;
      break;
    case 'ArrowLeft':
      x -= lineWidth;
      break;
    case 'ArrowRight':
      x += lineWidth;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKeyDown(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear /shke function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

function increaseWidth() {
  lineWidth += 1;
  ctx.lineWidth = lineWidth;
}

function decreaseWidth() {
  lineWidth -= 1;
  ctx.lineWidth = lineWidth;
}

function drawSquare() {
  for (let size = 100; size > 0; size -= 1) {
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + size);
    ctx.stroke();
    ctx.lineTo(x + size, y + size);
    ctx.stroke();
    ctx.lineTo(x + size, y);
    ctx.stroke();
    ctx.lineTo(x + 100 - size, y);
    ctx.stroke();
  }
}

// listen for arrow keys
window.addEventListener('keydown', handleKeyDown);
shakeButton.addEventListener('click', clearCanvas);
increaseButton.addEventListener('click', increaseWidth);
decreaseButton.addEventListener('click', decreaseWidth);
squareButton.addEventListener('click', drawSquare);
