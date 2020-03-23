## Synchronized Collections

- 우리가 지금까지 배운 List, Set, Map과 같은 콜렉션들은 동기화 되어 있는 Vector나 Hashtable을 제외하면
  동기화가 되어 있지 않아서 멀티 스레드에서는 사용하기가 불안전하다.
  따라서 멀티 스레드에서는 Vector나 Hashtable만을 사용해야 한다는 것인데
  만약 싱글 스레드 환경에서 ArrayList나 HashMap과 같은 콜렉션을 사용하고 있다가
  멀티 스레드 환경으로 넘어가야 한다고 할때는 어떻게 해야할지 난감하다.
  그래서 존재하는 것이 동기화된 콜렉션들이다.

- 기존의 콜렉션들을 동기화된 콜렉션으로 바꾸기 위해서는 synchronizedXxx() 메소드를 사용하면 된다.
  synchronizedXxx() 메소드의 종류로는 다음과 같다.

  ```java
  List<T> synchronizedList(List<T> list);
  Map<T> synchronizedMap(Map<K,V> m);
  Set<T> synchronizedSet(Set<T> s);
  ```

  겉으로는 아무것도 아닌 것 같지만 비동기화 콜렉션을 매개변수로 주면 그에 맞는
  동기화된 콜렉션을 리턴하는 메소드들이다.
  나중에 멀티 스레딩을 하게 될때 이 메소드들을 애용하게 될 것이다.