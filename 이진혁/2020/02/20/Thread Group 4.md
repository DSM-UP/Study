## Thread Group 4

- 오늘은 ThreadGroup 클래스의 주요 메소드들에 대해서 알아볼 것이다.

- ThreadGroup 클래스의 주요 메소드들은 아래와 같다.

  ```java
  public int activeCount();
  public int activeGroupCount();
  public void checkAccess();
  public void destroy();
  public boolean isDestroyed();
  public int getMaxPriority();
  public void setMaxPriority(int pri);
  public String getName();
  public ThreadGroup getParent();
  public boolean parentOf(ThreadGroup g);
  public boolean isDaemon();
  public void setDaemon(boolean daemon);
  public void list();
  public void interrupt();
  ```



### activeCount() - activeGroupCount()

- activeCount() 메소드는 현재 그룹과 현재 그룹의 하위 그룹에서 실행 중인
  모든 스레드의 수를 리턴하는 메소드이다.

- activeGroupCount() 메소드는 현재 그룹에서 활동 중인 하위 그룹의 수를 리턴한다.

- 각각의 

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ThreadGroup parentGroup = new ThreadGroup("parentGroup");
          ThreadGroup childGroup = new ThreadGroup(parentGroup, "childGroup");
          
          Thread thread1 = new Thread(parentGroup, new Runnable() {
              public void run() {
                  while(true) {}
              }
          }, "thread1");
          
          Thread thread2 = new Thread(childGroup, new Runnable() {
             public void run() {
                 while(true) {}
             } 
          }, "thread2");
          
          Thread thread3 = new Thread(childGroup, new Runnable() {
              public void run() {
                  while(true) {}
              }
          }, "thread3");
          
          thread1.start();
          thread2.start();
          thread3.start();
          
          System.out.println("parentGroup.activeCount() : "
                            + parentGroup.activeCount());
          System.out.println("childGroup.activeCount() : "
                            + childGroup.activeCount());
          System.out.println("parentGroup.activeGroupCount() : "
                            + parentGroup.activeGroupCount());
          System.out.println("childGroup.activeGroupCount() : "
                            + childGroup.activeGroupCount());
      }
  }
  
  // 3
  // 2
  // 1
  // 0
  ```

- 상위 스레드 그룹에는 하나의 스레드가 존재했고
  하위 스레드 그룹에는 두 개의 스레드가 존재했다.
  그러므로 상위 스레드 그룹의 activeCount()는 상위 스레드 그룹과 하위 스레드 그룹의 스레드를 모두 포함한
  3이라는 수가 리턴된 것이었고
  하위 스레드 그룹의 activeCount()는 하위 스레드 그룹의 하위 스레드 그룹이 존재하지 않으므로
  하위 스레드 그룹의 스레드 갯수인 2가 리턴이 된 것이다.

- 상위 스레드 그룹의 activeGroupCount()는 parentGroup 스레드 그룹의 하위 스레드 그룹인
  childGroup 스레드 그룹이 실행되고 있으므로 1이 리턴된 것이고
  parentGroup 스레드 그룹의 하위 스레드 그룹은 존재하지 않으므로 0이 리턴된 것이다.
