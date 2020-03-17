## Collection Framework

- Collection Framework란 객체를 저장하고, 검색하고, 삭제할 수 있도록 도와주는 프레임워크를 말한다.
  콜렉션 프레임워크의 대표적인 인터페이스는 List, Set, Map이 있다.
  아마 많은 자바 개발자들이 List, Set, Map과 같은 인터페이스를 구현한 콜렉션 클래스들을
  사용하였을 것이다. 나도 개발을 하면서 많은 List들과 Map들을 사용하였으니 아마 그럴 것이다.
  그만큼 자바에서 콜렉션 프레임워크는 반드시 필요한 존재라는 것을 알 수 있다.

- List, Set, Map은 인터페이스로 이를 구현한 클래스들이 존재한다.
  이들의 종류에는 다음과 같다.

  ```java
  List - ArrayList, Vector, LinkedList
  Set - HashSet, TreeSet
  Map - HashMap, Hashtable, TreeMap, Properties
  ```

  여기서 List와 Set는 어떠한 객체를 저장하고 사용하고 삭제한다는 점에서 비슷하여
  Collection이라는 인터페이스로 묶여있지만 Map은 키와 값을 이용하여 저장하는 방법으로
  List와 Set과는 아예 다른 방법이라서 같이 묶이지 않았다.

- 이제부터 List부터 시작하여 Map까지 알아보도록하겠다.





### 1. List

- List는 콜렉션 프레임워크 중에 하나로서 가장 중요하다고 할 수 있을 정도로 많이 쓰이는 콜렉션이다.
  특징으로는 객체를 저장할때 순서를 유지하면서 차례대로 저장하며
  중복된 값을 허용한다는 특징을 가지고 있다.

- List는 인터페이스로, 이를 구현한 ArrayList, Vector, LinkedList가 있다.
  List는 비슷한 세 개의 List 종류들에게 모두 포함되는 추상 메소드들을 가지고 있는데
  그는 다음과 같다.

  ```java
  boolean add(E e)					e를 마지막에 추가
  void add(int index, E element)		element를 index에 추가
  E set(int index, E element)			index에 있는 요소를 element로 변경하고 기존의 요소를 리턴
  boolean contains(Object o)			o가 List의 요소에 존재하는지 여부를 리턴
  E get(int index)					index에 있는 요소를 리턴
  boolean isEmpty()					List가 비어있는지 여부를 리턴
  int size()							List의 크기를 리턴
  void clear()						List안의 모든 요소를 삭제
  E remove(int index)					index에 있는 요소를 삭제 후 리턴
  boolean remove(Object o)			o가 있으면 삭제하고 true, 없으면 false
  ```

- 이렇게 많은 추상 메소드들이 존재한다.
  하지만 ArrayList, Vector, LinkedList가 각각 다른 기능들을 가지고 있다.
  아래에서 하나하나씩 살펴보자.



#### 1-1. ArrayList

- ArrayList는 이름 그대로 배열을 기반으로한 List를 생성한다.
  하지만 배열이라는 것 자체가 불변성을 가지고 있기 때문에 사용하기 힘들 것이라고 생각할 수 있지만
  내부적으로 배열을 사용할뿐 size가 더 클 필요가 있다면 더 늘릴 수 있다.
  처음 ArrayList를 생성하면 기본적으로 10이라는 크기를 가지고 있다.
  인덱스는 0부터 시작해서 9까지 존재하는 것이다.
  size가 사용할때마다 계속 늘어난다고 해서 마냥 좋은 것은 아니다.
  size가 늘어나는 만큼 오버헤드가 발생하기 때문이다.
  size가 늘어날때는 두 배로 늘어난다.
  그래서 이러한 오버헤드를 막기 위해서 ArrayList를 생성할때 매개변수로 size를 넣을 수 있다.
  이를 통해서 오버헤드를 막을 수 있다.

- ArrayList는 제네릭 타입 E를 가지고 있기 때문에 하나의 타입만을 저장할 수 있다.
  자바 5부터 제네릭 타입을 이용하여 ArrayList를 구현했지만 자바 4 이전에는
  제네릭 타입을 사용하지 않았기 때문에 ArrayList의 모든 요소는 Object로 저장되어
  캐스팅이 여러 번 발생하는 오버헤드를 발생시키곤 했다.

