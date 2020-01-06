const n = 5;
const s = "5";
n === s; // false -- 타입이 다릅니다.
n !== s; // true
n === Number(s); // true -- 문자열 "5"를 숫자 5로 변환했습니다.
n !== Number(s); // false
n == s; // true; 권장하지 않습니다.
n != s; // false; 권장하지 않습니다.

const a = { name: "an object" };
const b = { name: "an object" };
a === b; // false -- 객체는 항상 다릅니다.
a !== b; // true
a == b; // false; 권장하지 않습니다.
a != b; // true; 권장하지 않습니다.

3 > 5; // false
3 >= 5; // false
3 < 5; // true
3 <= 5; // true

5 > 5; // false
5 >= 5; // true
5 < 5; // false
5 <= 5; // true
