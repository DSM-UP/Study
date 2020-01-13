const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => (a += x), 0);

const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => (a += x));

const words = [
  "Beachball",
  "Rodeo",
  "Angel",
  "Aardvark",
  "Xylophone",
  "November",
  "Chocolate",
  "Papaya",
  "Uniform",
  "Joker",
  "Clover",
  "Bali"
];
const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) a[x[0]] = [];
  a[x[0]].push(x);
  return a;
}, {});

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
// 도널드 커누스가 분산 계산을 위해 만든 알고리즘입니다.
// 컴퓨터 프로그래밍의 예술: 준수치적 알고리즘(개적 3판)
const stars = data.reduce(
  (a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta / a.N;
    a.M2 += delta * (x - a.mean);
    return a;
  },
  { N: 0, mean: 0, M2: 0 }
);
if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}

const words = [
  "Beachball",
  "Rodeo",
  "Angel",
  "Aardvark",
  "Xylophone",
  "November",
  "Chocolate",
  "Papaya",
  "Uniform",
  "Joker",
  "Clover",
  "Bali"
];
const longWords = words
  .reduce((a, x) => (w.length > 6 ? a + " " + x : a), "")
  .trim();
// longWords: "Beachball Aardvark Xylophone November Chocolate Uniform"
