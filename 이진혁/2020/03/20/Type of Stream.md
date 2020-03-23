## Type of Stream

- 전에 Stream에 대해서 배운 적이 있다.
  그래서 오늘은 Stream의 종류에 대해서 배워볼 예정이다.

- 전에 배웠던 Stream은 BaseStream 인터페이스를 구현한 인터페이스이다.
  그리고 이 BaseStream을 구현하고 있는 인터페이스가 기본적으로 네 가지가 존재한다.
  Stream, IntStream, LongStream, DoubleStream이다.
  기존의 Stream은 모든 객체를 사용하였다면
  IntStream은 인터페이스명 그대로 int 타입의 변수들을 받는 것이라고 볼 수 있고
  LongStream과 DoubleStream도 같다고 볼 수 있다.

- BaseStream을 구현한 네 가지의 인터페이스를 사용하기 위해서는
  일단 인터페이스이기 때문에 이를 구현을 하는 클래스를 이용해야 한다.
  하지만 여기서는 그 클래스를 지원하지 않고 어떠한 메소드들을 이용해서
  이를 구현한 객체를 리턴하는 방식을 사용한다.

- 다음은 얻을 수 있는 Stream객체에 관한 것이다.

  ```java
  // 컬렉션 메소드
  Stream<T> stream();
  Stream<T> parallelStream();
  
  // 배열 메소드
  static <T> Stream<T> Arrays.stream(T[] array);
  static <T> Stream<T> Arrays.stream(T[] array, int startInclusive, int endExclusive);
  static IntStream stream(int[] array);
  static IntStream stream(int[] array, int startInclusive, int endExclusive);
  static LongStream stream(long[] array);
  static LongStream stream(long[] array, int startInclusive, int endExclusive);
  static DoubleStream stream(double[] array);
  static DoubleStream stream(double[] array, int startInclusive, int endExclusive);
  
  static <T> Stream<T> of(T t);
  static <T> Stream<T> of(T... values);
  static IntStream of(int t);
  static IntStream of(int... values);
  static LongStream of(long t);
  static LongStream of(long... values);
  static DoubleStream of(double t);
  static DoubleStream of(double... values);
  
  // int 범위 지정
  static IntStream range(int startInclusive, int endExclusive);
  static IntStream rangeClosed(int startInclusive, int endInclusive);
  
  // long 범위 지정
  static LongStream range(long startInclusive, int endExclusive);
  static LongStream rangeClosed(int startInclusive, int endInclusive);
  
  // 디렉토리 메소드
  static Stream<Path> Files.find(Path start,
                          int maxDepth,
                          BiPredicate<Path,BasicFileAttributes> matcher,
                          FileVisitOption... options
                         );
  static Stream<Path> list(Path dir);
  
  // 파일 메소드
  static Stream<String> lines(Path path);
  static Stream<String> lines(Path path, Charset cs);
  
  // 랜덤 수 지정
  IntStream ints();
  LongStream longs();
  DoubleStream doubles();
  ```



- 다음은 중간처리와 최종처리를 지원하는 Stream의 메소드들을 나열한 것이다.(참고만 하자)
  참고로 중간처리와 최종처리를 이어 라인을 형성한 것을 파이프라인이라고 한다.(Stream의 연속)

  ```java
  distinct() - filter(...) - flatMap(...) - flatMapToDouble(...)
  flatMapToInt(...) - flatMapToLong(...) - map(...) - mapToDouble(...)
  mapToInt(...) - mapToLong(...) - mapToObj(...) - asDoubleStream()
  asLongStream() - boxed() - sorted(...) - peek(...)
  allMatch(...) - anyMatch(...) - noneMatch(...) - count()
  findFirst() - max(...) - min(...) - average()
  reduce(...) - sum() - forEach(...) - collect(...)
  ```

  

  