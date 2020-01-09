getGreeting(); // "Hello world!"
getGreeting; // function getGreeting()

const f = getGreeting;
f(); // "Hello world!"

const o = {};
o.f = getGreeting;
o.f(); // "Hello world!"

const arr = [1, 2, 3];
arr[1] = getGreeting; // arr은 이제 [1, function getGreeting(), 2]입니다.
arr[1](); // "Hello world!"
