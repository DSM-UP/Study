## Stack-Queue

- Stack과 Queue라는 자료구조는 누구나 한 번은 들어봤을 법한 자료구조 중에 하나이다.
  마지막에 입력된 것이 가장 먼저 출력된다라는 의미인
  LIFO(후입선출)라는 자료구조를 구현한 것이 Stack이고,
  먼저 입력된 것이 가장 먼저 출력된다라는 의미인
  FIFO(선입선출)라는 자료구조를 구현한 것이 Queue이다.

- Stack과 Queue의 사용처나 이용방법 등은 쉽게 접할 수 있으므로 생략하거나 간단하게 줄이겠다.
  다음은 Stack 클래스의 메소드들이다.

  ```java
  E push(E item);			// item을 Stack에 삽입하고 item을 리턴
  E peek();				// Stack의 가장 위에 있는 item을 리턴
  E pop();				// Stack의 가장 위에 있는 item을 리턴하고 Stack에서 삭제
  boolean empty();		// Stack이 비어있으면 true, 아니면 false
  int search(Object o);	// Stack에서 o가 있는지 찾고 있으면 해야할 pop()의 숫자, 아니면 -1
  ```

- 다음은 Stack의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Stack<String> stack = new Stack<String>();
          
          System.out.println("push start");
  		System.out.println(stack.push("aa"));
  		System.out.println(stack.push("bb"));
  		System.out.println(stack.push("cc"));
  		System.out.println(stack.push("dd"));
  		System.out.println(stack.push("ee"));
  		
  		System.out.println("peek start");
  		System.out.println(stack.peek());
  		
  		System.out.println("pop start");
  		System.out.println(stack.pop());
  		System.out.println(stack.pop());
  		System.out.println(stack.pop());
  		
  		System.out.println("empty start");
  		System.out.println(stack.empty());
  		
  		System.out.println("search start");
  		System.out.println(stack.search("aa"));
  		System.out.println(stack.search("bb"));
  		System.out.println(stack.search("cc"));
  		System.out.println(stack.search("dd"));
  		System.out.println(stack.search("ee"));
      }
  }
  
  // push start
  // aa
  // bb
  // cc
  // dd
  // ee
  // peek start
  // ee
  // pop start
  // ee
  // dd
  // cc
  // empty start
  // false
  // search start
  // 2
  // 1
  // -1
  // -1
  // -1
  ```



- Queue는 Stack과는 다르게 클래스가 아니라 인터페이스이다.
  그래서 Queue를 구현하는 다른 클래스가 존재하여야 하는데
  그 클래스로는 우리가 알고 있는 LinkedList가 있다.

- 다음은 Queue 인터페이스의 추상 메소드들이다.

  ```java
  boolean offer(E e);		// e를 Queue에 삽입함
  						// 삽입에 성공하면 true, 실패하면 false를 리턴함
  boolean add(E e);		// e를 Queue에 삽입함
  						// 삽입에 성공하면 true, 실패하거나
  						// 삽입할 공간이 없다면 IllegalStateException을 발생시킴
  
  E peek();				// Queue의 객체 하나를 리턴함
  E element();			// Queue의 객체 하나를 리턴함
  						// Queue가 비어있으면 NoSuchElementException을 발생시킴
  
  E poll();				// Queue의 객체 하나를 리턴함
  						// Queue가 비어있으면 null을 리턴함
  E remove();				// Queue의 객체 하나를 리턴하고 삭제함
  						// Queue가 비어있으면 NoSuchElementException을 발생시킴
  ```

- 다음은 Queue와 Queue를 구현한 LinkedList를 이용한 예제이다.

  ```java
  public class MainClass {   
      public static void main(String[] args) {
          Queue<String> queue = new LinkedList<String>();
          
          System.out.println("add start");
  		System.out.println(queue.add("aa"));
  		System.out.println(queue.add("bb"));
  
  		System.out.println("offer start");
  		System.out.println(queue.offer("cc"));
  		System.out.println(queue.offer("dd"));
  		
  		System.out.println("poll start");
  		System.out.println(queue.poll());
  		System.out.println(queue.poll());
  		System.out.println(queue.poll());
  		System.out.println(queue.poll());
  		System.out.println(queue.poll());
  
  		System.out.println("peek start");
  		System.out.println(queue.peek());
  		System.out.println(queue.peek());
      }
  }
  
  // add start
  // true
  // true
  // offer start
  // true
  // true
  // poll start
  // aa
  // bb
  // cc
  // dd
  // null
  // peek start
  // null
  // null
  ```

  