- ArrayList에서 오버헤드를 발생시키는 요인은 하나 더 있는데
  그것은 ArrayList에서의 빈번한 삭제이다.
  ArrayList는 내부적으로 배열로 구현되어 있기 때문에
  중간의 하나를 삭제하게 되면 뒤의 요소들이 하나씩 앞당겨지게 된다.
  이에 많은 연산이 필요하므로 오버헤드가 발생할 가능성이 높다.
  따라서 삭제가 빈번하게 일어나는 경우에는 ArrayList를 사용하지 않는 것이 좋다.

- 다음은 ArrayList를 이용한 간단한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          List<Integer> arrayList = new ArrayList<Integer>(10);
          for(int i = 0 ; i < 10 ; i++)
              arrayList.add(i);
          
          for(int i : arrayList)
              System.out.println(i);
      }
  }
  
  // 0
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  ```

  

#### 1-2. Vector

- Vector 클래스는 ArrayList와 같은 기능을 가지고 있지만 사용되는 메소드들이
  동기화 (synchronized)되어 있다는 것이 차이점이다.
  따라서 멀티 스레딩을 할때 많이 사용되는 콜렉션이라는 것을 알 수 있다.
  (동기화에 대한 내용은 이전에 많이 설명했으므로 설명하지 않겠다.)
- 동기화라는 점 빼고는 딱히 다른 점이 없다.



#### 1-3. LinkedList

- LinkedList는 ArrayList와 사용방법이 거의 같다.
  하지만 전에 말했듯이 ArrayList는 요소를 빈번하게 삭제하는 경우에
  큰 오버헤드가 발생할 수 있다고 하였다.
  그 단점을 보안한 것이 이 LinkedList이다.
  내부배열과 인덱스를 통해 요소를 관리하는 ArrayList와는 다르게
  링크(주소 - 포이터)를 통해 관리하기 때문에 쉽게 요소를 삽입 삭제할 수 있다.
  물론 LinkedList가 무조건 좋다는 것은 아니다.
  단순히 끝부분에서만 삽입 삭제가 일어난다면 ArrayList가 더 좋을 수 있고
  여러 곳에서 삽입 삭제가 일어난다면 LinkedList가 더 좋을 수도 있다.
  다음은 LinkedList와 ArrayList의 삽입/삭제 시간 차이를 보여주는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          List<Long> arrayList = new ArrayList<>();
          List<Long> linkedList = new LinkedList<>();
          
          long afterTime = 0;
          long beforeTime = 0;
          
          afterTime = System.nanoTime();
          for(long i = 0 ; i < 10000000 ; i++) {
          	arrayList.add(i);
          }
          beforeTime = System.nanoTime();
          System.out.println("ArrayList Time : " + (beforeTime - afterTime)
                             + "(나노세컨드)");
          
          afterTime = System.nanoTime();
          for(long i = 0 ; i < 10000000 ; i++) {
          	linkedList.add(i);
          }
          beforeTime = System.nanoTime();
          System.out.println("LinkedList Time : " + (beforeTime - afterTime)
                             + "(나노세컨드)");
      }
  }
  
  // ArrayList Time : 4433654500(나노세컨드)
  // LinkedList Time : 2886746600(나노세컨드)
  ```

- 이렇게 ArrayList와 LinkedList는 삽입에서 성능차이가 난다는 것을 확인할 수 있었다.





### 2. Set

- Set은 콜렉션 프레임워크 중에 하나로서 List와는 조금 다른 특징을 가지고 있다.
  List는 요소의 순서가 존재하며 중복된 요소를 가질 수 있지만
  Set은 요소의 순서가 없고 중복된 요소를 가질 수 없는 특징을 가지고 있다.
  따라서 index가 없다는 특징을 가지고 있는데
  이 덕분에 더 간단해 보이는 효과를 볼 수 있다.

