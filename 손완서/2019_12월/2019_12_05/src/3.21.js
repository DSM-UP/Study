let a = 1; // 원본
let b = a; // 사본. b는 1입니다. a가 아닙니다.
a = 2; // 원본의 값을 바꿈
console.log(b); // 1. 사본의 값은 바뀌지 않음

a === 2; // true

function change(a) {
  a = 5;
}

a = 3;
change(a);
console.log(a); // 3

let o = { a: 1 };
let p = o; // 이제 p는 o가 '가리키고 있는 것'을 가리킵니다.
o.a = 2;
console.log(p); // {a: 2}
