import { degToRad } from './utils';

export class Matrix4 {

  constructor() {
    this.data = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }

  print() {
    let string = '';
    this.data.forEach((data, index) => {
      string += `${data} `;
      if (index !== 0 && index % 4 === 3) string += `\n`
    })
    console.log(string);
  }

  set(newData) {
    if (newData.length !== 16) {
      console.log('unvalid new data')
      return ;
    }
    this.data = newData;
  }

  getRow(rowIndex) {
    const row = this.data.filter((d, i) => rowIndex === Math.floor(i/4));
    return row;
  }

  getColumn(colIndex) {
    const col = this.data.filter((d, i) => colIndex === i % 4);
    return col;
  }

  multiply(matB) {
    const dataB = matB.data;
    const dataA = this.data;

    const newData = new Array(16).fill(0).map((d, i) => {

      const rowIndex = Math.floor(i / 4);
      const colIndex = i % 4;

      const row = this.getRow(rowIndex);
      const col = matB.getColumn(colIndex);

      return row[0]*col[0]+row[1]*col[1]+row[2]*col[2]+row[3]*col[3];
    })

    this.data = newData;
  }

  translate(x, y, z) {

    const translationMatrix = new Matrix4();

    translationMatrix.set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, z, 1
    ]);

    this.multiply(translationMatrix);
  }

  scale(x, y, z) {

    const scaleMatrix = new Matrix4();

    scaleMatrix.set([
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, z, 0,
      0, 0, 0, 1,
    ])

    this.multiply(scaleMatrix);
  }

  rotateX(rad) {

    const rotMatrix = new Matrix4();

    const c = Math.cos(rad);
    const s = Math.sin(rad);

    rotMatrix.set([
       1, 0, 0, 0,
       0, c, s, 0,
       0, -s, c, 0,
       0, 0, 0, 1,
    ])

    this.multiply(rotMatrix);
  }

  rotateY(rad) {

    const rotMatrix = new Matrix4();

    const c = Math.cos(rad);
    const s = Math.sin(rad);

    rotMatrix.set([
      c, 0, -s, 0,
      0, 1, 0, 0,
      s, 0, c, 0,
      0, 0, 0, 1,
    ])

    this.multiply(rotMatrix);
  }

  rotateZ(rad) {

    const rotMatrix = new Matrix4();

    const c = Math.cos(rad);
    const s = Math.sin(rad);

    rotMatrix.set([
      c, s, 0, 0,
     -s, c, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ])

    this.multiply(rotMatrix);
  }
}
