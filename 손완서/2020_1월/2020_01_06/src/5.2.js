const x = 5;
const y = 3 - -x; // y는 8입니다.

const s = "5";
const y = 3 + +s; // y는 8입니다. 단항 플러스를 사용하지 않았다면
// 문자열 병합이 일어나서 결과는 "35"가 됩니다.

// 여기서는 굳이 단항 플러스가 필요하지 않지만 줄을 잘 맞출 수 있습니다.
const x1 = 0,
  x2 = 3,
  x3 = -1.5,
  x4 = -6.33;
const p1 = -x1 * 1;
const p2 = +x2 * 2;
const p3 = +x3 * 3;
const p4 = -x4 * 4;

let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;

let x = 2;
const r1 = x++ + x++;
//         ((x++) + (x++))
//         ( 2 + (x++))     왼쪽에서 오른쪽으로 진행합니다. x는 지금 3입니다.
//         ( 2 + 3 )        x는 지금 4입니다.
//             5            결과는 5, x는 4입니다.
const r2 = ++x + ++x;
//         ((++x) + (++x))
//         ( 5 + (++x))     왼쪽에서 오른쪽으로 진행합니다. x는 지금 5입니다.
//         ( 5 + 6 )        x는 지금 4입니다.
//             5            결과는 11, x는 6입니다.
const r3 = x++ + ++x;
//         ((x++) + (++x))
//         ( 6 + (++x))     왼쪽에서 오른쪽으로 진행합니다. x는 지금 7입니다.
//         ( 6 + 8 )        x는 지금 8입니다.
//             14           결과는 14, x는 8입니다.
//
// 뒤는 생략합니다.
