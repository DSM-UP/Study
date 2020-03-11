## Generic - Inheritance Implementation

- 제네릭 타입을 사용한 클래스나 인터페이스를 상속 또는 구현한 클래스는 부모의 제네릭 타입도 이어받는다.
  쉽게 말해서 클래스 A가 제네릭 타입을 사용하고 있었다고 하면
  클래스 A를 상속받은 클래스 B도 클래스 A와 같은 제네릭 타입을 가져야 한다.
  하지만 클래스 A가 가지고 있던 제네릭 타입에 이어 더 많은 제네릭 타입을 가질 수도 있다.
  다음은 클래스 A<T, U>와 그의 자식 클래스인 클래스 B<T, U, V>에 대한 예제이다.

  ```java
  class A<T, U> {
      private T t;
      private U u;
      
      public A(T t, U u) {
          this.t = t;
          this.u = u;
      }
     
      public T getT() {
          return t;
      }
      
      public U getU() {
          return u;
      }
  }
  
  class B<T, U, V> extends A<T, V> {
      private T t;
      private U u;
      private V v;
      
      public B(T t, U u, V v) {
          super(t, u);
          this.t = t;
          this.u = u;
          this.v = v;
      }
      
      // Override 안 함
      
      public V getV() {
          return v;
      }
  }
  ```

- 이런 형식으로 제네릭 타입을 가진 클래스를 상속하고 상속 받을 수 있다.
  그럼 제네릭 타입을 가진 클래스를 선언하고 인스턴스를 생성할때 아래와 같이 생성할 수 있다.

  ```java
  A<Integer, String> a = new B<Integer, String, Double>(...);
  ```

- 이런것으로 보아 지금까지 사용했었던 다이아몬드 연산자를 잘못 사용하면 타입을 제대로 추측하지 못할 것이라는 것을 알 수 있다.