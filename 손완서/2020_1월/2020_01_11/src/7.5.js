{
  // 외부 블록
  let x = "blue";
  console.log(x); // 'blue'
  {
    // 내부 블록
    let x = 3;
    console.log(x); // "3"
  }
  console.log(x); // "blue"
}
console.log(typeof x); // "undefined"; x는 스코프에 있지 않습니다.

{
  // 외부 블록
  let x = { color: "blue" };
  let y = x; // y와 x는 같은 객체를 가리킨다.
  let z = 3;
  {
    // 내부 블록
    let x = 5; // 이제 바깥의 x는 가려졌습니다.
    console.log(x); // 5
    console.log(y.color); // "blue"; y가 가리키는,
    // 외부 스코프의 x가 가리키는 객체는
    // 스코프 안에 있습니다.
    y.color = "red";
    console.log(z); // 3; z는 숨겨지지 않았습니다.
  }
  console.log(x.color); // "red"; 객체는 내부 스코프에서 수정됐습니다.
  console.log(y.color); // "red"; x와 y는 같은 객체를 가리킵니다.
  console.log(z); // 3
}
