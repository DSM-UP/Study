## Methods Of Enum Type

- 솔직히 저번에 enum을 봤을때 지금까지 '자바'로 코딩하면서 한 번도 쓰지 않은 것이라서 새로웠다.
- 물론 C언어에서의 enum이랑 별 다를 것이 없어서 감흥은 없었지만, 존재한다는 것을 몰랐다.
- 일단 이번에는 이 enum을 이용해서 사용할 수 있는 메소드들을 알아볼 것이다.
- enum의 메소드들은 총 5가지가 있다.



### 1. name()

- name() 함수는 말 그대로 이름을 리턴하는 함수이다.

- 설명을 쉽게 하기 위해서 아래의 열거 타입의 enum을 정의하였다.

  ```java
  public enum Fruit {
      APPLE,
      BANANA,
      ORANGE,
      MELON,
      GRAPE
  }
  ```

- 만약 Fruit enum을 이용해서 .name() 함수를 사용하게 되면 그 선언한 요소의 이름이 문자열 형태로 리턴되게 된다. 따라서 리턴형은 String이 된다.

  ```java
  // example
  
  Fruit fruit = Fruit.BANANA;
  System.out.println(fruit.name());
  
  // BANANA
  ```

  



### 2. ordinal()

- ordinal() 함수는 사용한 enum의 요소가 몇 번째 요소인지 알려준다.

- 배열과 같은 인덱스로 하여 0, 1, 2, 3, 4 이고 int형인 숫자로 리턴된다.

  ```java
  // example
  
  Fruit fruit = Fruit.APPLE;
  System.out.println(fruit.ordinal());
  
  // 0
  ```

  

### 3. compareTo()

- compareTo() 함수는 C언어의  strcmp() 함수와 같은 역할을 한다.

- compareTo() 함수는 이름에서부터 알 수 있듯이 두 enum타입의 순서의 차이를 리턴한다.

  ```java
  // example
  
  Fruit fruit1 = Fruit.APPLE;
  Fruit fruit2 = Fruit.BANANA;
  System.out.println(fruit1.compareTo(fruit2));
  
  // -1
  ```

- 위와 같이 사용된 enum 과 매개변수로 사용된 enum의 차이를 리턴하는데
- 사용된 enum이 매개변수로 사용된 enum 보다 앞 번호라면 음수의 값을, 아니라면 양수의 값을, 같다면 0을 리턴한다.



### 4. valueOf()

- valueOf() 함수는 매개변수로 넣은 String과 같은 이름의 enum 요소를 가리키는 포인터를 리턴한다.

- 이것은 아래의 코드를 보는 것이 쉽다.

  ```java
  // example
  
  Fruit fruit = Fruit.valueOf("BANANA");
  System.out.println(fruit.name());
  
  // BANANA
  ```

  

### 5. values()

- values() 함수는 본 enum에 들어있는 모든 요소를 enum 배열로 리턴하는 함수이다.

  ```java
  // example
  
  Fruit[] fruits = Fruit.values();
  for(Fruit f : fruits)
      System.out.println(f.name());
  
  /*
  	APPLE
      BANANA
      ORANGE
      MELON
      GRAPE
  */
  ```