const minimum = (x: number, y: number) => {
  return x > y ? y : x;
}

const isEven = (number: number): boolean => {
  if (number >= 0) {
    if (number == 0) return true;
    if (number == 1) return false;
    return isEven(number - 2);
  }
  if (number < 0) {
    if (number === -1) return false;
    return isEven(number + 2);
  }
}

const countBs = (string: string) => {
  return countChar(string, 'B');
}

const countChar = (string: string, char: string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count++;
    }
  }
  return count;
}

export {
  minimum,
  isEven,
  countBs,
  countChar
}
