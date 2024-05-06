import { derivedProperties, Vec, Group } from './6_objects'

describe("6 Objects - derived properties", () => {
  it("should return 'small'", () => {
    expect(derivedProperties()).toEqual('small');
  });
});

describe("6 Objects - A vector type", () => {
  it("should return new vector", () => {
    expect(new Vec(1, 2).plus(new Vec(2, 3))).toEqual({ "x": 3, "y": 5 });
    expect(new Vec(1, 2).minus(new Vec(2, 3))).toEqual({ x: -1, y: -1 });
    expect(new Vec(3, 4).length).toEqual(5);
  });
});

describe("6 Objects - Groups", () => {
  it("should return new Group", () => {
    let group = Group.from([10, 10, 20, 10, 20]);
    expect(group.has(10)).toEqual(true)
    expect(group.has(30)).toEqual(false)
    group.add(10);
    group.delete(10);
    expect(group.has(10)).toEqual(false)
  });
  it("should be an instance of Group", () => {
    expect(new Group() instanceof Group).toBe(true);
  });
  it("should iterate over the Group", () => {
    let res = "";
    for (let value of Group.from(["a", "b", "c", "a"])) {
      res += `${value}\n`
    }
    expect(res).toBe('a\nb\nc\n');
  });
});

