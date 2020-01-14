## Nested Class

- 우리가 흔히 알고 있는 class와 interface를 외부 클래스와 내부 클래스로 나누어서
  중첩되게 클래스를 정의할 수 있다.
  이러한 클래스를 중첩 클래스라고 한다.
- 중첩 클래스 중 내부에 들어있는 클래스를 크게 멤버 클래스와 로컬 클래스로 나눈다.
- 그럼 먼저 멤버 클래스에 대해서 알아보자.



### 멤버 클래스 < Member Class >

- 멤버 클래스는 멤버 변수( 필드 )나 멤버 함수( 메소드 )와 같이 멤버로 사용되는 클래스를 말한다.
- 멤버 클래스에는 또 두 가지 종류가 존재한다.
  1. non-static member class < 인스턴스 멤버 클래스 >
  2. static member class < 정적 멤버 클래스 >
- 각각 인스턴스 멤버 클래스, 정적 멤버 클래스라고도 한다.

#### 인스턴스 멤버 클래스 < Non-Static Member Class >

- 인스턴스 멤버 클래스는 말 그대로 static이 붙지 않은 멤버 클래스를 말한다.
  아래의 예시를 살펴보자.

  ```java
  class OutterClass {
      class InnerClass {
          public void print() {
              System.out.println("OuuterClass.InnerClass.print()");
          }
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          OutterClass o = new OutterClass();
          OutterClass.InnerClass oi = o.new InnerClass();
          
          oi.print();
      }
  }
  
  // OutterClass.InnerClass.print()
  ```

- 위의 코드를 좀 해석해보자면,
  일단 OutterClass라는 외부 클래스가 정의되어 있고
  OutterClass안에 InnerClass라는 내부 클래스가 정의되어 있다.
  그리고 InnerClass 클래스안에는 print() 라는 멤버 함수가 정의되어 있다.

- 메인 함수에서는 InnerClass의 객체를 생성하는 방법을 알려준다.

  먼저 외부 클래스의 객체를 생성한 뒤
  그 객체를 이용하여 내부 클래스의 객체를 다시 생성하는 것이다.
  형식으로는 [외부클래스].[내부클래스] [참조형변수명] = [외부클래스객체].new [내부클래스] ( );

  ```java
  ...
  OutterClass o = new OutterClass();
  OutterClass.InnerClass oi = o.new InnerClass();
  ...
  ```

#### 정적 멤버 클래스 < Static Member Class >

- 정적 멤버 클래스는 인스턴스 멤버 클래스와는 다르게 static 키워드가 붙은 클래스를 말한다.

- 원래 클래스에는 static 이라는 키워드가 붙을 수 없지만 중첩된 클래스에서는 static을 붙일 수 있다.

- 이것도 예시를 보면서 보면 좋을 것 같다.

  ```java
  class OutterClass {
      class InnerClass {
          public void print() {
              System.out.println("OuuterClass.InnerClass.print()");
          }
      }
      
      static class StaticInnerClass {
          public void print() {
              System.out.println("OutterClass.StaticInnerClass.print()");
          }
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          OutterClass o = new OutterClass();
          OutterClass.StaticInnerClass os1 = o.new StaticInnerClass();
          OutterClass.StaticInnerClass os2 = new OutterClass.StaticInnerClass();
          
          os1.print();
          os2.print();
      }
  }
  
  // OutterClass.StaticInnerClass.print()
  // OutterClass.StaticInnerClass.print()
  ```

- 정적 멤버 클래스는 static이 붙은 만큼 예상하셨듯이
  인스턴스 멤버 클래스가 객체를 생성했던 것처럼 외부 객체를 생성한 뒤
  new 연산자를 이용해서 내부 객체를 생성할 수도 있지만,
  외부.내부 변수 = new 외부.내부()를 이용해서 객체를 바로 생성할 수 있다.



- 이렇게 인스턴스 멤버 클래스와 정적 멤버 클래스는 둘 다 멤버 클래스로써 멤버처럼 사용될 수 있다.
- 또한 객체를 생성하는데에 차이를 보이고 있다.

- 그리고 정적 멤버 클래스는 static이고 인스턴스 멤버 클래스는 non-static인 만큼
  다른 접근 제한을 가지고 있는데 그것은 아래와 같다.
  1. 정적 멤버 클래스에서 정적 필드( static field )와 정적 메소드( static method )는
     사용할 수 있지만 인스턴스 필드와 인스턴스 메소드는 사용할 수 없다.
  2. 인스턴스 멤버 클래스에서는 정적 필드, 정적 메소드, 인스턴스 필드, 인스턴스 메소드
     모두를 사용할 수 있다.
  3. 정적 메소드( static method )에서 인스턴스 멤버 클래스를 사용할 수 없다.
  4. 정적 필드( static field )에서 인스턴스 멤버 클래스를 인스턴스화할 수 없다.
- 이와 같이 static에 대한 접근 제한 조건은 같다는 것을 알 수 있다.



- 멤버 클래스에도 접근 제어 지시자를 붙일 수 있다.

- 붙일 수 있는 접근 제어 지시자는 원래 클래스가 붙일 수 있는 public , default와 달리
  public, protected, private, default 모두 붙일 수 있다.

