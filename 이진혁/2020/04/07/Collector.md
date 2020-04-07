## Collector

- Stream의 최종 처리 메소드 중에서 collect() 라는 메소드가 존재한다.
  collect() 메소드는 Stream 안의 자료를 어떻게 해서 컬렉션에 수집하는 메소드이다.
  collect() 메소드는 기존에 존재하는 컬렉션을 사용하는 collect() 메소드와
  그렇지 않은 collect() 메소드로 나뉘는데 지금은 기존에 존재하는 컬렉션을 사용하는
  collect() 메소드에 대해서 알아볼 것이다.

- collect() 메소드의 형식은 다음과 같다.

  ```java
  public <R> R collect(Collector<? super T, A, R> collector);
  ```

  제네릭 타입인 T는 Stream을 구성하는 요소의 타입이고, R은 리턴될 리스트의 타입이며
  A는 T 요소를 R 리스트에 넣는 누적기이다.

- 그럼 collect() 메소드인 Collector에 대해서 알아보아야 하는데
  Collector를 생성하는 방법은 Collectors 클래스의 정적 메소드를 사용하면 얻을 수 있다.

- Collectors 클래스의 Collector를 생성하는 정적 메소드는 다음과 같다.

  ```java
  public static <T> Collector<T,?,List<T>> toList();
  public static <T> Collector<T,?,Set<T>> toSet();
  public static <T,C extends Collection<T>> Collector<T,?,C> toCollection(
  	Supplier<C> collectionFactory
  );
  public static <T,K,U> Collector<T,?,Map<K,U>> toMap(
  	Function<? super T,? extends K> keyMapper,
      Function<? super T,? extends U> valueMapper
  );
  public static <T,K,U> Collector<T,?,ConcurrentMap<K,U>> toConcurrentMap(
  	Function<? super T,? extends K> keyMapper,
      Function<? super T,? extends U> valueMapper
  );
  ```

- toList() 메소드는 스트림을 List 타입으로 매핑하여 리턴하고
  toSet() 메소드는 스트림을 Set 타입으로 매핑하여 리턴한다.

- toCollection은 Collection을 구현하는 List, Set과 같은 컬렉션이나
  자신이 직접 만든 컬렉션을 사용할 수 있도록 만든 메소드이다.

- toMap() 메소드는 스트림의 요소 중 하나를 키, 하나를 값으로 하여 Map 타입으로 매핑하여 리턴한다.

- toConcurrentMap() 메소드는 toMap()과 같지만 리턴타입이 Map이 아니라 ConcurrentMap인데
  ConcurrentMap은 멀티 스레딩 환경에서 적합하다.

- 다음은 collect() 메소드의 예제이다.

  ```java
  class Student {
      private String name;
      private int number;
      
      public Student(String name, int number) {
          this.name = name;
          this.number = number;
      }
      
      public String getName() {
          return name;
      }
      
      public int getNumber() {
          return number;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Stream<Student> stream = Stream.of(
          	new Student("Lee", 1);
              new Student("Kim", 2);
              new Student("Lee", 3);
              new Student("Park", 4);
          );
          
          Map<Integer,String> map = stream.toMap(
          	Student :: getNumber,
              Student :: getName
          );
          
          System.out.println("Key == 1 : " + map.get(1));
          System.out.println("Key == 2 : " + map.get(2));
          System.out.println("Key == 3 : " + map.get(3));
          System.out.println("Key == 4 : " + map.get(4));
      }
  }
  
  // Lee
  // Kim
  // Lee
  // Park
  ```

  