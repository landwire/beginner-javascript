console.log('it worrrrks');

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const SIZE = 10;
// const faceOverlay = document.querySelector('.faceOverlay');

const faceDetector = new window.FaceDetector();

console.log(video, canvas, faceCanvas, faceDetector);

async function populateVideo() {
  console.log('executing populateVideo');

  // stream returns a promise
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();

  console.dir(video);

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
  console.log(stream);
}

function drawFace(face) {
  const { width, height, x, y } = face.boundingBox;
  // console.log({ width, height, x, y });
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(x, y, width, height);
}

function censorFace({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // faceOverlay.style.width = `${faceBox.width}px`;
  // faceOverlay.style.height = `${faceBox.height}px`;
  // faceOverlay.style.top = `${faceBox.top}px`;
  // faceOverlay.style.left = `${faceBox.left}px`;
  faceCtx.drawImage(
    video,
    face.x,
    face.y,
    face.width,
    face.height,
    face.x,
    face.y,
    SIZE,
    SIZE
  );

  faceCtx.drawImage(
    faceCanvas,
    face.x,
    face.y,
    SIZE,
    SIZE,
    face.x,
    face.y,
    face.width,
    face.height
  );
}

async function detectFace() {
  const faces = await faceDetector.detect(video);
  requestAnimationFrame(detectFace);

  // callback function of forEach automatically gets passed element, index, array object
  faces.forEach(drawFace);
  faces.forEach(censorFace);
}

populateVideo().then(detectFace);
console.log('last call to console.log');
