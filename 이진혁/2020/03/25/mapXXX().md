## mapXXX()

- mapXXX() 메소드는 전에 배운 flatMapXXX() 메소드와 마찬가지로 스트림을 매핑하는 메소드 중 하나이다.
  flatMapXXX() 메소드는 어떠한 객체 또는 변수를 스트림으로 하여 스트림의 요소로 만드는 메소드였다면
  mapXXX() 메소드는 어떠한 객체 또는 변수를 어떠한 객체 또는 변수로 변경하는 메소드이다.
  다음은 mapXXX() 메소드의 종류이다.

  ```java
  Stream<R> map(Function<T,R>)
  DoubleStream mapToDouble(ToDoubleFunction<T>);
  IntStream mapToInt(ToIntFunction<T>);
  LongStream mapToLong(ToLongFunction<T>);
  DoubleStream map(DoubleUnaryOperator);
  IntStream mapToInt(DoubleToIntFunction);
  LongStream mapToLong(DoubleToLongFunction);
  Stream<U> mapToObj(DoubleFunction<U>);
  IntStream map(IntUnaryOperator);
  DoubleStream mapToDouble(IntToDoubleFunction);
  LongStream map(LongUnaryOperator);
  IntStream mapToInt(LongToIntFunction);
  Stream<U> mapToObj(LongFunction<U>);
  ```

- 다음은 예제이다.

  ```java
  class Student {
      private String name;
      private Integer score;
      
      public Student(String name, Integer score) {
          this.name = name;
          this.score = score;
      }
      
      public String getName() {
          return name;
      }
      
      public int getScore() {
          return score;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          List<Student> studentList = Arrays.asList(
          	new Student("Lee", 10),
          	new Student("Jin", 20),
              new Student("Hyeok", 30)
          );
          
          studentList.stream()
              .mapToInt(Student :: getScore)
              .forEach(System.out :: println);
      }
  }
  
  // 10
  // 20
  // 30
  ```

  