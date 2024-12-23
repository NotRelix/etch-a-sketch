const canvas = document.querySelector('.canvas');
const canvasSizeBtn = document.querySelector('.canvas-size-btn');
const toggle = document.querySelector('.toggle');

let canvasSize = 16;

function handleMouseOver(e) {
  let colorArray = [156, 156, 156];
  let opacity = e.target.style.opacity;
  if (isRandom) {
    colorArray = randomizeColor();
    opacity = 1;
  } else {
    if (opacity) opacity = opacity - 0.1;
    else opacity = 1;
  }
  e.target.style = `
    background-color: rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]});
    border: 1px solid rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]});
    opacity: ${opacity};
  `;
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

function randomizeColor() {
  const primary = +randomizePrimary();
  const secondary = +randomizeSecondary(primary);
  const colorValue = +randomizeColorValue();
  let colorArray = [0, 0, 0]
  colorArray[primary - 1] = 255;
  colorArray[secondary - 1] = colorValue;
  return colorArray;
}

function randomizePrimary() {
  return Math.floor(Math.random() * 3) + 1;
}

function randomizeSecondary(primary) {
  let secondary = Math.floor(Math.random() * 2) + 1;
  if (primary === 1) {
    if (secondary === 1) secondary = 2;
    else secondary = 3;
  } else if (primary === 2) {
    if (secondary === 2) secondary = 3;
  }
  return secondary;
}

function randomizeColorValue() {
  return Math.floor(Math.random() * 256);
}

let isRandom = false;
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
});

toggle.addEventListener('click', (e) => {
  const value = e.target.textContent.toLowerCase()
  if (value === 'randomize') {
    e.target.textContent = 'Normal';
    isRandom = true;
  } else if (value === 'normal') {
    e.target.textContent = 'Randomize';
    isRandom = false;
  }
});