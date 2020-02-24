## Thread Pool

- 오늘은 Thread Pool에 대해서 공부하였다.
- Thread Pool은 초기 스레드 수, 코어 스레드 수, 최대 스레드 수를 설정하여
  많은 스레드로 인한 폭주를 막기 위한 시스템이다.
- 이 시스템은 ExecutorService 인터페이스와 Executors 클래스를 이용하여
  Thread Pool을 구현할 수 있다.
- ExecutorService 인터페이스를 구현하기 위해서 Executors 클래스의 정적 메소드를 사용해야하는데
  쉽게 newCachedThreadPool() 메소드와 newFixedThreadPool(int nThreads) 메소드가 있다.
- new CachedThreadPool() 메소드는 초기 스레드 개수 0, 코어 스레드 수 0, 최대 스레드 수는
  int의 최대치만큼이다.
  따라서 최대 스레드 수를 사실상 정하지 않다싶히 하고 1개 이상의 스레드가 추가되었을때
  60초 동안 동작되지 않은 스레드를 삭제한다.

- newFixedThreadPool(int nThreads) 메소드는
  초기 스레드 개수 0, 코어 스레드 개수 nThreads, 최대 스레드 수 nThread로
  최대 스레드를 정해놓으며 동작하지 않는 스레드도 삭제하지 않는 특징이 있다.