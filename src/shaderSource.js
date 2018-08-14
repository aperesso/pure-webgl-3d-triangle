export const vertexShaderSource = `
  attribute vec3 position;
  attribute vec3 color;

  uniform mat4 uModelMatrix;
  varying vec3 out_color;
  void main(void) {
    gl_Position = uModelMatrix * vec4(position, 1.0);
    out_color = color;
  }
`;

export const fragmentShaderSource = `
  precision mediump float;
  varying vec3 out_color;

  uniform float uTime;

  void main(void) {
    gl_FragColor = vec4(out_color, 1.);
  }
`