- 다음은 Set 인터페이스의 구현체인 HashSet, TreeSet의 공통적인 메소드들인데
  index가 있는 List에 비해 간단해진 메소드들을 볼 수 있다.

  ```java
  boolean add(E e)					e가 있으면 false 없으면 저장하고 true를 리턴
  boolean contains(Object o)			o가 있으면 true, 없으면 false를 리턴
  boolean isEmpty()					Set이 비어있으면 true, 아니면 false를 리턴
  Iterator<E> iterator()				Set의 요소를 모두 담고 있는 Iterator 객체 리턴
  int size()							요소의 갯수를 리턴
  void clear()						Set의 모든 요소 삭제
  boolean remove(Object o)			o가 있으면 삭제하고 true, 없으면 false를 리턴
  ```

- Set 콜렉션을 사용할때 값을 얻어내기 위해서는 iterator() 메소드를 사용하여
  Iterator 객체를 이용하거나 forEach(향상된 for문)을 이용해야 한다.
  forEach에 대한 내용은 쉬우니 넘어가고 Iterator 객체를 처음 볼 수도 있을 것 같다.
  사실 forEach가 나오기 전에는 forEach가 사용되는 구간에 Iterator 객체를 사용했었다.

- 마침 얘기가 나온 김에 Iterator 객체에 대한 얘기를 하자면
  Iterator 객체의 주요 메소드는 다음과 같이 세 가지이다.

  ```java
  boolean hasNext()		현재 포인터에 가져올 객체가 있으면 true, 아니면 false를 리턴
  E next()				현재 포인터의 객체를 리턴
  void remove()			현재 포인터의 객체를 삭제
  ```

