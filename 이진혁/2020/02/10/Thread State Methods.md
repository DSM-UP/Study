## Thread State Methods

- 저번에는 쓰레드의 상태를 알 수 있는 getState() 메소드를 이용하여
  쓰레드의 상태를 얻어보고 쓰레드의 상태에 대해서 알아보았다.

- 오늘은 그 쓰레드의 상태를 조절할 수 있는 메소드들에 대해서 알아볼 것이다.
  쓰레드의 상태를 조절하는 메소드는 아래와 같다.

  ```java
  public static void sleep(long millis);
  public static void sleep(long millis, int nanos);
  public static void yield();
  
  public void join();
  public void join(long millis);
  public void join(long millis, int nanos);
  public void interrupt();
  public void wait();
  public void wait(long timeout);
  public void wait(long timeout, int nanos);
  public void notify();
  public void notifyAll();
  
  public void resume();
  public void suspend();
  public void stop();
  public void stop(Throwable obj);
  ```

- 오버로딩되어 있는 메소드들이 있어서 많아보이지만 총 10가지의 메소드들이 존재한다.
  그리고 밑의 resume() suspend() stop() 메소드는 Deprecated ( 비 권장 ) 된 메소드라서
  알 필요는 없는 메소드이다.

- 그럼 위의 메소드들에 대해서 하나씩 알아보도록하겠다.



### sleep()

- sleep() 메소드는 지금까지 예제로서 많이 사용해왔던 메소드이다.
  그리고 메소드명이 말해주듯이 쓰레드를 멈추어 일시정지 상태로 돌리는 메소드이다.
  또한 Thread의 내부 정적 메소드 중 하나이다.

- sleep() 메소드는 아래와 같이 총 두 가지로 오버로딩되어 있다.

  ```java
  public static void sleep(long millis);
  public static void sleep(long millis, int nanos);
  ```

- 첫 번째 sleep() 메소드는 매개변수로 long 타입의 밀리 세컨드 시간을 받는다.
  따라서 그 매개변수의 밀리 세컨드 시간만큼 쓰레드를 일시정지시키는 효과를 가진다.
  그리고 이 메소드는 InterruptedException를 발생시키기 때문에
  반드시 try-catch 문을 사용하여 예외처리를 해주어야 한다.

- 두 번째 sleep() 메소드는 첫 번째 sleep() 메소드와 별 다를 것 없지만
  매개변수로 밀리 세컨드뿐만 아니라 나노 세컨드의 시간도 받는다는 차이점이 존재한다.
  이것 말고는 다른점이 딱히 없다.

