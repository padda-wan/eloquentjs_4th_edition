import { minimum, isEven, countBs, countChar } from './3_functions'

describe("Functions - Minimum", () => {
  it("should return the smallest integer", () => {
    expect(minimum(0, 10)).toEqual(0);
    expect(minimum(0, -10)).toEqual(-10);
  });
});

describe("Functions - Recursion", () => {
  it("should return whether a number is even", () => {
    expect(isEven(50)).toEqual(true);
    expect(isEven(75)).toEqual(false);
    expect(isEven(-1)).toEqual(false);
  });
});

describe("Functions - Bean counting", () => {
  it("should return how many characters in string", () => {
    expect(countBs('BOB')).toEqual(2);
    expect(countChar("kakkerlak", "k")).toEqual(4);
  });
});


