## Thread Group

- 스레드 그룹은 마치 class를 관리하는 package와 같은 역할을 한다.
  따라서 스레드 그룹 안에 수많은 스레드들이 존재한다는 것이다.
- 그럼 스레드 그룹은 왜 있을까?
  그것은 간단하다.
  패키지가 존재하는 이유는 용도가 비슷한 클래스나, 같이 사용되는 클래스들을 묶어놓기 위함이다.
  스레드 그룹도 마찬가지이다.
  비슷한 용도로 사용되는 스레드 그룹이나 같이 사용되는 (데몬 스레드) 스레드들을 묶어놓기 위해서 사용한다.
- 또한 패키지안에 패키지가 들어갈 수 있는 것처럼 스레드 그룹안에 스레드 그룹이 들어갈 수 있다.
  그런 스레드 그룹을 상위 스레드 그룹과 하위 스레드 그룹으로 나눌 수 있다.
- 모든 스레드들은 꼭 하나의 스레드 그룹에 속해있어야만 한다.
  마치 패키지의 클래스를 만들어 놓지 않으면 디폴트 패키지에 들어가는 것처럼 말이다.
  하지만 스레드 그룹은 살짝 다르다.
  스레드 그룹을 설정해주지 않은 스레드는 자동으로
  스레드 객체를 생성한 스레드의 스레드 그룹에 속하게 된다.



- ThreadGroup 클래스의 생성자는 다음과 같다.

  ```java
  public ThreadGroup(String name);
  public ThreadGroup(ThreadGroup, String name);
  ```

- 이렇게 두 가지의 생성자가 있는데,
  첫 번째 생성자는 다른 스레드 그룹에 관여하지 않고 독자적인 스레드 그룹을 만드는 것이고
  매개변수로는 그 스레드 그룹의 이름이 들어가게 된다.
  두 번째 생성자는 첫 번째 매개변수로 만들 스레드 그룹의 상위 스레드 그룹을 지정하는 것이고
  두 번째 매개변수로는 스레드 그룹의 이름을 지정하는 것이다.

- 이렇게 만들어진 ThreadGroup 객체는 자기자신만으로는 아무 쓸모가 없다.
  그러므로 쓸모 있게 만들기 위해서는 Thread 객체를 생성할때 매개변수로 ThreadGroup을 넣어주는 것이다.
  이렇게 사용하는 Thread 클래스의 생성자는 다음과 같다.

  ```java
  Thread(ThreadGroup group, Runnable target);
  Thread(ThreadGroup group, Runnable target, String name);
  Thread(ThreadGroup group, Runnable target, String name, long stackSize);
  Thread(ThreadGroup group, String name);
  ```

- 생성자는 간단하니 그냥 바로 소개하겠다.
- 첫 번째 생성자는 ThreadGroup 타입의 속할 그룹과
  스레드가 실행할 run() 메소드를 생성하는 Runnable 객체를 받는 생성자이다.
- 두 번째 생성자는 첫 번째 생성자에서 추가된 생성자로서
  String 타입의 스레드 이름을 받는 생성자이다.
- 세 번째 생성자는 두 번째 생성자에서 추가된 생성자로서
  long 타입의 스레드 스택 크기를 설정할 수 있는 생성자이다.
- 네 번째 생성자는 ThreadGroup 타입의 속할 그룹과
  String 타입의 스레드의 이름을 설정하는 생성자이다.



