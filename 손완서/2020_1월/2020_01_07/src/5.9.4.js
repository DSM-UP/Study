let v, v0;
v = v0 = 9.8; // 먼저 v0가 9.8이 되고, 그다음 v가 9.8이 됩니다.

// while 문의 조건에 있는 할당을 보십시오. 먼저 n이 nums[i]의 값을 받고,
// 다음에는 표현식 전체가 그 값으로 평가되므로 숫자로 비교할 수 있습니다.
const nums = [3, 5, 15, 7, 5];
let n,
  i = 0;
while ((n = nums[i]) < 10 && i++ < nums.length) {
  console.log(`Number less than 10: ${n}`);
}
console.log(`Number greater than 10 found: ${n}.`);
console.log(`${nums.length - i - 1} numbers remain.`);
