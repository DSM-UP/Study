# TIL

- JavaScript 유사배열 : 프로퍼티의 키가 숫자이고 length라는 속성을 가지는 객체

~~~
var yoosa = {
	0: 'first',
	1: 'second',
	2: 'third',
	length: 3
};
~~~

유사배열은 forEach와 같은 배열 메소드를 사용할 수 없다.

~~~
yoosa.forEach(el => console.log(el)); // 불가
~~~

call이나 apply를 통해서 배열 메소드를 사용할 수 있다.

~~~
Array.prototype.forEach.call(yoosa, (el) => console.log(el))
~~~

