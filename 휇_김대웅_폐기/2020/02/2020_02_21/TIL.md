# TIL

자바스크립트 filter

주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환함

~~~javascript
const words = ['dongas', 'clock', 'pad', 'history', 'pen', 'wallet'];

const result = words.filter(word => word.length > 4);

console.log(result); // ['dongas', 'clock', 'history', 'wallet']
~~~