- 아래는 main도 하나의 쓰레드이므로 main 쓰레드를 0.001초간 멈추었다가 메세지를 출력하고
  0.000 000 001초 동안 다시 멈추었다가 메세지를 출력하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          try {
          	System.out.println("Sleep Start");
              Thread.sleep(1);
              System.out.println("0.001초 멈춤");
              Thread.sleep(0, 1);
              System.out.println("0.000 000 001초 멈춤");
          } catch(InterruptedException e) { e.printStackTrace(); }
      }
  }
  
  // Sleep Start
  // 0.001초 멈춤
  // 0.000 000 001초 멈춤
  ```

- 출력된 것으로 확인을 할 수 없기 때문에 직접 코드를 짜서 테스트해보는 것을 추천한다.



### join()

- join() 메소드는 다른 쓰레드가 종료할 때까지 잠시 대기하는 메소드이다.
  일반적으로 각각의 쓰레드들은 각자 돌아가기 때문에 동시에 돌아가야 한다거나
  한 쓰레드가 끝났을 때 실행되는 것을 알기 어렵다.
  그럴때 사용하는 것이 이 join() 메소드이다.

- join() 메소드는 sleep() 메소드와 다르게 정적 메소드가 아니라
  인스턴스 메소드이기 때문에 객체를 생성해야 사용할 수 있다.
  물론 상식상 인스턴스 메소드여야만 하긴하다.
  또한 sleep() 메소드와 같이 Thread 클래스의 내부 메소드이다.

- join() 메소드는 아래와 같이 총 세 가지로 오버로딩되어 있다.

  ```java
  public void join();
  public void join(long millis);
  public void join(long millis, int nanos);
  ```

- 첫 번째 join() 메소드는 가장 간단한 메소드로서
  지정된 쓰레드 객체가 종료될때 까지 해당 쓰레드를 일시 정지 시킨다.

- 두 번째 join() 메소드는 첫 번째 메소드와 같은 효과를 가지고 있으면서
  매개로 들어온 long 타입의 밀리 세컨드 시간이 지나면 자동으로 일시 정지 상태가 풀린다.

- 세 번째 join() 메소드는 첫 번째 메소드와 같은 효과를 가지고 있으면서
  매개로 들어온 long 타입의 밀리 세컨드 + int 타입의 나노 세컨드 시간이 지나면
  자동으로 일시 정지 상태가 풀리게 된다.

- 아래는 join() 메소드를 이용하여 Thread1과 Thread2가 모두 종료되면
  main 쓰레드를 계속 실행시키도록 하는 예제이다.

  ```java
  class ThreadA extends Thread {
  	public void run() {
  		try {
  			Thread.sleep(5000);
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  	}
  }
  
  class ThreadB extends Thread {
  	public void run() {
  		try {
  			Thread.sleep(5000);
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  	}
  }
  
  public class ThreadJoinTest {
  	public static void main(String[] args) {
  		ThreadA a = new ThreadA();
  		ThreadB b = new ThreadB();
  		
  		System.out.println("ThreadA, ThreadB 시작");
  		a.start();
  		b.start();
  
  		try {
  			a.join();
  			b.join();
  		} catch(Exception e) { e.printStackTrace(); }
  		
  		System.out.println("ThreadA, ThreadB 종료");
  	}
  }
  
  // ThreadA, ThreadB 시작
  // ThreadA, ThreadB 종료
  ```



### wait() - notify() - notifyAll()

- wait() 메소드는 메소드명 그대로 일시 정지 시켜버리는 메소드이다.
  wait() 메소드는 Thread 클래스의 내부 메소드가 아니라
  Object 클래스의 내부 메소드이다.
  따라서 모든 객체에서 사용할 수 있도록 만들어졌다.
  하지만 쓰레드 객체에 영향을 미치는 메소드이다.

- notify() 메소드는 wait() 메소드로 인해 일시 정지 상태가 된 쓰레드를
  다시 실행 대기 상태로 되돌리는 메소드이다.

- notifyAll() 메소드는 하나만 되돌리는 메소드였던 notify()에 비해
  모든 일시 정지된 쓰레드를 실행 대기 상태로 되돌리는 메소드이다.

- 이 메소드들은 쓰레드A와 쓰레드B를 번갈아가면서 실행하고 싶을때 사용합니다.
  앞서 말했던 join() 메소드와는 살짝다른 경향을 가지고 있습니다.
  그리고 공유 객체를 이용하여 사용되는 메소드들이고
  wait() 메소드는 InterruptedException를 발생시키지만
  notify()와 notifyAll() 메소드는 발생시키지 않는다.
  또한 wait() 메소드는 동기화 메소드에서만 사용하지는 않지만
  동기화 메소드에서 사용하지 않으면 IllegalMonitorStateException가 발생합니다.

- 아래는 공유 객체를 가지고 있는 ThreadAA와 ThreadBB가 각각
  공유 객체의 동기화 메소드를 번갈아가면서 사용하는 예제이다.

  ```java
  class ThreadAA extends Thread {
  	private Test2 test;
  	
  	public ThreadAA(Test2 test) {
  		this.test = test;
  	}
  	
  	public void run() {
  		for(int i = 0 ; i < 10 ; i++) {
  			test.printA();
  		}
  	}
  }
  
  class ThreadBB extends Thread {
  	private Test2 test;
  	
  	public ThreadBB(Test2 test) {
  		this.test = test;
  	}
  	
  	public void run() {
  		for(int i = 0 ; i < 10 ; i++) {
  			test.printB();
  		}
  	}
  }
  
  class Test2 {
  	public synchronized void printA() {
  		try {
  			notify();
  			System.out.println("printA");
  			wait();
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  	}
  	
  	public synchronized void printB() {
  		try {
  			notify();
  			System.out.println("printB");
  			wait();
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  	}
  }
  
  public class ThreadWaitTest {
  	public static void main(String[] args) {
  		Test2 test = new Test2();
  		
  		ThreadAA a = new ThreadAA(test);
  		ThreadBB b = new ThreadBB(test);
  		
  		a.start();
  		b.start();
  	}
  }
  
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  // printA
  // printB
  ```

- wait() 메소드 대신에 원래는 suspend(), notify(), notifyAll() 메소드 대신에 resume() 메소드가 사용되었지만
  지금은 suspend() 메소드와 resume() 메소드는 Deprecated되어 사용하지 않는 것이 좋다.



### interrupt()

- interrupt() 메소드 이전에 stop() 이라는 메소드가 사용되었었는데
  지금은 stop() 메소드는 Deprecated 되어 사용하지 않는 것이 좋다.

- 그래서 지금은 interrupt() 메소드를 사용하는데
  stop() 메소드는 stop() 메소드가 실행되자 마자 바로 그 쓰레드를 종료시키는 역할을 하였다.
  하지만 이렇게 쓰레드를 바로 종료하게 되면 쓰레드 안에 있었던 자원들이 제대로 정리되지 않아
  자원의 공간이 확보되고 있는 것을 막을 수 없었기 때문에 Deprecated되었던 것이다.
  하지만 interrupt() 메소드는 바로 종료시키는 것이 아니라 InterruptedException를 발생시켜
  자연스럽게 예외처리로 인한 종료로 안전하게 자원을 정리하며 종료할 수 있게 되엇다.

- interrupt() 메소드는 실행시 바로 예외를 발생시켜 종료하는 것이 아니라
  쓰레드 객체에 interrupt() 메소드를 실행시키면 그 쓰레드 객체가 일시 정지가 되었을때
  바로 InterruptedException을 발생시켜서 쓰레드를 종료한다.

- 아래는 ThreadC가 출력 + 아주 작은 일시 정지를 반복하는 동안 main 쓰레드에서는
  5초 뒤 ThreadC가 안전 종료하도록 Interrupt() 메소드를 실행시키는 예제이다.

  ```java
  class ThreadC extends Thread {
  	public void run() {
  		try {
  			while(true) {
  				System.out.println("작업중");
  				Thread.sleep(1);
  			}
  		} catch(InterruptedException e) {
  			System.out.println("쓰레드 종료");
  		}
  	}
  }
  
  public class ThreadInterruptTest {
  	public static void main(String[] args) {
  		ThreadC c = new ThreadC();
  		c.start();
  		
  		try {
  			Thread.sleep(5000);
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  		
  		c.interrupt();
  	}
  }
  
  // 작업중
  // 작업중
  // 작업중
  // 작업중
  // 작업중
  // 작업중
  // ...
  // 작업중
  // 작업중
  // 작업중
  // 작업중
  // 작업중
  // 쓰레드 종료
  ```



### yield()

```java
class Test3 {
	public synchronized void print() {
		Thread thread = Thread.currentThread();
		System.out.println(thread.getName());
		Thread.yield();
	}
}

class ThreadAAA extends Thread {
	private Test3 test;
	
	public ThreadAAA(Test3 test) {
		this.test = test;
	}
	
	public void run() {
		test.print();
		test.print();
		test.print();
	}
}

class ThreadBBB extends Thread {
	private Test3 test;
	
	public ThreadBBB(Test3 test) {
		this.test = test;
	}
	
	public void run() {
		test.print();
		test.print();
		test.print();
	}
}

public class ThreadYield {
	public static void main(String[] args) {
		Test3 test = new Test3();
		ThreadAAA a = new ThreadAAA(test);
		ThreadBBB b = new ThreadBBB(test);
		
		a.start();
		b.start();
	}
}

```

