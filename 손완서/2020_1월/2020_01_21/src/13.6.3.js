function sumOfSquares(arr) {
  return sum(arr, x => x * x);
}

function newSummer(f) {
  return arr => sum(arr, f);
}

const sumOfSquares = newSummer(x => x * x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));
sumOfSquares([1, 2, 3]); // returns 14
sumOfCubes([1, 2, 3]); // returns 36
