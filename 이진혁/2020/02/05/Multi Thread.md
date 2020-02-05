## Multi Thread

- 이번에는 지금가지 다뤄왔던 java.time 패키지에서 벗어나서
  새로운 분야로 넘어가기로 하였다.
- 현재 스프링을 공부하고 있지만 확실하게 모두 다 안뒤 정리하는 것이 좋다고 판단하여
  기본공부와 디자인 패턴 공부를 올리기로 하였다.
- 그래서 오늘은 알고 있지만 깊게 들어가면 어려운 부분이 분명히 존재할
  쓰레드(Thread)에 대해서 공부할 예정이다.
  오늘은 간단하게 Multi Thread에 대해서 알아볼 예정이다.
- Thread는 하나의 실행된 프로세스를 말한다.
  그럼 Multi Thread는 여러 개의 프로세스가 동시에 실행되어 있는 것을 말하는 것이다.
  생각해보면 멀티 쓰레드(Multi Thread)는 사용되고 있는 곳이 많다.
  그만큼 쓰레드라는 것을 많이 들어봤을 것이다.
- 멀티 쓰레드를 사용하는 곳은 하나의 무거운 프로세스를 나눠서 처리하기 위해서 사용하기도 하고
  여러 가지 일을 동시에 하기 위해서 사용하기도 한다.

- 오늘은 그 멀티 쓰레드를 간접 체험해보기로 하겠다.
  main 쓰레드를 제외한 새로운 쓰레드 하나를 사용해보는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Thread thread = new Thread(new Runnable() {
              public void run() {
                  for(int i = 0 ; i < 10 ; i++) {
                      System.out.println(0);
                  }
              }
          });
          
          thread.start();
          
          for(int i = 0 ; i < 10 ; i++) {
              System.out.println(1);
          }
      }
  }
  
  // 0
  // 0
  // 0
  // 0
  // 1
  // 1
  // 1
  // 1
  // 1
  // 1
  // 1
  // 1
  // 1
  // 1
  // 0
  // 0
  // 0
  // 0
  // 0
  // 0
  ```

- 이렇게 불규칙적으로 출력되는 것을 알 수 있다.
  이것은 main 쓰레드와 새롭게 만들어진 Thread-0 쓰레드가
  굉장히 빠른 속도로 실행 주도권이 왔다갔다하기 때문에
  마치 동시에 실행되는 것처럼 보이는 것이기 때문이다.

- 그리고 이렇게 main 함수도 하나의 쓰레드라는 것을 알 수 있는데
  지금까지 우리는 하나의 쓰레드를 사용하는 싱글 쓰레드를 사용하고 있었다는 것을 알 수 있다.



- 그리고 아까 쓰레드의 이름을 Thread-0 이라고 했던 것처럼 쓰레드에게도 이름이 존재한다.
  기본적으로 가장 먼저 생성되는 main 함수를 main 이라고 하고
  그 뒤로 새로 생성되는 쓰레드들의 이름을 각각 "Thread-n" 이라고 한다.
  이는 위에서 보았던 것처럼 0부터 시작하는 것을 알 수 있다.

- 그리고 쓰레드의 이름을 직접 정할 수도 있고 그 이름을 알아볼 수도 있다.
  아래는 쓰레드의 이름을 바꾸고 알아낼 수 있는 메소드의 형식이다.

  ```java
  public void setName(String name);
  public String getName();
  ```

- 아래는 위 두 메소드를 이용한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Thread thread0 = new Thread(new Runnable() {
              public void run() {}
          });
          Thread threadMain = Thread.currentThread();
          
          System.out.println(thread0.getName());
          System.out.println(threadMain.getName());
      }
  }
  
  // Thread-0
  // main
  ```

- currentThread() 메소드는 Thread 클래스의 정적 메소드로써
  현재 코드가 존재하는 쓰레드를 리턴하는 메소드이다.
  이를 이용해서 메인 쓰레드의 이름을 알 수 있다.



- 그리고 멀티 쓰레드 시스템을 구축할때 각각의 쓰레드마다 실행 주도권을 왔다갔다하면서
  마치 동시에 실행된 것처럼 한다고 하였다.
  하지만 멀티 쓰레드 시스템은 두 가지 방법으로 이루어 진다.

- 첫 번째 방식은 '우선순위 방식'이다.
  우선순위 방식은 각각의 쓰레드는 우선순위를 가지게 되는데
  그 우선순위가 높은 쓰레드가 더 많은 실행 주도권을 가지면서
  왔다갔다하는 방식을 말한다.

- 두 번째 방식은 '순환 할당 방식'이다.
  순환 할당 방식은 쓰레드마다 시간 할당량을 정하여
  그 시간 할당량만큼 실행 주도권을 가지고 실행을 하는 방식을 말한다.

- 이렇게 쓰레드에게는 우선순위를 줄 수 있다는 것을 알 수 있는데
  그 우선순위를 줄 수 있는 메소드는 아래의 형식을 가진다.

  ```java
  public void setPriority(int newPriority);
  public int getPriority();
  ```

- 이렇게 우선순위를 설정하고 얻을 수도 있다.
  모든 쓰레드는 기본적으로 5의 우선순위를 가지며
  1부터 10까지의 우선순위를 가질 수 있다.

- 아래는 우선순위를 이용한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Thread thread0 = new Thread(new Runnable() {
              public void run() {
                  System.out.println("thread0");
              }
          });
          
          Thread thread1 = new Thread(new Runnable() {
              public void run() {
                  System.out.println("thread1");
              }
          });
          
          Thread thread2 = new Thread(new Runnable() {
              public void run() {
                  System.out.println("thread2");
              }
          });
          
          thread0.setPriority(1);
          thread1.setPriority(10);
          thread2.setPriority(5);
          
          thread0.start();
          thread1.start();
          thread2.start();
      }
  }
  
  // thread1
  // thread2
  // thread0
  ```

- 이렇게 주어진 우선순위에 따른 쓰레드의 순서를 알 수 있다.



- 다음엔 싱크로나이즈드(동기화)에 대한 설명과 함께 스프링의 설명을 할 수 있다면 하고 싶다.