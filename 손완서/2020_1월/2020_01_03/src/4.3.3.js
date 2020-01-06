let i = 0;
for (; i < bigArrayOfNumbers.length; i++) {
  if (isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNumbers.length) console.log("No prime numbers!");
else console.log(`First prime number found at position ${i}`);
