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

- activeCount() 메소드는 현재 그룹과 그 하위 그룹들의 실행 중인 스레드의 갯수를 리턴한다.

- activeGroupCount() 메소드는 하위 그룹들을 제외하고 현재 그룹에서의 실행 중인 스레드의 갯수를 리턴한다.

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
          
          System.out.println
      }
  }
  ```

  