(function() {
  // IIFE 바디
})();

const message = (function() {
  const secret = "I'm a secret!";
  return `The secret is ${secret.length} characters long.`;
})();
console.log(message);

const f = (function() {
  let count = 0;
  return function() {
    return `I have been called ${++count} time(s).`;
  };
})();
f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
// ...
