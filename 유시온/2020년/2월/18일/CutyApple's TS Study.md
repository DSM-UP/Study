

# CutyApple's TS Study

> ### https://ahnheejong.gitbook.io/ 를 참고하여 공부했습니다.



## 블록 수준 스코프

ES5 까지의 JS는 변수 선언 수단이 `var` 뿐이었다.  **함수 수준 스코프**와 **호이스팅**이 혼란을 가중시켰다.



#### 함수 수준 스코프

함수 수준 스코프란, 모든 변수 선언은 함수 수준에서 이루어진다는 것을 의미한다.

```javascript
function func() {
    var a = 1;
    if(true) {
        var a = 2;
    }
    console.log(a); 
}
func(); // 2
```

만약 블록 수준 스코프를 지원하는 언어의 코드였다면, a의 값은 1이 되었을 것이다. 하지만 JS 에서는 해당 코드를 감싸고 있는 가장 가까운 함수가 달라질 때만 새로운 스코프가 형성된다. 즉, 2번째 줄과 4번째 줄의 a는 동일한 변수를 가리킨다. 



```javascript
function func1() {
    var a = 1;
    function func2() {
        var a = 2;
    }
    console.log(a); 
}
func1(); // 1
```

if문을 다른 함수로 전환한 결과 2번째 줄의 값이 나오게 된다.



#### 호이스팅

호이스팅이란 변수의 선언과 초기화가 동시에 이루어졌을 때,  JS의 인터프리터가 변수의 선언을 함수의 맨 위로 이동시키는 것을 의미한다.

```javascript
function func() {
    console.log(a); 
    var a = 1;
}
func(); // undefined;
```



a라는 변수를 선언하기 전에 a를 사용했으니 에러가 나야 하지만. 호이스팅이 일어나서 에러가 뜨지 않게 된다.



```javascript
function func() {
    var a;
    console.log(a); 
    a = 1;
}
func(); // undefined;
```

이러한 형식으로 처리하게 된다.



#### 블록 수준 스코프

JS의 이 방식은 혼란을 가져왔지만, 이를 피하기 위해 `let`과 `const`라는 새로운 변수 선언 키워드를 도입했다. 또한, 대괄호`{...}`로 감싼 블록마다 생성되는 **블록 수준 스코프**의 지배를 받는 **블록 수준 변수**를 정의할 수 있다.





### let을 이용한 선언

`let`을 이용해 **재할당이 가능한 블록 레벨 변수**를 선언할 수 있다. 

```javascript
{
    let a = 1;
    if(true) {
        let a = 2;
    }
    console.log(a); // 1
    let a = 1;
    console.log(a); // 2
}
console.log(a); // ReferenceError: a is not defined.
```



두 가지를 살펴보자

1. `let`을 이용한 선언은 블록 수준에서 이루어지므로, 대괄호 블록과 `if` 블록 내에서 `a`의 값을 선언하는 행위는 해당 블록 안에서만 의미를 갖는다.
2. `var`을 이용한 선언과 마찬가지로, `let`으로 선언한 변수를 블록 내에서 재할당할 수 있다.

`let`으로 선언한 변수는 엄밀한 의미에서는 호이스팅이 되지만, `var`로 선언한 변수와 달리 변수의 정의문이 평가되기 점 해당 변수를 참조할 경우 `RefereneceError`가 발생한다. 이 때 변수 접근이 에러를 발생시키는, 이 때 변수 접근이 에러를 발생시키는, 정의문이 평가되기 전까지의 구간을 Temporal Dead Zone 이라고 한다.



```javascript
function func() {
    console.log(a);
    let a = 1;
}
func(); // ReferenceError: a is not defined;
```



또한 `var`과 다르게 어떤 변수명에 대한 `let`을 이용한 한 블록 내에서 한 번만 가능하다.



```javascript
function  func1() {
    var a = 1;
    var a = 2;
    console.log(a);
}
function func2() {
    let a = 1;
    let a = 2;
    console.log(a);
}
func1(); // 2
func2(); // SyntaxError: Identifier 'a' has already been declared
```



### const를 이용한 선언

`const`를 이용해 **재할당이 불가능한 블록 레벨 변수**를 선언할 수 있다. `const`를 이용해 선언한 변수의 값을 블록 내에서 재할당하려 하면 에러가 발생한다.

```javascript
function func() {
    const a = 1;
    a = 2;
}
func(); // TypeError: Assignment to constant variable.
```



`let`과 마찬가지로 `const`으로 선언한 변수 또한 정의문이 평가되기 전 접근될 경우 `ReferenceError`를 발생시킨다. 



```javascript
function func() {
    console.log(a);
    const a = 3;
}
func(); // Reference: a is not defined
```



`const` 변수는 선언과 동시에 초기화를 해 주어야 한다. 



```javascript
function func() {
    const a;
    a = 3;
    console.log(a);
}
func(); // SyntaxError: Missing initializer in const declaration
```



`const`로 선언한 변수는 **재할당이 불가능할 뿐, 불변값이 아니라는 점**을 명심해야 한다. `Object`나 `Array` 타입의 변수를 `const`로 정의 했더라도 그 객체의 내부 상태를 조작하는 다양한 수단은 모두 아무런 문제 없이 실행할 수 있다.



```javascript
const a = 3;
a = 4; // TypeError: Assignment to constant variable.
const obj = {};
obj.a = 42; // Ok
const arr = [];
arr.push(3); // Ok
```



`const` 선언으로 막을 수 있는 것은 오로지 블록 내의 재할당 뿐이다.

**기본적으로 변수를 선언해야 할 때는 `const`를 사용하고, 재할당이 필요한 경우에만 `let`을 선언해야 한다.**





## 객체와 배열

객체(`object`)와 배열(`Array`)는 자바스크립트의 가장 기본적인 자료구조이며, 온갖 용도로 사용된다. 



