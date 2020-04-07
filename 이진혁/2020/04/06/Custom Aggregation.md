## Custom Aggregation

- 이전에 기본 집계인 sum(), average(), max(), min(), count(), findFirst() 메소드에 대해서 배웠다.
  이번에는 이렇게 정해진 집계 방식이 아닌 내가 직접 정할 수 있는 커스텀 집계 방식을 지원하는
  reduce() 메소드에 대해서 알아보도록 하겠다.

- reduce() 메소드의 종류는 다음과 같다.

  ```java
  // Stream<T>
  public Optional<T> reduce(BinaryOperator<T> accumulator);
  public T reduce(T identity, BinaryOperator<T> accumulator);
  
  // IntStream
  public OptionalInt reduce(IntBinaryOperator op);
  public int reduce(int identity, IntBinaryOperator op);
  
  // LongStream
  public OptionalLong reduce(LongBinaryOperator op);
  public long reduce(long identity, LongBinaryOperator op);
  
  // DoubleStream
  public OptionalDouble reduce(DoubleBinaryOperator op);
  public double reduce(double identity, DoubleBinaryOperator op);
  ```

- 각각의 스트림마다 두 가지의 reduce() 메소드 형식이 있는데
  첫 번째 reduce() 메소드는 매개변수로 BinaryOperator 인터페이스 종류를 받는데
  이 BinaryOperator 인터페이스를 두 개의 인자를 이용하여 연산된 리턴값을 만들기 때문에
  첫 번째와 두 번째 요소를 이용해서 연산하고 그 결과와 세 번째 요소를 연산하고...
  반복하여 모두 연산한 후 그 값을 Optional 클래스에 담아서 리턴한다.

- 두 번째 reduce() 메소드는 두 번째 매개변수로 같은 역할을 하지만
  만약 스트림이 비어있을 경우에 오류가 발생하는 것을 막기 위해서
  첫 번째 매개변수로 디폴트 값을 설정한다.
  그렇기 때문에 좀 더 안전하게 값을 구하기 위해서는 두 번째 reduce() 메소드를
  사용하는 것이 좋다.

- 다음은 reduce() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String string = Stream.of("A", "B", "C")
              .reduce((a, b) -> a + b).get();
          
          String string2 = Stream.of("a", "b", "c")
              .reduce("ABC", (a, b) -> a + b);
          
          System.out.println(string);
          System.out.println(string2);
      }
  }
  
  // ABC
  // abc
  ```

  