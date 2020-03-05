# TIL

유용한 배열 메소드

- join

  ~~~javascript
  let arr = [1, 2, 3];
  arr.join('a'); // "1a2a3"
  arr.join(','); // "1,2,3"
  ~~~

- concat

  ~~~javascript
  let arr = [1, 2, 3];
  arr = arr.concat(4, 5); // [1, 2, 3, 4, 5]
  arr.concat([6, 7]); // [1, 2, 3, 4, 5, 6, 7]
  ~~~

- splice

  ~~~javascript
  let arr = [1, 2, 3, 4, 5, 6];
  arr.splice(2, 1, 5);
  arr; // [1, 2, 5, 4, 5, 6]
  ~~~

- map

  ~~~javascript
  let arr = [1, 2, 3];
  arr.map(v => v + 1); // [2, 3, 4]
  ~~~

  