- Iterator 객체를 사용하는 방법과 향상된 for문을 사용하는 방법의 비교이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Set<String> set = __;
          set.add("aa");
          set.add("bb");
          set.add("cc");
          
          Iterator<String> iterator = set.iterator();
          while(iterator.hasNext()) {
            	System.out.println(iterator.next());
          }
          
          for(String s : iterator) {
              System.out.println(s);
          }
      }
  }
  
  // aa
  // cc
  // bb
  // bb
  // aa
  // cc
  ```

- 나오는데에는 순서가 없다는 것을 확인할 수 있다.



#### 2-1. HashSet

- HashSet은 해쉬코드를 이용해서 '이미 존재하는 객체'를 판별한다.
  객체를 저장할때 이미 저장되어 있는 모든 요소의 hashCode() 메소드를 실행하여
  같은 hashCode를 가진 요소가 있는지 확인하고
  만약 없다면 저장, 있다면 equals()까지 한 뒤 없다면 저장, 있다면 저장하지 않는다.
  이러한 특징을 가진 Set인데 한 번 예제를 보며 살펴보자.

  ```java
  public class MainClass {
      public static void main(String] args) {
          Set<Integer> hashSet = new HashSet<>();
          hashSet.add(10);
          hashSet.add(20);
          hashSet.add(20);
          hashSet.add(30);
          
        	for(int i : hashSet)
              System.out.println(i);
      }
  }
  
  // 20
  // 30
  // 10
  ```

- 빼낼 때에는 순서가 없다는 점과 중복되는 요소를 저장하지 않는 다는 점을 착각하지 말아야 한다.

- HashSet은 내부적으로 hashCode() 메소드와 equals() 메소드를 호출하므로
  HashSet에 객체를 저장할때 hashCode() 와 equals() 메소드를 오버라이딩하여 구현해주어야 한다.
  그러면 원하는 방향대로 같은 객체인지 구별하도록 할 수 있다.
  hashCode()와 equals() 메소드를 구현하여 HashSet을 사용하는 예제는 다음과 같다.

  ```java
  class Student {
      private String name;
      private Integer number;
      
      public Student(String name, Integer number) {
          this.name = name;
          this.number = number;
      }
      
      public String getName() {
          return name;
      }
      
      public void setName(String name) {
          this.name = name;
      }
      
      public Integer getNumber() {
          return number;
      }
      
      public void setNumber(Integer number) {
          this.number = number;
      }
      
      @Override
      public int hashCode() {
          return name.hashCode() + number;
      }
      
      @Override
      public boolean equals(Object obj) {
          if(obj instanceof Student) {
              Student student = (Student) obj;
              return ((student.name).equals(this.name))
                  && (student.number == this.number);
          } else {
              return false;
          }
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Set<Student> hashSet = new HashSet<>();
          hashSet.add(new Student("Lee", 18));
          hashSet.add(new Student("Lee", 18));
          hashSet.add(new Student("Lee", 20));
          
          for(Student s : hashSet) {
              System.out.println("name : " + s.getName());
              System.out.println("number : " + s.getNumber());
          }
      }
  }
  
  // Lee 18
  // Lee 20
  ```

- 이렇게 다른 객체라도 같은 내용을 가지고 있으면 같은 객체로 인식하도록
  적절하게 hashCode() 메소드와 equals() 메소드를 오버라이딩하면 같게 인식할 수 있다.



##### 2-1-1. LinkedHashSet

- LinkedHashSet은 HashSet을 상속받은 클래스이다.

- LinkedHashSet은 기존의 순서가 존재하지 않는 Set의 특성에서 벗어나,
  중복되는 요소를 취급하지 않지만 순서는 존재하는 Set을 만들 수 있다.



#### 2-2. TreeSet

- HashSet은 해싱을 통해 객체를 비교하고 객체를 저장한다는 특징이 있었다.
  TreeSet은 내부적으로 레드-블랙 트리를 사용한다는 특징이 있다.
  그래서 그 안의 객체들을 비교하기에 수월하는 점을 가지고 있다.
  그리고 Set의 특징상 순서가 없는데
  레드-블랙 트리를 사용하기 때문에 정렬은 되어 있다는 것을 알 수 있다.
  따라서 TreeSet은 주요 메소드가 세 가지 존재한다.
  주요 메소드는 다음과 같다.

  ```java
  SortedSet<E> haedSet(E toElement);
  NavigableSet<E> headSet(E toElement, boolean inclusive);
  
  SortedSet<E> subSet(E fromElement, E toElement);
  NavigableSet<E> subSet(E fromElement, boolean fromInclusive,
                        E toElement, boolean toInclusive);
  
  SortedSet<E> tailSet(E fromElement);
  NavigableSet<E> tailSet(E fromElement, boolean inclusive);
  ```

- headSet() 메소드는 toElement보다 작은 값들로만 이루어진 Set을 리턴한다.
  두 번째 headSet() 메소드는 inclusive가 true일 경우에 toElement보다 작은 값과 동일한 값으로만 이루어진
  Set을 리턴한다.

- subSet() 메소드는 fromElement과 같거나 크고 toElement보다는 작은 값들로만 이루어진 Set을 리턴한다.
  두 번째 subSet() 메소드는 inclusive에 따른 포함, 미포함을 결정한다.

- tailSet() 메소드는 fromElement과 같거나 큰 값들로만 이루어진 Set을 리턴한다.
  두 번쨰 tailSet() 메소드는 inclusive가 false일 경우에 fromElement보다 큰 값으로만
이루어진 Set을 리턴한다.
  
- headSet(), subSet(), tailSet() 메소드의 리턴값을 보면 그냥 Set이 아닌 SortSet과 NavigableSet으로
  이루어져 있다는 것을 알 수 있다.
  SortSet과 NavigableSet은 TreeSet이 구현한 인터페이스이기 때문에 TreeSet과 같게 사용하면 된다.
  솔직히 향상된 for문을 사용하게 되면 쉽게 사용할 수 있다는 것을 알고 있기에 딱히 알 필욘 없다.

- 다음은 TreeSet의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          		TreeSet<Integer> treeSet = new TreeSet<>();
  		treeSet.add(1);
  		treeSet.add(3);
  		treeSet.add(5);
  		treeSet.add(7);
  		treeSet.add(9);
  		
  		SortedSet<Integer> headSet1 = treeSet.headSet(5);
  		NavigableSet<Integer> headSet2 = treeSet.headSet(5, true);
  		
  		SortedSet<Integer> subSet1 = treeSet.subSet(3, 7);
  		NavigableSet<Integer> subSet2 = treeSet.subSet(3, false, 7, true);
		
  		SortedSet<Integer> tailSet1 = treeSet.tailSet(5);
  		NavigableSet<Integer> tailSet2 = treeSet.tailSet(5, false);
  		
  		System.out.print("headSet(5) : ");
  		for(Integer i : headSet1)
  			System.out.print(i + " ");
  		System.out.println();
  		
  		System.out.print("headSet(5, true) : ");
  		for(Integer i : headSet2)
  			System.out.print(i + " ");
  		System.out.println();
  		
  		System.out.print("subSet(3, 7) : ");
  		for(Integer i : subSet1)
  			System.out.print(i + " ");
  		System.out.println();
  		
  		System.out.print("subSet(3, false, 7, true) : ");
  		for(Integer i : subSet2)
  			System.out.print(i + " ");
  		System.out.println();
  		
  		System.out.print("tailSet(5) : ");
  		for(Integer i : tailSet1)
  			System.out.print(i + " ");
  		System.out.println();
  
  		System.out.print("tailSet(5, false) : ");
  		for(Integer i : tailSet2)
  			System.out.print(i + " ");
  		System.out.println();
      }
  }
  
  // headSet(5) : 1 3 
  // headSet(5, true) : 1 3 5 
  // subSet(3, 7) : 3 5 
  // subSet(3, false, 7, true) : 5 7 
  // tailSet(5) : 5 7 9 
  // tailSet(5, false) : 7 9 
  ```
  
