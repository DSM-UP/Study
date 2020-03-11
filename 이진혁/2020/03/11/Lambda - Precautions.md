## Lambda - Precautions

- 람다식을 사용할때 주의할 점이 크게 두 가지 존재한다.
  첫 번째는 this 키워드를 사용할때이고 두 번째는 매개변수와 로컬변수를 사용할때이다.

- 첫 번째인 this 키워드를 사용할때를 살펴보자.
  기본적으로 this 키워드는 자신이 속한 클래스를 가리키는 것으로 사용된다.
  우리가 람다식을 사용하기 이전, 익명객체를 사용할때 익명객체 안에서의 this는
  익명객체 안을 가리킨다.
  예를 들면 다음과 같다.

  ```java
  Runnable runnable = new Runnable() { this.~~~; }
  ```

  이러한 익명객체가 존재할때 this가 가리키는 것은 this가 존재하는 저 중괄호 안이다.
  즉, 익명객체를 가리킨다고 할 수 있다.
  하지만 람다식에서의 this 키워드는 람다식 본체를 가리키는 것이 아니라
  람다식을 포함하는 클래스를 가리킨다.
  예를 들자면 다음과 같다.

  ```java
  interface Interface {
      public void a();
  }
  
  public class A {
      class B {
          int c = 10;
  		
          Interface i = () -> {
              System.out.println(this.c);
          }
      }
  }
  ```

  이런 상활일때 this가 만약 람다식을 가리켰다면 람다식 안에는 c가 존재하지 않으므로
  찾지 못할 수도 있다. (물론 이렇게 만들어졌다면 상위 개념인 클래스에서 찾게 될 수도)
  하지만 람다식에서의 this는 람다식을 포함하는 클래스를 가리키기 때문에
  클래스 A의 내부 클래스인 클래스 B에서 찾게 된다.

- 우리는 람다식을 사용할때 이에 주의하여 사용해야 한다.



- 두 번째인 매개변수와 로컬변수를 사용할때를 살펴보자.
  다음은 매개변수와 로컬변수를 사용하는 람다식의 예제이다.

  ```java
  interface Interface {
      public void a(int a, int b);
  }
  
  class A {
      public void method() {
          Interface i = (a, b) -> {
              int c = 3;
              System.out.println(a + b + c);
          }
          
          i.a(1, 2);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          A a = new A();
          a.method();
      }
  }
  
  // 6
  ```

  이렇게 보면 아무 문제가 없다.
  하지만 이 코드에서는 람다식의 매개변수로 들어온 a와 b 그리고 로컬변수로 사용된 c를 더하여
  출력만 했을뿐 변화를 주지 않았다.
  여기서 만약 a, b, c 중 하나의 값을 변경하려고 했다면 오류가 발생하였을 것이다.
  왜냐하면 이들은 final로 정의되어 있기 때문이다.
  이는 만약 이 람다식으로 구현된 인터페이스를 리턴하여 사용하였을때 리턴됨과 동시에 사라지는
  매개변수와 로컬변수의 특성때문에 final 효과를 줘서 살아있게 만든 것이다.