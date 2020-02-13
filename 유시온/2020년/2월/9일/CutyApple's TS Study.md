

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

만약 네트워크 요청을 보내는 과정에서 오류가 발생했을 경우, 이 프로미스는 내부적으로 던져진 에러를 인자로 `reject()`를 호출한다. 이 응답은 `catch()` 핸들러에서 접근이 가능하다.



#### 프로미스 체인

`then`과 `catch`는 호출된 경우 또다시 프로미스를 반환한다. 때문에 프로미스는 연쇄될 수 있다. 이 때, 프로미스 체인의 다음 프로미스는 이번 프로미스가 반환한 값으로 `resolve`를 호출한다.



### Async / Await	

프로미스는 콜백을 이용한 사용 패턴의 문제 중 상당 부분을 해소했지만, 완벽한 해결책은 아니었다. 

`Async` / `Await`을 지원하는 환경에서는 함수 선언 앞에 `async`키워드를 덧붙여 비동기 함수를 정의할 수 있다. 



## TS 기초 문법

### 타입 표기 (Type Annotation)

TS 코드에서 어떤 변수 또는 값의 타입을 표기하기 위해 **타입 표기**를 사용한다. 타입 표기는 식별자 또는 값 뒤에 콜론(`:`)을 붙여 `value: type`의 형태로 표기한다.

```typescript
const bool: boolean = true;
const num: number = 1;
const str: string = 'a';
const obj: Object = {
    a: true
};
```



## 기본 타입

### 불리언

JS의 `boolean`에 대응하는, 참 또는 거짓을 나타내는 타입이다.

```typescript
const yes: boolean = true;
const no: boolean = false;
```



### 숫자

숫자를 나타내는 타입이다. JS에서는 정수, 부동 소수점 등의 구분이 없고 모든 수가 IEEE754 표준을 따르는 부동소수점이고, TS의 `number`타입도 마찬가지다.

```typescript
const num: number = 100;
const num2: number = 0.1;
```



### 문자열

문자열을 타나내는 타입이다. ES6 리터럴 역시 `string` 타입의 값이다.





