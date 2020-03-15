## or()-and()-negate()-isEqual()

- andThen() 메소드와 compose() 메소드를 소개할때 말했지만 함수적 인터페이스를 구성함에 있어서
  디폴트 메소드와 정적 메소드는 상관이 없다고 말했었다.
  여기서 소개할 or(), and(), negate() 메소드는 모두 Predicate계의 함수적 인터페이스의 디폴트 메소드이다.
  각각의 기능은 이름 그대로 Predicate에서 나온 boolean 값을 ||연산, &&연산 !연산하는 것이다.
  그럼 바로 or(), and(), negate() 메소드의 예제를 바로 간단하게 보도록 하겠다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          BiPredicate<Integer,Integer> predicate1 = (s1, s2) -> s1 == s2;
  		BiPredicate<Integer,Integer> predicate2 = (s1, s2) -> s1*2 == s2;
          
          BiPredicate<Integer,Integer> predicate3 = predicate1.or(predicate2);
          BiPredicate<Integer,Integer> predicate4 = predicate1.and(predicate2);
          BiPredicate<Integer,Integer> predicate5 = predicate1.negate();
          
          System.out.println(predicate3.test(5, 5));
          System.out.println(predicate4.test(5, 5));
          System.out.println(predicate5.test(5, 5));
      }
  }
  
  // true
  // false
  // false
  ```

- 이렇게 각각의 이름에 맞는 기능을 가지고 있는 것을 확인할 수 있다.
  다음은 isEqual() 메소드에 대한 이야기인데
  방금 전 or(), and(), negate()는 디폴트 메소드이고 isEqual() 메소드는 정적메소드이다.
  이 isEqual() 메소드는 매개변수로 들어온 값과 test()에서
  사용되는 매개변수를 equals() 메소드를 이용하여 비교한 후 리턴값을 리턴한다.
  말로는 설명하기가 어려우니 예제를 확인해보겠다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Predicate<String> predicate = Predicate.isEqual("String");
          System.out.println(predicate.test("String"));
          System.out.println(predicate.test("StringString"));
      }
  }
  
  // true
  // false
  ```

- 이렇게 비교를 할 수 있도록 있는 메소드인데 솔직히 언제 쓰이는 지는 확실히 모르겠다.