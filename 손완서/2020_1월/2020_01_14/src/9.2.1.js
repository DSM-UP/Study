class Car {
  constructor() {}
}

const car1 = new Car();
const car2 = new Car();

car1 instanceof Car; // true
car1 instanceof Array; // false

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ["P", "N", "R", "D"];
    this.userGear = this.userGears[0];
  }
  shift(gear) {
    if (this.userGears.indexOf(gear) < 0)
      throw new Error(`Invalid gear: ${gear}`);
    this.useGear = gear;
  }
}

const car1 = new Car("Telsa", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift("D");
car2.shift("R");

car1.userGear; // "D"
car2.userGear; // "R"

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ["P", "N", "R", "D"];
    this._userGear = this._userGears[0];
  }

  get userGear() {
    return this._userGear;
  }
  set userGear(value) {
    if (this._userGear.indexOf(vluae) < 0)
      throw new Error(`Invalid gear: ${value}`);
    this._userGear = value;
  }

  shift(gear) {
    this.userGear = gear;
  }
}

const Car = (function() {
  const carProps = new WeakMap();

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ["P", "N", "R", "D"];
      carProps.set(this, { userGear: this._userGears[0] });
    }

    get userGear() {
      return carProps.get(this).userGear;
    }
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0)
        throw new Error(`Invalid gear: ${value}`);
      carProps.get(this).userGear = value;
    }

    shift(gear) {
      this.userGear = gear;
    }
  }

  return Car;
})();
