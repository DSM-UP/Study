## { ... } [ ... ] 문법 (비구조화 할당 / 구조분해 할당)

### 정의

비구조화 할당(destructuring assignment) 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있는 JavaScript 표현식(expression)이다.

간단하게 정리하면 배열 [], 혹은 객체 {} 안의 값을 편하게 꺼내 쓸 수 있는 문법이다.

### 기본 문법 (배열 ver)

배열에서의 적용은 다음과 같다.

```javascript
[a1, a2, ...rest_a] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a1);      // 1
console.log(a2);      // 2
console.log(rest_a);  // [3, 4, 5, 6, 7, 8, 9]
```

좌항이 호출될 변수명 집합, 우항이 할당할 값이다.
좌항의 각 요소에는 같은 index를 가지는 배열값이 할당된다.
전개 연산자( ... )를 사용하여 좌항에서 명시적으로 할당되지 않은 나머지 배열 값들을 사용할 수 있다.

그리고 var, let, const를 사용해 변수들의 유효 범위를 명시적으로 선언할 수 있다.

```javascript
var [a1, a2, ...rest_a] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a1, a2, ...rest_a] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a1, a2, ...rest_a] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```

전개 연산자 이후에 변수를 입력하거나, 좌, 우항이 다른 속성일 경우 에러가 발생한다.

```javascript
// Uncaught SyntaxError: Rest element must be last element
[a1, a2, ...rest_a, a3] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
[a1, a2, ...rest_a, a3] = { a: 'a', b: 'b' };
```

### 기본 문법 (객체 ver)

객체에서의 적용은 다음과 같다.

```javascript
var {a1, a2, ...rest_a } = { a1: 10, a2: 20, a3: 30, a4: 40 };
console.log(a1);	 // 10
console.log(a2);	 // 20
console.log(rest_a); // { a3: 30, a4: 40 }
```

객체의 경우 우항의 key 값이 좌항의 변수명과 매칭된다.
배열과 마찬가지로 var, let, const를 통해 유효 범위를 명시적으로 선언할 수 있다.

원래의 key값과 다른 이름의 변수를 사용하는 방법은 다음과 같다.

```javascript
var { a1: awesome_name, a2: dumb , ...rest_a } = { a1 : 10, a2 : 20, a3 : 30, a4 : 40 };
console.log(awesome_name);  // 10
console.log(dumb);          // 20
```

나머지 값을 뜻하는 전개 연산자는 우항의 key에 영향을 받지 않기 때문에 `...rest_a: maon`과 같은 표현식은 무의미하며, 실제로 에러가 발생한다.

또한 우항의 key 값에 변수명으로 사용 불가능한 문자열이 있을 경우 아래와 같은 방식으로 구조화할 수 있다.

```
const key = 'it is key';
const { 'an-apple': an_apple, [key]:it_is_key } = { 'an-apple': 10, 'it is key': 20 };
console.log(an_apple);   // 10
console.log(it_is_key);  // 20
```

다만 이 경우 'an-apple'과 매칭할 변수명을 작성하지 않으면 에러가 발생하게 된다.

마지막으로 객체 비구조화에서 주의해야 할 점은 변수 선언에 대한 명시가 없을 경우 괄호를 사용해 묶어줘야 한다는 것이다.

```javascript
({ a, b} = { a: 10, b: 20 });
console.log(a);  // 10
console.log(b);  // 20
{ c, d } = { c: 30, d: 40 }; // Uncaught SyntaxError: Unexpected token '='
```

### 기본값 할당

비구조화의 범위를 벗어나는 값 할당을 시도하면 undefined를 반환하게 된다.

```javascript
[a, b] = [10];
console.log(a);  // 10
console.log(b);  // undefined
```

이런 경우를 예방하기 위해 호출될 변수명들에 기본값 할당을 할 수 있다.

```javascript
[a = 10, b = 20] = [5];
console.log(a);  // 5
console.log(b);  // 20
```

새로운 변수명에 할당하는 방식에도 `=`를 사용하여 기본값을 할당할 수 있다.

### 복사

전개 연산자를 사용하면 배열, 객체의 깊은 복사를 할 수 있다.

```javascript
const arr = [1, 2, 3];
const copy1 = arr;
const [...copy2] = arr;
const copy3 = [...arr];

arr[0] = 'String';
console.log(arr);    // [ 'String', 2, 3 ]
console.log(copy1);  // [ 'String', 2, 3 ]
console.log(copy2);  // [ 1, 2, 3 ]
console.log(copy3);  // [ 1, 2, 3 ]
```

얕은 복사인 `copy1`은 `arr`을 참조하기 때문에 0번 요소가 변경되었다. 하지만 전개 연산자를 사용한 `copy2, copy3`는 깊은 복사가 진행된 것을 볼 수 있다.

객체 역시 전개 연산자로 깊은 복사를 사용할 수 있다.
무엇보다 복사와 함께 새로운 값을 할당할 수 있다는 것이 강점이다.

```javascript
const prevState = {
    name: 'maon',
    birth: '2020-08-01',
    age: 18,
};

const state = {
    ...prevState,
    age: 20,
};

console.log(state);  // { name: "maon", birth: "2020-08-01", age: 20 }
```

**출처**

<a href="[https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9](https://yuddomack.tistory.com/entry/자바스크립트-문법-비구조화-할당)" target="_blank">자바스크립트 {...} [...] 문법 (비구조화 할당/구조분해 할당) - 어서와, 개발은 처음이지? 티스토리</a>

