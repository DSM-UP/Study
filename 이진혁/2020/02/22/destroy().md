## destroy()

- destroy() 메소드는 현재 그룹과 이 그룹의 하위 그룹까지 모두 삭제하는 메소드이다.
  하지만 현재 그룹과 하위 그룹의 스레드들이 모두 종료된 상태여야 한다.

- 아래는 destroy() 메소드를 사용할때 현재 그룹안의 스레드들이 모두 종료되지 않았을때
  어떠한 현상을 일으키는지 실험하는 코드이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ThreadGroup tg = new ThreadGroup("threadGroup");
          
          Thread thread = new Thread(tg, new Runnable() {
              public void run() {
                  while(true) {
                      System.out.print("test");
                  }
              }
          }, "thread");
          
          thread.start();
          
          tg.destroy();
      }
  }
  
  // testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
  // testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
  // testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
  // testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
  // ...
  // testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
  ```

- 이렇게 destroy() 메소드를 실행시키고 나서도 test가 계속해서 찍히는 것을 알 수 있다.
  뭐 오류가 나는 것도 아니고 그냥 실행 자체를 거부하는 것 같다.

- 하지만 모두 종료된 상태에서 destroy() 메소드를 실행하면 threadGroup을 삭제시킬 수 있다.