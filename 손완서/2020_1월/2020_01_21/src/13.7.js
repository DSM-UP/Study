function findNeedle(haystack) {
  if (haystack.length === 0) return "no haystack here!";
  if (haystack.shift() === "needle") return "found it!";
  return findNeedle(haystack); // 건초더미에 들어있는 건초가 하나 줄었습니다.
}

findNeedle(["hay", "hay", "hay", "hay", "needle", "hay", "hay"]);

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}