### 비구조화 할당

비구조화 할당 문법을 이용해 이전까지 여러 라인에 걸쳐 적어야만 했던 할당을 보다 간결하게 쓸 수 있다.



#### 배열의 비구조화 할당

한 배열의 각 원소에 새로운 이름을 붙여야 하는 경우, 기존에는 아래와 같이 코드를 반복해서 적어야 했다.

```javascript
const arr = [1, 2];
const a = arr[0];
const b = arr[1];
```



비구조화 할당은 이를 다음과 같이 쓸 수 있다.

```javascript
const arr = [1, 2];
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```



만약 좌항 배열이 우항 배열보다 더 큰 `length`를 갖고 있다면, 대응하는 우항 배열의 원소가 없는 좌항 배열의 원소엔느 `undefined`가 할당된다.

```javascript
const [a, b] = [1];
console.log(b); // undefined
```



#### 객체의 비구조화 할당

객체에서도 비구조화 할당을 할 수 있다.

```javascript
const obj = { a: 1, b: 2 };
const {a, b} = obj;
console.log(a);	// 1
console.log(b); // 2
```



마찬가지로 없는 속성을 참조 할 시  `undefined`가 할당되며, 기본값을 넣어줄 수도 있다.

```javascript
const { a, b, c = 3 } = { a: 1 };
console.log(b); // undefined;
console.log(c); // 3
```



또한 객체의 경우, 우항과 다른 변수명을 사용하고 싶은 경우 아래와 같이 콜론(`:`)을 사용해 변수에 새로운 이름을 줄 수 있다.

```javascript
const { a: b } = { a: 1 };
console.log(b); // 1
```



비구조화 할당은 함수 인자에서도 사용 가능하다.

```javascript
function func({a, b}) {
    console.log(a, b);
}
func({ a: 1, b: 2 }); // 1 2
```



### 나머지 연산자와 전개 연산자



#### 나머지 연산자(rest operator)

비구조화 할당을 사용하되, **배열의 일부 부분 배열을 다른 변수에 할당하고자 할 때** 나머지 연산자를 이용할 수 있다.

```javascript
const [a, ...restArr] = [1, 2, 3, 4];
console.log(restArr); // [2, 3, 4]
```



나머지 연산자는 함수 인자에서도 사용할 수 있다.



```javascript
function func(...rest) {
    console.log(rest);
}
func(1, 2); // [1, 2]
```



#### 전개 연산자(spread operator)

**여러 개의 변수가 들어갈 자리에 한 배열의 원소들을 분포시키고자 할 때**에 전개 연산자를 사용할 수 있다. 나머지 연산자가 여러 원소를 하나의 배열로 묶어 주는 역할을 한다면, 전개 연산자는 하나의 배열을 여러 원소들로 풀어주는 역할을 한다. 

```javascript
function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const arr = [1, 2, 3];
func(...[1, 2, 3]);
```



배열뿐만이 아닌 객체에 대해서도 비슷하게 나머지/전개 연산자를 추가하는 `proposal-object-rest-spread`	가 있다.

```javascript
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// x = 1, y = 2, z = { a: 3, b: 4 };
const c = { x, y, ...z };
// c = { x: 1, y: 2, a: 3, b: 4 };
```



### 객체 리터럴 변경사항



#### 트레일링 콤마 (trailing comma)

ES5로부터는 객체 내에서의 트레일링 콤마 사용이 허용된다.

```javasc
const objWithTrailingComma = {
	a: 1,
	b: 1
};
```

트레일링 콤마가 허용되면 원소의 순서를 재배열하거나 이후 새로운 원소를 추가할 때에 보다 깔끔한 변경 사항을 가질 수 있다.



#### 단축 속성명 (shorthand  property name)

ES6부터는 이미 존재하는 어떤 변수의 변수명을 속성 이름으로, 변수의 값을 속성의 값으로 사용해 객체 리터럴을 생성할 때 보다 간결한 문법을 사용할 수 있다.

```javascript
const [a, b] = [1, 2];
const obj = { a: a, b: b };
const obj2 = { a, b }; // { a: a, b: b } 와 같다.
```



#### 계산된 속성 이름 (computed property name)

ES6부터 계산된 속성 이름을 사용할 수 있다. 객체 리터럴에서 중괄호(`[]`)로 감쌀 경우, 해당 표현식이 계산된 값을 속성 이름으로 사용한다. 이때 중괄호 안에는 모든 표현식이 들어갈 수 있다.

```javascript
const a = 'b';
const obj = { [a]: 2 };
console.log(obj); // { b: 2 }
const obj2 = { ['a' + 'b']: 3 };
console.log(obj2); // { ab: 3 }
```



## 함수

JS의 함수는 다른 함수의 인자로 넘길 수도 있고, 함수가 함수를 리턴하기도 하는 등 함수가 다른 문자열과 숫자 등과 동일하게 취급된다. 



### 기본 매개변수

JS의 함수는 매개변수의 수를 느슨하게 체크한다. 3개의 매개변수를 기대하는 함수에 2개의 매개 변수만 준다면, 나머지는 `undefined`로 들어온 것과 동일하게 함수를 실행한다.

```javascript
function func (a, b, c) {
    console.log([a, b, c]);
}
func(1, 2, 3); // [1, 2, 3]
func(1, 2); // [1, 2, undefined]
func(1); // [1, undefined, undefined]
```



이러한 함수의 특성 상 모든 매개변수가 넘겨졌는지 검사하고 싶거나, 기본값을 채워주고 싶은 경우 해당  처리를 프로그래머가 수동으로 해와야 했다.