- 그럼 스레드 그룹을 만들어 보고 존재하는 스레드 그룹이 어떤 것이 있는지 확인해보도록 하겠다.
  참고로 자바는 실행하게 되면 자동으로 JVM에서 기본적으로  system 스레드 그룹과
  그 안의 스레드들을 생성하고 system의 하위 스레드 그룹인 main 스레드 그룹을 생성하여
  그 안에 main 스레드를 넣는다.
  그럼 예정대로 main 스레드에서 스레드 그룹을 생성하지 않은채 스레드를 생성하면
  main 스레드 그룹에 들어가는지 확인해보도록하겠다.

  ```java
  class TestThread1 extends Thread {
      public void run() {
          while(true) {}
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          TestThread1 testThread1 = new TestThread1();
          testThread1.setName("TestThread1");
          
          Thread testThread2 = new Thread(new Runnable() {
              public void run() {
                  while(true) {}
              }
          }, "TestThread2");
          
         	Thread testThread3 = new Thread(new Runnable() {
              public void run() {
                  while(true) {}
              }
          }, "TestThread3");
          
          testThread1.start();
          testThread2.start();
          
          Set<Thread> threads = Thread.getAllStackTraces().keySet();
  		
  		for(Thread thread : threads) {
  			System.out.println("스레드 이름 : " + thread.getName());
  			System.out.println("스레드 종류 : "
                                 + (thread.isDaemon() ? "데몬 스레드" : "주 스레드"));
  			System.out.println("스레드 그룹 : " + thread.getThreadGroup().getName());
  			System.out.println("----------------------------------");
  		}
      }
  }
  
  // 스레드 이름 : TestThread1
  // 스레드 종류 : 주 스레드
  // 스레드 그룹 : main
  // ----------------------------------
  // 스레드 이름 : TestThread2
  // 스레드 종류 : 주 스레드
  // 스레드 그룹 : main
  // ----------------------------------
  // 스레드 이름 : Finalizer
  // 스레드 종류 : 데몬 스레드
  // 스레드 그룹 : system
  // ----------------------------------
  // 스레드 이름 : Reference Handler
  // 스레드 종류 : 데몬 스레드
  // 스레드 그룹 : system
  // ----------------------------------
  // 스레드 이름 : Signal Dispatcher
  // 스레드 종류 : 데몬 스레드
  // 스레드 그룹 : system
  // ----------------------------------
  // 스레드 이름 : Attach Listener
  // 스레드 종류 : 데몬 스레드
  // 스레드 그룹 : system
  // ----------------------------------
  // 스레드 이름 : main
  // 스레드 종류 : 주 스레드
  // 스레드 그룹 : main
  ```

- 참고로 getAllStackTraces() 메소드는 지금 실행되고 있는 스레드 그룹의 종류들을
  Map<Thread, StackTraceElement[]> 타입의 스레드 그룹 정보를 리턴하는 메소드입니다.
  그것을 Map 클래스의 메소드인 keySet()는 Map 클래스의 키-값 정보들을
  Set 타입의 키로만 이루어진 Set으로 변환하는 메소드이다.

- 위의 결과를 보면 기본적으로 생성되는 Finalizer, Reference Handler, Signal Dispatcher,
  Attach Listener, main과 같은 스레드가 있고
  직접 생성한 TestThread1 스레드와 TestThread2 스레드는
  예상대로 main 스레드 그룹에 속해있는 것을 볼 수 있다.
  하지만 TestThread3 스레드는 start() 메소드를 통해 실행을 시키지 않았으므로
  '실행 중' 상태가 아니다.
  따라서 정보에 출력되지 않은 것을 볼 수 있다.

- 근데 자동 생성되는 스레드들을 보면 main 스레드를 제외한 모든 스레드들이
  데몬 스레드라는 것을 알 수 있다.
  그러면 주 스레드는 main 스레드 혼자이므로 main이 종료되면
  나머지도 종료될까?
  결과부터 말해보자면 당연히 아니다.
  주 스레드는 JVM이다.
  애초에 Finalize 스레드는 GC의 역할을 하는데
  이게 없으면 main이 종료된 뒤에 힙 영역이 계속 불어나 터져버릴 것이기 때문에
  짐작할 수 있는 결과였다.
  아래는 main이 끝난 뒤 스레드의 정보를 확인하여 자동 생성되는 스레드가 존재하는지 확인하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          
      }
  }
  ```

  