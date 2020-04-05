## allMatch() - anyMatch() - noneMatch()

- allMatch(), anyMatch(), noneMatch() 메소드는 모두 최종 처리 메소드로서
  공통적으로 매개변수로 들어온 Predicate를 이용한 boolean값을 리턴한다.
  다음은 allMatch, anyMatch, noneMatch 메소드의 종류이다.

  ```java
  // 제공 스트림 : Stream<T>
  public boolean allMatch(Predicate<T> predicate);
  public boolean anyMatch(Predicate<T> predicate);
  public boolean noneMatch(Predicate<T> predicate);
  
  // 제공 스트림 : IntStream
  public boolean allMatch(IntPredicate predicate);
  public boolean anyMatch(IntPredicate predicate);
  public boolean noneMatch(IntPredicate predicate);
  
  // 제공 스트림 : DoubleStream
  public boolean allMatch(DoublePredicate predicate);
  public boolean anyMatch(DoublePredicate predicate);
  public boolean noneMatch(DoublePredicate predicate);
  
  // 제공 스트림 : LongStream
  public boolean allMatch(LongPredicate predicate);
  public boolean anyMatch(LongPredicate predicate);
  public boolean noneMatch(LongPredicate predicate);
  ```

- 각각의 스트림마다 매개변수로 들어오는 Predicate의 종류가 다른 것을 알 수 있다.

- 어쨌든 allMatch(), anyMatch(), noneMatch() 메소드의 특징을 각각 설명하자면,
  allMatch() 메소드는 매개변수로 들어온 Predicate를 스트림의 모든 요소가 만족하면 true를 리턴하고
  아니라면 false를 리턴한다.
  anyMatch() 메소드는 매개변수로 들어온 Predicate를 스트림의 요소 중 하나라도 만족하면
  true를 리턴하고 아니라면 false를 리턴한다.
  noneMatch() 메소드는 매개변수로 들어온 Predicate를 스트림의 모든 요소가 만족하지 않으면
  true를 리턴하고 아니라면 false를 리턴한다.

- 다음은 위 세 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          IntStream stream = IntStream.of(1, 2, 3);
          IntStream stream2 = IntStream.of(1, 2, 3);
          IntStream stream3 = IntStream.of(1, 2, 3);
          
          System.out.println(stream.allMatch( i -> i%2 == 0 ));
          System.out.println(stream2.anyMatch( i -> i%2 == 0 ));
          System.out.println(stream3.noneMatch( i -> i%2 == 0 ));
      }
  }
  
  // false
  // true
  // false
  ```

  