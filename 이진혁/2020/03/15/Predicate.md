## Predicate

- Predicate 인터페이스는 Function, Operator 인터페이스와 마찬가지로 함수적 인터페이스 중 하나로서
  매개값과 리턴값이 존재하는 함수적 인터페이스이다.
  Function은 주로 매핑, Operator는 주로 연산, Predicate는 boolean 리턴을 한다.
  특징이 boolean을 리턴하는 것으로 생각하는 것만큼 다양하지도 않다.
  다음은 Predicate 인터페이스의 종류이다.

  ```java
  Predicate<T>			boolean test(T t);
  BiPredicate<T,U>		boolean test(T t, U u);
  DoublePredicate			boolean test(double value);
  IntPredicate			boolean test(int value);
  LongPredicate			boolean test(long value);
  ```

- 간단하게 위에서부터 하나의 객체를 판별하여 boolean 값 리턴,
  두 개의 객체를 비교 판별하여 boolean 값 리턴
  나머지는 각각 double, int, long 타입의 변수를 판별하여 boolean 값을 리턴하는 기능을 가지고 있다.
  메소드의 이름은 test로 모두 같으며 리턴값도 특성상 모두 boolean으로 같다.

- 다음은 간단한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
         	Predicate<String,String> predicate = (t, u) -> t.equals(u);
          System.out.println(predicate.test("aaa", "aaa"));
          System.out.println(predicate.test("aaa", "bbb"));
      }
  }
  
  // true
  // false
  ```

  