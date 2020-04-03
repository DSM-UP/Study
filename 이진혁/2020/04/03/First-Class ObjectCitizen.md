## First-Class Object/Citizen

- First-Class Object/Citizen은 1급 객체 또는 1급 시민이라고 한다.
  아마 함수형 프로그래밍을 접하게 되면서 1급 객체라는 말을 많이 들어봤을 것이다.
  오늘은 1급 객체란 무엇이고 자바는 함수형 프로그래밍 언어가 맞는가에 대해서 알아볼 것이다.

- 먼저 1급 객체라는 것은 조건이 존재한다.

  1. 변수에 값을 할당할 수 있어야 한다.
  2. 함수의 파라미터로 넘길 수 있어야 한다.
  3. 함수의 반환값이 될 수 있어야 한다.

- 이러한 조건이 존재하는데 기존 자바의 함수는 이러한 조건들을 지킬 수 없었기 때문에 
  함수형 프로그래밍 언어라고 하지 않았습니다.
  하지만 Java 8의 도입으로부터 자바는 함수형 프로그래밍 언어라고 인정받게 되었다.
  Java 8에 람다식이 추가되고 Function, Operator, Predicate와 같은 함수적 인터페이스가 추가되면서
  자바의 함수가 1급 객체라는 것이 증명이 되었다.
  그렇다는 것은 자바의 함수가 변수에 할당될 수 있고, 함수의 파라미터로 넘길 수 있으며,
  반환값이 될 수 있다는 것인데 어떻게 그것이 가능할까?

- 그것은 함수적 인터페이스를 통해서 구현이 가능하다.
  함수적 인터페이스를 이용하면 람다식을 이용해서 익명 객체를 간단하게 사용할 수 있는데
  이는 함수 자체를 표현할 수 있다.

- 다음은 함수적 인터페이스를 이용해서 자바가 1급 객체라는 것을 증명하는 코드이다.

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
      
      public void setName(String name) {
          this.name = name;
      }
      
      public int getNumber() {
          return number;
      }
      
      public void setNumber(int number) {
          this.number = number;
      }
  }
  
  class Test {
      private Function<Integer,Integer> func;
      
      public Test(Function func) {}
      
      public Function getFunction() {
          return func;
          // 함수의 반환값이 될 수 있다.
      }
      
      public void setFunction(Function<Integer,Integer> func) {
          // 파라미터로 전달이 가능하다.
          this.func = func;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Function<Student,String> func = Student :: getName();
          // 변수에 함수를 할당할 수 있다.
      }
  }
  ```

- 이렇게 자바8이상부터는 자바도 함수형 프로그래밍 언어라고 할 수 있다.

