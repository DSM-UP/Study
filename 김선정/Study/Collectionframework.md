## Collection framework

자바에서 컬렉션 프레임워크란 다수의 데이터를 쉽고 효과적으로 처리 할 수 있는 표준화된 방법을 제공하는 

클래스의 집합을 의미한다. 즉, 데이터를 저장하는 자료 구조와 데이터를 처리하는 알고리즘을 구조화하여 

클래스로 구현 해 놓은 것이다.

##### 컬렉션 프레임워크 주요 인터페이스

1. List 인터페이스
2. Set 인터페이스
3. Map 인터페이스

이 중에서 List Set 인터페이스는 모두 Collection 인터페이스를 상속받지만, 구조상의 차이로 인해 

Map 인터페이스는 별도로 정의 된다. 따라서 List 인터페이스와 Set 인터페이스의 공통된 부분을 Collection

인터페이스에서 정의하고 있다.

| 인터페이스 | 설명                                                         | 구현 클래스                                    |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------- |
| List<E>    | 순서가 있는 데이터의 집합으로, 데이터의 중복을 허용한다.     | Vector, ArrayList, LinkedList, Stack, Queue 등 |
| Set<E>     | 순서가 없는 데이터의 집합으로, 데이터의 중복을 허용하지 않는다. | HashSet, TreeSet 등                            |
| Map<K,V>   | 키(key)와 값(Value)의 한 쌍으로 이루어진 데이터의 집합으로 순서가 없다. 키는 중복을 허용하지 않지만 값은 중복될 수 있다. | Vector, ArrayList, LinkedList, Stack, Queue 등 |

#### List 컬렉션

컬렉션 프레임워크를 상속 받고 있는 List컬렉션은 List 컬렉션은 객체를 일렬로 늘어놓은 구조를 가지고 있다.

List켤렉션은 객체를 인덱스로 관리하기 때문에 객체를 저장하면 자동 인덱스가 부여되고 인덱스로 객체를 

검색, 삭제할 수 있는 기능을 제공한다.(인덱스에는 데이터가 저장되어 있는 참조 값을 가지고 있다.)

