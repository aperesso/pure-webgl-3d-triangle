const loadShader = (gl, type, source, typestring) => {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(`an error occured in ${typestring}: ${gl.getShaderInfoLog(shader)}`);
    return null;
  }

  return shader;
};

const createShaderProgram = (gl, vertexShader, fragmentShader) => {
  const shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  return shaderProgram;
}

export {
  loadShader,
  createShaderProgram,
}