```javascript
function func(a, b, c) {
    if (
    	(typeof a === 'undefined') ||
        (typeof b === 'undefined') ||
        (typeof c === 'undefined') 
    ) {
        throw new Error('Not all parameters are specified.');
    }
    console.log([a, b, c]);
}

func(1, 2, 3); // [1, 2, 3]
func(1, 2); // Error: Not all parameters are specified.
function func2(a, b, c) {
    const x = typeof a === 'undefined' ? 1 : a;
    const y = typeof b === 'undefined' ? 1 : b;
    const z = typeof c === 'undefined' ? 1 : c;
    console.log([x, y, z]);
}
func2(1, 2, 3); // [1, 2, 3]
func2(1, 2); // [1, 2, 1];
```



이러한 수고를 덜기 위해 ES6에서는 기본 매개변수 문법이 추가되었다. 매개변수 뒤에 	`= (기본값)`을 덧붙여 해당 매개변수의 기본값을 설정할 수 있다.

```javascript
function func(a = 1, b = 2, c = 3) {
    console.log([a, b, c]);
}
func(1, 2, 3); // [1, 2, 3]
func(1, 2); // [1, 2, 3];
func(1); // [1, 2, 3];
```



### 화살표 함수

기본적으로 JS 함수 내부에서 참조된 `this` 키워드의 값은 함수가 정의되는 시점이 아닌 실행되는 시점에 결정된다. 동일한 내부 구조를 가진 함수가 동일한 블록 내에서 실행 되더라도 어떤 방식으로 호출되느냐에 따라 함수 내에서의 `this` 값은 달라질 수 있다. 

```javascript
function getName() {
    console.log(this.name);
}
const a = {
    name: 'cutyapple',
    getName: getName
}
function getNames() {
    a.getName(); // 'cutyapple'
    getName(); // TypeError: Cannot read property 'name' of undefined
}
getNames();
```



이러한 `this`의 동작은 자주 혼란을 야기한다.

ES6에 추가된 화살표 함수(`arrow function`) 문법을 사용하면 함수 내의 `this`가 실행 시점이 아닌 정의 시점에 결정되는 함수를 정의할 수 있다. 화살표 함수 내에서의 모든 `this` 참조는 해당 함수가 정의되는 시점에서 함수를 둘러싼 문맥의 `this` 값으로 고정된다. 화살표 함수는 `(인자) => (함수 본문)` 의 문법으로 정의한다.

```javascript
const obj = {
    a: 1,
    func: function() { console.log(this); },
    arrowFunc: () => { console.log(this); },
};
const { func, arrowFunc } = obj;
obj.func();	// { 
			//		a: 1,
			//		func: [Function: func],
			//		arrowFunc: [Function: arrowFunc]
			//	}
func();		// undefined
obj.arrowFunc(); // (global object)
arrowFunc(); 	 // (global object)
```



만약 인자가 하나인 경우, 인자를 둘러싼 괄호를 생략할 수도 있다.

```javascript
const func = a = { console.log(a); };
console.log(func); // a => { console.log(a); }
```



함수 본문이 한 줄이라면 중괄호를 생략할 수 있다. 이때 해당 표현식이 반환값이 된다.

```javascript
const a = n => (n+1);
console.log(a(1)); // 2
```



`this`의 동작 외에도 화살표 함수는 `function` 키워드를 이용해 선언한 함수와 다음의 차이를 갖는다.

* 생성자로 사용할 수 없다.
* 함수 내에 `arguments` 바인딩이 존재하지 않는다.
* `prototype` 프로퍼티를 갖고 있지 않는다.



## 템플릿 리터럴

ES6에서는 문자열 관련 다양한 편의 기능이 추가되었다. 템플릿 리터럴은 문자열과 비슷한데, 따옴표나 쌍타옴표가 아닌 백틱(` `` `)으로 감싸진다. 



### 멀티라인 문자열

기존 JS는 멀티라인 문자열을 손쉽게 생성할 수 있는 수단을 제공하지 않았다. 직접 문자열 더하기 연산자를 하거나 `Array.prototype.join` 함수 등을 이용하는 식의 접근이 필요했다.

템플릿 리터럴은 여러 라인에 걸쳐 정의할 수 있으며, 이때의 공백과 줄바꿈을 모두 보존한다.

```javascript
const a = `
aaaaa
bbbbb
`
console.log(a); // aaaaa
				// bbbbb
```



### 문자열 치환

기존 JS는 문자열 포매팅을 위한 기능이 없었다. 이를 위해서는 `Array.prototype.join` 메소드를 사용하거나 문자열을 더하는 방식이 사용되었다.

```javascript
const name = 'cutyapple';
function func(name) {
    console.log('Hello, ' + name + '!');
};
```



이는 `${}`의 형식으로 사용할 수 있는데, `${value}`로 사용하면 value의 값이 들어가게 된다.

```javasc
function func(name) {
	console.log(`Hello, ${name}!`);
};
```



## 원소 순회

어떤 컬렉션(collection)의 원소들을 순회하고 싶은 경우 JS는 다양한 방법을 제공한다.

```javascript
const langs = ['JS', 'TS', 'GO']
```



```javascript
for (let i = 0; i < langs.length; i++) {
    console.log(langs[i]);
}

for (const index in langs) {
    console.log(langs[index]);
}
```

그러나 최근 ECMAScript에서는 이런 방법이 아닌 또다른 방법을 지원한다.



### forEach 메소드

ES5부터 `Array.prototype.forEach` 메소드가 추가되었다. 이 메소드는 배열의 원소를 인자로 받는 콜백 함수를 인자로 받아, 배열 내의 각 원소에 대해 해당 콜백을 실행한다.

```javascript
langs.forEach(lang => {
    console.log(lang);
})
```

그러나 `forEach`는 간결하지만, 메소드 중간에 **실행 흐름을 제어할 수 없다**는 단점을 가지고 있다.



### for-of 문법

ES6에는 순회 작업을 위해 `for-of`문법이 추가되었다.

