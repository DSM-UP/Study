# console.log

- console.log, console.info, console.warn, console.error

  log, info, warn, error은 모두 똑같이 로깅하는 기능을 한다. 하지만 로깅을 하는 디자인이 다르다.

- console.dir

  객체는 dir, 나머지는 log로 로깅하면 편하다.

  ~~~javascript
  console.log(document.body); // <body>...</body>
  ~~~

  DOM 객체의 메서드가 뭐가 있는지 보기 위해서는 dir를 써야한다.

  ```javascript
  console.count('카운터1'); // 카운터1: 1
  console.count('카운터1'); // 카운터1: 2
  console.count('카운터2'); // 카운터2: 1
  console.count('카운터2'); // 카운터2: 2
  console.count('카운터1'); // 카운터1: 3
  ```

  몇 번 호출되었나를 로깅하고 싶을 때 사용함. 인자는 카운터의 이름이다.

- console.time, console.timeEnd

  코드 수행 시간을 확인할 때 유용하다. 인자는 타이머의 이름이다.

  ~~~javascript
  console.time('타이머');
  for (var i = 0; i < 100000; i++) z = 5;
  console.timeEnd('타이머') // 타이머: 6.78466846ms
  ~~~

  