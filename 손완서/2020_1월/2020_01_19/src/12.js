const book = [
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
  "Up above the world you fly,",
  "Like a tea tray in the sky.",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!"
];

const it = book.values();

it.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
it.next(); // { value: "How I wonder what you're at!", done: false }
it.next(); // { value: "Up above the world you fly,", done: false }
it.next(); // { value: "Like a tea tray in the sky.", done: false }
it.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
it.next(); // { value: "How I wonder what you're at!", done: false }
it.next(); // { value: undefined, done: true }
it.next(); // { value: undefined, done: true }
it.next(); // { value: undefined, done: true }

const it = book.values();
let current = it.next();
while (!current.done) {
  console.log(current.value);
  current = it.next();
}

const it1 = book.values();
const it2 = book.values();
// 어느 이터레이터도 아직 시작하지 않았습니다.

// it1으로 두 페이지를 읽습니다.
it1.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
it1.next(); // { value: "How I wonder what you're at!", done: false }

// it2로 한 페이지를 읽습니다.
it2.next(); // { value: "Twinkle, twinkle, little bat!", done: false }

// it1으로 한 페이지를 더 읽습니다.
it1.next(); // { value: "Up above the world you fly,", done: false }
