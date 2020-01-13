const cart = [
  { name: "Widget", price: 9.95 },
  { nme: "Gadget", price: 22.95 }
];
const names = cart.map(x => x.name); // ["Widget", "Gadget"]
const prices = cart.map(x => x.price); // [9.95, 22.95]
const discountPrices = prices.map(x => x * 0.8); // [7.96, 18.36]

const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i] }));
// cart: [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }]

// 카드 덱을 만듭니다.
const cards = [];
for (let suit of ["H", "C", "D", "S"]) // 하트, 클로버, 다이아몬드, 스페이드
  for (let value = 1; value <= 13; value++) cards.push({ suit, value });

// value가 2인 카드
cards.filter(c => c.value === 2); // [ { suit: 'H', value: 2 }, { suit: 'C', value: 2 }, {suit: 'D', value: 2}, { suit: 'S', value: 2 } ]

// 여기서부터는 지면을 생각해서 반환된 배열의 길이만 적습니다.

// 다이아몬드
cards.filter(c => c.suit === "D"); // length: 13

// 킹, 퀸, 주니어
cards.filter(c => c.value > 10); // length: 12

// 하트의 킹, 퀸 주니어
cards.filter(c => c.value > 10 && c.suit === "H"); // length: 3

function cardToString(c) {
  const suits = { H: "/u2665", C: "/u2663", D: "/u2666", S: "/u2660" };
  const values = { 1: "A", 11: "J", 12: "Q", 13: "K" };
  // cardToString을 호출할 때마다 매번 값을 만드는 건 그리 효율적인 방법이 아닙니다.
  // 더 효율적인 방법은 독자의 연습문제로 남기겠습니다.
  for (let i = 2; i <= 10; i++) values[i] = i;
  return values[c.value] + suits[c.suit];
}

// value가 2인 카드
cards.filter(c => c.value === 2).map(cardToString); // [ "2♥", "2♣", "2 ", "2♠"]

// 하트의 킹, 퀸 주니어
cards.filter(c => c.value > 10 && c.suit === "H").map(cardToString); // [ "J♥", "Q♥", "K♥" ]
