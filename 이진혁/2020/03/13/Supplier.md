## Supplier

- Supplier 인터페이스는 자바에서 람다식을 사용하기 위한 조건인 '추상 메소드가 하나인 인터페이스'를
  만족하는 "함수적 인터페이스" 중에 하나이다.

- 이전에 Consumer 인터페이스에 대해서 알아보았는데 이름인 소비자 즉, 매개변수로 받아와서 소비를 하고
  리턴값이 없는 accept() 추상 메소드를 지원하는 인터페이스였다.
  이번에 알아볼 Supplier 인터페이스는 "공급자"라는 뜻으로 매개변수는 없지만
  무언가를 리턴하는 메소드를 가지고 있다.
  Supplier 인터페이스는 각각 가지고 있는 추상 메소드의 이름이 다르다.

- 다음은 Supplier 인터페이스들의 종류이다.

  ```java
  Supplier<T>			T get();
  BooleanSupplier		boolean getAsBoolean();
  DoubleSupplier		double getAsDouble();
  IntSupplier			int getAsInt();
  LongSupplier		long getAsLong();
  ```

  Supplier<T> 인터페이스는 모든 객체를 리턴할 수 있도록 선언되어 있고
  나머지는 각각 boolean, double, int, long 타입을 리턴하도록 만들어져있다.

- 다음은 간단하게 Supplier<T> 인터페이스를 사용하는 예제이다.

  ```java
  import java.util.function.Supplier;
  
  public class MainClass {
      public static void main(String[] args) {
          Supplier<Runnable> s = () -> {
              return () -> {
               	System.out.println("test");   
              }
          }
  
          Runnable r = s.get();
      }
  }
  ```

  