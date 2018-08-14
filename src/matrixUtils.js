import { Matrix4 } from './matrix'

 const getModelMatrix = (position, scale, rotation) => {

  const modelMatrix = new Matrix4();

  modelMatrix.rotateX(rotation.x);
  modelMatrix.rotateY(rotation.y);
  modelMatrix.rotateZ(rotation.z);
  modelMatrix.scale(scale.x, scale.y, scale.z);
  modelMatrix.translate(position.x, position.y, position.z);

  return modelMatrix.data;
}

export {
  getModelMatrix
}
