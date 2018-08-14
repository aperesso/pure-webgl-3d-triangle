import { createCanvas, resizeCanvas } from './canvasUtils';
import { loadShader, createShaderProgram } from './shaderUtils';
import { vertexShaderSource , fragmentShaderSource } from './shaderSource';
import { createTriangle } from './createTriangle'
import { Matrix4 } from './matrix';
import { getModelMatrix } from './matrixUtils';
import { degToRad } from './utils';

const main = () => {
  const canvas = createCanvas();
  window.addEventListener('resize', resizeCanvas(canvas));

  const gl = canvas.getContext('webgl');

  if (!gl) {
    console.log('Your browser does not support webgl');
    return ;
  }

  gl.clearColor(.3 , .3 , .3 , 1 );

  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource, 'vertex_shader');
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource, 'fragment_shader');
  const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
  createTriangle(gl, shaderProgram);

  const uModelMatrix = gl.getUniformLocation(shaderProgram, 'uModelMatrix');

  const uTime = gl.getUniformLocation(shaderProgram, 'uTime');

  const position = { x : 0, y : 0, z : 0 };
  const scale = { x : 1 , y : 1 , z : 1 };
  const rotation = { x : 0 , y : 0 , z : 0 };

  gl.useProgram(shaderProgram);

  const animate = (timeStamp) => {

    rotation.z += 0.01;
    rotation.x += 0.01;
    rotation.y += 0.01;

    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniformMatrix4fv(uModelMatrix, false, getModelMatrix(position, scale, rotation));
    gl.uniform1f(uTime, false, timeStamp/1000);
    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);
    gl.flush();
    window.requestAnimationFrame(animate);
  }

  animate();
}

main();
