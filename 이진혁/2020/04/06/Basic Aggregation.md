## Basic Aggregation

- 스트림의 기본 집계 메소드는 count(), sun(), max(), min(), average(), findFirst() 메소드가 있다.
  다음은 이 메소드들의 종류이다.

  ```java
  // 제공 스트림 : 공통
  public long count();
  
  // 제공 스트림 : Stream<T>
  public Optional<T> max(Comparator<? super T> comparator);
  public Optional<T> min(Comparator<? super T> comparator);
  public Optional<T> findFirst();
  
  // 제공 스트림 : IntStream
  public OptionalInt max();
  public OptionalInt min();
  public OptionalInt findFirst();
  public int sum();
  public OptionalDouble average();
  
  // 제공 스트림 : LongStream
  public OptionalLong max();
  public OptionalLong min();
  public OptionalLong findFirst();
  public long sum();
  public OptionalDouble average();
  
  // 제공 스트림 : DoubleStream
  public OptionalDouble max();
  public OptionalDouble min();
  public OptionalDouble findFirst();
  public double sum();
  public OptionalDouble average();
  ```

- IntStream, LongStream, DoubleStream의 max(), min() 메소드에서 정렬 순서를 변경할 수는 없다.
  리턴값으로 존재하는 Optional<T>, OptionalInt, OptionalLong, OptionDouble 클래스는
  나중에 다시 다루겠지만 지금은 get(), getAsInt(), getAsLong(), getAsDouble() 메소드를 이용해서
  값을 얻어낼 수 있다는 것만 알면 된다.

- 다음은 위 여러 메소드의 예제이다.

  