# TIL

reduce 함수

Array.prototype.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과; }, 초깃값);

예)

~~~javascript
let sentences = ['Ja', 'va', 'S', 'cript'];

let result = sentences.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, '');
//  Ja 0
// Ja va 1
// Java S 2
// JavaS cript 3
console.log(result); // JavaScript
~~~

만약 초깃값을 적어주지 않으면 0번째 인덱스의 값이 초깃값이 된다.

~~~javascript
let sentences = ['Ja', 'va', 'S', 'cript'];

let result = sentences.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
});
// Ja va 1
// Java S 2
// JavaS cript 3
console.log(result); // JavaScript
~~~