```javascript
const langs = ['JS', 'TS', 'GO'];
for (const lang of langs) {
    if(!lang.include('S')) {
        break;
    }
    console.log(lang);
}

// JS
// TS
```

* 순회 순서가 항상 같을 것이 보장된다.
* `for (const elem in arr) {...}`의 elem 에는 **원소의 키에 해당하는 문자열**이 바인딩 된다. 한편 `for (const elem of arr) {...}`에는 **원소의 실제 값**이 바인딩 된다. 

`Object` 인스턴스에 대해서는 사용이 불가하다

```javascript
const obj = { a: 1 };
for (const elem of obj) {
    console.log(elem);
}
// TypeError: obj is not iterable
```



### 이터레이터 프로토콜

객체가 특정 조건을 만족하는 `next()` 메소드를 가질 때, 이러한 객체를 이터레이터(반복자, Iterator)라 부른다. 이 때, `next()` 메소드는 해당 객체의 요소들을 어떤 방식과 순서대로 순회할지 정의하며, 호출 될 때마다 아래 두 가지 값을 담은 객체를 반환해야 한다. 

* 순회가 끝났는지를 나타내는 불리언 값인 `done`
* (`done === false`) 일 시 이번 원소의 값인 `value`



```javascript
function func(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length
            	? { value: array[nextIndex++], done: false }
            	: { done: true };
        }
    };
}
const iter = func([1, 2, 3]);
iter.next(); // { value: 1, done: false }
iter.next(); // { value: 2, done: false }
iter.next(); // { value: 3, done: false }
iter.next(); // { done: false }
```



### 이터러블 프로토콜

어떤 객체가 `Symbol.iterator`의 키의 값으로 메소드를 갖고, 해당 메소드를 실행시켰을 때 이터레이터 인스턴스가 반환될 때 그 객체가 **이터러블 프로토콜을 구현한다,**  또는 **순회 가능하다**고 한다.

`Symbol.iterator`는 ES6에 추가된 `Symbol` 타입의 값으로, 그 중에서도 표준에 정의되어 있는 특수한 심볼이다.

```javascript
function func(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length
            	? { value: array[nextIndex++], done: false }
            	: { done: true };
        }
    };
}
const iter = {
    [Symbol.iterator]() { return func([1, 2, 3]); }
}

for (const elem of iter) {
    console.log(elem);
}
// 1
// 2
// 3
```

순회 가능한 객체에 대해서는 `for-of` 문법이 사용 가능하다.  또한, 순회 가능한 객체에 대해 전개 연산자가 사용 가능하다. 이 때 전개 연산자는 해당 순회 가능한 객체의 이터레이터가 리턴한 `value`들의 나열로 대체된다.

```javascript
console.log(...iter); // [1, 2, 3]
```



`Array`, `Map`, `Set` 등의 표준 객체는 모두 이터러블 프로토콜을 구현한다. **이터러블 프로토콜은 프로그래머에게 임의의 객체에 대해 해당 객체를 어떻게 순회할지를 명시하고, 동일한 문법으로 여러 객체를 순회할 수 있는 수단을 제공한다.**



## 비동기 처리

JS는 싱글 스레드 기반의 프로그래밍 언어이다. 이러한 한계와 더불어 UI와 매우 밀접하게 엮인 언어로 시작했다는 특성 때문에, 동기 처리를 이용한 프로그래밍 패턴은 JS에서 실질적으로 사용 불가능하다. 

콜백을 통해 비동기 처리를 하는 것은 코드가 길어짐에 따라 들여쓰기 또한 깊어진다. 이는 미관상 좋지 않으며, 흐름 처리를 매우 힘들게 한다. 이를 해소하고자 ECMAScript에는 이러한 콜백보다 개선된 비동기 패턴이 추가되었다.



### 프로미스

콜백의 대체로 제안된 API는 프로미스(`Promise`)다. 프로미스는 비동기로 처리될 수 있는 연산에 사용되며, 생성자의 인자로 `resolve`와 `reject`, 두 핸들러를 인자로 받는 한 함수를 받다. 

```javascript
function func() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const destiny = Math.random();
            if (destiny > 0.5) {
                resolve();
            } else {
                reject();
            }
        })
    });
}
```



#### then과 catch 메소드

프로미스 인스턴스는 두 개의 메소드를 갖는다.

* `resolve()`의 호출된 경우, 즉 해당 비동기 작업이 완료된 경우의 핸들러인 `then()`
*  `reject()`의 호출된 경우, 즉 해당 비동기 작업이 거부된 경우의 핸들러인 `catch()`

각 핸들러는 `resolve()` 혹은 `reject()`에 넘겨진 인자를 그대로 받는다. 프로미스가 완료되거나 거부되는 것을 처리되었다고 하는데, 한 프로미스는 최대 한 번만 처리 될 수 있다.  즉 이미 완료 혹은 거부가 일어나는 후의 또 다른 `resolve()` 또는 `reject()` 호출은 무의미하다.

```javascript
fetch('http://example.com').then(response => {
    const { ok, status } = response;
    console.log(ok, status);
})
```



## 함수

### 함수의 타입

함수의 타입을 결정하기 위해서는 다음 두 가지 정보가 필요하다.

* 매개변수의 타입
* 반환값의 타입

매개변수는 뒤에 콜론(`:`)을 붙이고 타입을 적는다. 

반환 타입은 매개변수 목록을 닫는 괄호와 함수 본문을 여는 대괄호 사이에 콜론을 붙이고 표기한다.

```typescript
function sum(a: number, b:number): number {
    return (a + b);
}
```



만약 함수가 아무런 값도 반환하지 않는다면 `void`를 사용한다.	

