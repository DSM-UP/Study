# JavaScript

## Chapter 1

#### 1-1 숫자와 문자

큰 따옴표나 작은따옴표가 붙지 않는 숫자는 숫자로 인식함.



#### 1-2 변수 선언

```javascript
var a = 1;
//(그외 :const, let)
```



#### 1-3 비교 연산자

==와 ===의 차이

```javascript
alter(1=='1')	//true
alter(1==='1')	//false
```

평소에 === 를 사용하는 것이 좋다. 그외 나머지 비교 연산자는 같다.



#### 1-4 배열 선언 & 값 넣기

```javascript
const arr = [];
arr.push(1);
arr.psuh(2);
arr.push(3);

const text = [];
text.push('hello', 'welcome', 'bye');
```

#### 1-5 for of & for each

```javascript
const userList = [
    {name: 'kimsunjung', age : 17, score: 85}
    {name: 'fkajkajgka', age : 17, score: 90}
    {name: 'fagadfgagag', age : 18, score: 60}
]
for(const user of userList){
    console.log('user:', user);
}

userList.forEach(function(user)){
	console.log(user);                 
}

userList.forEach(user => console.log(user));
```

for of 는 list에 있는 데이터 개수만큼 하나씩 뽑아서 반복문을 실행하는 구문

##  Chapter.2

#### 2-1 예외처리 try catch fianl

```javascript
const printHello = () => console.log('Hello');

try{
    printHello();
}catch(e){
    console.error(e);
}finally{
    console.log('finally1');
}
```

#### 2-2 함수 선언하기

```javascript
function printHello(parameter){
	console.log('Hello');
}
printHello();

const printBye = () => {
    console.log('bye');
}
printBye();
```

#### 2-3 화살표 함수

```javascript
const printHello() => console.log('Hello');
const plus = (a,b) => a+b;

printHello();
console.log(printHello());
console.log('pusl: %d', plus(10, 20));
```

**화살표 함수, { } 사용하기**

```javascript
const sumAndPrint = (a, b) => {
    const result = a + b;
    return '결과는 ${result}입니다';
}
```

#### 2-4 콜백 함수 callback()

```javascript
const sum = (a, b) => a + b;

const printResult = (result) => {
    console.log('결과는 ${result}입니다');
};
//callback function
const caculationAndPrint = (calculationResult, callback) => {
    callback(caculationResult);
};
caculationAndPrint(sum(10, 20), printResult);
```

콜백함수는 특정 함수에 파라미터로 전달된 함수를 말한다.

 ***자바스크립트에서 함수는 일급 객체이므로, 변수에 담거나 전달하는 식으로 사용 가능***

## Chapter.3

#### 3-1 생성자와 new

객체 내의 변수를 프로퍼티(property)함수를 메소드(method)라고 부른다.

```javascript
var person = { }
person.name = 'egoing';
person.introduce = function(){
    return 'My name is ' + this. name;
}
document.write(person.introduce());
```

**person 메소드 생성과정**

```javascript
var person = {
	'name' : "egoing",
    'introduce' : fuction(){
    	return 'My name is ' + this.name;
	}
}
document.write(person.introduce());
```

**생성자(constructor)는 객체를 만드는 역할을 하는 함수다. 자바스크립트에서 함수는 **

**객체를 만드는 창조자 이다**

```javascript
function Person(){}
var p = new Person();
p.name = 'egoing';
p.introduce = function(){
    return 'My name is ' + this.name;
}
document.write(p1.introduce()+"<br />");
```

***객체를 만드는 역할을 하는 함수***

````javascript
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+ this.name;
    }
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
````

#### 3-2 모듈

코드의 재활용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법중 하나가

코드를 여러개의 파일로 분리하는 것이다. 

* 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용할 수 있다.
* 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
* 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
* 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.

기타등등..

**모듈이란**

순수한 자바스크립트에서 모듈이라는 개념이 분명하게 존재하지 않는다. 하지만

자바스크립트가 구동되는 호스트 환경에 따라서 서로 다른 모듈화 방법이 제공되고 있다.

```
호스트 환경이란?

호스트 환경이란 자바스크립트가 구동되는 환경을 의미한다. 자바스크립트는 브라우저를 위한 언어로 시작했지만, 더 이상 브라우저만을 위한 언어가 아니다. 예를들어 node.js는 서버 측에서 실행되는 자바스크립트다. 이 언어는 자바스크립트의 문법을 따르지만 이 언어가 구동되는 환경은 브라우저가 아니라 서버측 환경이다. 또 구글의 제품 위에서 돌아가는 Google Apps Script 역시 자바스크립트이지만 google apps script가 동작하는 환경은 구글 스프레드쉬트와 같은 구글의 제품 위이다. 여러분은 자바스크립트의 문법을 이용해서 PHP와 같은 서버 시스템을 제어(node.js)하거나 구글의 제품(Google Apps Script)을 제어 할 수 있다. 지금 당장은 어렵겠지만, 언어와 그 언어가 구동되는 환경에 대해서 구분해서 사고 할 수 있어야 한다. 이를 위해서는 다양한 언어를 접해봐야 한다.
```

##### Node.js의 모듈화

```javascript
var PI = Math.PI;

exports.area = function (r){
return PI * r * r;
}

exports.circumference = function (r){
    return * PI * r; 
} 
```

node.demo.js(로드의 주체)

```
var circle = require('./node.circle.js');
console.log ('The area of a circle of radius is ' + circle.area(r));
```

