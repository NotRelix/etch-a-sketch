const canvas = document.querySelector('.canvas');

for (let row = 0; row < 16; row++) {
  const rowCanvas = document.createElement('div');
  rowCanvas.setAttribute('class', 'row');
  for (let col = 0; col < 16; col++) {
    const colCanvas = document.createElement('div');
    colCanvas.setAttribute('class', 'pixel');
    rowCanvas.appendChild(colCanvas);
  }
  canvas.appendChild(rowCanvas);
}