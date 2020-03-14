## andThen() - compose()

- 함수적 인터페이스가 되기 위해서는 단 하나만의 추상 메소드가 존재해야 한다는 조건이 있다.
  하지만 default 메소드나 정적 메소드가 존재하면 안 된다는 조건이 없기 때문에
  함수적 인터페이스라고 하더라도 default 메소드나 정적 메소드가 존재할 수 있다.
  그 예로 지금 소개할 andThen() default 메소드와 compose() default 메소드가 있다.

- andThen() 메소드를 지원하는 함수적 인터페이스는
  Consumer<T>, BiConsumer<T,U>, DoubleConsumer, IntConsumer, LongConsumer,
  Function<T,R>, BiFunction<T,U,R>, BinaryOperator<T>, DoubleUnaryOperator,
  IntUnaryOperator, LongUnaryOperator 가 있다.
  그리고 compose() 메소드를 지원하는 함수적 인터페이스는
  Function<T,R>, DoubleUnaryOperator, IntUnaryOperator, LongUnaryOperator 가 있다.

- andThen() 메소드와 compose() 메소드는 두 개의 같은 함수적 인터페이스를 순차적으로 연결하여
  사용하기 위해서 사용되는 메소드이다.
  andThen() 메소드와 compose() 메소드는 어떤 함수적 인터페이스를 먼저 실행하는지가 다르다.
  andThen() 메소드는 매개변수로 들어온 함수적 인터페이스를 나중에 실행하고
  compose() 메소드는 매개변수로 들어온 함수적 인터페이스를 먼저 실행한다.
  위에서 말했듯이 Consumer계의 인터페이스와 Function계, Operator계 인터페이스가
  이 디폴트 메소드들을 가지고 있는데 알다싶이 Consumer계 인터페이스들은
  리턴값이 존재하지 않는다.
  따라서 정말 실행하는 순서만 다르다는 특징을 가지고 있다.
  다음은 Consumer<T>를 이용하여 andThen() 메소드와 compose() 메소드를 사용하는 예제이다.

  ```java
  class Student {
      private String name;
      private Integer number;
      
      public Student(String name, Integer number) {
          this.name = name;
          this.number = number;
      }
      
      public String getName() {
          return name;
      }
      
      public void setName(String name) {
          this.name = name;
      }
      
      public Integer getNumber() {
          return number;
      }
      
      public void setNumber(Integer number) {
          this.number = number;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Consumer<Student> consumer1 = s -> System.out.println(s.getName());
          Consumer<Student> consumer2 = s -> System.out.println(s.getNumber());
          Consumer<Student> consumer3 = consumer1.andThen(consumer2);
          Consumer<Student> consumer4 = consumer1.compose(consumer2);
          
          Student student = new Student("Lee", 16);
          consumer3.accept(student);
          consumer4.accept(student);
      }
  }
  
  // Lee
  // 16
  // 16
  // Lee
  ```

- 이렇게 Consumer 인터페이스를 사용할때는 andThen() 메소드와 compose() 메소드는
  순서의 차이밖에 나지 않는 다는 것을 확인할 수 있었다.

- 다음으로는 Function 인터페이스와 Operator 인터페이스를 사용할때의
  andThen() 메소드와 compose() 메소드에 대해서 알아볼 것이다.
  Consumer 인터페이스에서의 두 메소드는 순서대로 실행하는 기능밖에 하지 못했다.
  하지만 Function, Operator 인터페이스에서는 리턴값이 존재하기 때문에
  첫 번째로 실행한 내용의 리턴값을 두 번째로 실행할 내용의 매개값으로 사용하여 실행하게 된다.
  다음은 Operator 인터페이스의 andThen() 메소드와 compose() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          IntUnaryOperator iuo1 = n -> n + 1;
          IntUnaryOperator iuo2 = n -> n * 2;
          IntUnaryOperator iuo3 = iuo1.andThen(iuo2);
          IntUnaryOperator iuo4 = iuo1.compose(iuo2);
          
          iuo3.applyAsInt(10);
          iuo4.applyAsInt(10);
      }
  }
  
  // 22
  // 21
  ```

  