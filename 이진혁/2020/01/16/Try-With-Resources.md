## Try-With-Resources

- try-with-resources는 기존의 try-catch-finally 문에서
  stream 객체를 사용하거나 DB 객체를 사용할때 모든 자원에 .close()를 해주어야 하는
  복잡한 문제를 해결하기 위해서 만들어진 문법이다.

- 기존에 Stream 객체를 사용하고 나서 close()를 하는 과정에서 복잡한 문법이 존재했는데
  close()를 자동으로 실행해줌으로써 간단하게 객체 처리를 할 수 있게 도와주게 되었다.

- 기존의 Stream 객체의 사용법을 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ObjectOutputStream oos = null;
          
          try {
              oos = new ObjectOutputStream(new FileOutputStream("lee.txt"));
          } catch(Exception e) {
              e.printStackTrace();
          } finally {
              try {
                  if(oos != null)
                      oos.close();
              } catch(Exception ee) {
                  ee.printStackTrace();
              }
          }
      }
  }
  ```

- 이와 같이 ObjectOutputStream을 사용하기 위해서 try-catch 문이 한 번 사용되고
  close()를 하기 위해서 사용된 finally 구문에서 close()의 IOException을 처리하기 위해서
  try-catch 문이 한 번 더 사용되고 그 안에서 null인지 아닌지를 검사하기 위해서
  if 분기문이 한 가지 더 생기게 된다.
- 이렇게 복잡한 시스템을 가지고 있고 개발자도 이것을 알아보기 쉽지 않으며
  오히려 실수를 유발할 가능성이 높다고 판단하여 try-with-resources 문법을 만들게 되었다.

- try-with-resources 문법은 자바 7부터 제공된 문법이다.

- try-with-resources 문법은 try에도 ()를 사용하여 간단하게 처리할 수 있게 되었고
  그에 따라서 안에서 사용된 Stream 객체나 DB 객체들을 자동으로 close()할 수 있게 되었다.

- try() 에 들어갈 수 있는 객체들은 모두 AutoCloseable 인터페이스를 구현하는 객체여야 한다.
  또한 ObjetOutputStream과 같이 매개변수를 이용해서 내부에 close()를 해야 하는 경우에는
  try-with-resources가 처리하지 않고 ObjectOutputStream의 내부에서 알아서 처리한다.

- 그것을 적용해 코드를 작성하면 아래와 같다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          try(ObjectOutputStream oos = new ObjectOutputStream(
          	new FileOutputStream("lee.txt"))) {
              // 작성 코드
          } catch(Exception e) {
              e.printStackTrace();
          }
      }
  }
  ```

- 이러면 try-catch 문을 빠져나오는 순간 자원을 자동으로 close() 해준다.