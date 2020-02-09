## Thread State

- 오늘은 쓰레드의 상태에 대해서 알아볼 예정이다.
  쓰레드의 상태는 기본적으로 우리는 이렇게 생각할 수 있다.
  먼저 쓰레드 객체를 생성하고
  start() 메소드를 사용하여 run() 메소드를 실행시키고
  run() 메소드가 종료되면 쓰레드는 종료된다.

- 하지만 이 말은 정확하지는 않다.
  쓰레드 객체를 생성하였을 때를 NEW 상태라고 하는 것은 맞으나,
  start() 메소드를 실행하였을 때 run() 메소드를 바로 실행시키는 것이 아니라
  실행 대기 상태에 돌입하게 된다.
  그리고 주도권이 자신에게 올때까지 기다린다.
  주도권이 자신에게 오면 실행상태가 되어 실제로 RUNNING을 하게 된다.
  이 상태를 RUNNABLE 상태라고 한다.
  그리고 각각의 쓰레드 메소드와 동기화로 인한 look에 의해 멈춘 상태를
  일시 정지 상태라고 하며 BLOCKED, WAITING, TIMED_WAITING과 같이 세 가지로 나뉜다.
  BLOCKED는 동기화에 의해서 look이 걸린 자원이 look이 풀릴때까지 일시정지하는 것을 말한다.
  WAITING과 TIMED_WAITING은 서로 비슷한데
  시간이 흐름에 따라서 일시 정지 상태가 해제될 수 있는 일시 정지 상태를 TIMED_WAITING이라고 하고
  아닌 것을 WAITING 이라고 한다.
  쉽게 Thread.sleep() 메소드를 사용할때 TIMED_WAITING을 볼 수 있다.

- 이 쓰레드의 상태를 알아보기 위해서 Thread 클래스의 정적 내부 클래스인 State 클래스를 사용할 수 있다.
  이 State 클래스에는 상수로 위의 NEW, RUNNABLE, BLOCKED, TIMED_WAITING, WAITING이 존재하고
  정적 클래스이기 때문에 객체 생성 없이 사용할 수 있다.

- Thread 객체의 메소드 중 getState() 메소드를 사용하면 그 쓰레드의 현재 상태를 리턴한다.
  따라서 이것을 이용하여 쓰레드 상태를 이용하는 코딩 방식을 사용할 수도 있다.

- 아래는 Thread의 상태를 출력하여 확인할 수 있는 예제이다.

  ```java
  class ThreadStateCheck extends Thread {
  	private Thread thread;
  	
  	public ThreadStateCheck(Thread thread) {
  		this.thread = thread;
  	}
  	
  	public void run() {
  		while(true) {
  			State state = thread.getState();
  			System.out.println("쓰레드의 상태 : " + state);
  			
  			if(state == State.NEW)
  				thread.start();
  			else if(state == State.TERMINATED)
  				break;
  			
  			try {
  				thread.sleep(100);
  			} catch(Exception e) {
  				e.printStackTrace();
  			}
  		}
  	}
  }
  
  public class ThreadLifeSycleTest {
  	public static void main(String[] args) {
  		ThreadStateCheck tsc = new ThreadStateCheck(new Thread() {
  			public void run() {
  				for(long i = 0 ; i < 1000000000 ; i++) {}
  				
  				try {
  					Thread.sleep(2000);
  				} catch(Exception e) {
  					e.printStackTrace();
  				}
  				
  				for(long i = 0 ; i < 1000000000 ; i++) {}
  			}
  		});
  		tsc.start();
  	}
  }
  
  // 쓰레드의 상태 : NEW
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : TIMED_WAITING
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : RUNNABLE
  // 쓰레드의 상태 : TERMINATED
  ```

- 이렇게 처음에는 쓰레드 객체가 생성되어 NEW 상태를 리턴하는 것을 볼 수 있지만
  이 상태 이후 start() 메소드를 이용해서 실행시켰고
  이 쓰레드를 제외한 다른 쓰레드가 존재하지 않으므로 바로 실행 상태가 되어
  RUNNABLE 상태에 돌입하여 실행하다가
  Thread.sleep() 메소드를 실행하여 일시 정지 상태가 되어
  TIMED_WAITING 상태가 되었고
  다시 실행하여 RUNNABLE 상태가 되었다가
  쓰레드가 종료되어 TERMINATED 상태가 된 것을 알 수 있다.