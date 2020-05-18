# TypeScript의 Never

### Never

절대 발생할 수 없는 타입을 나타낸다.

함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰인다.

모든 타입에 할당 가능한 하위 타입이다. 하지만 다른 타입들은 `never`에 할당할 수 없다. (`any`도 `never`에 할당할 수 없다.)

~~~typescript
let neverType: never = 'never type'; // 오류
neverType = never;
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function neverFunction(): never {
    throw new Error('never function error');
}

function useNeverFunction() {
    return neverFunction(); // 반환 타입이 never로 추론됨.
}
~~~

