# TIL

고차 함수 : 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수.

고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환한다.

예)

~~~javascript
function counterMaker(func) {
    let count = 0;
    return () => {
        count = func(count);
        return count;
    }
}

let counterFunc = {
    increase: n => ++n,
    decrease: n => --n
};

let increaseCounter = counterMaker(counterFunc.increase);
console.log(increaseCounter()); // 1
console.log(increaseCounter()); // 2
console.log(increaseCounter()); // 3

let decreaseCounter = counterMaker(counterFunc.decrease);
console.log(decreaseCounter()); // -1
console.log(decreaseCounter()); // -2
console.log(decreaseCounter()); // -3
~~~

