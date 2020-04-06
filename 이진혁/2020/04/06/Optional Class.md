## Optional Class

- Optional 클래스들은 앞의 기본 집계 메소드들을 살펴보면서 리턴값으로서 알게 된 클래스이다.
  Optional 클래스는 기본적으로 안에 값을 하나 저장하는 Wrapper 클래스와 마찬가지로 이용되지만
  isPresent(), orElse(), ifPresent() 메소드를 이용해서 여러 기능을 사용할 수 있도록 설계되어 있다.

- Optional 클래스들의 메소드들의 종류는 다음과 같다.

  ```java
  // OptionalXXX 공통
  public boolean isPresent();
  
  // Optional
  public T orElse(T other);
  public void ifPresent(Consumer<? super T> consumer);
  
  // OptionalInt
  public int orElse(int other);
  public void ifPresent(IntConsumer consumer);
  
  // OptionalLong
  public long orElse(long other);
  public void ifPresent(LongConsumer consumer);
  
  // OptionalDouble
  public double orElse(double other);
  public void ifPresent(DoubleConsumer consumer);
  ```

- Optional 클래스가 존재하는데에는 이유가 존재한다.
  그냥 Optional 클래스를 만들 수도 있지만 기본적으로 스트림을 사용하면서
  생성되는 경우가 많다.
  그럴 경우 최종 집계를 하면서 나타나게 되는데
  만약 최종 집계를 하고 getXXX() 메소드를 실행하는데
  값이 존재하지 않다면 어떻게 될까?
  당연히 NoSuchElementException이 발생하게 될 것이다.
  자바는 멀티 스레딩을 통해 동적인 스트림 접근이 가능함에 따라
  값을 얻어내고자 할때 값이 없을 수도 있다.
  그렇기 때문에 안전하게 값을 뽑아내기 위해서 Optional 클래스가 존재하는 것이다.

- Optional 클래스를 이용해서 안전하게 값을 뽑아내는 방법은 총 세 가지가 존재한다.

  1. isPresent()

     - isPresent() 메소드는 OptionalXXX 클래스에 값이 존재하면 true를 리턴하고
       아니라면 false를 리턴하는 메소드이다.
       따라서 이를 이용해서 다음과 같이 예제를 만들 수 있다.

       ```java
       public class MainClass {
           public static void main(String[] args) {
               int[] intArray1 = {};
               int[] intArray2 = {1, 2, 3};
               
               OptionalInt oi1 = Arrays.stream(intArray1).sum();
               OptionalInt oi2 = Arrays.stream(intArray2).sum();
               
               if(oi1.isPresent())
                   System.out.println(oi1.getAsInt());
               else
                   System.out.println("isEmpty");
               
               if(oi2.isPresent())
                   System.out.println(oi2.getAsInt());
               else
                   System.out.println("isEmpty");
           }
       }
       
       // isEmpty
       // 6
       ```

     - 첫 번째 배열을 이용한 oi1은 비어있었으므로 isEmpty가 출력되었고
       두 번째 배열을 이용한 oi2는 1, 2, 3이라는 요소가 존재했기 때문에
       이들을 합한 6이라는 결과값이 출력되었다.

  2. orElse()

     - orElse() 메소드는 저장된 값이 없을 경우 매개변수로 들어온 값을
       디폴트 값으로 지정하는 메소드이다.
       이를 이용한 예제는 다음과 같다.

       ```java
       public class MainClass {
           public static void main(String[] args) {
               int[] intArray1 = {};
               int[] intArray2 = {1, 2, 3};
               
               int value1 = Arrays.stream(intArray1).sum().orElse(10);
               int value2 = Arrays.stream(intArray2).sum().orElse(10);
               
               System.out.println(value1);
               System.out.println(value2);
           }
       }
       
       // 10
       // 6
       ```

     - 첫 번째 출력 같은 경우에는 빈 배열을 사용했기 때문에 디폴트로 넣어준 값인 10이 출력되었고
       두 번째 출력 같은 경우에는 빈 배열이 아닌 값이 있는 배열을 사용했기 때문에
       디폴트 값을 무시하고 1 + 2 + 3  값인 6이 출력되었다.

  3. ifPresent()

     - ifPresent() 메소드는 값이 저장되어 있을 경우에는 매개변수로 들어온 Consumer 인터페이스를
       통해서 값을 처리하고 저장되어 있지 않을 경우에는 아무것도 실행하지 않는다.

     - 이 메소드는 밖에서 처리하면 예외가 발생할 수 있으니 안에서 처리하자는 의미로 만들어진
       메소드이다.
       다음은 이 메소드의 예제이다.

       ```java
       public class MainClass {
           public static void main(String[] args) {
               Stream.of(1, 2, 3)
                   .sum()
                   .ifPresent(System.out :: println);
               
               Stream.of()
                   .sum()
                   .ifPresent(System.out :: println);
           }
       }
       
       // 6
       ```

     - 첫 번째는 값이 있었기 때문에 총 합인 6이 출력되는 Consumer 람다식을 실행하였지만
       두 번째는 값이 없었기 때문에 Consumer 람다식을 실행조차 하지 않았다.