import {
  range,
  sum,
  reverseArray,
  reverseArrayInPlace,
  arrayToList,
  listToArray,
  prepend,
  nth,
  deepEqual
} from "./4_objects_arrays";

describe("Objects and arrays - Sum of a range", () => {
  it("should return a range as an array", () => {
    const arr = range(1, 10);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return the sum of range", () => {
    const answer = sum(range(1, 10));
    expect(answer).toStrictEqual(55);
  });

  it("should return range an array with increment", () => {
    const arr = range(1, 10, 2);
    expect(arr).toStrictEqual([1, 3, 5, 7, 9]);
  });

  it("should return range an array with decrement", () => {
    const arr = range(5, 2, -1);
    expect(arr).toStrictEqual([5, 4, 3, 2]);
  });
});

describe("Data - Reversing an array", () => {
  it("should return a reversed array", () => {
    const arr = reverseArray(["A", "B", "C"]);
    expect(arr).toEqual(["C", "B", "A"]);
  });
  it("should return a reversed array in place", () => {
    const arr = reverseArrayInPlace([1, 2, 3, 4, 5]);
    expect(arr).toStrictEqual([5, 4, 3, 2, 1]);
  });
});

describe("Data - a list", () => {
  it("should return a list from an array", () => {
    const arr = arrayToList([10, 20]);
    const arr2 = arrayToList([1, 2, 3, 4, 5]);
    expect(arr).toEqual({ value: 10, rest: { value: 20, rest: null } });
    expect(arr2).toEqual({ value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: { value: 5, rest: null } } } } });
  });
  it("should return an array from a list", () => {
    expect(listToArray(arrayToList([10, 20, 30]))).toEqual([10, 20, 30]);
    expect(listToArray({ value: 10, rest: { value: 20, rest: null } })).toEqual([10, 20])
  });
  it("should return a new list", () => {
    expect(prepend(10, prepend(20, null))).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });
  it("should return the indexed object", () => {
    expect(nth(arrayToList([10, 20, 30]), 1)).toEqual(20);
  });
  it("should return undefined", () => {
    expect(nth(arrayToList([10, 20, 30]), 5)).toEqual(undefined);
  });
});
describe("Data - Deep comparison", () => {
  it("should return true", () => {
    expect(deepEqual({ here: { is: "an" }, object: 2 }, { here: { is: "an" }, object: 2 })).toEqual(true);
    expect(deepEqual("test", "test")).toEqual(true);
  });
  it("should return false", () => {
    expect(deepEqual({ here: { is: "an" }, object: 2 }, { here: { is: "an" }, object: 3 })).toEqual(false);
  });
});
