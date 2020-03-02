## CompletionService

- CompletionService는 자바의 인터페이스 중 하나이다.
  CompletionService 인터페이스는 스레드 풀에서 작업이 완료된 순서대로 통보해주는 인터페이스이다.
  이 인터페이스의 구현체로는 ExcutorCompletionService 클래스가 존재한다.
  이 클래스는 매개변수로 스레드 풀을 받아서 사용할때 내부적으로 매개변수로 전달받은
  스레드 풀을 사용하도록한다.
- 따라서 CompletionService는
  이미 처리 '완료'된 작업들을 작업 완료된 순서대로 보여주는 인터페이스라고 생각하면 된다.

- CompletionService를 사용하는 방법은 간단하다.
  아까 말했듯이 ExcutorCompletionService 클래스를 이용하여 구현하며
  매개변수로 사용할 스레드 풀을 전달한다.
  그리고 submit() 메소드를 사용하여 필요한 작업들을 매개변수로 전달한다.
  그러면 내부적으로 ExcutorCompletionService 생성자의 매개변수로 전달된
  스레드 풀을 이용해 스레드를 돌려 작업을 완료할 것이다.

- 완료 순서대로 작업을 알아보는 방법은 CompletionService 인터페이스의 메소드들에 있다.
  아래는 CompletionService 인터페이스의 메소드들이다.

  ```java
  public Future<V> poll();
  public Future<V> pool(long timeout, TimeUnit unit);
  public Future<V> take();
  public Future<V> submit(Callable<V> task);
  public Future<V> submit(Runnable task, V result);
  ```

- 위의 submit() 메소드 둘을 전에 말했듯이 작업들을 처리하는 메소드들이고
  poll() 메소드와 take() 메소드는 완료된 작업을 가져오는 메소드인데
  서로 조금씩 다르다.

- 일단 첫 번째 poll() 메소드는 완료된 작업을 Future 객체에 담아서 리턴하지만
  완료된 작업이 존재하지 않을시 null을 리턴한다.

- 두 번째 poll() 메소드는 완료된 작업을 Future 객체에 담아서 리턴하지만
  완료된 작업이 없으면 timeout의 시간이 지날때까지 블로킹되어
  기다리게 된다.

- take() 메소드는 완료된 작업을 Future 객체에 담아서 리턴하는 것까지는 같지만
  완료된 작업이 없으면 완료된 작업이 생길때까지 블로킹되어 기다린다.



- 참고로 CompletionService 인터페이스와 ExcutorCompletionService 클래스의
  제네릭 타입은 submit() 메소드에 들어가는 작업들의 Callable<V>의 V와
  result 의 타입인 V와 같아야 한다.

- 아래는 CompletionSerivce 인터페이스와 그 구현체를 이용하여
  완료된 작업 순으로 확인해보는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ExcutorService es = Excutor.newFixedThreadPool(
          	Runtime.getRuntime().availableProcessors()
          );
          
          CompletionService<Integer> cs = new ExecutorCompletionService<>(es);
          
          cs.submit(new Callable<Integer>() {
              public Integer call() {
                  return 100;
              }
          });
                    
          cs.submit(new Callable<Integer>() {
              public Integer call() {
                  return 50;
              }
          });
                    
          cs.submit(new Callable<Integer>() {
              public Integer call() {
                  return 10;
              }
          });
                    
          es.submit(new Runnable() {
             public void run() {
                 int run = true;
                 while(run) {
                     try {
                         Future<Integer> future = cs.take();
                         System.out.println(future.get());
                     } catch(Exception e) {
                         run = false;
                     }
                 }
             }
          });
          
          es.shutdownNow();
      }
  }
  
  // 100
  // 50
  // 10
  ```

- 작업이 들어가는 순서가 100 -> 50 -> 10 이라고 해서
  무조건 결과가 순서대로 나오는 것은 아니다.
  지금은 단순이 return ?; 라는 식으로 끝나기 때문에 속도의 차이가 없지만
  나중에 프로그램이 커졌을때 처음에 들어간 프로그램이 굉장히 오래걸린다면 나중에 끝날 수도 있으므로
  빨리 끝난 순서대로 작업 완료 통보가 된다.
  이에 유의하여 사용하는 것이 좋다.