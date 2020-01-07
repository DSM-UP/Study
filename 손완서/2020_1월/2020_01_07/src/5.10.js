// 객체 선언
const obj = { b: 2, c: 3, d: 4 };

// 해체 할당
const { a, b, c } = obj;
a; // undefined: obj에는 "a" 프로퍼티가 없습니다.
b; // 2
c; // 3
d; // ReferenceError: "d"는 정의되지 않았습니다.

const obj = { b: 2, c: 3, d: 4 };
let a, b, c;

// 에러가 일어납니다.
{a, b, c} = obj;

// 동작합니다.
({a, b, c} = obj);

// 배열 선언
const arr = [1, 2, 3];

// 배열 해체 할당
let [x, y] = arr;
x;  // 1
y;  // 2
z;  // ReferenceError: "z"는 정의되지 않았습니다.

const arr = [1, 2, 3, 4, 5];

let [x, y, ...rest] = arr;
x;      // 1
y;      // 2
rest;   // [3, 4, 5]

let a = 5, b = 10;
[a, b] = [b, a];
a; // 10
b; // 5