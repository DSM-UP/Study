## Thread Group 2

- 저번에 스레드 그룹에 대해서 얘기할때 스레드 그룹의 생성자에 대해서 얘기만하고
  사용하는 코드를 적어본적이 없었다.

- 저번에 했던 것에서 잊어버린 것이므로 이어서 적도록 하겠다.
  다음은 저번에 소개한 ThreadGroup 클래스의 생성자이다.

  ```java
  public ThreadGroup(String name);
  public ThreadGroup(ThreadGroup parent, String name);
  ```

- 또한 다음은 ThreadGroup 객체를 매개변수로 받는
  Thread 클래스의 생성자이다.

  ```java
  public Thread(ThreadGroup group, Runnable target);
  public Thread(ThreadGroup group, Runnable target, String name);
  public Thread(ThreadGroup group, Runnable target, String name, long stackSize);
  public Thread(ThreadGroup group, String name);
  ```

- ThreadGroup 클래스의 생성자의 소개는 저번에 했으므로 저번을 참고하고
  여기는 적지 않도록 하겠다.

- 그럼 위의 생성자를 사용하여 ThreadGroup 클래스를 사용해보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ThreadGroup threadGroup = new ThreadGroup("test");
          
          Thread thread1 = new Thread(threadGroup,
                                    new Runnable() {
                                       public void run() {
                                           while(true) {}
                                       } 
                                    });
          thread1.setName("thread1");
          Thread thread2 = new Thread(threadGroup,
                                     new Runnable() {
                                         public void run() {
                                             while(true) {}
                                         }
                                     },
                                     "thread2");
          Thread thread3 = new Thread(threadGroup,
                                     new Runnable() {
                                         public void run() {
                                             while(true) {}
                                         }
                                     },
                                     "thread3", 10000000);
          Thread thread4 = new Thread(threadGroup, "thread4");
          
          thread1.start();
          thread2.start();
          thread3.start();
          // thread4.start();
          
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
  
  // 스레드 이름 : thread1
  // 스레드 종류 : 주 스레드
  // 스레드 그룹 : test
  // ----------------------------------
  // 스레드 이름 : thread2
  // 스레드 종류 : 주 스레드
  // 스레드 그룹 : test
  // ----------------------------------
  // 스레드 이름 : thread3
  // 스레드 종류 : 주 스레드
  // 스레드 그룹 : test
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
  // ----------------------------------
  ```

- 이렇게 스레드 그룹을 만들고, 사용해보고, 확인해보았다.
  3번째 생성자의 stackSize 매개변수는 지금은 알 필요 없으니 몰라도 된다.



- 이렇게 ThreadGroup을 직접 사용해보았다.
  다음은 하위 ThreadGroup을 만들어보는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ThreadGroup parent = new ThreadGroup("parent");
          ThreadGroup child = new ThreadGroup("child");
          
          Thread parentThread = new Thread(parent, new Runnable() {
              public void run() {
                  System.out.println("parentThread");
              }
          });
          
          Thread childThread = new Thread(child, new Runnable() {
              public void run() {
                  System.out.println("childThread");
              }
          });
          
          parentThread.start();
          childThread.start();
      }
  }
  
  // parentThread
  // childThread
  ```

- 이렇게 스레드 그룹들을 만들게 되면 child 스레드 그룹이 parent 스레드 그룹의 하위 스레드 그룹이 된다.
  그리고 그 스레드 그룹 안에는 childThread 와 parentThread가 존재하게 되는 것이다.

- 다음에는 ThreadGroup을 사용하면서 유용한 메소드들에 대해서 알아보도록하겠다.