## CompletionHandler<>

- 저번에 블로킹 방식으로 작업 완료 통보를 받는 방법에 대해서 알아보았다.
  이번에는 콜백 방식으로 작업 완료 통보를 받는 방법에 대해서 알아볼 예정이다.
  블로킹 방식과 콜백 방식의 차이점은 블로킹 방식은 Future 객체를 이용하여 get() 메소드를 사용하기 때문에
  작업이 완료되기 전까지 get() 메소드를 사용한 스레드는 블로킹 상태가 되어 멈추게 된다는 것을 알고 있을 것이다.
  하지만 콜백 방식은 Future 객체를 사용하지 않고 (물론 사용해도 상관 없지만 get()만 안 쓰면 됨)
  Future 객체에 담겼어야 할 값을 이용하여 새로운 메소드 즉, 콜백 메소드에 매개변수로 주어서 결과값을
  만들어내는 방식이다. 따라서 블로킹 방식처럼 멈출 필요가 없다는 것이다.

- ExecutorService 인터페이스인 Thread Pool에는 콜백 방식을 기본적으로 지원하지 않기 때문에
  run() 메소드 안에서 콜백 메소드를 이용해야 한다.

- 콜백 메소드를 만들때 CompletionHandler 인터페이스를 사용할 수 있는데
  이 인터페이스는 completed() 메소드와 failed() 메소드를 오버라이딩 하도록 만들어져 있는데
  completed()는 작업이 정상적으로 완료되었을때 실행하는 콜백 메소드이고
  failed()는 작업에서 예외가 발생하였을때 실행하는 콜백 메소드이다.

- 이 두 메소드는 V와 A라는 제네릭 타입이 존재하는데 V타입은 결과값의 타입이고
  A타입은 추가적인 전달 객체라고 생각하면 된다.
  만약 전달 객체가 존재하지 않는다면 Void로 설정한다.

  다음은 콜백 방식을 이용하여 작업 완료 통보를 받는 예제이다.

  ```java
  class CallBackExecutorService {
      private ExecutorService es;
      
      public CallBackExecutorService() {
         	es = Excutors.newFixedThreadPool(5);
      }
      
      private CompletionHandler<Integer, Void> callback =
          new CompletionHandler<Integer, Void>() {
          
          public void completed(Integer result, Void attachment) {
              System.out.println("정상적인 실행 : " + result);
          }
          
          public void failed(Throwable exc, Void attachment) {
              System.out.println("예외 발생 : " + exc.toString());
          }
      };
      
      public void work(final int n1, final int n2) {
          Runnable runnable = new Runnable() {
              public void run() {
                  try {
                      callback.completed(n1/n2, null);
                  } catch(Exception e) {
                      callback.failed(n1/n2, null);
                  }
              }
          }
      }
      
      public void finish() {
          es.shutdown();
      }
  }
  
  public class MainClass {
      CallBackExecutorService cbes = new CallBackExecutorService();
      cbes.work(10, 5);
      cbes.work(10, 0);
      cbes.finish();
  }
  ```

  

