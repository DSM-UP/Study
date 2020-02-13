function calculate(a, x, n) {
  if (x === 1) return a * n;
  return (a * (1 - Math.pow(x, n))) / (1 - x);
}

module.exports = calculate;

function calculate(r) {
  return (4 / 3) * Math.PI * Math.pow(r, 3);
}

module.exports = calculate;

const amanda_calculate = require("./amanda.js");
const tyler_calculate = require("./tyler.js");

console.log(amanda_calculate(1, 2, 5)); // 31
console.log(tyler_calculate(2)); // 33.510321638291124

const geometricSum = require("./amanda.js");
const sphereVolume = require("./tyler.js");

console.log(geometricSum(1, 2, 5)); // 31
console.log(sphereVolume(2)); // 33.510321638291124

module.exports = {
  geometricSum(a, x, n) {
    if (x === 1) return a * n;
    return (a * (1 - Math.pow(x, n))) / (1 - x);
  },
  arithmeticSum(n) {
    return ((n + 1) * n) / 2;
  },
  quadraticFormula(a, b, c) {
    const D = Math.sqrt(b * b - 4 * a * c);
    return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
  }
};

const amanda = require("./amanda.js");
console.log(amanda.geometricSum(1, 2, 5)); // logs 31
console.log(amanda.quadraticFormula(1, 2, -15)); // logs [ 3, -5 ]

exports.geometricSum = function(a, x, n) {
  if (x === 1) return a * n;
  return (a * (1 - Math.pow(x, n))) / (1 - x);
};

exports.arithmeticSum = function(n) {
  return (n * 1 * n) / 2;
};

exports.quadraticFormula = function(a, b, c) {
  const D = Math.sqrt(b * b - 4 * a * c);
  return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
};
