## Daemon Thread

** 쓰레드를 스레드로 표기합니다 ** << 이거 일부러 띄운 거임 ㅡ.ㅡ

- 스레드 중에서 어느 한 스레드에게 종속되어 있는 스레드가 존재할 수 있습니다.
  그럴 경우에 주 스레드가 종료되었는데도 불구하고 종속된 스레드가 계속 존재하는 경우가
  발생할 수도 있습니다.
  이러한 경우를 방지하기 위해서 자바에는 데몬 스레드라는 스레드가 존재합니다.
  지금까지 말한 것처럼 종속된 스레드를 자바에서는 데몬 스레드라고 합니다.
  데몬 스레드는 주 스레드가 종료되면 자동으로 종료가 된다는 것 외에는
  일반적인 스레드와 별로 다를 것이 없습니다.
  데몬 스레드를 만드는 방법은 다음과 같습니다.

- start() 메소드를 통해 스레드를 실행 대기 상태로 돌리기 전에
  setDaemon() 메소드를 통해 데몬 스레드라는 것을 명시해주면 됩니다.

- 여기서 start() 메소드를 실행하기 전에 setDaemon() 메소드를 실행시켜야 한다는 것이 중요합니다.
  만약 start() 메소드를 실행한 후 즉, 스레드가 실행되고 있는 시점에서
  중간에 setDaemon() 메소드를 실행시키게 되면 IllegalThreadStateException이 발생하여
  예외를 일으키게 됩니다.
  물론 중간에 갑자기 종속된 스레드가 된다는 것 자체가 말이 안 되기도 합니다.

- setDaemon() 메소드는 다음과 같은 형식을 가지고 있습니다.

  ```java
  public void setDaemon(boolean on);
  ```

- 이렇게 데몬 스레드로 만들 것인지 아니면 데몬 스레드로 만들지 않을 것인지를
  boolean 타입의 매개변수로 받습니다.
  true는 데몬 스레드로 만들고 false는 일반 스레드로 만듭니다.
  물론 기본이 false로 설정되어 있는 필드가 있을 것입니다.

- 또한 이 스레드가 데몬 스레드인지 아닌지를 확인하는 방법도 존재합니다.
  바로 isDaemon() 메소드를 사용하면 됩니다.
  이 메소드는 스레드 객체가 데몬 스레드라면 true, 아니라면 false를 리턴합니다.
  isDaemon() 메소드의 형식은 아래와 같으며 한 번만 훝고 지나가는 것을 추천합니다.

  ```java
  public boolean isDaemon();
  ```



- 그럼 이제 데몬 스레드를 한 번 사용해보아야겠죠?
  그래서 예제를 준비했습니다.
  다음 예제는 데몬 스레드는 while 문을 통해 무한 반복하도록 만들고
  메인 스레드는 데몬 스레드와 자신이 'Daemon Thread' 인지 아닌지 확인하고
  5초 뒤에 메인 스레드를 종료시킵니다.
  그러면 데몬 스레드는 원래 무한 반복해야하는 것이 갑자기 종료가 되는 것을 알 수 있습니다.

  ```java
  class DaemonThread extends Thread {
  	public void run() {
  		while(true) {
  			System.out.println("작업 실행 중");
  			try {
  				Thread.sleep(1000);
  			} catch(Exception e) {
  				e.printStackTrace();
  			}
  		}
  	}
  }
  
  public class MainThread {
  	public static void main(String[] args) {
  		DaemonThread subThread = new DaemonThread();
  		Thread mainThread = Thread.currentThread();
  		
  		subThread.setDaemon(true);
  		subThread.start();
  		
  		System.out.println(subThread.isDaemon());
  		System.out.println(mainThread.isDaemon());
  		
  		
  		try {
  			Thread.sleep(5000);
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  		
  		System.out.println("Main Thread 종료");
  	}
  }
  
  // ture
  // false
  // 작업 실행 중
  // 작업 실행 중
  // 작업 실행 중
  // 작업 실행 중
  // 작업 실행 중
  // Main Thread 종료
  ```

- 원래는 while() 문 뒤에 출력을 하나 하도록 하게 하여
  출력문이 나오지도 않았는데 스레드가 종료되었다는 것을 보여주려고 했는데
  while() 문이 true라서 어차피 실행할 수 없는 문장이라며 오류를 일으켰습니다.
  하지만 지금 생각해보니 true를 필드로 바꾸었다면 상관 없었겟네요.

- 어쨌든 이렇게 주 스레드가 종료되면 데몬 스레드도 같이 종료된다는 것을 알게 되었고
  데몬 스레드의 존재와 데몬 스레드가 무엇인지 알게 되었습니다.

- 평소에 글을 쓸때 스레드를 쓰레드라고 썼었는데
  "쓰레드"가 너무 발음이 세 보이고 많이들 스레드라고 쓰길래 그냥 스레드로 바꾸었습니다.