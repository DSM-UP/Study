## asDoubleStream()-asLongStream()-boxed()

- asDoubleStream() 메소드는 int 타입과 long 타입의 변수를 double로 바꾸어 DoubleStream 형태로
  리턴하는 메소드이다.
- asLongStream() 메소드는 int 타입의 변수를 long 타입의 변수로 바꾸어 LongStream 형태로
  리턴하는 메소드이다.
- boxed() 메소드는 Wrapper 클래스의 요소들로 변경하는 메소드이다.
  따라서 int 타입을 Integer 타입으로, long 타입을 Long 타입으로, double 타입을 Double 타입으로 변경하여
  각각의 요소에 맞는 Stream<Integer>, Stream<Long>, Stream<Double> 으로 리턴하는 메소드이다.



- 다음은 asDoubleStream() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] array = { 10, 20, 30 };
          
          Arrays.stream(array)
              .asDoubleStream()
              .forEach(System.out :: println);
      }
  }
  
  // 10.0
  // 20.0
  // 30.0
  ```

- 이렇게 int 타입의 요소를 double 타입의 요소로 변경하는 것을 알 수 있다.