## Parallel Processing Collections

- 기존의 콜렉션들은 Vector와 Hashtable을 제외하면
  멀티 스레드 환경에서 사용하기엔 안전하지 않았고
  이를 극복하기 위해서 만들어진 동기화된 콜렉션들은
  콜렉션을 사용할때 마다 모든 스레드에 잠금이 일어나기 때문에 속도의 문제가 있었다.
  그래서 나온 것이 이 병렬 처리 콜렉션이다.
  병렬 처리 콜렉션들은 ConcurrentXxx과 같은 형태로 이루어져 있다.
  병렬 처리 콜렉션의 종류는 다음과 같다.

  ```java
  ConcurrentHashMap
  ConcurrentLinkedDeque
  ConcurrentLinkedQueue
  ConcurrentMap
  ConcurrentNavigableMap
  ConcurrentSkipListMap
  ConcurrentSkipListSet
  ```

- 사용방법은 기존의 것과 비슷하기 때문에 사용하기도 쉽다는 장점이 있다.