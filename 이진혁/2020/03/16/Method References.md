## Method References

- 메소드 참조는 람다식을 좀 더 간편하게 만들기 위한 용도로 사용된다.
  메소드 참조는 ::라는 참조자를 이용해서 표현할 수 있다.
  메소드 참조의 종류에는 크게 4가지로 구분할 수 있다.

  1. 정적 메소드 참조

  2. 인스턴스 메소드 참조
  3. 매개변수 메소드 참조
  4. 생성자 참조

  이들에 대해서 알아보기 전에 메소드 참조들이 어떨때 사용되는지 알아봅시다.
  아까 말했듯이 메소드 참조는 람다식을 더욱 간단하게 만들기 위해서 사용됩니다.
  그는 특정 조건이 있어야 하는데 그 조건은 단 하나의 실행문만을 가지고 있어야 한다는 것입니다.
  기본적으로 단 하나의 실행문만을 가질때 간단하게 만드는 방법에 대해서 배웠었습니다.
  다음은 그 예제입니다.

  ```java
  () -> {
      System.out.println("아아");
  }
  
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
  () -> System.out.println("아아");
  ```

  이렇게 사용할 수 있습니다.
  하지만 이들은 그 중에서도 정적 메소드 하나를 사용할때
  인스턴스 메소드 하나를 사용할때,
  람다식의 첫 번째 매개변수의 인스턴스 메소드를 사용하면서 그 뒤에 나온 매개변수를 인스턴스 메소드의
  매개변수로 사용할때,
  객체 하나를 생성하고 리턴할때 사용합니다.
  이제부터 정적 메소드 참조부터 소개해보도록하겠다.



#### 정적 메소드 참조

- 정적 메소드 참조를 사용하는 경우는
  람다식에서 정적 메소드 하나만을 사용하는 실행을 할때 사용된다.

- 정적 메소드 참조를 사용하는 방법은 다음과 같다.

  ```java
  클래스명 :: 정적 메소드명
  ```

  이를 사용하여 람다식을 사용할때는 ->(화살표) 표시나 매개변수를 표시하는 것 또한 필요없다.
  만약 정적 메소드의 매개변수가 존재할 경우 람다식의 매개변수가 정적 메소드의 매개변수로 사용된다.
  만약 람다식의 매개변수와 정적 메소드의 매개변수가 다르다면 오버로딩된 정적 메소드들을 찾아보고
  만약 없다면 예외를 발생시킨다.
  다음은 정적 메소드 참조를 사용하는 간단한 예제이다.

  ```java
  class StaticMethod {
      public static void staticMethod(String s) {
          System.out.println(s + " " + "null");
      }
      
      public static void staticMethod(String s1, String s2) {
          System.out.println(s1 + " " + s2);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Consumer<String> consumer1 = StaticMethod :: staticMethod;
          BiConsumer<String,String> consumer2 = StaticMethod :: staticMethod;
          
          consumer1.accept("aaaa");
          consumer2.accept("aaaa", "bbbb");
      }
  }
  
  // aaaa null
  // aaaa bbbb
  ```

- 이렇게 정적 메소드 참조를 통해 람다식을 더욱 간단하게 만들 수 있다.
  다음은 정적 메소드 참조를 사용하기 전과 사용한 후의 차이를 비교한 것이다.

  ```java
  BiConsumer<String,String> c = (arg1, arg2) -> StaticMethod.staticMethod(arg1, arg2);
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  BiConsumer<String,String> c = StaticMethod :: staticMethod;
  ```

- 확실히 짧고 알아보기 쉽게 만들어진 것을 알 수 있다.



#### 인스턴스 메소드 참조

- 인스턴스 메소드 참조를 사용하는 경우는 정적 메소드 참조와 마찬가지로
  인스턴스 메소드 하나만을 사용하는 실행을 할때 사용된다.
  하지만 이 인스턴스 메소드 참조는 나중에 소개할 매개변수 참조와 닮아있는데
  둘의 차이는 람다식 안의 참조형 변수를 통해 인스턴스 메소드를 사용하는 것과
  람다식 밖의 참조형 변수를 통해 인스턴스 메소드를 사용하는 것이다.
  지금 소개하는 인스턴스 메소드 참조는
  람다식 밖의 참조형 변수를 통해 인스턴스 메소드를 사용하는 것에 포함된다.

- 인스턴스 메소드 참조의 형식은 다음과 같다.

  ```java
  참조형 변수 :: 인스턴스 메소드명
  ```

  이제 이것을 알고 다음의 예제를 살펴보자.

  ```java
  class InstanceMethod {
      public void instanceMethod(String s1, String s2) {
          System.out.println(s1 + " " + s2);
      }
      
      public void instanceMethod(String s) {
          System.out.println(s + " " + null);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          InstanceMethod instance = new InstanceMethod();
          BiConsumer<String,String> consumer1 = instance :: instanceMethod;
          Consumer<String> consumer2 = instance :: instanceMethod;
          consumer1.accept("aaaa", "bbbb");
          consumer2.accept("aaaa");
      }
  }
  
  // aaaa bbbb
  // aaaa null
  ```

