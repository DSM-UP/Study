## Static Initializer

- static initializer는 말 그대로 정적인 초기화를 진행하는 단계이다.

- static initializer가 아니라 static initialization block 이라고도 한다.

- 코드에서는 아래와 같이 사용되고 class 안에 종속되어 있다.

  ```java
  class AAA {
      static { ... }
  }
  ```

- 정적인 초기화는 언제 이루어질까?
- 우리가 작성한 코드 (.java)를 클래스 파일(.class)로 변환하고 Class Loader가 클래스 로딩을 위해서 Runtime Data Area로 클래스 파일들을 보낸다.
- 이때 클래스가 로딩되는 시점에서 static initializer가 실행된다.
- 그렇기 때문에 클래스를 인스턴스화 시키지 않고도 사용할 수 있는 static method와 static filed에 대한 초기화를 진행시킬 수 있는 것이다.
- 또한 static final로 선언된 '상수화'된 필드도 초기화 시키는데 사용된다.

- 물론 static이 붙지 않은 일반 변수들은 static initializer에서 초기화 할 수 없다.



- static method에서 non-static method를 참조할 수는 없지만 non-static method에서 static method는 참조할 수 있다는 것을 바탕으로 이해하면 쉽게 이해할 수 있을 것 같다.