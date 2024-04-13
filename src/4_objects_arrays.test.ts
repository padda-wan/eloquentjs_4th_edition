import { range, sum, reverseArray, reverseArrayInPlace } from "./4_objects_arrays";

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
