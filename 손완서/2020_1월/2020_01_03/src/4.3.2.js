let firstPrime = null;
for (let n of bigArrayOfNumbers) {
  if (isPrime(n) && firstPrime === null) firstPrime = n;
}

let firstPrime = null;
for (let n of bigArrayOfNumbers) {
  if (isPrime(n)) {
    firstPrime = n;
    break;
  }
}
