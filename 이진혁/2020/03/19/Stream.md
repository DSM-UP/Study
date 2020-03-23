## Stream

- Stream은 반복자로써 Iterator과 같은 역할을 한다.
  하지만 Stream은 Iterator보다 좀 더 좋은 성능을 가지고 있다.
  Stream을 알아보기 전에 Stream과 Iterator의 사용법을 알아보면서
  차이를 알아보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          List<Integer> list = new ArrayList<>();
          list.add(10);
          list.add(20);
          list.add(30);
          
          Iterator<Integer> iterator = list.iterator();
          while(iterator.hasNext()) {
              System.out.println(iterator.next());
          }
          
          Stream<Integer> stream = list.stream();
          stream.forEach(s -> System.out.println(s));
      }
  }
  
  // 10
  // 20
  // 30
  // 10
  // 20
  // 30
  ```

- 이렇게 간단하게 살펴만 봐도 Iterator를 사용하는 것보다 Stream을 이용하는 것이 더 짧다는 것을 알 수 있다.
  이제부터 Stream을 사용해야 하는 이유( Stream이 좋은 이유 )에 대해서 알아보자.



#### 1. 람다식을 사용한다.

- 위의 예제를 살펴보면 알겠지만 Stream 객체의 메소드인 forEach() 메소드를 사용하게 되면
  매개변수로 Consumer 인터페이스를 받는다.
  따라서 내가 원하는대로 코드를 간결하게 짤 수 있다는 장점이 있다.
  그리고 알고 있듯이 람다식을 사용함으로써 코드가 간결해지는 효과를 또 볼 수 있다.



#### 2. 내부 반복자를 사용한다.

- 내부 반복자라는 말이 어색할 수도 있는데 반복자라는 것이 반복하는 것이므로
  for문이나 while문도 반복자에 포함된다.
  하지만 내부 반복자라는 것은 반복함에 있어서 그 반복을 내부에 담아두느냐
  외부에 담아두느냐에 따라서 내부 반복자와 외부 반복자가 되는 것이다.
- 우리는 Stream을 사용할때 반복하는 부분이 외부에 노출되지 않고 forEach() 메소드만
  호출하게 되면 내부에서 자동으로 반복하게 된다.
  따라서 Stream은 내부 반복자를 사용하는 것이다.
  하지만 Iterator는 Iterator를 이용하여 iterator 객체를 사용하면서
  while문이나 for문을 이용해서 객체를 반복하면서 뽑아내야 한다.
  따라서 Iterator는 외부 반복자를 사용하는 것이다.



#### 3. 병렬 처리를 지원한다.

- 병렬 처리란 한 가지 작업이 있을때 그 작업을 서브 작업으로 나누고 또 나눠서
  각각 해결한 뒤 하나로 다시 합쳐서 결과물을 얻어내는 처리 방식이다.

- 다음은 병렬처리와 순차처리의 차이점을 보여주는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          List<Integer> list = new ArrayList<>();
          list.add(10);
          list.add(20);
          list.add(30);
          
          Stream<Integer> stream = list.stream();
          stream.forEach(MainClass :: print);
          System.out.println();
          
          Stream<Integer> stream2 = list.parallelStream();
          stream2.forEach(MainClass :: print);
      }
      public static void print(Integer integer) {
          System.out.println(integer + " : " + Thread.currentThread().getName());
      }
  }
  
  // 10 : main
  // 20 : main
  // 30 : main
  // 40 : main
  // 50 : main
  
  // 30 : main
  // 50 : main
  // 40 : ForkJoinPool.commonPool-worker-1
  // 10 : main
  // 20 : ForkJoinPool.commonPool-worker-2
  ```



#### 4. 중간처리와 최종처리의 존재

- 중간처리와 최종처리가 존재하기 때문에 중간처리와 최종처리를 따로 구별할 수 있다.
  중간처리에는 매핑, 필터링, 정렬 등의 일을 수행하고
  최종처리에서는 반복, 카운팅, 평균, 총합 등의 집계 처리를 주로 수행한다.
  따라서 그 사이에 벌어지는 일들을 알 수 있고
  다른 일들을 끼워놓을 수 있다.