## Future - No Return And Return

- Future 객체를 사용하여 작업 상태를 확인하기 위해서 흔히 get() 메소드를 사용한다.
  get() 메소드를 사용하게 되면 리턴값이 존재할 수도 있고 존재하지 않을 수도 있다.
  하지만 이 결과는 submit() 메소드의 매개변수에 달려있다.
  submit() 메소드의 매개변수로 Runnable 객체가 들어가면 리턴값이 존재하지 않고
  Callable 객체가 들어가면 리턴값이 존재하게 된다.
  물론 Runnable 객체를 사용하면서 일부러 리턴값이 생기도록 만들 수도 있다.





- 일단 첫 번째로 no return을 갖는 작업 상태 확인하기를 알아보자.
  일단 리턴값이 존재하지 않는다는 것은 작업 스레드가 작업하는 부분은 확인하는 입장에서 알 수 없으므로
  거의 정보를 주지 않는다.
  다음은 No Return을 갖는 Future 객체 및 submit() 메소드를 사용하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ExecutorService es = Executors.newFixedThreadPool(4);
          
          Future future = es.submit(new Runnable() {
              public void run() {
                  System.out.println("[작업 처리 시작]");
                  System.out.println("[작업 처리 중]");
                  System.out.println("[작업 끝]");
              }
          });
          
          es.submit(new Runnable() {
              public void run() {
                  try {
                  	future.get();
                  } catch(InterruptedException e) {
                      System.out.println("작업이 Interrupt 됨");
                  } catch(ExecutionException e) {
                      System.out.println("작업 도중 예외가 발생함");
                  }
              }
          });
          
  		es.shutdown();
      }
  }
  
  // [작업 처리 시작]
  // [작업 처리 중]
  // [작업 끝]
  ```

- 이렇게 위를 보면 future.get() 을 실행할때
  InterruptedException과 ExecutionException에 대비하여 try-catch문을 작성한 것을 볼 수 있다.
  저번에 공부할때는 get() 메소드를 사용할때 예외가 발생하니 try-catch문을 작성해야한다고
  쉽게 넘어갔던 적이 있었다.
  첫 번째인 InterruptedException은 작업이 Interrupt되었는지 확인하고 interrupt되었다면
  이 예외가 발생한다.
  두 번째인 ExecutionException은 작업 도중 예외가 발생하면 발생하는 예외이다.

- 이렇게 리턴값이 존재하지 않아도 예외처리를 통해 작업에서 무슨 일이 발생하였는지 확인할 수 있다.





- 두 번째로 Return을 갖는 작업 상태 확인하기를 알아보자.
  리턴값이 존재하기 위해서는 Callable 객체를 사용하면 된다.
  Callable 객체는 제네릭 타입을 가지고 있고
  내부에 call() 메소드를 가지고 있는데 이 call() 메소드의 return값도 같은 제네릭 타입으로 되어 있어
  원하는 리턴값을 가질 수 있다.
  call() 메소드에서 리턴하는 것이 get() 메소드의 리턴값이 되는 것이다.
  InterruptedException와 ExecutionException은 No Return과 같다.
  다음은 Callable 객체를 이용하여 리턴값을 얻어내는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ExecutorService es = Executors.newFixedThreadPool(4);
          
          Future future = es.submit(new Callable<Integer>() {
              public Integer call() {
                  System.out.println("[작업 처리 시작]");
                  System.out.println("[작업 처리 중]");
                  Integer result = new Integer(10);
                  System.out.println("[작업 끝]");
                  return result;
              }
          });
          
          es.submit(new Runnable() {
              public void run() {
                  try {
                      Integer result = future.get();
                  } catch(InterruptedException e) {
                      System.out.println("InterruptedException");
                  } catch(ExecutionException e) {
                      System.out.println("ExecutionException");
                  }
                  System.out.println("결과값 : " + result);
              }
          });
          
          es.shutdown();
      }
  }
  
  // [작업 처리 시작]
  // [작업 처리 중]
  // [작업 끝]
  // 결과값 : 10
  ```

  