- 이렇게 TreeSet 클래스와 그의 메소드인 headSet(), subSet(), tailSet() 메소드에 대한 예제를 볼 수 있다.
  위에서 TreeSet 객체를 생성할때 호환성을 위한 Set<Integer> treeSet = new TreeSet<>()이 아닌
  TreeSet... new TreeSet 과 같이 생성하였다.
  왜 그런가에 대해서 혹시나 궁금할까봐 적어놓는다.
  Set 인터페이스에는 추상메소드로 headSet() 을 지원하지 않기 때문이다.





### 3. Map

- Map은 이전의 List와 Set과는 다르게 Collection 인터페이스를 구현하는 인터페이스가 아니다.
  Key와 Value를 이용하여 객체를 저장하는 방식의 새로운 콜렉션 프레임워크이다.
  여기서 Key는 중복이 될 수 없지만 Value는 중복이 될 수 있다.
  그리고 Map 인터페이스 안에는 Entry라는 내부 정적 인터페이스가 존재하는데
  Map에서 객체의 정보를 저장하는 것은 Map의 Entry 인터페이스가 담당한다.
  다음은 Map의 주요 메소드들이다.

  ```java
  V put(K key, V value);
  boolean containsKey(Object key);
  boolean containsValue(Object value);
  Set<Map.Entry<K,V>> entrySet();
  V get(Object key);
  boolean isEmpty();
  Set<K> keySet();
  int size();
  Collection<V> values();
  void clear();
  V remove(Object key);
  ```

- 이제부터 이 메소드들에 대해서 소개해볼 예정이다.

- 첫 번째로 put() 메소드이다.
  put() 메소드의 매개변수로는 제네릭 타입의 Key인 key와 Value인 value가 있다.
  여기서 key와 value의 쌍으로 데이터를 저장하게 되는데
  저장할 뿐만 아니라 비교하면서 같은 Key를 가지고 있는 데이터가 있다면
  그 데이터 대신에 현재 매개변수인 새 데이터를 넣고
  기존의 데이터의 Value를 리턴한다.

- 두 번째로 containsKey() 메소드이다.
  매개변수로 Object 타입의 key를 받는데
  이 key가 Key인 데이터가 존재하는지 확인하고 존재하면, true를 존재하지 않으면 false를 리턴한다.

- 세 번째로 containsValue() 메소드이다.
  containsKey() 메소드와 마찬가지로 매개변수로 Object 타입의 value를 받는데
  이 value가 Value인 데이터가 존재하는지 확인하고
  존재하면 true를, 존재하지 않으면 false를 리턴한다.

- 네 번째로 entrySet() 메소드이다.
  entrySet() 메소드는 리턴값이 조금 난해해보일 수도 있는데
  이해해보면 은근히 간단하다는 것을 알 수 있다.
  Map은 원래 K와 V의 제네릭 타입을 가지는데
  이러한 Map의 내부 인터페이스인 Entry를 하나의 요소로하는 Set을 리턴하는 것이다.
  근데 그 리턴하는 Set의 내용이 Map에 담긴 모든 내용이라는 것이다.
- 다섯 번째로 get() 메소드이다.
  get() 메소드는 이름 그대로 매개변수로 넘겨주는 Key에 맞는 Value를 리턴하는 메소드이다.
