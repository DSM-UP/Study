# TypeScript의 Any와 Void

### Any

알지 못하는 타입을 표현해야할 때 Any 타입을 사용한다.

Any 타입은 타입 검사를 하지 않는다.

~~~typescript
let anyType: any = 3;
anyType = 'string data';
anyType = true;
~~~

기존에 JavaScript에서 변수를 생성하면 Any 타입이 된다.

Object와는 다르다. Object로 선언된 변수들은 어떤 값이든 그 변수에 할당할 수 있지만, 실제로 메서드가 존재하더라도, 임의로 호출할 수 없다.

~~~typescript
let anyType: any = 3;
anyType.ifItExists(); // 성공
anyType.toFixed(); // 성공

let objType: Object = 3;
objType.toFixed(); // toFixed가 Object에 존재하지 않음.
~~~

Any 타입은 타입의 일부만 알고 전체는 알지 못할 때 유용하다.

~~~typescript
let anyList: any[] = ['C', 3, false];
anyList[2] = 32;
~~~

### Void

어떤 타입도 존재할 수 없음을 나타낸다. Any 타입의 반대 타입이다.

보통 함수 반환 값이 없을 때 반환 타입을 표현하기 위해 사용한다.

~~~typescript
function sayHello(): void {
    console.log('Hello!');
}
~~~

Void타입으로 변수를 선언하면 null 또는 undefined만 할당할 수 있다.