- 하지만 이 접근 제어 지시자를 붙인다고 해도
  같은 외부 클래스를 두고 있는 내부 클래스끼리는 모든 제한이 허용된다.
  아래의 코드를 살펴보자.

  ```java
  class Outter {
      private class Inner1 {
          private void print() {
              System.out.println("Inner1");
          }
      }
      
      class Inner2 {
          public void print() {
              System.out.println("Inner2");
              Inner1 inner = new Inner1();
              inner.print();
          }
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Outter o = new Outter();
          Outter.Inner2 oi = o.new Inner2();
          oi.print();
      }
  }
  
  // Inner2
  // Inner1
  ```

- 위처럼 Inner1 클래스가 private 접근 제어 지시자를 달고 심지어 print() 함수까지도 달았는데도,
  접근이 가능한 것을 알 수 있다.

- 따라서 같은 외부 클래스를 두고 있는 인스턴스 멤버 클래스는 서로 접근 제어 지시자의 영향을 받지 않는다.

- 하지만 외부 클래스가 다른 클래스끼리는 영향을 받는데
  대표적인 예로 위의 예제의 메인 함수에서 Inner1 클래스의 객체를 얻으려고 하면 컴파일 오류가 발생한다.
  private은 다른 클래스에서 접근할 수 없게 만들기 때문이다.



### 로컬 클래스 < Local Class >

- 로컬 클래스는 메소드 안에 있는 클래스를 말한다.

- 당연히 메소드 안에 존재하므로 클래스의 객체를 생성함과 동시에
  메모리에 적재되는 멤버 클래스와는 다르게
  로컬 클래스가 존재하는 함수를 실행할때 메모리에 적재된다.

- 또한 로컬 클래스는 정의되어 있는 메소드 안에서만 사용하기 때문에
  접근 제어 지시자가 붙지 않으며 static이 붙지도 않는다.
  이것은 안에 존재하는 멤버들에게도 적용된다.

- 그리고 로컬 클래스 안의 멤버는 모두 인스턴스 필드, 또는 인스턴스 메소드여야 한다.
  따라서 정적 필드와 정적 메소드는 선언할 수 없다.

- 아래의 예시를 보자.

  ```java
  class Outter {
      public void print() {
          class LocalClass {
              int field;
              void print() {
                  System.out.println("정리하기 힘들다");
              }
          }
          LocalClass lc = new LocalClass();
          lc.print();
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Outter outter = new Outter();
          outter.print();
      }
  }
  ```

- 위와 같이 메소드 안에 존재하는 클래스, 로컬 클래스는
  메소드를 실행한다고 그 안의 메소드가 실행되는 것이 아니라
  로컬 클래스가 들어있는 메소드안에 클래스가 선언되어 있는 것이고
  그 메소드에서 객체 생성을하고 메소드를 호출해주어야
  그 메소드를 실행할 수 있는 것이다.



- 로컬 클래스의 접근 제한은 조금 특이하다.

- 로컬 클래스는 로컬 클래스를 감싸고 있는 메소드안에서 선언된 변수나 매개변수를 사용한다.
  하지만 로컬 클래스의 객체는 로컬 클래스를 감싸고 있는 메소드가 종료되어도
  GC가 메모리를 할당 해제를 하기 전까지는 사라지지 않는다.

- 하지만 메소드 안에서 선언된 변수나 매개변수는 메소드가 종료되면 자동으로
  stack에서 해제되기 때문에 할당이 해제되지 않은 로컬 클래스의 객체를 이용해
  변수나 매개변수에 접근하면 오류가 발생할 수 있다.

- 이것을 해결하기 위해서 자바에서는 로컬 클래스를 감싸고 있는 메소드의 로컬 변수와
  매개변수를 로컬 클래스의 필드와 로컬 변수로 저장하도록 하였는데
  옮기는 기준은 final 키워드가 존재하면 로컬 변수로 복사하여 저장하고
  final 키워드가 없으면 클래스의 필드로 저장하도록 하였다.
  이렇게 저장된 필드와 로컬 변수는 final 이라는 키워드가 붙여저 있지 않는다.
  하지만 이 필드와 로컬 변수는 final의 특성의 띄고 있어서 값의 변경이 불가능하다.
  자바 7버전 이하에서는 final을 붙여주지 않으면 매개변수와 로컬 변수로써 사용이 불가능했었지만
  자바 8버전 이후부터는 final을 붙여주지 않아도 컴파일 오류는 발생하지 않으나
  final의 특성을 띄도록 하게 하였다.

  ```java
  public class Outter {
      public void ex(int arg1, final int arg2) {
          int field1 = 10;
          final int field2 = 20;
          class Local {
              void print() {
                  System.out.println(arg1 + arg2 + field1 + field2);
              }
          }
      }
  }
  ```

- 위와 같을때 컴파일 시 Local 클래스의 부분이 아래와 같이 변한다.

  ```java
  class Local {
      int arg1;
      int field1 = 10;
      void print() {
          int arg2;
          int field2 = 20;
          System.out.println(arg1 + arg2 + field1 + field2);
      }
  }
  ```

- 만약에 여기서 arg1, arg2, field1, field2 중에 하나라도 값을 변경하려고 한다면 오류가 발생한다.