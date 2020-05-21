# js spread

js에는 spread라는 신기한 연산자가 존재한다.

배열이나 문자열 같은 반복가능한 객체를 인수에 한번에 넣거나 받는게 가능하도록 만든다.

이것의 형태는 `...이름`이다.

```js
function sum(x, y, z) {
    return x + y + z;
}

let arr = [1, 2, 3];

console.log(sum(...arr));
```
