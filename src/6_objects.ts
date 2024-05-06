class Rabbit {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }
  speak(line: string) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

const derivedProperties = () => {
  let killerRabbit = new Rabbit('killer');
  //@ts-ignore
  Rabbit.prototype.teeth = 'small';
  //@ts-ignore
  // console.log(killerRabbit.teeth);
  //@ts-ignore
  killerRabbit.teeth = 'long, sharp and bloody';
  //@ts-ignore
  // console.log(killerRabbit.teeth)
  //@ts-ignore
  // console.log((new Rabbit('basic')).teeth)
  //@ts-ignore
  return Rabbit.prototype.teeth
}

class Vec {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  plus(vector: Vec) {
    return new Vec(
      this.x + vector.x,
      this.y + vector.y
    )
  }

  minus(vector: Vec) {
    return new Vec(
      this.x - vector.x,
      this.y - vector.y
    )
  }
}

class Group {
  arr: Array<any>;
  index: number;

  constructor(el: Array<any> = []) {
    this.arr = el;
    this.index = -1;
  }

  [Symbol.iterator]() {
    return {
      next: this.next.bind(this)
    }
  }

  static from(el: Array<any>) {
    let array = [];
    for (const e of el) {
      if (!array.includes(e)) array.push(e);
    }
    return new this(array);
  }

  add(el: any) {
    if (this.arr.includes(el)) this.arr.push(el);
  }

  delete(el: any) {
    this.arr = this.arr.filter(e => e !== el);
  }

  has(el: any) {
    return this.arr.includes(el);
  }

  next() {
    this.index++;
    if (this.arr.length === this.index) return { done: true }
    return {
      value: this.arr[this.index], done: false
    }
  }
}

export {
  derivedProperties,
  Vec,
  Group
}
