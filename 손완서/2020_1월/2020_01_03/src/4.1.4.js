// m 이상 n 이하의 무작위 정수를 반환합니다.
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// 크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위 반환합니다.
function randFace() {
  return ["crown", "anchor", "heart", "space", "club", "diamond"][rand(0, 5)];
}
