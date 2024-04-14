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

const reverseArrayInPlace = (array: Array<any>) => {
  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    let tempVal = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempVal;
  }
  return array;
}

const arrayToList = (array: Array<any>) => {
  let prevObj = { value: undefined, rest: null };
  for (let i = array.length - 1; i > -1; i--) {
    prevObj = prepend(
      array[i],
      array.length - 1 == i ? null : prevObj
    )
  }
  return prevObj;
}

interface linkedList {
  value: number;
  rest: linkedList | null;
}

const prepend = (element: number, list: linkedList | null) => {
  return {
    value: element,
    rest: list
  };
}

const nth = (list: linkedList, index: number) => {
  let currentIndex = 0;
  const iter = (list: linkedList) => {
    if (currentIndex == index) return list.value;
    while (currentIndex !== index) {
      if (list.rest === null) return undefined;
      currentIndex++;
      return iter(list.rest);
    }
  }
  return iter(list);
}

const listToArray = (list: linkedList) => {
  let array = [];
  const accumulator = (list: linkedList) => {
    array.push(list.value);
    if (list.rest !== null) return accumulator(list.rest);
    if (list.rest === null) return array;
  }
  return accumulator(list)
}

const deepEqual = (object_1: any, object_2: any): boolean => {
  const areObjects = typeof object_1 == "object" &&
    object_1 != null &&
    typeof object_2 == "object" &&
    object_2 != null;

  if (!areObjects) return object_1 === object_2;

  const object1Keys = Object.keys(object_1);
  const object2Keys = Object.keys(object_2);

  if (object1Keys.length != object2Keys.length) {
    return false;
  }

  for (let i = 0; i < object1Keys.length; i++) {
    if (object1Keys[i] != object2Keys[i]) return false;
    if (!deepEqual(object_1[object1Keys[i]], object_2[object2Keys[i]])) return false;
  }

  return true;
}

export {
  range,
  sum,
  reverseArray,
  reverseArrayInPlace,
  arrayToList,
  listToArray,
  prepend,
  nth,
  deepEqual
};
