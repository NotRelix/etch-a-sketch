const canvas = document.querySelector('.canvas');
const canvasSizeBtn = document.querySelector('button');

let canvasSize = 16;

function handleMouseOver(e) {
  e.target.classList.add('hovered');
}

function createCanvas(canvasSize) {
  for (let row = 0; row < canvasSize; row++) {
    const rowCanvas = document.createElement('div');
    rowCanvas.setAttribute('class', 'row');
    for (let col = 0; col < canvasSize; col++) {
      const colCanvas = document.createElement('div');
      colCanvas.setAttribute('class', 'pixel');
      rowCanvas.appendChild(colCanvas);
    }
    canvas.appendChild(rowCanvas);
  }
}

function deleteCanvas(canvasSize) {
  for (let row = 0; row < canvasSize; row++) {
    canvas.removeChild(canvas.firstChild)
  }
}

function addPixelEventListener() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', handleMouseOver);
  })
}

createCanvas(canvasSize);
addPixelEventListener();

canvasSizeBtn.addEventListener('click', () => {
  const newCanvasSize = +prompt('Enter canvas size');
  if (newCanvasSize > 0 && newCanvasSize <= 100) {
    deleteCanvas(canvasSize);
    createCanvas(newCanvasSize);
    addPixelEventListener();
    canvasSize = newCanvasSize;
  }
})