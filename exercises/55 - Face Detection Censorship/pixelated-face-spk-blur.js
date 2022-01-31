console.log('it worrrrks!!!');

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const inputs = document.querySelectorAll('.controls input[type="range"]');
console.log(inputs);

const options = {
  blur: 0,
  scale: 1,
};

function updateOptions() {
  const { name, value } = this;
  options[name] = parseFloat(value);
  faceCanvas.style.filter = `blur(${options.blur * options.scale}px)`;
}

inputs.forEach((input) => {
  input.addEventListener('change', updateOptions);
  input.addEventListener('mousemove', updateOptions);
});

// const faceOverlay = document.querySelector('.faceOverlay');

const faceDetector = new window.FaceDetector();

console.log(video, canvas, faceCanvas, faceDetector);

async function populateVideo() {
  console.log('executing populateVideo');

  // stream returns a promise
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
    audio: false,
  });
  video.srcObject = stream;
  await video.play();

  console.dir(video);
  faceCanvas.style.filter = `blur(${options.blur * options.scale}px)`;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  console.log(stream);
}

function censorFace({ boundingBox: face }) {
  const width = face.width * options.scale;
  const height = face.height * options.scale;
  faceCanvas.width = width;
  faceCanvas.height = height;
  // faceCtx.imageSmoothingEnabled = true;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  faceCanvas.style.top = `${face.top - (height - face.height) / 2 + 23}px`; // no idea about the 23 here...
  faceCanvas.style.left = `${face.left - (width - face.width) / 2}px`;
  faceCtx.drawImage(
    canvas,
    face.x,
    face.y,
    face.width,
    face.height,
    0,
    0,
    width,
    height
  );
}

function drawFace(face) {
  // draws the full video onto the canvas
  ctx.drawImage(
    video,
    0,
    0,
    video.videoWidth,
    video.videoHeight,
    0,
    0,
    video.videoWidth,
    video.videoHeight
  );

  // mark the face with a frame
  // const { width, height, x, y } = face.boundingBox;
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.strokeStyle = '#ffc600';
  // ctx.lineWidth = 2;
  // ctx.strokeRect(x, y, width, height);

  // draws a face on the faceCanvas to overlay the video inside canvas
  censorFace(face);
}

async function detectFace() {
  const faces = await faceDetector.detect(video);
  requestAnimationFrame(detectFace);

  // callback function of forEach automatically gets passed element, index, array object
  faces.forEach(drawFace);
}

populateVideo().then(detectFace);
console.log('last call to console.log');
