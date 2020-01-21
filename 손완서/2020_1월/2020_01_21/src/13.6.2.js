function sum(arr, f) {
  // 함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null 함수를 씁니다.
  if (typeof f != "function") f = x => x;

  return arr.reduce((a, x) => (a += f(x)), 0);
}
sum([1, 2, 3]); // 6
sum([1, 2, 3], x => x * x); // 14
sum([1, 2, 3], x => Math.pow(x, 3)); // 36
