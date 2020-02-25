## Thread Pool

- 오늘은 Thread Pool에 대해서 공부하였다.

- Thread Pool은 초기 스레드 수, 코어 스레드 수, 최대 스레드 수를 설정하여
  많은 스레드로 인한 폭주를 막기 위한 시스템이다.
  
- 이 시스템은 ExecutorService 인터페이스와 Executors 클래스를 이용하여
  Thread Pool을 구현할 수 있다.
  
- ExecutorService 인터페이스를 구현하기 위해서 Executors 클래스의 정적 메소드를 사용해야하는데
  쉽게 newCachedThreadPool() 메소드와 newFixedThreadPool(int nThreads) 메소드가 있다.
  
- new CachedThreadPool() 메소드는 초기 스레드 개수 0, 코어 스레드 수 0, 최대 스레드 수는
  int의 최대치만큼이다.
  따라서 최대 스레드 수를 사실상 정하지 않다싶히 하고 1개 이상의 스레드가 추가되었을때
  60초 동안 동작되지 않은 스레드를 삭제한다.

- newFixedThreadPool(int nThreads) 메소드는
  초기 스레드 개수 0, 코어 스레드 개수 nThreads, 최대 스레드 수 nThread로
  최대 스레드를 정해놓으며 동작하지 않는 스레드도 삭제하지 않는 특징이 있다.
  newFixedThreadPool(int nThreads) 메소드를 이용하여 컴퓨터나 노트북에 달려있는 CPU 코어의 개수만큼
  스레드를 제한 해놓는 코드를 짤 수 있다.
  
  ```java
  public class MainClass {
      public static void main(String[] args) {
          ExecutorService es = Executors.newFixedThreadPool(
              Runtime.getRuntime().availableProcessors()
          );
      }
  }
  ```
  
  
  
  

- 또다른 방법으로 ThreadPoolExecutor 클래스를 사용하는 것이다.
  ThreadPoolExecutor 클래스의 생성자는 다음과 같다.

  ```java
  ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime,
                     TimeUnit unit, BlockingQueue<Runnable> workQueue);
  
  ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime,
                     TimeUnit unit, BlockingQueue<Runnable> workQueue,
                     RejectedExecutionHandler handler);
  
  ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime,
                     TimeUnit unit, BlockingQueue<Runnable> workQueue,
                     ThreadFactory threadFactory);
  
  ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime,
                     TimeUnit unit, BlockingQueue<Runnable> workQueue,
                     ThreadFactory threadFactory, RejectedExecutionHandler handler);
  ```

- 위처럼 네 가지의 생성자들이 존재한다.
  하지만 handler 라든가 Factory 같은 부분은 나중에 다루며 조금 복잡하므로
  첫 번째 생성자를 많이 사용한다.

- 첫 번째 생성자는
  첫 번째 매개변수 : 코어 스레드 개수
  두 번째 매개변수 : 최대 스레드 개수
  세 번째 매개변수 : 아무 행동을 하지 않을 때 interrupt 시키는 시간
  네 번째 매개변수 : 세 번째 매개변수의 시간 단위
  다섯 번째 매개변수 : 작업 큐
  
- 아래는 ThreadPoolExecutor 클래스의 첫 번째 생성자를 이용한 예제이다.
  
   ```java
  public class MainClass {
      public static void main(String[] args) {
          ExecutorService es = new ThreadPoolExecutor(
          	1,
              10,
              60L,
              TimeUnit.SECONDS,
              new SynchronousQueue<Runnable>()
          );
      }
  }
  ```
  
  
  
- Thread Pool을 종료시키는 메소드는 다음과 같다.

   ```java
   public void shutdown();
   public List<Runnable> shutdownNow();
   public boolean awaitTermination(long timeout, TimeUnit unit);
   ```

- shutdown : 현재 처리 중인 작업뿐만 아니라 작업 큐에
   대기하고 있는 모든 작업을 처리한 뒤에 스레드풀을 종료시킨다.

- shutdownNow : 현재 작업 처리 중인 스레드를 interrupt해서
   작업 중지를 시도하고 스레드풀을 종료시킨다.
   리턴값은 작업 큐에 있는 미처리된 작업의 목록이다.

- awaitTermination : shutdown() 메소드 호출 이후, 모든 작업 처리를
   timeout 시간 내에 완료하면 true를 리턴하고 완료하지 못하면 작업 처리 중인 스레드를
   interrupt하고 false를 리턴한다.

- 이것으로 보아 shutdown() 메소드는 단순히 작업 큐의 작업을 종료시키는 메소드이고
  shutdownNow() 메소드는 shutdown() 메소드에서 업그레이드 되어 현재 작업 중인 스레드를
  급히 종료시키고 아직 처리되지 않은 목록까지 보여주는 메소드이며
  awaitTermination() 메소드는 작업 큐의 작업이 끝날때 까지 기다리는데 시간을 정하여
  그 시간안에 작업이 모두 종료가 되는지까지 확인하는 메소드이다.