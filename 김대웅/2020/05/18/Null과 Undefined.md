# TypeScript의 Null과 Undefined

`undefined`와 `null` 둘 다 각각 자신의 타입 이름으로 `undefined`, `null`을 사용한다.

~~~typescript
let u: undefined = undefined;
let n: null = null;
~~~

`null`과 `undefined`는 다른 모든 타입의 하위 타입이다. 따라서 `number`나 `string` 같은 타입에 할당할 수 있다는 것을 의미한다.

만약 `--strictNullChecks`를 사용하면, `null`과 `undefined`는 오직 `any`와 각자 자신들 타입에만 할당 가능하다. (`undefined`는 `void`에 할당 가능하다.)

