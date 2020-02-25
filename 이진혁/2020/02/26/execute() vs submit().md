## execute() vs submit()

- Thread Pool을 다룰때 ExecutorService 인터페이스를 구현하여 사용한다.
  ThreadPoolExecutor 클래스는 ExecutorService 인터페이스를 구현한 클래스인데
  이 클래스를 이용하여 작업 큐를 기반으로 작업 처리 요청을 할 수 있다.
  이 작업 큐에 존재하는 작업은 Runnable 클래스와 Callable<T> 클래스를 이용하여
  구현할 수 있다.

- Runnable 클래스와 Callable<T> 클래스의 차이점은
  평소에 Thread를 사용하면서 알고 있겠지만 Runnable 클래스는 run() 메소드를 구현해야 하고
  run() 메소드에는 작업의 내용을 작성한다.
  Callable<T> 클래스는 run() 메소드가 아니라 call() 메소드를 구현해야 하고 
  call() 메소드에는 작업의 내용을 작성한다.
  둘의 차이점은 이뿐만이 아니다.
  run() 메소드는 리턴값이 void이므로 리턴값이 존재하지 않지만
  call() 메소드는 리턴값이 T (제네럴)형식이라서 Callable 객체를 생성할때
  원하는 형식대로 정할 수 있다.
  물론 리턴값도 지정한 제네럴 타입으로 리턴타입이 정해진다.

- 이제 작업과 작업큐의 존재에 대해서 알게 되었으니
  작업 처리 요청을 하는 방법에 대해서 알아보겠다.
  작업 처리 요청 방식에는 두 가지 방식이 존재한다.

- 첫 번째는 execute() 메소드를 사용하는 것이다.
  execute() 메소드의 형식은 다음과 같다.

  ```java
  public void execute(Runnable command);
  ```

- 아까 말했던 것처럼 execute() 메소드는 작업 처리 요청을 하는 방법 중에 하나이며
  매개변수로 들어오는 Runnable 객체의 작업을 Thread Pool에 추가한다.
  execute() 메소드의 특징은 리턴값이 void형이라서 리턴값이 존재하지 않아서
  작업에 대한 결과값을 받을 수 없다.
  또다른 특징으로는 만약 작업 처리 중 예외가 발생하게 되면
  그 작업을 하고 있던 스레드를 종료시키고 새로운 스레드를 생성하여 작업을 이어나간다.

- 두 번째는 submit() 메소드를 사용하는 것이다.
  submit() 메소드의 형식은 다음과 같다.

  ```java
  public Future<?> submit(Runnable task);
  public Future<V> submit(Runnable task, V result);
  public Future<V> submit(Callable<V> task);
  ```

- submit() 메소드도 execute() 메소드와 같이 작업 처리 요청을 하는 방법 중에 하나이며
  총 세 가지로 오버로딩되어 있다.
  첫 번째 submit() 메소드는 매개변수로 들어온 Runnable 객체의 작업을 Thread Pool에 추가하는 것으로
  execute() 메소드와 가장 유사한 메소드이다.
  두 번째 submit() 메소드는 매개변수는 첫 번째 submit() 메소드와 같지만
  두 번째 매개변수는 제네릭 타입의 result를 받아서 Future 객체의 리턴값을 정한다.
  세 번째 submit() 메소드는 Runnable 객체 대신 Callable 객체를 사용한다는 차이점이 존재한다.

- submit() 메소드의 특징으로는 execute() 메소드와는 다르게 리턴값이 존재하기 때문에
  작업 큐에 대한 결과를 Future 객체를 통해 얻을 수 있고
  또다른 특징으로는 만약 작업 처리 중 예외가 발생하면
  그 작업은 중지되지만 그 스레드를 제거하지 않고
  재활용하기 때문에 오버헤드가 잘 발생하지 않는다.

- 따라서 execute() 메소드보다는 submit() 메소드를 사용하는 것이 좋다.
  execute() 메소드와 submit() 메소드를 사용하며 차이를 알아보는 예제는
  신용권님께서 쓰신 책인 '이것이 자바다'의 630p를 참고하였습니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ExecutorService es = Executors.newFixedThreadPool(2);
          
          for(int i = 0 ; i < 10 ; i++) {
              Runnable r = new Runnable() {
                  public void run() {
                      ThreadPoolExecutor tpe = (ThreadPoolExecutor) es;
                      System.out.println("[총 스레드 개수 : "
                                        + tpe.getPoolSize() + "]"
                                        + " 작업 스레드 이름 : "
                                        + Thread.currentThread().getName());
                      int value = 10 / 0;
                  }
              };
              
              es.execute(r);
              // es.submit(r);
              
              try {
                  Thread.sleep(100);
              } catch(Exception e) {
                  e.printStackTrace();
              }
          }
          
          es.shutdown();
      }
      
  }
  
  // [총 스레드 개수 : 1] 작업 스레드 이름 : pool-1-thread-1
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-2
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-3
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-4
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-5
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-6
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-7
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-8
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-9
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-10
  ```

- 이렇게 execute() 메소드는 Thread에서 예외가 발생했을때 그 스레드를 제거하고
  새로운 스레드를 사용하는 것을 알 수 있다.
  이렇게 thread의 이름이 계속 생성되면서 숫자가 증가하고 있음을 볼 수 있다.
  만약 execute() 메소드가 아니라 submit() 메소드를 사용하게 되면 아래와 같은 출력값을 볼 수 있다.

  ```java
  // [총 스레드 개수 : 1] 작업 스레드 이름 : pool-1-thread-1
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-2
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-2
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-1
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-1
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-2
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-1
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-1
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-2
  // [총 스레드 개수 : 2] 작업 스레드 이름 : pool-1-thread-2
  ```

- 이렇게 pool-1-thread-1 Thread와 pool-1-thread-2 Thread가 번갈아가면서 스레드의 작업을
  완료하는 것을 볼 수 있다.