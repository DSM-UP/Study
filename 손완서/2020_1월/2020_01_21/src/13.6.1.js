const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
  function rotate(p) {
    return {
      x: p.x * cos(theta) - p.y * sin(theta),
      y: p.x * sin(theta) + p.y * cos(theta)
    };
  },
  function scale(p) {
    return { x: p.x * zoom, y: p.y * zoom };
  },
  function translate(p) {
    return { x: p.x + offset[0], y: p.y + offset[1] };
  }
];

// 이제 pipeline은 2D 변형에 필요한 함수의 배열입니다.
// 점 하나를 변형해 봅시다.
const p = { x: 1, y: 1 };
let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
  p2 = pipeline[i](p2);
}

// p2는 이제 p1을 좌표 원점 기준으로 45도 회전하고
// 원점에서 2 단위만큼 떨어뜨린 후
// 1단위 오른쪽, 3단위 아래쪽으로 움직인 점입니다.
