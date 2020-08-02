## Node.js 교과서 parseCookies 이해하기

### split 메서드

`split` 메서드는 `String` 객체를 지정한 구분자를 이용해 여러 개의 문자열로 나눈다.

```javascript
str.split([separator[, limit]])
```

- `separator`
    문자열을 구분하는 데 사용하는 문자열이다. 실제 문자열이나 정규표현식을 받을 수 있다. 문자열 유형이 두 글자 이상일 경우 그 부분 문자열 전체가 일치해야 끊어진다.
- `limit`
    끊어진 문자열의 최대 개수를 정한다. 문자열을 끊다가 배열의 원소가 `limit`개가 되면 동작을 멈춘다.

주어진 문자열을 `separator`마다 끊은 부분 문자열을 담은 `Array`를 반환한다.

문자열에서 `separator`가 등장하면 해당 부분은 삭제되고 남은 문자열이 배열로 반환된다.

### map 메서드

`map` 메서드는 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

```javascript
array.map(callback(currentValue[, index[, array]])[, thisArg])
```

- `callback` : 새로운 배열 요소를 생성하는 함수이다. 다음 세 가지 인수를 가진다.
    - `currentValue` : 처리할 요소
    - `index` (`optional`) : 처리할 현재 요소의 인덱스
    - `array` (`optional`) : `map()`을 호출한 배열
- `thisArg` (`optional`) : `callback`을 실행할 때 `this`로 사용되는 값

`map` 메서드는 `callback` 함수를 **각각의 요소에 대해 한 번씩** 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만든다. 이때 `callback` 함수는 `undefined`도 포함해 배열 값이 들어있는 인덱스에 대해서만 호출된다. 즉, 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않는다.

#### 예제

##### 배열에 들어있는 숫자들의 제곱근을 구해 새로운 배열 만들기

```javascript
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);

console.log(numbers);  // [1, 4, 9]
console.log(roots);    // [1, 2, 3]
```

##### map을 활용해 배열 속 객체 재구성하기

```javascript
const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];
const reformattedArray = kvArray.map((obj) => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});

console.log(kvArray);
// 0: { key: 1, value: 10 }
// 1: { key: 2, value: 20 }
// 2: { key: 3, value: 30 }
console.log(reformattedArray);
// 0: { key: 1, value: 10 }
// 1: { key: 2, value: 20 }
// 2: { key: 3, value: 30 }
```

### join 메서드

`join` 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

```javascript
arr.join([separator])
```

- `separator`
    배열의 각 요소를 구분할 문자열을 지정한다. 생략하면 배열의 요소들이 쉼표로 구분된다.

배열의 모든 요소들을 연결한 하나의 문자열을 반환한다. 만약 `arr.length`가 `0`이라면, 빈 문자열을 반환한다.

### reduce 메서드

`reduce` 메서드는 배열의 각 요소에 대해 주어진 **reducer** 함수를 실행하고, 하나의 결과값을 반환한다. **reducer** 함수는 네 개의 인자를 가진다.

1. 누산기 (acc)
2. 현재 값 (cur)
3. 현재 인덱스 (idx)
4. 원본 배열 (src)

```javascript
arr.reduce(callback[, initialValue])
```

- `callback` : 배열의 각 요소에 대해 실행할 함수이다. 다음 네 가지 인수를 전달받는다.
    - `accumlator`  : 누산기는 콜백의 반환값을 **누적**한다.
    - `currentValue` : 처리할 현재 요소
    - `currentIndex` (옵션) : 처리할 현재 요소의 인덱스이다. `initialValue`를 제공한 경우 0, 아니면 1부터 시작
    - `array` (옵션) : `reduce()`를 호출한 배열
- `initialValue` (옵션) : `callback`의 최초 호출에서 첫 번째 인수에 제공하는 값이다. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다.

누적 계산의 결과 값을 반환한다.

### trim 메서드

`trim` 메서드는 문자열 양 끝의 공백을 제거한다. 공백이란 모든 공백 문자(space, tab, NBSP 등)와 개행문자(LF, CR 등)를 의미한다.

```javascript
str.trim()
```

### parseCookies 이해하기

```javascript
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
```

`cookie` : 쿠키 문자열 (Ex : `mycookie=test`)

`.split(';')` : 쿠키 문자열을 `;` 기준으로 쪼개 배열로 반환 (`['mycookie=test']`)

`.map(v => v.split('='))` : 반환된 배열을 `=` 기준으로 한 번 더 쪼갠다. (`['mycookie', 'test'])`

`.map(([k, ...vs]) => [k, vs.join('=')])` : 키와 나머지 value들로 구분한다.

`.reduce((acc, [k, v]) => {
  acc[k.trim()] = decodeURIComponent(v);
  return acc;
}, {});` 

`['mycookie', 'test']`를 기준으로 설명하도록 한다. `k`는 'mycookie'가 되고, `v`는 'test'가 된다. `acc`는 {}가 된다.

여기서 `acc[k.trim()]`은 acc라는 객체에 대괄호 표기법으로 키에 접근하는 구문이다. 이때 `trim` 메서드로 양쪽에 공백을 모두 제거해 key 값을 지정한다.

`decodeURIComponent(v)`는 쿠키의 value로 `encodeURIComponent`된 값이 전달되었기 때문에 그것을 복호화하는 과정이라 보면 된다. (실제 코드 전문을 살펴보면 이 구문이 있다.) 

그렇게 쪼개진 배열 안에서 계속 키와 값을 가져와 새로 키를 생성해 값을 할당하고 그 과정이 끝나면 그 정보를 가지고 있는 객체 `acc`를 반환한다.

**출처**

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">String.prototype.split() - JavaScript | MDN</a>

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map() - JavaScript | MDN</a>

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">Array.prototype.join() - JavaScript | MDN</a>

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">Array.prototype.reduce() - JavaScript | MDN</a>

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim" target="_blank">String.prototype.trim() - JavaScript | MDN</a>

<a href="https://www.inflearn.com/questions/5578" target="_blank">인프런 - 쿠키 parse 하는 문법이 어려워요</a>

<a href="https://www.inflearn.com/questions/6058" target="_blank">parseCookie 부분에 대해 질문 있습니다.</a>

