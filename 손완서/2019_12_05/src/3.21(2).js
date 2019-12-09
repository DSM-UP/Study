let o = { a: 1 };
let p = o; // 이제 p는 o가 '가리키고 있는 것'을 가리킵니다.
p === o; // true
o = { a: 2 }; // 이제 o는 다른 것을 가리킵니다. {a: 1}을 수정한 것이 아닙니다.
p === o; // false
console.log(p); // {a: 1}

let q = { a: 1 };
q === { a: 1 }; // false

function change_o(o) {
  o.a = 999;
}

let o = { a: 1 };
change_o(o);
console.log(o); // {a: 999}
