function addThreeSquareAddFiveTakeSquareRoot(x) {
  // 설마 이런 이름을 짓지는 않겠지만...
  return Math.sqrt(Math.pow(x + 3, 2) + 5);
}

// 별명을 쓰기 전
const answer =
  (addThreeSquareAddFiveTakeSquareRoot(5) +
    addThreeSquareAddFiveTakeSquareRoot(2)) /
  addThreeSquareAddFiveTakeSquareRoot(7);

// 별명을 쓰면 이렇게 바뀝니다.
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer = (f(5) + f(2)) / f(7);

const Money = require("math-money"); // require은 라이브러리를 불러오는 노드 함수입니다.
const oneDollar = Money.Dollar(1);

// Money.Dollar도 길게 느껴지면 이렇게 해도 됩니다.
const Dollar = Money.Dollar;
const twoDollars = Dollar(2);
// oneDollar와 twoDollars는 같은 타입의 인스턴스입니다.
