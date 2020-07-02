# TypeScript var변수의 재선언과 쉐도잉

`var`로 같은 이름의 변수를 선언하면 같은 변수를 가리키는 것이다.

~~~typescript
var x = 10;
var x = 20;
var x = 30;
~~~

위 예제는 아래와 같다.

~~~typescript
var x = 10;
x = 20;
x = 30;
~~~

`var`의 재선언은 종종 버그를 만들어낸다.

그래서 ES6에서 새로 생긴 let과 const는 재선언을 허용하지 않는다.



### Shadowing

Shadowing은 중첩된 스코프에서 바깥 스코프의 변수 이름을 사용하는 것을 뜻한다.

명확한 코드 작성을 위해 Shadowing 사용을 피하는 것이 좋다.

하지만 Shadowing이 적합한 상황에 쓰면 좋다고 한다.

~~~typescript
function printMultiplicationTable() {
    for (let i = 1; i <= 9; i++) {
        let frontNum = i;
        for (let i = 1; i <= 9; i++) {
            console.log(frontNum * i);
        }
    }
} // 구구단이 잘 출력된다.
~~~

안쪽 루프의 `i`가 바깥 루프의 `i`를 가린다.