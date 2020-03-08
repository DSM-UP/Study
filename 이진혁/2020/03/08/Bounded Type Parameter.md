## Bounded Type Parameter

- 제한된 타입 파라미터는 제네릭 타입을 사용할때 언급되는 용어이다.
  이는 제네릭 타입을 사용할때 모든 타입을 받아주는 제네릭 타입의 단점을 보안하기 위해 존재한다.
  제네릭 타입을 제한하는 방법은 설정하던 제네릭 타입, 예를 들어 T타입이라면
  다음과 같이 extends 키워드를 사용하여 제한할 상위 클래스를 설정한다.

  ```java
  <T extends Integer>
  ```

  그러면 제네릭 타입인 T타입에 들어갈 수 있는 타입은 Integer 타입 또는 이 타입을 부모로하는 클래스나
  이 타입이 인터페이스라면 이를 구현하는 클래스이다.

- 특이한 점은 이 제한된 타입 파라미터를 설정한 메소드 또는 클래스에서
  제네릭 타입의 변수는 최상위 타입의 메소드 또는 필드만을 사용할 수 있다는 것이다.
  예를 들어 <T extends Integer>라는 제한된 타입 파라미터를 설정해둔 메소드가 있다고 한다면
  그 메소드의 T타입의 변수는 Integer의 메소드 또는 필드만을 접근할 수 있다는 것이다.

- 다음은 제한된 타입 파라미터를 이용하여 Box 클래스를 정의하는 예제이다.

  ```java
  class Box {
      public <T extends Integer> void print(T t) {
          System.out.println(t);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Box box = new Box();
          box.print(100);
          // box.print("lee");
      }
  }
  
  // 100
  ```

  이렇게 Integer로 제한된 타입 파라미터를 가진 메소드인 print() 메소드는
  Integer 값인 100을 파라미터로 가질 순 있지만 String 값인 "lee"값을 파라미터로 가질 순 없다.

- 또한 제한된 타입 파라미터를 사용할때 여러 개의 제한된 타입 파라미터를 설정할 수 있다.
  설정하는 방법은 &기호를 사용하는 것인데 이 기호의 뜻에 맞게 나오는 모든 조건을 만족해야만
  타입을 사용할 수 있도록 허용한다.
  그리고 아까 말하지는 않았지만 제한된 타입 파라미터에 클래스가 아닌
  인터페이스도 들어갈 수 있다.
  하지만 implements 키워드가 아닌 extends 키워드를 그대로 사용한다.
  또한 클래스와 인터페이스를 동시에 사용할때 클래스가 가장 먼저 나오도록 하여야 한다.
  다음은 인터페이스 세 개를 각각 중복하여 구현한 클래스 세 개를 이용하여
  여러 가지의 중복된 타입 파라미터를 사용하는 예제이다.

  ```java
  interface Interface1 {}
  interface Interface2 {}
  interface Interface3 {}
  
  class Class1 implements Interface1 {}
  class Class2 implements Interface1, Interface2 {}
  class Class3 implements Interface1, Interface
  
  class Box {
      public <T extends Interface1 & Interface2 & Interface3> void print(T t) {
          System.out.println(t);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Box box = new Box();
          // box.print(new Class1());
          // box.print(new Class2());
          box.print(new Class3());
      }
  }
  
  // Class3@7852e922
  ```

  이렇게 세 개의 인터페이스를 모두 구현한 Class3는 오류가 발생하지 않지만
  Class1과 Class2는 제한된 타입 파라미터에 맞지 않아서 오류가 발생한 것을 볼 수 있다.