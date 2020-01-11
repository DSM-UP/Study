let globalFunc; // 정의되지 않은 전역 함수
{
  let blockVar = "a"; // 블록 스코프에 있는 변수
  globalFun = function() {
    console.log(blockVar);
  };
}
globalFunc(); // "a"

let f; // 정의 되지 않은 함수
{
  let o = { note: "Safe" };
  f = function() {
    return o;
  };
}
let oRef = f();
oRef.note = "Not so safe after all";