- 여섯 번째로 isEmpty() 메소드이다.
  isEmpty() 메소드는 다른 콜렉션 프레임워크에도 있었던 것처럼
  현재 Map이 비어있으면 true, 비어있지 않으면 false를 리턴한다.
- 일곱 번째로 keySet() 메소드이다.
  keySet() 메소드는 Map의 Key들을 Set에 저장하여 리턴하는 메소드이다.
- 여덟 번째로 size() 메소드이다.
  이 또한 isEmpty() 메소드와 마찬가지로 다른 콜렉션 프레임워크에도 공통적으로 있는 메소드이며
  Map에 존재하는 데이터의 갯수를 리턴한다.
- 아홉 번째로 values() 메소드이다.
  keySet() 과는 반대되게 Value들을 Collection 인터페이스에 담아서 리턴한다.
- 열 번째로 clear() 메소드이다.
  이 또한 isEmpty()와 size() 메소드와 마찬가지로 다른 콜렉션 프레임워크에도 존재하는 메소드이며
  Map의 모든 내용을 삭제하는 메소드이다.
- 열한 번째로 remove() 메소드이다.
  매개변수로 Object 타입의 key를 받는데 이는 Key로써
  같은 Key를 가진 데이터를 삭제하고 그의 Value를 리턴한다.



#### 3-1. HashMap

- HashMap은 대표적인 Map의 구현 클래스이다.
  HashSet에서 살펴봤듯이 Hash는 해싱을 통해 객체의 중복을 검사한다.
  따라서 중복이 되면 안 되는 것은 Key이므로 Key에 대한 중복 검사가 이루어지는데
  이를 확인하는 방법은 전에 말했듯이 내부의 hashCode() 메소드를 사용하거 비교하여
  다르면 저장, 다르지 않으면 equals() 메소드를 이용하여 비교하여
  다르면 저장, 다르지 않으면 같은 것으로 간주하여 기존의 것을 삭제하고 새로운 것을 저장한다.
  다음은 HashMap을 이용한 예제이다.

  ```java
  class School {
      private String name;
      private String area;
      
      public School(String name, String area) {
          this.name = name;
          this.area = area;
      }
      
      public String getName() {
          return name;
      }
      
      public void setName(String name) {
          this.name = name;
      }
      
      public String getArea() {
          return area;
      }
      
      public void setArea(String area) {
          this.area = area;
      }
      
      @Override
      public int hashCode() {
          return name.hashCode() + area.hashCode();
      }
      
      @Override
      public boolean equals(Object obj) {
          if(obj instanceof School) {
              School school = (School) obj;
             	return (school.name).equals(this.name)
                  && (school.area).equals(this.area);
          } else {
              return false;
          }
      }
  }
  
  class Student {
      private String name;
      private Integer number;
      
      public Student(String name, Integer number) {
          this.name = name;
          this.number = number;
      }
      
      public String getName() {
          return name;
      }
      
      public void setName(String name) {
          this.name = name;
      }
      
      public Integer getNumber() {
          return number;
      }
      
      public void setNumber(Integer number) {
          this.number = number;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          School dsm = new School("DSM", "Daejeon");
          School ghs = new School("GHS", "Gimhae");
          
          Map<School,Student> hashMap = new HashMap<>();
          hashMap.put(dsm, new Student("Lee", 1));
          hashMap.put(dsm, new Student("Kim", 2));
          hashMap.put(dsm, new Student("Park", 3));
          hashMap.put(ghs, new Student("Son", 1));
          hashMap.put(ghs, new Student("Jung", 2));
          
          Set<Map.Entry<School,Student>> entrySet = hashMap.entrySet();
         	for(Map.Entry e : entrySet) {
              System.out.println("-----------------------------");
              System.out.println("학교 : " + e.getKey().getName());
              System.out.println("지역 : " + e.getKey().getArea());
              System.out.println("이름 : " + e.getValue().getName());
              System.out.println("번호 : " + e.getValue().getNumber());
              System.out.println("-----------------------------");
          }
      }
  }
  
  // -----------------------------
  // 학교 : DSM
  // 지역 : Daejeon
  // 이름 : Lee
  // 번호 : 1
  // -----------------------------
  // -----------------------------
  // 학교 : DSM
  // 지역 : Daejeon
  // 이름 : Kim
  // 번호 : 2
  // -----------------------------
  // -----------------------------
  // 학교 : DSM
  // 지역 : Daejeon
  // 이름 : Park
  // 번호 : 3
  // -----------------------------
  // -----------------------------
  // 학교 : GHS
  // 지역 : Gimhae
  // 이름 : Son
  // 번호 : 1
  // -----------------------------
  // -----------------------------
  // 학교 : GHS
  // 지역 : Gimhae
  // 이름 : Jung
  // 번호 : 2
  // -----------------------------
  ```