`void` 반환 타입의 함수가 ``undefined`나 `null` 이외의 값을 반호나하면 타입 에러가 발생한다.



### 함수 값의 타입 표기

함수 타입 값에 타입 표기를 붙이기 위해서는 화살표 함수 문법과 비슷하다.

```typescript
(...매개변수 나열) => 반환 타입
```

매개변수가 없는 함수의 경우 매개변수를 생략해 아래와 같이 적는다.

```type
() => 반환 타입
```



```typescript
const func1: (a: number, b: number) => number = sum;
const func2: () => number = () => 2;
const func3: (a: number, b: number) => number = (a, b) => (a + b);
```



### 기본 매개변수

TS 에서도 기본 매개변수 문법을 사용할 수 있다.

```typescript
매개변수명: 타입 = 기본값
```

의 형태로 표기한다.

```typescript
function func(name: string = 'world'): void {
    console.log(`Hello, ${name}`);
}
```



### 선택 매개변수

많은 프로그래밍 언어에서 함수 정의에 명시된 매개변수의 수보다 많거나 적은 수의 인자가 들어 온 경우 에러를 발생시킨다. 그러나 JS는 더 들어온 인자는 버리고, 덜 들어온 인자는 `undefined`가 들어온 것과 동일하게 취급한다.

이런 언어의 특성 및 기존의 안정성을 확보하기 위해 TS는 **선택 매개변수**를 지원한다. 함수의 매개변수 이름 뒤에 물음표(`?`)기호를 붙여 해당 매개변수가 생략될 수 있음을 명시할 수 있다. 예를 들어, `name?: string`로 선언된 선택 매겨변수 `name`을 함수 본문에서 `string`으로 사용하려면 해당 값이 `undefined`가 아닌지를 먼저 검사해야 한다.

```typescript
function func(name: string, age?: number) {
    if(age) {
        console.log(`${string}, ${age}`)
    }
}
```



이 때 매개변수 정의 순서에서 선택 매개변수 이후에 필수 매개변수를 두는 것은 허용되지 않는다.

```typescript
function func(age?: number, name: string) {
    if(age) {
        console.log(`${string}, ${age}`)
    }
}
// error TS1016: A required parameter cannot follow an optional parameter.
```



이러한 제약이 존재하는 이유는 만약 필수 매개변수가 선택 매개변수 뒤에 있을 시, 인자가 어떤 매개변수의 값인지 구분할 수 없기 때문이다.



### 함수 오버로딩

JS에서는 한 함수가 여러 쌍의 매개변수-반환 타입 쌍을 갖는 경우가 흔하다. 이런 함수의 타입을 정의할 수 있게 하고자 TS는 함수 오버로딩을 지원한다.

* 함수는 **하나 이상의 타입 시그니처**를 가질 수 있다.
* 함수는 **단 하나의 구현**을 가질 수 있다.

즉, 오버로딩을 통해서 여러 형태의 함수 타입을 정의할 수 있지만, 실제 구현은 한 번만 가능하므로 여러 경우에 대한 분기는 함수 본문 내에서 이루어져야 한다.

```typescript
// 문자열, 숫자, 불리언 배열을 받아 두 배로 만드는 함수들이다. 이 함수들을 오버로딩 하여 하나의 double이라는 함수로 합쳤다.

// 먼저 각 타입 시그니쳐를 정의한다. 타입 시그니쳐는 함수 정의와 동일하되, 본문이 생략된 형태이다.
function double(str: string): string;
function double(num: number): number;
function double(arr: boolean[]): boolean[];

// 그 후, 함수의 본문을 구현한다.
function double(arg) {
    if (typeof arg === 'string') {
        return `${arg}${arg}`;
    } else if (typeof arg === 'number') {
        return arg * 2;
    } else if (Array.isArray(arg)) {
        return arg.concat(arg);
    }
}

