import { SCRIPTS } from "./scripts";

interface Iscript {
  name: string;
  ranges: Array<any>;
  direction: string;
  year: number;
  living: boolean;
  link: string;
}

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

const characterScript = (code: number) => {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    }))
      return script;
  }
  return null;
}

const countBy = (items: Array<any>, groupName: Function) => {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++
    }
  }
  return counts;
}

const dominantDirection = (text: string) => {
  let scripts = countBy(text.split(''), (char: string) => {
    return characterScript(char.charCodeAt(0))?.direction
  })
  return scripts.reduce(
    (acc, val) => {
      return acc.count > val.count ? acc : val;
    }
  )?.name
}
export {
  getFirstElement,
  flatten,
  loop,
  every,
  dominantDirection
}
