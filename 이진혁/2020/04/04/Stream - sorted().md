## Stream - sorted()

- sorted() 메소드는 Stream의 중간 처리 과정 중 하나이다.
  sorted() 메소드는 이름 그대로 정렬을 하는 메소드이다.
  다음은 sorted() 메소드의 종류이다.

  ```java
  public Stream<T> sorted();
  public IntStream sorted();
  public DoubleStream sorted();
  public LongStream sorted();
  public Stream<T> sorted(Comparator<? super T> comparator);
  ```

- 여기서 매개변수가 없는 sorted() 메소드의 특이한 점이 있다.
  오버로딩할 때 이름이 같고 매개변수의 수, 종류가 같은 경우에는 오버로딩이 불가하다고 알고 있다.
  하지만 이들은 리턴값만 다를 뿐 이름, 매개변수 수, 매개변수 종류가 모두 같다.
  이는 Stream에서 사용하는가 아니면 IntStream에서 사용하는가, DoubleStream에서 사용하는가,
  LongStream에서 사용하는 가에 따라서 달라진다.
  그에 따른 Stream을 가지는 리턴값을 가지는 메소드를 사용한다는 것을 잊지 않았으면 한다.
  맨 처음에 나도 이걸 보고 깜짝 놀랐다.
  
- 매개변수로 Comparator 객체를 받는 sorted() 메소드는 매개변수로 주어준 Comparator 객체를 기준으로
  정렬을 실행하게 되는데 매개변수가 없으면 어떻게 될까?
  매개변수가 없다면 안에 존재하는 객체가 Comparable 인터페이스를 구현하고 있어야 한다.
  물론 기본 자료형인 int, double, long은 알아서 정렬이 된다.
  만약 객체가 Comparable 인터페이스를 구현하지 않았을 경우 ClassCastException이 발생한다.
  그리고 Comparator 객체를 매개변수로 받더라도 Comparator.naturalOrder()를 사용할 경우
  객체가 Comparable 인터페이스를 구현하지 않으면 오류가 발생한다.
  물론  Comparator.reverseOrder() 를 사용할 경우에도 마찬가지이다.
  Comparator.naturalOrder()는 내부적으로 구현되어 있는 compare() 메소드를 사용하겠다는 것이다.
  Comparator.reverseOrder()는 내부적으로 구현되어 있는 구현 방법의 반대로 정렬을 하겠다는 것이다.
  
- 다음은 sorted() 메소드의 예제이다.
  
  ```java
  class Student implements Comparable<Student> {
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
      
      public int compareTo(Student o) {
          return String.compare(getName(), o.getName());
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          List list = Arrays.asList(
          	new Student("Lee", 1),
          	new Student("Kim", 2),
          	new Student("Park", 3),
          );
          
          list.stream()
              .sorted()
              .forEach( System.out :: println );
      }
  }
  
  // Kim
  // Lee
  // Park
  ```
  
  

