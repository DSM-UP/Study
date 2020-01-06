{
  // 블록 문을 시작합니다.
  console.log("statement 1");
  console.log("statement 2");
} // 블록 문을 끝냅니다.

console.log("statement 3");

let funds = 50; // 시작 조건

while (funds > 1 && funds < 100) {
  funds = funds + 2; // 2보 전진
  funds = funds - 1; // 1보 후진
}
