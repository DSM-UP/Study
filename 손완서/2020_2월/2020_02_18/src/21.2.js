const obj = { foo: "bar" };
Object.getOwnPropertyDescriptor(obj, "foo");

Object.defineProperty(obj, "foo", { writable: false });

obj.foo = 3;
// TypeError: Cannot assign to read only property 'foo' of [object Object]

Object.defineProperty(obj, "color", {
  get: function() {
    return this._color;
  },
  set: function(value) {
    this._color = value;
  }
});

Object.defineProperty(obj, "name", {
  value: "Cynthia"
});
Object.defineProperty(obj, "greet", {
  value: function() {
    return `Hello, my name is ${this.name}!`;
  }
});

const arr = [3, 1.5, 9, 2, 5.2];
arr.sum = function() {
  return this.reduce((a, x) => a + x);
};
arr.avg = function() {
  return this.sum() / this.length;
};
Object.defineProperty(arr, "sum", { enumerable: false });
Object.defineProperty(arr, "avg", { enumerable: false });

const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperty(arr, "sum", {
  value: function() {
    return this.reduce((a, x) => a + x);
  },
  enumerable: false
});
Object.defineProperty(arr, "avg", {
  value: function() {
    return this.sum() / this.length;
  },
  enumerable: false
});

const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperties(arr, {
  sum: {
    value: function() {
      return this.reduce((a, x) => a + x);
    },
    enumerable: false
  },
  avg: {
    value: function() {
      return this.sum() / this.length;
    },
    enumerable: false
  }
});