#### 3-2. Hashtable

- Hashtable은 Map의 구현 클래스이다.
  내부구조와 사용하는 방법 등 모두 HashMap과 같다.
  하지만 모든 메소드가 synchronized되어 있다는 점이 다른 점이다.
  마치 ArrayList와 Vector와의 관계와 같다고 보면 된다.



#### 3-2-1. Properties

- Properties는 Hashtable 클래스를 상속받은 클래스이다.
  그래서 Hashtable의 특성인 메소드의 동기화를 포함한 모든 기능을 가지고 있지만
  Key와 Value가 모두 String이라는 점이 있어, 제네릭 타입을 사용하지 않는다.
  이 Properties는 .properties 파일을 읽거나 데이터베이스의 내용을 꺼내오는데와 같이
  여러 일에 많이 쓰인다.



#### 3-3. TreeMap

- TreeMap은 TreeSet과 마찬가지로 이진트리를 기반으로 해서 만들어진 Map이다.
  대부분의 기능은 위의 Map들과 비슷하니 다른 점을 확인해보자.
  다른 점은 이진트리를 기반으로 하기 때문에 정렬이 되어 있다는 것이다.
  다음은 이러한 정렬을 이용하여 존재하는 메소드들이다.

  ```java
  Map.Entry<K,V> firstEntry();
  Map.Entry<K,V> lastEntry();
  Map.Entry<K,V> lowerEntry(K key);
  Map.Entry<K,V> higherEntry(K key);
  Map.Entry<K,V> floorEntry(K key);
  Map.Entry<K,V> ceilingEntry(K key);
  Map.Entry<K,V> pollFirstEntry();
  Map.Entry<K,V> pollLastEntry();
  ```

- 첫 번째로 firstEntry() 메소드이다.
  firstEntry() 메소드는 이진트리로 하면 가장 왼쪽에 존재하는 데이터를 리턴하는 것인데
  가장 작은 Key를 가지고 있는 Map.Entry를 리턴한다.

- 두 번째로 lastEntry() 메소드이다.
  lastEntry() 메소드는 이진트리로 가장 오른쪽에 위치하는 Map.Entry를 리턴하는 것인데
  말로 설명하면 가장 큰 Key를 가지고 있는 Map.Entry를 리턴하는 메소드이다.

- 세 번째로 lowerEntry() 메소드이다.
  lowerEntry() 메소드는 주어진 Key값의 바로 왼쪽 아래에 있는 노드 즉, Map.Entry를
  리턴하는 메소드이다.

- 네 번째로 higherEntry() 메소드이다.
  higherEntry() 메소드는 주어진 Key값보다 하나 높은 Key값의
  Map.Entry를 리턴하는 메소드이다.

- 다섯 번째로 floorEntry() 메소드이다.
  floorEntry() 메소드는 같은 우선순위를 가지는 Map.Entry가 있다면 그를 리턴하고
  아니면 lowerEntry()와 같게 실행한다.

- 여섯 번째로 ceilingEntry() 메소드이다.
  ceilingEntry() 메소드는 같은 우선순위를 가지는 Map.Entry가 있다면 그를 리턴하고
  아니면 higherEntry()와 같게 실행한다.

- 일곱 번째로 pollFirstEntry() 메소드이다.
  pollFirstEntry() 메소드는 firstEntry() 메소드와 같게 행동하나
  꺼낸 후 그 노드를 삭제한다.

- 여덟 번째로 pollLastEntry() 메소드이다.
  pollLastEntry() 메소드는 lastEntry() 메소드와 같게 행동하나
  꺼낸 후 그 노드를 삭제한다.