- 이 또한 정적 메소드 참조와 마찬가지로 안 그래도 간단한 람다식을 더 간단하게 만들 수 있고
  가독성도 좋아질 수 있다는 것을 알 수 있다.
  다음은 기존의 람다식과 이렇게 간단하게 만든 람다식을 비교한 것이다.

  ```java
  (arg1, arg2) -> instance.instanceMethod(arg1, arg2);
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  instance :: instanceMethod;
  ```



#### 매개변수의 메소드 참조

- 매개변수의 메소드 참조라고 하면 무슨 소리인지 의아해 하는 사람이 많을 것이다.
  아까 람다식 밖의 참조형 변수를 사용하는 것과 람다식 안의 참조형 변수를 사용하는 것이 다르다고 했었다.
  인스턴스 메소드 참조는 람다식 밖의 참조형 변수를 이용하여 인스턴스 메소드를 사용하는 것이였다.
  하지만 이번 매개변수의 메소드 참조는
  람다식 안의 참조형 변수를 이용하여 인스턴스 메소드를 사용하는 것이다.
  람다식 안의 참조형 변수를 이용한다는 것 자체도 의아해 하실 수 있는데
  람다식 안에서 객체를 생성하여 사용하게 되면 최소 두 줄의 코드가 필요하다.

  ```java
  (new Start()).start();		이런 거 포함 안 한다.
  ```

  그러므로 한 줄로 표현하기 위해서는 람다식 매개변수로 들어온 참조형 변수를 이용해야 한다.
  매개변수의 메소드 참조의 형식은 다음과 같다.

  ```java
  클래스명 :: 인스턴스 메소드명
  ```

- 인스턴스 메소드를 사용하는데 참조형 변수명이 아닌 클래스명이 들어가는 이유는
  매개변수로 참조형 변수가 들어가기 때문에 참조형 변수의 이름을 한 가지로 단정 지을 수 없기 때문이다.
  그러면 참조형 변수를 어떻게 매개변수에서 알아보느냐가 중요할텐데
  그것은 가장 첫 번째에 존재하는 매개변수로 단정짓는다.
  다음은 매개변수의 메소드 참조를 이용한 간단한 예제이다.

  ```java
  class People {
      private String name;
      
      public Student() {}
      
      public void instanceMethod(String name) {
          this.name = name;
          System.out.println("name : " + name);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          BiConsumer<Student,String> consumer = Student :: instanceMethod;
          consumer.accept(new Student(), "Kim");
      }
  }
  
  // Kim
  ```

- 이렇게 예제를 보았는데
  이 예제에서는 첫 번째 매개변수로 들어간 Student 객체의 instanceMethod 라는
  인스턴스 메소드를 사용하는 것을 알 수 있었다.
  람다식에서 사용하고자 하는 객체가 Student :: instanceMethod; 라면서
  Student 객체의 인스턴스 메소드를 사용할 것임을 명시하고 있는데 매개변수의 순서를 바꾸어도
  상관 없지 않을까?
  하지만 상관이 있다.
  순서를 바꾸게 되면 Student :: instanceMethod; 에서 에러가 나는 것을 알 수 있다.
  반드시 사용하고자 하는 인스턴스 메소드를 가지고 있는 객체는
  첫 번째 매개변수 자리에 있어야 한다는 점을 꼭 기억하자.



#### 생성자 참조

- 생성자 참조는 객체를 생성하고 바로 리턴하는 코드를 사용할때
  그 코드를 더욱 간편화하기 위해서 사용한다.
  기존의 객체를 생성하고 리턴하는 람다식을 한 번 살펴보자.

  ```java
  () -> new Student("Name", 0);
  ```

- 이런식으로 Student 객체를 리턴할 수 있었다. (물론 저 람다식이 리턴값이 있을 경우에)
  지금까지 계속 메소드 참조에 대해서 알아보았기 때문에 대부분 이해할테니 바로 형식을 보자.

  ```java
  클래스명 :: new
  ```

  이렇게 생성을 원하는 클래스의 이름을 두고 new 키워드를 이용하여 참조 명시를 하면
  클래스의 객체를 생성하여 리턴하는 람다식을 완성할 수 있다.
  다음은 간단하게 Student 객체를 리턴하는 람다식의 예제이다.

  ```java
  class Student {
      public Student() {}
      public void method() { System.out.println("실행"); }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Supplier<Student> supplier = Student :: new;
          Student student = supplier.get();
          student.method();
      }
  }
  
  // 실행
  ```