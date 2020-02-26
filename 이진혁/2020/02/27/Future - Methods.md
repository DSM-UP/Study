## Future - Methods

- 저번에 Future 객체에서 작업 결과를 얻어내는 메소드인 get() 메소드에 대해서 공부하였다.
  Future 객체에는 get() 메소드 이외에도 작업 결과를 얻어내는 메소드들이 존재한다.
  다음은 저번에 한 번 언급만 하고 지나간 메소드들이다.

  ```java
  public boolean cancel(boolean mayInterruptIfRunning):
  public boolean isCancelled();
  public boolean isDone();
  ```

  

- 첫 번째로 cancel() 메소드이다.
  cancel() 메소드는 기본적으로 작업 스레드를 interrupt 하는 메소드이며
  get() 메소드와는 다르게 blocking이 발생하지 않는다.

- cancel() 메소드는 실행시 스레드의 작업 상태에 따라서 결과가 다르게 나온다.
  먼저 작업이 시작되지 않은 스레드일 경우에 매개변수와는 상관없이
  그 스레드를 interrupt 하고 true를 리턴한다.
  만약 작업이 진행 중인 스레드일 경우 매개변수가 true일 경우에는 스레드를 종료시키고 true를 리턴하고
  매개변수가 false일 경우에는 스레드를 종료시키지 않고 false를 리턴한다.
  스레드가 종료된 상태이거나 어떠한 이유에 의해서 interrupt할 수 없는 상태일 경우에는 false를 리턴한다.



- 두 번째로 isCancelled() 메소드이다.
  isCancelled() 메소드도 cancel() 메소드와 마찬가지로 Blocking이 발생하지 않는다.
  isCancelled() 메소드는 작업 스레드가 interrupt 되었는지 확인하고 interrupt 되었다면 true를 리턴하고
  아니면 false를 리턴한다.
  여기서 주의해야 할 점이 정상적으로 종료된 작업 스레드는 포함하지 않는다.
  물론 false를 리턴한다.



- 세 번째로 isDone() 메소드이다.
  isDone() 메소드는 어떠한 수단을 이용했든간에 상관없이
  작업 스레드가 종료되었다면 true를 리턴하는 메소드이다.