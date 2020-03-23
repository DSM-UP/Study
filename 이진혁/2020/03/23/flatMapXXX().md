## flatMapXXX()

- distinct() 메소드와 filter() 메소드는 스트림에서 필터링을 하는 메소드였다.
  이번의 flatMapXXX() 메소드는 스트림에서 매핑을 할 수 있도록 매개변수로 Function를 받는 메소드이다.
  flatMapXXX() 메소드의 종류는 다음과 같다.

  ```java
  Stream<R> flatMap(Function<T,Stream<R>>);
  DoubleStream flatMap(DoubleFunction<DoubleStream>);
  IntStream flatMap(IntFunction<IntStream>);
  LongStream flatMap(LongFunction<LongStream>);
  DoubleStream flatMapToDouble(Function<T,DoubleStream>);
  IntStream flatMapToInt(Function<T,IntStream>);
  LongStream flatMapToLong(Function<T,LongStream>);
  ```