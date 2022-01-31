const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawRectangles() {
  ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
  ctx.fillRect(0, 0, 100, 100);
  ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
  ctx.fillRect(50, 50, 100, 100);
  ctx.fillRect(100, 100, 100, 100);
  ctx.strokeRect(20, 20, 50, 50);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();

  // Stroked triangle
  ctx.beginPath();
  ctx.moveTo(125, 125);
  ctx.lineTo(125, 45);
  ctx.lineTo(45, 125);
  ctx.closePath();
  ctx.stroke();
}

window.addEventListener('load', drawRectangles);
