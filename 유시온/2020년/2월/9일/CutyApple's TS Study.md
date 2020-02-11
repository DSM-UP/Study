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

