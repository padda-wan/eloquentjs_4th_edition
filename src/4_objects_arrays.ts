const range = (start: number, end: number, increment: number = 1) => {
  let arr = [];
  if (increment === 0) return;
  if (increment > 0) {
    for (let i = start; i <= end; i += increment) {
      arr.push(i)
    }
  }
  if (increment < 0) {
    for (let i = start; i >= end; i += increment) {
      arr.push(i)
    }
  }
  return arr;
};

const sum = (array: Array<number>) => {
  let sum = 0;
  array.map((el) => {
    sum += el;
  })
  return sum;
}

const reverseArray = (array: Array<string>) => {
  let reversedArray = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = array[(array.length - 1) - i];
  }
  return reversedArray;
}

const reverseArrayInPlace = (array: Array<string>) => {
  array.unshift(array.pop());
  return [];
  return reverseArrayInPlace(array);
}

export {
  range,
  sum,
  reverseArray,
  reverseArrayInPlace
};
