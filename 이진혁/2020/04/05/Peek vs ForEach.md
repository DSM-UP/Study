## Peek vs ForEach

- Stream의 파이프라인을 설계할 때 중간 처리와 최종 처리가 존재한다.
  그 중 peek() 메소드와 forEach() 메소드는 사용하는 방식이 같지만
  peek() 메소드는 중간 처리 메소드이고, forEach() 메소드는 최종 처리 메소드라는 점에서 차이를 가지고 있다.
  그럼 peek() 메소드부터 알아보자.

- peek() 메소드는 중간 처리 메소드로서 지금까지 처리한
  중간 처리 메소드의 결과를 중간 점검하는 역할을 가지고 있다.
  peek() 메소드의 종류는 다음과 같다.

  ```java
  public Stream<T> peek(Consumer<? super T> action);
  public IntStream peek(IntConsumer action);
  public DoubleStream peek(DoubleConsumer action);
  public LongStream peek(LongConsumer action);
  ```

- 각각 Stream, IntStream, DoubleStream, LongStream에서 사용할 수 있는 peek() 메소드이다.
  매개변수로 Consumer 종류를 가지고 있는 것으로 보아 리턴값이 존재하지 않는
  람다식을 사용할 수 있다는 것을 알 수 있다.

- 중간 점검하는 역할이기 때문에 대부분 개발자들이 디버깅을 하는 용도로 사용될 수 있다.
  그리고 peek() 메소드는 '중간 점검'이라는 특징에 따라서 스트림의 요소를 변경하는 짓은 할 수 없다.
  만약 하게 된다고 해도 아무 효과가 없다.
  대부분 출력문을 이용하게 되는데 출력되는 것이 생각보다 특이함을 알 수 있다.
  다음 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          IntStream stream = IntStream.of(1, 2, 3, 4, 5);
          
          stream.peek(s -> System.out.println("Peek1 : " + s))
              .skip(2)
              .peek(s -> System.out.println("Peek2 : " + s))
              .skip(2)
              .peek(s -> System.out.println("Peek3 : " + s))
              .forEach(System.out :: println);
      }
  }
  
  // Peek1 : 1
  // Peek1 : 2
  // Peek1 : 3
  // Peek2 : 3
  // Peek1 : 4
  // Peek2 : 4
  // Peek1 : 5
  // Peek2 : 5
  // Peek3 : 5
  // 5
  ```

- 이번 출력을 보면 1, 2, 3, 4, 5라는 값이 저장되어 있는 IntStream에 여러 가지 중간 처리 메소드가 사용됐는데
  peek -> skip -> peek -> skip -> peek -> forEach 이런 순으로 메소드가 실행되었다.
  하지만 peek() 메소드는 이 메소드가 실행되기 전의 메소드가 실행됨으로써 바뀐 스트림을 출력하도록 만든다.
  상식적으로 생각해보면 첫 번째 peek() 메소드가 실행되었을 때 1, 2, 3, 4, 5가 모두 출력되고
  skip() 메소드가 실행되어야 하는 거 같은데
  peek() 메소드가 존재한다면 최종 처리 메소드가 실행되기 전,
  peek() 메소드가 존재하는 곳의 스트림 상태의 요소를 첫 번째 요소부터 모두 peek() 메소드 안의
  Consumer 객체의 내용을 실행하는 것이다.
  말이 되게 어려운데 예제를 살펴보고 시간이 흐르면 이해하게 될 것이다.
  문제는 이걸 어떻게 구현했는지가 궁금한데 아직도 구현하라고 하면 구현할 순 없을 것 같다.
  참고로 skip() 메소드는 매개로 들어온 수 만큼 요소를 앞에서 제거한다.

- 위의 예제를 해석해보자면 첫 번째 peek() 메소드는 앞에 중간 처리 메소드가 없으므로
  원본 스트림을 이용해서 하는데 원본은 1, 2, 3, 4, 5이므로 첫 번째 요소인 1이 출력되었다.
  다음으로 두 번째 peek() 메소드는 그 전에 skip(2)를 했으므로 1, 2를 스킵하므로
  출력하지 않고 세 번째 peek() 메소드는 skip(2)를 한 번 더 했으므로 1, 2, 3, 4를 스킵한다.
  따라서 Peek : 1만 출력이 되고 2도 마찬가지이고 3부터는 Peek2도 출력되고
  5부터는 Peek3도 출력이 된다.
  마지막으로 forEach는 모든 결과에서 출력하기 때문에 1, 2, 3, 4가 모두 삭제된 스트림은
  5밖에 없으므로 5만 출력이 된다.

- 또 특이한 점이 있다.
  peek() 메소드 앞에 sorted() 메소드가 존재하면 정렬이 되면서 새로운 스트림이 정립된다.
  따라서 sorted() 메소드가 있으면 그 전까지의 peek() 메소드끼리 반복하고 sorted() 메소드 이후에는
  별개의 peek() 메소드로 볼 수 있다.
  이것도 말로만 보면 이해하기 어려우니까 예제로 보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Stream<Integer> stream = Stream.of(6, 5, 4, 3, 2, 1);
          
          stream.peek(s -> System.out.println("Peek1 : " + s))
              .sorted()
              .peek(s -> System.out.println("Peek2 : " + s))
              .skip(2)
              .peek(s -> System.out.println("Peek3 : " + s))
              .skip(2)
              .peek(s -> System.out.println("Peek4 : " + s))
              .sorted(Comparator.reverseOrder())
              .peek(s -> System.out.println("Peek5 : " + s))
              .forEach(System.out :: println);
      }
  }
  
  // Peek1 : 6
  // Peek1 : 5
  // Peek1 : 4
  // Peek1 : 3
  // Peek1 : 2
  // Peek1 : 1
  // Peek2 : 1
  // Peek2 : 2
  // Peek2 : 3
  // Peek3 : 3
  // Peek2 : 4
  // Peek3 : 4
  // Peek2 : 5
  // Peek3 : 5
  // Peek4 : 5
  // Peek2 : 6
  // Peek3 : 6
  // Peek4 : 6
  // Peek5 : 6
  // Peek5 : 5
  // 6
  // 5
  ```

