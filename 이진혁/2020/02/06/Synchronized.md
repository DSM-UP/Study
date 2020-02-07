## Synchronized

- Synchronized는 동기화라는 뜻으로 멀티 쓰레드 어플리케이션을 개발할때 사용되는 기능이다.
  저번에 멀티 쓰레드에 대해서 배웠듯이 멀티 쓰레드를 사용하게 되면
  각각의 쓰레드를 (거의)동시에 실행시킬 수 있다.

- 이 멀티 쓰레드를 이용한 개발을 할 때 꼭 주의해야할 문제점이 존재한다.
  그 첫 번째 문제가 바로 여기서 다룰 비동기화의 문제점이다.
  기본적으로 자바의 모든 함수는 '비동기화' 되어 있다.
  일단 동기화란 '동시에 시스템을 작동시키기 위해 사건을 일치시키는 것'이라고 나와있다.
  따라서 비동기화는 동시에 시스템이 작동할때 사건이 일치되어 있지 않은 것이라고 할 수 있다.

- 아직 이것만으로는 동기화가 왜 필요한지 이해하지 못할 확률이 높다.
  그래서 예제를 들으면서 이해하는 것이 빠르다고 생각하기에 예제를 들었다.

- 예제는 우리가 내용물을 담을 수 있는 Box 어플리케이션을 개발한다고 하자.
  어플리케이션을 개발하여 출시했는데
  A라는 사람이 Box 어플리케이션을 실행하여 a라는 내용물을 담았다.
  그리고 B라는 사람도 A와 동시에 Box 어플리케이션을 실행하여 b라는 내용물을 담았다.
  그리고 나서 5초뒤 살펴보기 위해서 Box 어플리케이션을 확인했는데
  A의 상자에는 b가 B의 상자에도 b가 존재하였다.
  동기화의 필요성을 깨닫기 위한 예제로 이러한 예제가 있다.
  이 예제를 코드로 표현해보면 아래와 같다.

  ```java
  class Box {
      private char content;
      
      public synchronized void setContent(char content) {
          this.content = content;
          try {
              Thread.sleep(5000);
          } catch(InterruptedException e) {
              e.printStackTrace();
          }
          System.out.println(getContent());
      }
      
      public char getContent() {
          return content;
      }
  }
  
  class A extends Thread {
      private Box box;
      
      public A(Box box) {
          this.box = box;
      }
      
      public void run() {
          box.setContent('a');
      }
  }
  
  class B extends Thread {
      private Box box;
      
      public B(Box box) {
          this.box = box;
      }
      
      public void run() {
          box.setContent('b');
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Box box = new Box();
          A a = new A(box);
          B b = new B(box);
          
          a.start();
          b.start();
      }
  }
  
  // The contents of A's box is b
  // The contents of B's box is b
  ```

- 이렇게 A의 상자와 B의 상자에서 모두 b라는 내용물이 나온 것을 알 수 있습니다.
  이렇게 하나의 쓰레드가 어떠한 객체를 참조할때
  다른 하나의 쓰레드가 같은 객체를 참조하게 되면
  원하던 값이 나오지 않고 다른 엉뚱한 값이 나오게 될때가 있습니다.
  이럴때 하나의 객체를 하나의 쓰레드만 참조할 수 있도록 하는 키워드가
  synchronized 즉, 동기화입니다.

- synchronized 키워드를 이용하여 객체를 동기화시키는 방법은 두 가지가 존재합니다.
  첫 번째 방법은 동기화 메소드를 만드는 방법이고
  두 번째 방법은 동기화 블럭을 만드는 방법이다.
  동기화 메소드는 말 그대로 메소드 하나를 동기화 상태로 만드는 방법이다.
  따라서 메소드 하나를 모두 동기화해야할때 사용된다.
  동기화 블럭은 메소드에서 조금 작은 버전으로써
  메소드 안의 원하는 곳만 블럭을 씌워 그곳만 동기화를 시킬 수 있다.
  만약 동기화 메소드를 사용하면서 동기화가 필요하지 않은 메소드 안의 부분이 있다면
  동기화 블럭을 사용하여 필요한 부분만 동기화를 적용시켜주는 것이 좋다.

- 아래는 동기화 메소드를 사용하는 방법이다.

  ```java
  public class ClassX {
      public synchronized void methodX() {
          
      }
  }
  ```

- 이렇게 위와 같은 형식으로 동기화 메소드를 생성할 수 있다.
  이렇게 되면 메소드 전체가 동기화 상태가 된 것이다.
  참고로 이렇게 멀티 쓰레드 시스템에서 하나의 쓰레드만 접근할 수 있는 영역을
  임계영역이라고 한다.
  따라서 위의 코드에서는 methodX() 메소드의 내부는 임계영역이 된다.

- 아래는 동기화 블럭을 사용하는 방법이다.

  ```java
  public class ClassX {
      public synchronized void methodX() {
          int t = 10;
          synchronized(this) {
              
          }
          System.out.println(t);
      }
  }
  ```

- 이렇게 위와 같은 형식으로 동기화 블럭을 사용할 수 있다.
  int t = 10; 코드와 System.out.println(t); 코드는 모든 쓰레드가 접근할 수 있는 영역이지만
  안의 synchronized(this) {} 부분은 임계영역으로써 하나의 쓰레드만 접근할 수 있는 영역이다.

- 아래는 위의 Box 예제를 동기화를 이용하여 처리하는 예제이다.

  ```java
  class Box {
      private char content;
      
      public void setContent(char content) {
          this.content = content;
      }
      
      public char getContent() {
          return content;
      }
  }
  
  class A extends Thread {
      private Box box;
      
      public A(Box box) {
          this.box = box;
      }
      
      public void run() {
          box.setContent('a');
          Thread.sleep(5000);
          System.out.println("The contents of A's box is " + box.getContent());
      }
  }
  
  class B extends Thread {
      private Box box;
      
      public B(Box box) {
          this.box = box; 
      }
      
      public void run() {
          box.setContent('b');
          Thread.sleep(5000);
          System.out.println("The contents of B's box is " + box.getContent());
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Box box = new Box();
          A a = new A(box);
          B b = new B(box);
          
          a.start();
          b.start();
      }
  }
  
  // a
  // b
  ```

- 이렇게 원하는 대로 A 박스에서는 a가 B 박스에서는 b가 저장되어 있다는 것을 알 수 있다.
  이렇게 정보를 안전하게 변경하고 전달하기 위해서 동기화를 사용한다.
  그리고 처음 예제에서는 말하지 않았지만 현재 쓰레드를 잠깐 정지시키기 위해서는
  Thread.sleep() 메소드를 사용한다.
  sleep() 메소드의 매개변수로는 long 타입의 시간을 받는데
  1당 0.001초의 정지시간을 갖는다.
  따라서 위의 예제에서는 5000 즉, 5초의 정지시간을 가지는 것을 알 수 있다.
  그리고 Thread.sleep() 메소드의 실행시 InterruptedException이 발생할 수 있기 때문에
  꼭 try-catch 또는 throws를 사용해야 한다.

- 그럼 하나의 쓰레드가 동기화로 인해서 자원을 점유하고 있을때
  다른 쓰레드는 그 메소드를 사용할 수 없게 된다.
  그러면 그 메소드를 제외한 다른 동기화 메소드는 접근할 수 있을까?
  그리고 만약에 접근할 수 없다면 다른 객체의 동기화 메소드도 사용할 수 없을까?
  