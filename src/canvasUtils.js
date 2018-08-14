const createCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  return canvas;
};

const resizeCanvas = canvas => () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

export {
  createCanvas,
  resizeCanvas,
}
