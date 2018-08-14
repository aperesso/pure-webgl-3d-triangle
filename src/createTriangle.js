const createTriangleVertex = gl => {
  const triangleVertex = [
    -0.5 , -0.5 , -5,  // bottom left
     0.5 , -0.5 , -5,  // bottom right
     0.0 ,  0.5 , -5]; // top right

  const triangleVertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertex), gl.STATIC_DRAW);
  return triangleVertexBuffer;
}

const createTriangleColor = gl => {
  const triangleColor = [
    0.5 , 1. , 1.,
    1. , 0.5 , 1.,
    1. , 1. , 0.5
  ];

  const triangleColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleColor), gl.STATIC_DRAW);
  return triangleColorBuffer;
}


const createTriangleFaces = gl => {
  const triangleFaces = [0, 1, 2];

  const triangleFacesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleFacesBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(triangleFaces), gl.STATIC_DRAW);
  return triangleFacesBuffer;
}

const createTriangle = (gl, shaderProgram) => {
  const triangleVertexBuffer = createTriangleVertex(gl);
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
  const position = gl.getAttribLocation(shaderProgram, 'position');
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 4 * 3, 0) ;
  gl.enableVertexAttribArray(position);

  const triangleColorBuffer = createTriangleColor(gl);
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleColorBuffer);
  const color = gl.getAttribLocation(shaderProgram, 'color');
  gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 4 * 3, 0);
  gl.enableVertexAttribArray(color);
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleColorBuffer);

  const triangleFacesBuffer = createTriangleFaces(gl);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleFacesBuffer);
}

export {
  createTriangle
}