- IntStream을 사용하지 않고 Stream<Integer>를 사용한 이유는 reverseOrder() 메소드를 사용하기 위해서이다.
  매개변수가 있는 sorted() 메소드는 리턴값이 Stream이다.

- 출력을 보면 굉장히 난해하지만 해석해보면 쉽게? 알 수 있다.
  sorted() 메소드가 존재하면 sorted() 메소드의 전의 peek()의 집합과 후의 peek()의 집합으로
  나누어진다. 따라서 첫 번째 sorted() 메소드 전인 Peek1과 후인 Peek2, Peek3, Peek4
  두 번쨰 sorted() 메소드 후인 Peek5 이렇게 세 가지로 나누어진다.
  그래서 Peek1의 6개 출력이 먼저 있고 Peek2, 3, 4의 skip() 메소드로 인한 출력이 존재하고
  남은 두 가지 요소를 Peek5로 출력이 되고 forEach로 한 번 더 출력하게 된다.

- 마지막으로 peek() 메소드를 사용하는데 forEach() 메소드와 같이 최종 처리 메소드를 사용하지 않으면
  어떻게 되는지와 peek() 메소드로 스트림 요소의 값을 변경하면 어떻게 되는지를 확인해보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          IntStream stream = IntStream.of(1, 2, 3);
          stream.peek(s -> s = s * 2);
          .forEach(System.out :: println);
          
          System.out.println();
          
          IntStream stream2 = IntStream.of(1, 2, 3);
          stream2.peek(System.out :: println);
      }
  }
  
  // 1
  // 2
  // 3
  // 
  ```

- 이렇게 모든 요소를 두 배하는 peek() 메소드는 무시되고
  최종 처리 메소드가 존재하지 않는 파이프라인은 중간 처리 메소드의 특성상
  최종 처리 메소드가 없으면 지연되어 실행하지 않기 때문에 실행조차 되지 않는다.