// 이렇게 오버로딩 된 double 함수는 호출하는 인자에 따라 반환 타입이 달라진다.
```



### This 타입

JS 함수 내부의 `this`값은 함수가 정의하는 시점이 아닌 **실행되는 시점**에 결정된다. 이런 특성은 함수 내부에서`this`의 타입을 추로하는 일을 매우 어렵게 만든다. TS는 이를 해결하기 위해함수 내에서 `tihs` 타입을 명시하는 수단을 제공한다.

함수의 `this` 타입을 명시하기 위해선 함수의 타입 시그니쳐에서 매개변수 가장 앞에 `this`를 추가해야 한다. 이 때 `this` 타입은 타입 시스템을 위해서만 존재하는 일종의 가짜 타입이다.

```typescript
interface HTMLElement {
    tagName: string;
}
interface Handler {
    (this: HTMLElement, event: Event, callback: () => void): void;
}
let cb: any;
const onClick: handler = function(event, cb) {
    console.log(this.tagName);
    cb();
}
```

만약 `this`의 타입을 `void`로 명시한다면 함수 내부엣 `this`에 접근하는 일 자체를 막을 수 있다.



## 제네릭

### 동기부여

```javascript
function func(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('Arg is not arr');
    }
    if (arr.length === 0) {
        throw new Error('Arg is empty');
    }
    return arr[0] ? arr[0] : null;
}
```

배열을 받아 첫 원소가 있을 시 그 원소를 리턴하는 함수다. 문자열의 배열을 인자로 호출하면 물자열 타입의 값을, 숫자 배열을 인자로 호출하면 숫자 타입을 반환할 것이다. 이 함수의 타입을 어떻게 정의할 수 있을까?

만약 `func` 함수가 문자열과 숫자만 지원한다면 다음과 같이 쓸 수 있다.

```typescript
function func(arr: string[]): string;
function func(arr: number[]): number;
function func(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('Arg is not arr');
    }
    if (arr.length === 0) {
        throw new Error('Arg is empty');
    }
    return arr[0] ? arr[0] : null;
}
```

하지만 이 함수가 **임의의 타입 값을 원소로 갖는 배열**에 대해 동작하도록 만들려면 어떻게 해야 할까? 인자와 반환 타입을 any로 정의한다면 동작은 하겠지만, 타입 정보를 모두 잃게 되므로 좋은 방법이 아니다.

**여러 타입에 대해 동작하는 함수를 정의하되, 해당 함수를 정의할 때는 알 수 없고 사용할 때에만 알 수 있는 타입 정보를 사용**하고 싶을 때, 제네릭을 사용할 수 있다.



### 타입 변수

함수를 호출하는 시점이 되어야만 알 수 있는 값을 함수 내부에서 사용하기 위해서는 그 값을 담을 매개변수가 필요하다. **요소를 사용하는 시점에서만 알 수 있는 타입을 담아두기 위해서는 타입변수(type variable)가 필요하다.** 타입 변수와 타입의 관계는 매개변수와 인자 값의 관계가 비슷하다.



|           | 함                             | 제너릭                                 |
| --------- | ------------------------------ | -------------------------------------- |
| 정의 시점 | 매개변수 `a: number`           | 타입 변수 `<T>`                        |
| 정의 예시 | `function (a: number) { ... }` | `type MyArray<T> = T[]`                |
| 사용 시   | 실제 값(`3`, `42 `등) 사용     | 실제 타입 (`number`, `string` 등) 사용 |
| 사용 예시 | `a(3); a(42);`                 | `type MyNumberArray = MyArray<number>` |

타입 변수는 부등호로 변수명을 감싸 정의한다. 이렇게 정의한 타입 변수를 요소의 타입 정의에 사용할 수 있다. 부등호 기호 안에 정의된 타입 변수의 실제 타입은 실제 값이 넘어오는 시점에 결정된다.

TS의 타입 변수는 PascalCase 명명법을 사용한다.



### 제네릭 함수

```typescript
function func<T>(arr: T[]): T {
    /*...*/
}
```

> **임의의 타입** `T`에 대해, `func`는 `T` 타입 값의 배열 `arr`을 인자로 받아 `T` 타입 값을 반환하는 함수다.



```typescript
function 함수명<타입 변수>(인자 타입): 반환 타입 {
    /*...*/
}
```



### 제네릭 타입 별칭

타입 별칭 정으에도 제네릭을 사용할 수 있다.

```typescript
type MyArray<T> = T[];
```



### 제네릭의 사용처

타입 변수와 제네릭의 핵심은 **여러 타입에 대해 동작하는 요소를 정의하되, 해당 요소를 사용할 때가 되어야 알 수 있는 타입 정보를 정의에 사용하는 것**이다.



## 유니온 타입

```typescript
function func(value: number, returnStr: boolean = false): ??? {
    const a = value * value;
    if (returnStr) {
        return a.toString();
    }
	return a;
}
```

함수 `func`는 숫자 타입 인자를 하나 받고, 불리언 타입을 받아 그에 따라 타입을 변환해 반환한다. 이 함수의 반환 타입은 어떻게 표현할까? 이 경우 반환 타입이 **인자의 타입이 아닌 값에 의존한다.** 따라서 제네릭으로는 표현하기 까다롭다.

오버로딩을 이용하여 `???`자리에 `number`과 `string`을 넣어줄 수 있겠지만, 비효율적이다.

**어떤 타입이 가질 수 있는 경우의 수를 나열**할 때 사용하는 **유니온 타입**으로 이 함수의 반환 타입을 표현할 수 있다.



### 문법

유니온 타입은 가능한 모든 타입을 파이프(`|`) 기호로 이어서 표현한다. ''`A`또는 `B` 타입일 수 있는 타입"을 `A|B`로 쓰는 식이다.  꼭 두개가 아닌 몇 개든 이어가며 정의할 수 있다.

```typescript
function func(value: number, returnStr: boolean = false): string | number {
    const a = value * value;
    if (returnStr) {
        return a.toString();
    }
	return a;
}
```

타입 별칭 분법을 통해 유니온 타입에 이름을 붙일 수 있다. 

```typescript
type Types = string | number;
function func(value: number, returnStr: boolean = false): Types {
    const a = value * value;
    if (returnStr) {
        return a.toString();
    }
	return a;
}
```



### 여러 줄에 걸친 유니온 타입

여러 줄에 걸쳐 유니온 타입을 적을 때에 정렬을 맞춘다.

```typescript
type Types
	= string
	| number
	| boolean
```

추가로 유니온 타입의 맨 앞에도 파이프를 쓰는 것이 허용된다.



## 인터섹션 타입

```typescript
type Programmer = { language: string };
const programmer: Programmer = { language: 'TS' }

