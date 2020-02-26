# TIL

타입스크립트

- 장점

  1. 정적 타입

     ~~~javascript
     function sum(a, b) {
         return a + b;
     }
     sum('x', 'y'); // 'xy'
     ~~~

     위 코드는 문법상 문제없이 실행되지만 개발자의 의도와 다른 결과가 나온다.

     ~~~typescript
     function sum(a: number, b: number) {
         return a + b;
     }
     
     sum('x', 'y'); // error
     ~~~

     위 코드는 원래의 코드와 달리 컴파일 단계에서 오류를 잡아낼 수 있고 개발자의 의도에 맞게 코드를 작성할 수 있다.

  2. 인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍을 지원한다.