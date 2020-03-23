## Filtering

- 자바 Stream 파이프라인에서 중간 처리 기능 중 필터링이라는 기능이 존재한다.
  이름 그대로 불필요한 요소를 제거하는 역할을 한다고 볼 수 있다.
  자바 Stream 필터링 기능의 메소드는 distinct()와 filter()가 있다.
  distinct() 메소드는 조건이 정해져 있는 필터링을 진행하고
  filter() 메소드는 주어진 조건에 따른 필터링을 진행한다.



#### distinct()

- distinct() 메소드는 위에서 말했듯이 조건이 정해져 있는 필터링을 진행한다.
  여기서의 정해져 있는 조건이란 Object.equals(Object obj)를 이용하여 같은지를 비교하고
  만약 같다면 하나를 제거하는 조건이다.

- 여기서 주의할 점이 Object.equals() 메소드를 사용하는 것이지
  사용되는 객체의 equals() 메소드를 사용하는 것이 아니라는 것이다.

- 앞으로 두 가지 예제를 살펴보게 될 것이다.

- 첫 번째 예제는 Student 객체를 가지는 List를 이용하여 distinct() 메소드를 사용하는 예제이다.
  Student 객체 안에 equals() 메소드를 오버라이딩하였지만 Student 객체의 equals() 메소드를
  사용하는 것이 아니라 Object 클래스의 equals() 메소드를 사용하는 것이라서 소용이 없음을
  알 수 있을 것이다.

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
      
      public Integer getNumber() {
          return number;
      }
      
      @Override
      public boolean equals(Object obj) {
  		System.out.println("dd");
  		if(obj instanceof Student3) {
  			Student3 student = (Student3) obj;
  			return student.getName().equals(getName())
                  && student.getNumber() == getNumber();
  		} else {
  			return false;
  		}
  	}
  }
  
  public class MainClass {
      public static void main(String[] args) {
  		List<Student> list = Arrays.asList(
          	new Student("Lee", 10);
              new Student("Kim", 20);
              new Student("Lee", 10);
              new Student("Lee", 20);
          );
          
          list.stream()
              .distinct()
              .forEach( n -> System.out.println("name : " + n.getName()
                                               + ", number : " + n.getNumber()));
      }
  }
  
  // name : Lee, number : 10
  // name : Kim, number : 20
  // name : Lee, number : 10
  // name : Lee, number : 20
  ```

- 이렇게 name : Lee, number : 10인 Student 객체가 두 개나 있었음에도 불구하고
  distinct() 메소드를 통해 걸러지지 않은 것으로 보아 Object.equals() 메소드는
  Student의 toString() 값을 비교하기 때문에 같은 값이 나오지 않은 것 같다.

- 따라서 equals() 메소드는 Student 객체의 오버라이딩 된 equals() 메소드가 아니라
  Object의 equals() 메소드를 사용한다는 것을 증명하였다.



- 두 번째 예제는 equals() 메소드가 Object 클래스의 것이 사용된다는 것을
  첫 번째 예제에서 살펴보았으니 Integer 객체를 이용해서 distinct() 메소드가 기능이 적용된다는
  것을 보여줄 것이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          List<Integer> list = Arrays.asList(
          	1, 2, 3, 4, 1, 2, 3, 4
          );
          
          list.stream()
              .distinct()
              .forEach( System.out :: println );
      }
  }
  
  // 1
  // 2
  // 3
  // 4 
  ```

- 이렇게 중복되는 두 개의 Integer가 하나로 걸러지는 것을 볼 수 있다.



#### filter()

- filter() 메소드는 조건을 정할 수 있는 필터링을 수행한다.
  여기서 조건을 정한다는 것은 매개변수로 Predicate 인터페이스를 받는다는 것이다.
  Predicate 인터페이스는 함수적 인터페이스로서 람다식으로 사용하기 적당하다.
  그리고 Predicate 인터페이스 종류들은 리턴값으로 boolean을 가진다는 공통점이 있기 때문에
  true가 나오면 제거하지 않고 false가 나오면 제거하는 필터링을 수행한다.

- 다음은 filter() 메소드의 종류이다.

  ```java
  Stream filter(Predicate<? super T> predicate);
  IntStream filter(IntPredicate predicate);
  LongStream filter(LongPredicate predicate);
  DoubleStream filter(DoublePredicate predicate);
  ```

- 이렇게 객체를 사용하는 filter() 메소드와 int, long, double 타입을 사용하는 filter() 메소드가 있다.
  다음은 간단하게 filter() 메소드들을 사용하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          List<String> list = Arrays.asList("Lee", "Kim", "Lee", "Kim");
          int[] intStream = { 1, 2, 3 };
          long[] longStream = { 100, 200, 300 };
          double[] doubleStream = { 1.1, 2.2, 3.3 };
          
          list.stream()
              .filter( n -> n.equals("Lee") )
              .forEach( System.out :: println );
          
          Arrays.stream(intStream)
              .filter( n -> n <= 2 )
              .forEach( System.out :: println );
          
          Arrays.stream(longStream)
              .filter( n -> n > 200 )
              .forEach( System.out :: println );
          
          Arrays.stream(doubleStream)
              .filter( n -> true )
              .forEach( System.out :: println );
      }
  }
  
  // Lee
  // Lee
  // 1
  // 2
  // 300
  // 1.1
  // 2.2
  // 3.3
  ```