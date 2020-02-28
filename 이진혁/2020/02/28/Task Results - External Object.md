## Task Results - External Object

- 오늘은 작업 결과를 외부 객체에 저장하는 방법에 대해서 알아볼 것이다.
  사실 이는 굉장히 간단한 작업이다.
  우리는 이전에 submit() 메소드를 배우면서 Future 객체를 통해 작업 결과값을 받아본적이 있다.
  다음은 submit() 메소드의 형식이다.

  ```java
  public Future<?> submit(Runnable task);
  public Future<V> submit(Runnable task, V result);
  public Future<V> submit(Callable<V> task);
  ```

- 이것을 보면 두 번째 submit() 메소드의 두 번째 매개변수와
  세 번째 submit() 메소드의 Callable 객체의 제네릭 타입을 보면 이 타입에 맞게 Future 객체에 결과가 들어간다는 것을 알 수 있다.

- 이를 통해서 V(제네릭 타입)에 원하는 외부 객체를 넣어 공유 객체로 만든 후 각각의 결과값을
  하나의 외부객체에 저장하는 것이다.
  다음은 외부 객체를 공유 객체로 하여 작업 처리 결과를 얻어내는 예제이다.

   ```java
  class ResultMemory {
      private int result;
      
      public ResultMemory() {}
      
      public synchronized void add(int value) {
          result += value;
      }
      
      public int getResult() {
          return result;
      }
  }
  
  class MyRunnable implements Runnable {
      private ResultMemory rm;
      
      public MyRunnable(ResultMemory rm) {
          this.rm = rm;
      }
      
      public void run() {
          rm.add(100);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          ExecutorService es = Excutors.newFixedThreadPool(5);
          
         	ResultMemory rm = ResultMemory();
          Runnable r1 = new MyRunnable(rm);
          Runnable r2 = new MyRunnable(rm);
          
          Future<ResultMemory> future1 = es.submit(r1, rm);
          Future<ResultMemory> future2 = es.submit(r2, rm);
          
          try {
              rm = future1.get();
              rm = future2.get();
              System.out.println("작업 결과 : " + rm.getResult());
          } catch(Exception e) {
              System.out.println("작업 중 예외 발생");
          }
          
          es.shutdown();
      }
  }
  
  // 작업 결과 : 200
   ```

- 이렇게 두 가지의 작업 결과를 취합할 수 있다.