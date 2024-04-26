import {
  getFirstElement,
  flatten,
  loop,
  every,
  dominantDirection
} from './5_higher_order_functions';

describe("Higher order functions - custom tests", () => {
  it("should return the first element greater than 3", () => {
    expect(getFirstElement(e => e > 3, [1, 2, 3, 4])).toEqual(4);
  });
});
describe("Higher order functions - flattening", () => {
  it("should return a flattened array", () => {
    expect(flatten([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
describe("Higher order functions - your own loop", () => {
  it("should loop", () => {
    expect(loop(3, n => n > 0, n => n = n - 1, (n) => n + '\n')).toEqual('3\n2\n1\n');
  });
});
describe("Higher order functions - everything", () => {
  it("should confirm if all elements pass a test", () => {
    expect(every([1, 3, 5], n => n < 10)).toEqual(true);
    expect(every([2, 4, 16], n => n < 10)).toEqual(false);
    expect(every([], n => n < 10)).toEqual(true);
  });
});
describe("Higher order functions - dominant writing direction", () => {
  it("should return ltr", () => {
    expect(dominantDirection("Hello!")).toEqual('ltr');
  });
  it("should return rtl", () => {
    expect(dominantDirection("Hey, مساء الخير")).toEqual('rtl');
  });
});
