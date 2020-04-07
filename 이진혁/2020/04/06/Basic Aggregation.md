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

  ```java
  import java.util.Comparator;
  import java.util.stream.DoubleStream;
  import java.util.stream.IntStream;
  import java.util.stream.Stream;
  
  public class BasicAggregationTest {
  	public static void main(String[] args) {
  		Stream<String> stringStream1 = Stream.of("AA", "AB", "AC");
  		Stream<String> stringStream2 = Stream.of("AA", "AB", "AC");
  		Stream<String> stringStream3 = Stream.of("AA", "AB", "AC");
  		Stream<String> stringStream4 = Stream.of("AA", "AB", "AC");
  		
  		String stringMax = stringStream1.max(Comparator.naturalOrder()).get();
  		String stringMin = stringStream2.min(Comparator.naturalOrder()).get();
  		String stringFirst = stringStream3.findFirst().get();
  		long stringCount = stringStream4.count();
  		
  		System.out.println("String Max : " + stringMax);
  		System.out.println("String Min : " + stringMin);
  		System.out.println("String First : " + stringFirst);
  		System.out.println("String Count : " + stringCount);
  		System.out.println();
  		
  		IntStream intStream1 = IntStream.of(1, 2, 3);
  		IntStream intStream2 = IntStream.of(1, 2, 3);
  		IntStream intStream3 = IntStream.of(1, 2, 3);
  		IntStream intStream4 = IntStream.of(1, 2, 3);
  		IntStream intStream5 = IntStream.of(1, 2, 3);
  		IntStream intStream6 = IntStream.of(1, 2, 3);
  		
  		int intMax = intStream1.max().getAsInt();
  		int intMin = intStream2.min().getAsInt();
  		int intFirst = intStream3.findFirst().getAsInt();
  		long intCount = intStream4.count();
  		double intAverage = intStream5.average().getAsDouble();
  		int intSum = intStream6.sum();
  
  		System.out.println("Int Max : " + intMax);
  		System.out.println("Int Min : " + intMin);
  		System.out.println("Int First : " + intFirst);
  		System.out.println("Int Count : " + intCount);
  		System.out.println("Int Average : " + intAverage);
  		System.out.println("Int Sum : " + intSum);
  		System.out.println();
  		
  		DoubleStream doubleStream1 = DoubleStream.of(1.1, 2.2, 3.3);
  		DoubleStream doubleStream2 = DoubleStream.of(1.1, 2.2, 3.3);
  		DoubleStream doubleStream3 = DoubleStream.of(1.1, 2.2, 3.3);
  		DoubleStream doubleStream4 = DoubleStream.of(1.1, 2.2, 3.3);
  		DoubleStream doubleStream5 = DoubleStream.of(1.1, 2.2, 3.3);
  		DoubleStream doubleStream6 = DoubleStream.of(1.1, 2.2, 3.3);
  		
  		double doubleMax = doubleStream1.max().getAsDouble();
  		double doubleMin = doubleStream2.min().getAsDouble();
  		double doubleFirst = doubleStream3.findFirst().getAsDouble();
  		long doubleCount = doubleStream4.count();
  		double doubleAverage = doubleStream5.average().getAsDouble();
  		double doubleSum = doubleStream6.sum();
  		
  		System.out.println("Double Max : " + doubleMax);
  		System.out.println("Double Min : " + doubleMin);
  		System.out.println("Double First : " + doubleFirst);
  		System.out.println("Double Count : " + doubleCount);
  		System.out.println("Double Average : " + doubleAverage);
  		System.out.println("Double Sum : " + doubleSum);
  	}
  }
  
  // String Max : AC
  // String Min : AA
  // String First : AA
  // String Count : 3
  // 
  // Int Max : 3
  // Int Min : 1
  // Int First : 1
  // Int Count : 3
  // Int Average : 2.0
  // Int Sum : 6
  // 
  // Double Max : 3.3
  // Double Min : 1.1
  // Double First : 1.1
  // Double Count : 3
  // Double Average : 2.1999999999999997
  // Double Sum : 6.6
  ```
  
  