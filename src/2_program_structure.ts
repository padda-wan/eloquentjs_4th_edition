const loopTriangle = () => {
  let str = '#';
  let triangle = '';
  triangle += `${str}\n`
  for (let i = 0; i < 6; i++) {
    str += '#';
    triangle += `${str}\n`
  }
  return triangle.trim();
}

const fizzBuzz = () => {
  let string = '';
  for (let i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0) { string += 'FizzBuzz\n'; continue; }
    if (i % 3 == 0) { string += 'Fizz\n'; continue; }
    if (i % 5 == 0) { string += 'Buzz\n'; continue; }
    string += `${i}\n`;
  }
  return string;
}

const chessBoard = (gridSize: number = 5) => {
  let string = '';
  let row = ''
  for (let i = 0; i < gridSize; i++) {
    row = '';
    for (let j = 0; j < gridSize; j++) {
      if (i % 2 == 0) {
        row += j % 2 == 0 ? ' ' : '#';
      } else {
        row += j % 2 == 0 ? '#' : ' ';
      }
    }
    string += i != (gridSize - 1) ? `${row}\n` : `${row}`;
  }
  return string;
}

export {
  loopTriangle,
  fizzBuzz,
  chessBoard
}