![img](https://blog.kakaocdn.net/dn/bxhCVv/btqEg09LXoG/m26SctApZoPjJtRaAEmlSk/img.png)

List컬렉션은 객체 자체를 저장하는 것이 아니라 위와 같이 객체의 번지를 참조한다. 동일한 객체를 중복 저장할 수

있는데 이 경우 동일한 번지가 참조된다. null도 저장이 가능한데 이 경우 해당 인덱스는 객체를 참조 하지 않는다.

List컬렉션을 구현하는 대표적인 클래스들을 ArrayList, LinkedList, Vector가 있으며 이 3가지 클래스는 

List 인터페이스를 같이 상속하고 있으므로 공통적으로 사용할 수 있는 메서드들이 많다. 

### List 클래스 주요 메서드

| 메서드                         | 설명                                                  |
| ------------------------------ | ----------------------------------------------------- |
| boolean add(E e)               | 주어진 객체를 맨 끝에 추가합니다.                     |
| void add(int index, E element) | 주어진 인덱스에 객체를 추가합니다.                    |
| set(int index, E element)      | 주어진 인덱스에 저장된 객체를 주어진 객체로 바꿉니다. |
| boolean contains(Object o)     | 주어진 객체가 있는지에 대한 여부를 검색합니다.        |
| E get(int index)               | 주어진 인덱스에 저장된 객체를 리턴합니다.             |
| isEmpty()                      | 컬렉션이 비어있는지 여부를 확인합니다.                |
| E remove(int index)            | 주어진 인덱스에 저장된 객체를 삭제합니다.             |
| void clear()                   | 주어진 인덱스에 저장된 객체를 삭제합니다.             |

#### Set 컬렉션

List컬렉션은 선형구조를 가지고 있으므로 추가한 순서대로 저장이 되어 순서를 유지하였지만 Set컬렉션의 경우에

저장 순서가 유지 되지 않는다. 그렇기에 Set컬렉션은 순서 자체가 없으므로 인덱스로 객체를 검색해서 가져오는

get(index)메서드도 존재하지 않는다. 대신 전체 객체를 대상으로 한 번 씩 반복해서 가져오는 반복자를 제공한다.

반복자는 iterator()메서드를 호출하면 얻을 수 있다.

![img](https://blog.kakaocdn.net/dn/cLMuJG/btqEgQzQaFv/18xV7JmoktO3gKPnYitGZ0/img.png)



또한 Set은 객체를 중복해서 저장할 수 없고 하나의 중복 저장이 안되기에 null값도 하나만 저장할 수 있다.

Set컬렉션을 구현하는 대표적인 클래스들은 HashSet과 TreeSet이 있다. 이 2가지 클래스는 Set인터페이스를 

같이 상속하고 있으므로 공통적으로 사용할 수 있는 메서드들이 존재한다

### Set 클래스 주요 메서드

| 메서드                     | 설명                                                         |
| -------------------------- | ------------------------------------------------------------ |
| boolean add(E e)           | 주어진 객체를 저장 후 성공적이면 true를 중복 객체면 false를 리턴합니다. |
| boolean contains(Object o) | 주어진 객체가 저장되어있는지 여부를 리턴합니다.              |
| Iterator<E> iterator()     | 저장된 객체를 한번씩 가져오는 반복자를 리턴합니다.           |
| isEmpty()                  | 컬렉션이 비어있는지 조사합니다.                              |
| int Size()                 | 저장되어 있는 전체 객체수를 리턴합니다.                      |
| void clear()               | 저장된 모든 객체를 삭제합니다.                               |
| boolean remove(Object o)   | 주어진 객체를 삭제합니다.                                    |

#### Map컬렉션

Map 컬렉션은 키(key)와 값(value)으로 구성된 객체를 저장하는 구조를 가지고 있다. 키는 중복으로 저장할 수 

없고 값은 중복으로 저장할 수 있으며 중복된 key값이 들어온다면 기존의 값은 없어지고 새로운 값으로 대치.

![img](https://blog.kakaocdn.net/dn/cDaHeK/btqEjQx07Ng/PQSBhv0USEnMzQnzuMFw61/img.png)

Map은 key와value라는 것을 한 쌍으로 갖는 자료형이다. 자바의 Map은 이러한 대응관계를 쉽게 표현할 수 있게

해주는 자료형이다. Map은 리스트나 배열처럼 순차적으로 해당 요소 값을 구하지 않고 key를 통해 value를 

얻는다. 맵의 가장 큰 특징이라면 key로 value를 얻어낸다는 점이다. 따라서 Map컬렉션은 키로 데이터를 

관리한다. Map컬렉션을 구현하는 대표적인 클래스들은 HashMap, Hashtable, LinkedHashMap, TreeMap

등이 있다. 이 클래스들은 Map인터페이스를 같이 상속하고 있으므로 공통적으로 사용할 수 있는 메서드들이 

존재한다. 

### Map 클래스 주요 메서드

| 메서드                              | 설명                                                       |
| ----------------------------------- | ---------------------------------------------------------- |
| V put(K Key, V value)               | 주어진 키와 값을 추가하여 저장되면 값을 리턴합니다.        |
| boolean containsKey(Object Key)     | 주어진 키가 있는지 확인합니다.                             |
| boolean containsValue(Object value) | 주어진 값이 있는지 확인합니다.                             |
| Set<Map.Entry<K,V>> entrySet()      | 모든 Map.Entry 객체를 Set에 담아 리턴합니다.               |
| Set<K> keySet()                     | 모든 키를 Set객체에 담아서 리턴합니다.                     |
| V get(Object key)                   | 주어진 키에 있는 값을 리턴합니다.                          |
| boolean isEmpty()                   | 컬렉션이 비어있는지 조사합니다.                            |
| int Size()                          | 저장되어 있는 전체 객체의 수를 리턴합니다.                 |
| Collection<V> values()              | 저장된 모든 값을 Collection에 담아서 리턴합니다.           |
| void clear()                        | 저장된 모든 Map.Entry를 삭제합니다.                        |
| V remove(Object Key)                | 주어진 키와 일치하는 Map.Entry를 삭제하고 값을 리턴합니다. |

