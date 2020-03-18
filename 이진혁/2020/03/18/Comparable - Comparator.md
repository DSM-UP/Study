## Comparable - Comparator

- TreeSet과 TreeMap은 이진트리를 기반으로 해서 만들어졌기 때문에
  TreeSet의 객체와 TreeMap의 Key는 자동으로 오름차순 정렬을 하게 된다.
  객체가 Integer라면 숫자가 크고 작음을 비교하면 되고,
  객체가 String이라면 유니코드의 우선순위를 비교하면 된다.
  하지만 만약 객체가 내가 사용자지정으로 만든 새로운 객체라면?
  어떻게 비교를 해야할까?
  그것을 정해주도록하는 것이 Comparable 인터페이스이다.
  TreeSet과 TreeMap을 사용할때 객체가 만약 Comparable 인터페이스를 구현하고 있지 않는다면
  그 객체를 저장함과 동시에 ClassCastException가 발생하게 된다.
  따라서 TreeSet의 객체와 TreeMap의 Key는 Comparable 인터페이스를 구현해야 한다.

- Comparable 인터페이스의 내부에는 다음과 같은 추상 메소드가 하나 존재한다.

  ```java
  int compareTo(T o);
  ```

  T는 Comparable 인터페이스의 제네릭 타입니다.
  이 compareTo() 메소드는 매개변수로 들어온 객체가 자신과 같으면 0을,
  매개변수로 들어온 객체가 더 크면 음수를,
  매개변수로 들어온 객체가 더 작으면 양수를 리턴하는 메소드이다.

- 다음은 Student 객체를 TreeSet에 저장하는데 정렬의 기준을 필드 중의 number로 하기로 한 예제이다.

  ```java
  class Student implements Comparable<Student> {
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
      
      public int compareTo(Student o) {
          return getNumber().compareTo(o.getNumber());
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          TreeSet<Student> treeSet = new TreeSet<Student>();
          treeSet.add(new Student("Lee", 20));
          treeSet.add(new Student("Kim", 50));
          treeSet.add(new Student("Park", 10));
          treeSet.add(new Student("Jung", 30));
          treeSet.add(new Student("Son", 40));
          
          for(Student s : treeSet)
              System.out.println("학생 정보 : " + s.getName() + ", " + s.getNumber());
      }
  }
  
  // 학생 정보 : Park, 10
  // 학생 정보 : Lee, 20
  // 학생 정보 : Jung, 30
  // 학생 정보 : Son, 40
  // 학생 정보 : Kim, 50
  ```

- 이렇다고 무조건 오름차순이라고 생각하면 안 된다.
  compareTo() 메소드를 반대로 설계했다면
  내림차순이 되는 것이기 때문이다.



- 그렇다면 Comparable 인터페이스를 구현하지 않은 객체는 사용할 수 없는걸까?
  그건 또 아니다. 또 다른 방법이 존재한다.
  Comparator 인터페이스를 사용하는 것이다.
  Comparator 인터페이스는 compare() 메소드를 포함하여 수많은 추상 메소드를 가지고 있는데
  여기서는 이 compare() 메소드가 중요하다.
  다음은 compare() 메소드의 형식이다.|

  ```java
  int compare(T o1, T o2);
  ```

  compare() 메소드는 첫 번째 매개변수와 두 번째 매개변수를 비교하여
  우선순위를 구하는 메소드인데
  우선순위가 같으면 0,
  왼쪽이 더 크면 양수를,
  오른쪽이 더 크면 음수를 리턴하게 된다.

- TreeSet과 TreeMap의 객체를 생성할때 지금까지는 매개변수가 존재하지 않는 생성자를 사용했었다.
  하지만 Comparator 객체를 매개변수로하는 생성자가 존재하는데
  이 생성자를 사용하게 되면 매개변수로 들어온 정렬자를 기준으로 정렬을 실행하게 된다.
  따라서 들어가는 객체는 Comparable 인터페이스를 구현할 필요가 없다.
  여기서 정렬자는 Comparator 인터페이스를 구현한 클래스를 말한다.

- 다음은 Comparator 인터페이스를 이용하여 위의 Comparable 예제를 구현한 것이다.

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
  
  class AscendingOrderComparator implements Comparator<Student> {
      public int compare(Student o1, Student o2) {
          return o1.getNumber().compare(o2.getNumber());
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          TreeSet<Student> treeSet = new TreeSet<>(
              new AscendingOrderComparator());
          treeSet.add(new Student("Lee", 20));
          treeSet.add(new Student("Kim", 50));
          treeSet.add(new Student("Park", 10));
          treeSet.add(new Student("Jung", 30));
          treeSet.add(new Student("Son", 40));
          
          for(Student s : treeSet)
              System.out.println("학생 정보 : " + s.getName() + ", " + s.getNumber());
      }
  }
  
  // 학생 정보 : Park, 10
  // 학생 정보 : Lee, 20
  // 학생 정보 : Jung, 30
  // 학생 정보 : Son, 40
  // 학생 정보 : Kim, 50
  ```

  