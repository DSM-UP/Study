# TypeScript의 Type Assertions

TypeScript 컴파일러보다 개발자가 값에 대해 더 잘 알고 있을 때가 있다.

Type Assertions를 사용하면 컴파일러가 개발자를 믿게 만들 수 있다.

형 변환과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않는다.

런타임에는 영향을 미치지 않고, 컴파일러만 사용한다.



Type Assertions는 두 가지 방식이 있다.

1. angle-bracket

~~~typescript
let stringValue: any = 'string value';
let length: number = (<string>stringValue).length;
~~~

2. as 문법

~~~typescript
let stringValue: any = 'string value';
let length: number = (stringValue as string).length;
~~~

