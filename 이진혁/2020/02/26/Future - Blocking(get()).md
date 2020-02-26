## Future - Blocking(get())

- Future 클래스는 ExecutorService 인터페이스의 구현 객체에서 작업 처리의 결과를 받기위한 클래스이다.
  Future 클래스는 get() 메소드를 비롯한 작업 처리가 완료되었는지를 확인하는 메소드들이 존재한다.
  다음은 Future 클래스의 작업 처리 완료를 확인하는 메소드들이다.

  ```java
  public V get();
  public V get(long timeout, TimeUnit unit);
  public boolean cancel(boolean mayInterruptIfRunning);
  public boolean isCancelled();
  public boolean isDone();
  ```



- get() 메소드는 작업 완료 통보 방식 중 블로킹 방식을 사용한다.
  get() 메소드는 일단 작업 처리가 어떠한 방법으로든 정상적으로 종료가 되었다면
  제네릭 타입인 V를 리턴한다.
  이 리턴되는 제네릭 타입 V는 사용하는 submit() 메소드에 따라서 다르다.
  이는 나중에 아래에서 설명할 것이다.
  만약 작업 처리 중에서 예외가 발생하게 되면 get() 메소드를 사용할때 예외가 발생하게 된다.
  이때문에 get() 메소드를 사용할때 try-catch 문을 이용해서 예외가 발생했는지 확인할 수 있다.

- get() 메소드가 리턴하는 제네릭 타입 V는 사용하는 submit() 메소드에 따라서 달라진다고 말했다.
  아래는 저번에 공부했던 submit() 메소드의 종류이다.

  ```java
  public Future<?> submit(Runnable task);
  public Future<V> submit(Runnable task, V result);
  public Future<V> submit(Callable<V> task);
  ```

- 첫 번째 submit() 메소드는 매개변수로 결과값을 받지 않으므로 get() 메소드에서 null이 리턴된다.
  하지만 작업 처리 중 예외가 발생했다면 get() 메소드 실행시 예외가 발생한다.
- 두 번째 submit() 메소드는 매개변수로 제네릭 타입인 V 타입의 result를 받는다.
  get() 메소드를 실행하게 되면 매개변수로 들어간 result의 타입인 V가 그대로 리턴된다.
  물론 작업 처리 중 예외가 발생한다면 get() 메소드 실행시 예외가 발생한다.
- 세 번째 submit() 메소드는 Runnable 객체 대신에 Callable 객체를 받는다.
  Callable 객체 자체가 제네릭 타입으로 설정되어 있고 call() 메소드의 리턴값도 V로 설정되어 있기 때문에
  그 리턴값 그대로 리턴이 된다.
  물론 작업 처리 중 예외가 발생한다면 get() 메소드 실행시 예외가 발생한다.



- 그럼 get() 메소드가 왜 블로킹 방식을 사용한다고 하는 것일까?
  그것은 get() 메소드를 사용할때 그 스레드는 그 Future 객체가 사용되기 위해서
  작업이 완료될때까지 블로킹 상태를 유지하게 된다.
  그러면 그 스레드는 Future 객체에 작업 처리 정보가 들어올때까지 멈추게 된다.
  그렇기 때문에 Future 객체의 get() 메소드를 사용할때는 새로운 스레드를 생성하여 사용해야 한다.
  말 그대로 스레드를 생성하는 처리하는 방법이 있고
  스레드 풀의 스레드를 사용하여 처리하는 방법이 있다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ExecutorService es = Executors.newFixedThreadPool(5);
          
          Future future = es.submit(new Runnable() {
              public void run() {
                  System.out.println("[작업 처리 준비 중]");
                  System.out.println("[작업 처리 중]");
                  System.out.println("[작업 끝]");
              }
          });
          
          new Thread(new Runnable() {
              public void run() {
                  try {
                      future.get();
                  } catch(Exception e) {
                      e.printStackTrace():
                  }
              }
          }).start();
          
          es.submit(new Runnable() {
              public void run() {
                  try {
                      future.get();
                  } catch(Exception e) {
                      e.printStackTrace();
                  }
              }
          });
      }
  }
  ```



- 그리고 get() 메소드도 두 가지 방식이 있는데
  첫 번째는 계속 사용해왔던 매개변수가 없는 get() 메소드이고
  두 번째는 매개변수로 long 타입의 시간과 TimeUnit 객체를 받습니다.
  이는 get() 메소드를 사용할 때 블로킹으로 인해 스레드가 멈추게 되는데
  그 멈추는 이유가 작업이 완료되지 않아서이다.
  그 작업의 시간이 매개변수로 들어온 시간동안 끝나지 않으면 TimeoutException을 일으키고
  그 안에 끝나면 매개변수가 없는 get() 메소드와 같은 역할을 한다.