# TIL

Promise.all()

순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 프로미스를 반환한다.

~~~javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values); // [3, 42, 'foo']
});
~~~

출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all