type Adult = { age: number };
const adult: Adult = { age: 30 };
```

그렇다면 성인 프로그래머 타입은 어떻게 나타낼 수 있을까?

**이미 존재하는 여러 타입을 모두 만족하는 타입**을 표현하기 위한 수단이 바로 **인터섹션 타입**이다.



### 문법

여러 타입을 앰퍼샌드(`&`) 기호로 이어서 인터섹션을 나타낼 수 있다.

```typescript
type AdultProgrammer = Adult & Programmer;
```

`A &  B` 타입의 값은 `A`에도 `B`에도 할당 가능해야 한다. 만약 `A`와 `B` 모두 객체 타입이라면 `A & B` 타입의 객체는 `A`와 `B` 타입 각각에 정의된 속성 모두를 가져야 한다.

인터섹션 타입 역시 몇 개든 이어가며 정의할 수 있다.



## 열거형

### 숫자 열거형

숫자 열거형 `number` 타입 값에 기반한 열거형이다. 만약 열거형을 정의하며 멤버의 값을 초기화 하지 않을 경우, 해당 멤버의 값은 `0` 부터 순차적으로 증가하는 숫자 값을 갖는다.  다음 두 식은 동일하게 동작한다.

```typescript
enum Direction {
    East,
    West,
    South,
    North
}
enum Directions {
    East = 0,
    West = 1,
    South = 2,
    North = 3
}
```

이렇게 정의한 열거형의 멤버에는 객체의 속성에 접근하는 것과 동일한 방식으로 접근할 수 있다. 어떤 열거형 `Enum`의 모든 멤버는 ` Enum` 타입을 갖는다.

```typescript
const south: Direction = Direction.South;
console.log(south); // 2
```



### 멤버 값 초기화

`0` 부터 시작되는 자동 초기화에 의존하는 대신, 각 멤버의 값을 직접 초기화 할 수 있다.

```typescript
enum Directions {
    East = 2,
    West = 3,
    South = 4,
    North = 5
}
```

만약 초기화 되지 않은 멤버가 있다면, 그 멤버의 값은 이전에 초기화된 멤버의 값으로부터 순차적으로 증가해서 결정된다.

```typescript
enum Directions {
    East = 1,
    West , /* 2 */
    South = 5,
    North /* 6 */
}
```



### 문자열 열거형

`number` 타입 값 대신 `string` 타입 값을 사용해서 멤버 값을 초기화하는 것도 가능하다.

```typescript
enum Directions {
    East = 'e',
    West = 'w',
    South = 's',
    North = 'n'
}
```

문자열 열거형은 숫자 열거형과 다음 부분을 제외하고 많은 부분 동일하다.

* 문자열을 '자동 증가'시킨다는 개념은 성립하지 않는다. 따라서 문자열 멤버 이후로 정의된 모든 멤버는 명시적으로 초기화되어야 한다.
* 숫자 열거형과 달리, 문자열 열거형이 컴파일된 JS 코드에는 값 -> 키의 역방향 매핑이 존재하지 않는다.



### 상수 멤버와 계산된 멤버

지금까지 다룬 열거형의 멤버는 모두 명시적이든, 암시적이든 컴파일 타임에 알 수 있는 상수값으로 초기화 되었다. 이러한 멤버를 상수 멤버라 부른다.

한 편, 런타임에 결정되는 값을 열거형의 멤버 값으로 사용할 수도 있다. 이런 멤버를 계산된 멤버라고 부른다. 계산된 멤버의 값은 실제로 코드를 실행시켜야봐야만 알 수 있으므로 계산된 멤버 뒤에 오는 멤버는 반드시 초기화되어야 한다.

```typescript
function func() {
    return 1;
}
enum Nums {
    a = func(),
    b // error TS1061: Enum member must have initalize.
}
```



### 런타임에서의 열거형

기본적으로 아래와 같은 TS 열거형 정의 및 접근은 

```typescript
enum Directions {
    East,
    West,
    South,
    North
}
const east: Direction = Direction.East
```

아래와 같은 JS로 컴파일 된다.

```javascript
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["North"] = 3] = "North";
})(Direction || (Direction = {}));
var east = Direction.East;
```

* 식별자에 키 -> 값으로의 매핑이 정의된다.
* 식별자에 값 -> 키로의 역방향 매핑의 정의된다.

컴파일된 코드로부터 열거형 멤버에 접근 할 때 실제로 코드가 실행될 때에도 객체 속성 접근이 발생함을 알 수 있다. 성능 향상을 위해서라면 `const` 열거형을 사용할 수 있다.

모든 멤버가 컴파일 시간에 알려진 상수값인 열거형의 경우 `enum` 키워드 대신 `const eunm` 키워드를 이용해 정의할 수 있다. 이렇게 정의한 열거형의 구조는 컴파일 과정에서 완전히 사라지고, 멤버값은 상수값으로 대체된다. 

```typescript
const enum ConstEnum {
    A,
    B = 2,
    C = B * 2,
    D = -C,
}
console.log(ConstEnum.A);
```

위 코드는 아래 JS 코드로 컴파일된다.

```javascript
console.log(0 /* A */);
```



### 유니온 열거형

열거형의 모든 멤버가 아래 경우 중 하나에 해당하는 열거형을 유니온 열거형이라 부른다.

* 암시적으로 초기화 된 값
* 문자열 리터럴
* 숫자 리터럴

```typescript
enum Shape {
    Circle,
    Triangle = 3,
    Square
}
```

유니온 열거형의 멤버는 값인 동시에 타입이 된다. 

```typescript
type Circle = {
    kind: Shape.Circle;
    radius: number;
}
type Triangle = {
    kind: Shape.Triangle;
    maxAngle: number;
}
type Square = {
    kind: Shape.Square;
    maxLength: number;
}
type Shape = Circle | Triangle | Square;
```

또한 컴파일러는 유니온 열거형의 특징으로부터 컴파일 타임에 추가적인 검사를 시행할 수 있다.



### 유니온 타입을 이용한 열거형 표현

TS는 숫자, 문자열 그리고 불리언 값을 타입으로 사용하는 리터럴 타입을 지원한다. 리터럴 타입을 이용해 단 하나의 값만을 갖는 타입을 정의할 수 있다.

```typescript
const a: 1 = 1;
const b: 1 = 2; // error TS2322: Type '24' is not assignable to type '42'.
```



## 인터페이스 기초

`interface` 키워드를 사용해 값이 특정한 형태를 갖도록 제약할 수 있다. 

```typescript
interface User {
    name: string;
    age: number;
}
```

또한 객체 타입에서와 비슷하게 인터페이스의 속성을 읽기 전용 속성 또는 선택 속성으로 정의할 수 있다.

```typescript
interface User {
    readonly name: string;
    age?: number;
}
```



### 함수 인터페이스

인터페이스를 이용해 함수 타입을 표현할 수 있다. 함수 타입의 표현을 위해선 호출 시그니쳐를 제공해야 하는데, 함수 타입 정의와 유사한 아래 문법을 사용한다.

```typescript
(매개변수1 이름: 매개변수1 타입, 매개변수2 이름: 매개변수2 타입, ...): 반환 타입
```

```typescript
interface GetUserName {
    (user: User): string;
}
const getUserName: GetUserName = function (user) {
    return user.name;
}
```

이 때 실제 함수 정의와 인터페이스에서의 매개변수 이름은 같을 필요 없다. 위의 매개변수명 `user`을 다르게 바꾸어도 매개변수의 순서만 맞는다면 에러는 발생하지 않는다.



### 하이브리드 타입

JS에서는 jQuery의 `$`과 같이 호출 가능한 동시에 추가적으로 여러 속성을 갖는 객체가 존재할 수 있다. 이럴 객체의 타입을 표현하기 위해서 시그니쳐와 속성 타입 정의를 동시에 적을 수 있다.

```typescript
interface Counter {
    (start: number): string;
	interval: number;
	reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

위의 `Counter` 타입의 값은 함수로서 호출할 수 있고, 따라서 호출 시그니쳐를 갖는다. 한편, 이 인터페이스는 추가적으로 `interval`과 `reset`이라는 속성을 가진다. 다라서 인터페이스는 해당 속성의 타입 정보 또한 포함한다.

이렇게 호출 시그니쳐와 속성 타입을 동시에 갖는 인터페이스를 하이브리드 타입이라고 부른다.



### 제네릭 인터페이스

인터페이스 이름 뒤에 타입 변수 정의를 붙여 제네릭 인터페이스를 정의할 수 있다. 

```typescript
interface MyResponse<Data> {
    data: Data;
    status: number;
    ok: boolean;
}
```

함수 인터페이스의 정의에도 제네릭을 사용할 수 있다. 이 경우 타입 변수는 매개변수의 앞에 적는다. 



### 타입 별칭과의 차이

타입에 새로운 이름을 붙이는 수단이라는 점에서 인터페이스와 앞서 살펴본 타입 별칭은 비슷한 점이 많다. 하지만 두 개념 사이엔 다음과 같은 차이가 있다.

* 타입 별칭을 이용해 기본 타입, 배열과 튜플, 유니온 타입 등에 새로운 이름을 붙일 수 있다. (`type Name = string`). 인터페이스로는 해당 타입을 표현하는 것이 불가능하다.
* 타입 별칭은 실제로는 새 타입을 생성하지 않는다. 따라서 `type User = { name: string ;}` 타입과 관련된 타입 에러가 발생했을 시 `{ name: string; }` 를 보여준다. 하년 인터페이스는 실제로 새 타입을 생성하고 에러 메시지에 `User` 가 등장한다.
* 인터페이스는 extends를 이용해 확장할 수 있다.

이런 차이 때문에 TS 공식 문서에서는 타입 별칭보다 인터페이스 사용을 권장한다. 기본적으로 인터페이스로 표현할 수 있는 모든 타입은 인터페이스로 표현하고, 기본 타입에 새로운 이름을 붙이고 싶거나 유니온 타입을 명명하고 싶은 경우 등 인터페이스의 능력 밖인 부분에서만 타입 별칭을 사용해야 한다.



## 색인 가능 타입

코드의 실행 시점에서만 알 수 있는 이름의 동적 속성을 갖는 타입은 어떻게 표시해야 할까?

```typescript
const users: = [
    { name: 'apple', age: 18, lang: 'TS' },
    { name: 'carrot', age: 20 };
];
interface NameAgeMap {
    //
}
const nameAgeMap: NameAgeMap = {};
users.map(user => {
    nameUserMap[user.name] = user.age;
});
console.log(userNameMap) // { 'apple': 18, 'carrot': 20 }
```

위 코드의 `nameAgeMap`은 임의의 유저 목록을 받아 유저의 이름을 키로, 유저의 나이를 값으로 갖는 매핑이다. 이 객체의 키들은 임의의 유저 이름이므로 코드를 작성하는 시점에서는 키를 나열하는 것이 불가능하다.

```typescript
interface NameAgeMap {
    apple: number;
    carrot: number;
}
```

이 경우 이후 `users` 값에 새로운 유저가 추가되는 경우에는 제대로 처리하지 못 할 것이다. 이럴 때 필요한 것이 **색인 가능 타입**이다.



### 색인 시그니쳐

색인 가능 타입을 이용해 색인 가능한 객체의 타입을 정의할 수 있다. 색인 가능 타입을 정의하기 위해서는 색인에 접근할 때 사용하는 기호인 대괄호(`[]`)를 이용해 객체의 색인 시그니쳐를 적어줘야 한다.

```typescript
interface NameAgeMap {
    [userName: string]: number | undefined;
}
```

위 정의는 다음과 같다.

* `NameAgeaMap` 타입의 값을 임의의 `string` 타입 값 `userName` 으로 색인한 값 (`[userName: string]` -> 인덱스 시그니쳐) 즉, `nameAgeMap[userName]` 은 `number` 또는 `undefined` 타입의 값이다. (`: number | undefined`)

위 예제에선 색인된 값이 `number` 가 아닌 `number | undefined` 타입을 가지는 것에 유의 해야 한다. `nameAgeMap`이 모든 문자열을 키로 갖고 있다는 보장이 없으므로 `nameAgeMap['없는 유저']` 따위의 값은 `undefined`일 수 있기 때문이다.

이 경우 색인된 값을 `number` 타입의 값으로 사용하고 싶다면 먼저 `undefined`인지 여부를 체크해줘야 한다.



### 색인과 타입

색인의 타입으로는 문자열 또는 숫자만이 사용 가능하다. 이 때 주의해야 할 점은 만약 문자열 색인과 숫자 색인이 모두 존재하는 경우, 숫자로 색인 된 값의 타입은 문자열로 색인 된 값 타입의 서브타입이어야 한다는 것이다.