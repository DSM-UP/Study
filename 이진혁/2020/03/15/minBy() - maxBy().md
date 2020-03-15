## minBy() - maxBy()

- BinaryOperator<T> 인터페이스의 정적 메소드에는 minBy() 와 maxBy()가 존재한다.
  minBy() 메소드와 maxBy() 메소드는 매개변수로 Comparator<? super T>를 받는데
  이는 compare() 추상 메소드를 가지고 있는 함수적 인터페이스이다.
  이 compare() 메소드를 통해서 비교연산을 진행하는 것이다.
  minBy() 메소드와 maxBy() 메소드는 이름 그대로 가장 작은 값과 가장 큰 값을 얻어내는 메소드이다.
  다음은 minBy() 메소드와 maxBy() 메소드를 이용한 예제이다.

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
          Student student1 = new Student("Lee", 0);
          Student student2 = new Student("Kim", 1);
          
          BinaryOperator<Student> bo1 = BinaryOperator.minBy(
              (a, b) -> Integer.compare(a.getNumber(), b.getNumber()));
          System.out.println(bo1.apply(student1, student2).getName());
          
          BinaryOperator<Student> bo2 = BinaryOperator.maxBy(
              (a, b) -> Integer.compare(a.getNumber(), b.getNumber()));
          System.out.println(bo2.apply(student1, student2).getName());
      }
  }
  
  // Lee
  // Kim
  ```

  