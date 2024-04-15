const getFirstElement = (f: any, array: Array<any>): undefined | any => {
  return array.find(f);
}

const flatten = (arrays: Array<any>) => {
  return arrays.reduce(
    (acc: any, el: Array<any>) => {
      return acc.concat(el)
    }, []);
}

const loop = (value: any, test: Function, update: Function, body: Function) => {
  let output = '';
  while (test(value)) {
    output += body(value);
    value = update(value);
  }
  return output;
}

const every = (array: Array<any>, test: Function) => {
  for (const el of array) {
    if (!test(el)) return false;
  }
  return true;
}

export {
  getFirstElement,
  flatten,
  loop,
  every
}
