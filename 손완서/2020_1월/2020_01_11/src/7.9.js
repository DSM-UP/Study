f(); // 'f'
function f() {
  console.log("f");
}

f(); // ReferenceError: f는 정의되지 않았습니다.
let f = function() {
  console.log("f");
};
