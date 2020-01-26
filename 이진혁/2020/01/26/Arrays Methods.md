## Arrays Methods

- 저번에 String 객체의 메소드들에 대해서 알아보았다.
  이번에는 Arrays 객체의 메소드들에 대해서 알아볼 예정이다.
- Arrays의 메소드들은 모두 static으로 정의되어 있기 때문에 객체를 생성하지 않고 사용할 수 있다.
- 기존에 우리가 사용하던 메소드들은 객체를 생성해서 사용했던 메소드들이다.
  하지만 그 메소드와 이번 Arrays 메소드들은 이름이 같더라도 다르다는 것을 인지해야 한다.
- 그럼 Arrays 객체의 메소드들에 대한 설명을 해보겠다.



#### 1. binarySearch()

- binarySearch() 함수의 형태는 아래와 같다.

  ```java
  public static int binarySearch(T[], T);
  ```

- 위의 함수 형태는 정말 저렇게 생긴 것은 아니다.

- Arrays에서 지원하는 대부분의 자료형이 저 T에 담긴 것이다.

- 오버로딩된 모든 함수를 적기엔 너무 많으므로 그냥 제네릭 형식으로 표시해 보았다.

- binarySearch() 함수는 말 그대로 이진탐색을 하는 함수이다.

- 첫 번째 매개변수인 배열에서 이진탐색을 통하여 두 번째 매개변수의 값이 들어있는
  배열의 인덱스 번호를 리턴한다.
  이진탐색의 특성상 정렬이 되어 있어야 정확한 탐색을 할 수 있다.

- 아래는 binarySearch() 함수의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] search = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
         	int value = Arrays.binarySearch(search, 8);
          System.out.println(value);
      }
  }
  
  // 7
  ```

- 성공적으로 탐색하고자하는 8의 인덱스 번호인 7을 탐색한 것을 알 수 있다.

- 만약 탐색에 실패하면 음수의 값을 리턴하는데
  이 음수의 패턴에 대해서 연구해보려고 했으나
  ( 가장 큰 수 보다 크면 -(총 요소의 수 + 1) 라든가
  가장 작은 수 보다 작으면 -1,
  크지도 작지도 않은 중간의 수인데 없으면 -(입력한 수 / 2) 라고 생각했는데... )
  실패했다.



#### 2. copyOf()

- copyOf() 함수는 말 그대로 배열을 복사하여 새로운 배열을 만드는 함수이다.

- copyOf() 함수의 형태는 아래와 같다.

  ```java
  public static int[] copyOf(int[], int);
  public static char[] copyOf(char[], int);
  public static String[] copyOf(String[], int);
  ...
  ```

- 대충 어떤식으로 오버로딩되어 있을지는 알 것이라고 생각한다.

- 이 함수가 작동하는 방식은
  첫 번째 매개변수로 들어온 배열의 인덱스 0번부터
  두 번째 매개변수로 들어온 int - 1 인덱스 번호까지 복사하여 리턴하는 방식이다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] arr = { 1, 2, 3, 4, 5 };
          int[] copy1 = Arrays.copyOf(arr, 3);
          int[] copy2 = Arrays.copyOf(arr, 6);
          
          for(int i : arr)
              System.out.print(i);
          System.out.println();
          for(int i : copy1)
              System.out.print(i);
          System.out.println();
          for(int i : copy2)
              System.out.print(i);
      }
  }
  
  // 1 2 3 4 5
  // 1 2 3
  // 1 2 3 4 5 0
  ```

- 이렇게 원본 배열은 변하지 않는 다는 것을 알 수 있고
  복사할때 두 번째 매개변수가 복사할 배열의 크기를 벗어나면
  그 뒤에는 0을 넣어서 초기화 한다는 것을 알 수 있다.



#### 3. copyOfRange()

- copyOfRange() 함수는 copyOf() 함수와 비슷하지만
  시작점과 끝점을 마음대로 설정할 수 있다는 점에서 조금 다르다.

- 물론 시작점이 끝점보다 크면 안 되며, 끝점이 배열이 길이를 넘어가면 0으로 초기화한 요소를 넣어준다.

- 아래는 copyOfRange() 함수의 형태이며 매개변수는 배열, 시작인덱스, 끝인덱스 순서이다.

  ```java
  public static int[] copyOfRange(int[], int, int);
  public static char[] copyOfRange(char[], int, int);
  public static String[] copyOfRange(String[], int, int);
  ...
  ```

- 아래는 copyOfRange() 함수의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] array = { 1, 2, 3, 4, 5 };
          int[] newArray1 = Arrays.copyOfRange(array, 2, 4);
          int[] newArray2 = Arrays.copyOfRange(array, 3, 10);
          
          for(int i : array)
              System.out.print(i + " ");
          System.out.println();
          for(int i : newArray1)
              System.out.print(i + " ");
          System.out.println();
          for(int i : newArray2)
              System.out.print(i + " ");
      }
  }
  
  // 1 2 3 4 5
  // 3 4
  // 4 5 0 0 0 0 0
  ```

- copyOf() 함수와 같이 원본 배열이 변하지 않는다는 것을 알 수 있으며,
  시작 인덱스 부터 끝 인덱스 - 1 까지 복사한다는 것을 알 수 있다.



#### 4. fill()

- fill() 함수는 그외로 많은 사람들이 모르는 함수일 수도 있다.
  생각보다 많이 튀는 함수도 아닐 뿐더러 자바에서 int 배열을 생성하면 0으로 초기화를 해주기 때문이다.
  따라서 자바에서 가비지값을 보기란 생각보다 힘들다.

- 하지만 0 이 아닌 다른 수로 초기화해야할때나
  다른 자료형의 배열을 사용할때는 꼭 필요한 함수가 될 것이다.
  안정성을 위해서 0으로 초기화하는 방법도 있다.

- fill() 함수는 지금껏 말해왔듯이 배열을 초기화하는 함수이다.

- fill() 함수는 아래와 같이 두 가지로 '형태'로 오버로딩되어 있다.

  ```java
  public static void fill(int[], int);
  public static void fill(char[], char);
  public static void fill(String[], String);
  ...
  public static void fill(int[], int, int, int);
  public static void fill(char[], int, int, char);
  public static void fill(String[], int, int, String);
  ...
  ```

- 첫 번째 형태의 fill() 함수는 첫 번째 매개변수인 배열의 모든 인덱스에
  두 번째 매개변수의 값을 저장하는 함수이다.

- 두 번째 형태의 fill() 함수는 첫 번째 매개변수인 배열의
  두 번째 매개변수인 시작인덱스부터 세 번째 매개변수인 끝인덱스 - 1까지
  네 번째 매개변수인 값을 저장하는 함수이다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] array = new int[5];
          
          Arrays.fill(array, 2);
          for(int i : array)
              System.out.print(i + " ");
          System.out.println();
          
          Arrays.fill(array, 2, 5, 3);
          for(int i : array)
              System.out.print(i + " ");
      }
  }
  
  // 2 2 2 2 2
  // 2 2 3 3 3
  ```

- 물론 세 번째 매개변수인 끝인덱스가 배열의 길이를 넘어가면
  ArrayIndexOutOfBoundsException이 뜨게 된다.



#### 5. sort() - parallelSort()

- sort()와 parallelSort() 함수는 말 그대로 정렬을 하는 함수이다.
  물론 내림차순 정렬은 안 되고 오름차순 정렬만 지원한다.

- 함수의 형태를 아래와 같다.

  ```java
  public static void sort(T[], Comparator<>);
  public static void sort(int[]);
  public static void sort(char[]);
  public static void sort(String[]);
  ...
  public static void parallelSort(T[], Comparator<>);
  public static void parallelSort(int[]);
  public static void parallelSort(char[]);
  public static void parallelSort(String[]);
  ...
  ```

- sort() 와 parallelSort() 의 차이점은
  sort() 함수는 그냥 정렬을 하지만 parallelSort()는 멀티쓰레드를 이용하여 병렬 정렬을 한다.
  따라서 적은 양의 데이터를 처리할때는 sort() 를 사용하고
  많은 양의 데이터를 처리할때는 parallelSort() 를 사용한다.

- 위를 보면 두 가지로 오버로딩 되어 있는데 저 Comparator<> 클래스가 들어간 함수들은
  원래 오름차순 정렬밖에 되지 않는 sort() 함수들에게 사용자 지정으로 정렬 기준을 만들 수 있도록 함이었다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] data = { 3, 6, 8, 1, 2, 9, 4, 5, 7 };
          Arrays.sort(data);
          for(int i : data)
             	System.out.print(i + " ");
      }
  }
  
  // 1 2 3 4 5 6 7 8 9 
  ```

- 이렇게 오름차순으로 정렬이 되는 것을 확인할 수 있다.
  parallelSort() 함수도 동일하게 작동한다.



#### 6. equals() - deepEquals()

- 기존의 equals() 함수는 번지를 비교하는 연산을 수행했다면
  Arrays.equals() 함수와 Arrays.deepEquals() 함수는 배열의 항목을 비교하는 연산을 수행합니다.
  따라서 기존의 배열을 복사하여 새로 만든 배열과 기존의 배열을 비교하여도 true가 나올 수 있다는 것이죠.

- 하지만 deepEquals() 함수는 함수이름처럼 깊게 비교하기 때문에 다차원 배열의 모든 항목을 비교합니다.
  그에반해 equals() 함수는 1차 배열의 항목만 비교합니다.

- 그리고 equals() 함수는 아래와 같이 오버로딩되어 있습니다.

  ```java
  public static boolean equals(int[], int[]);
  public static boolean equals(byte[], byte[]);
  public static boolean equals(short[], short[]);
  public static boolean equals(boolean[], boolean[]);
  public static boolean equals(long[], long[]);
  public static boolean equals(char[], char[]);
  public static boolean equals(float[], float[]);
  public static boolean equals(double[], double[]);
  public static boolean equals(Object[], Object[]);
  ```

- 하지만 deepEquals() 함수는 오버로딩되지 않고 딱 하나만 존재합니다.

  ```java
  public static boolean deepEquals(Object[], Object[]);
  ```

- 이때문에 deepEquals() 함수를 사용하기 위해서 매개값으로 Wrapper클래스를 넘겨주어야 합니다.

- 아래의 예제를 살펴봅시다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Integer[][] data = {
              { 1, 2, 3, 4 },
              { 5, 6, 7, 8 },
              { 9, 10, 11, 12 }
          };
          
          Integer[][] copy = Arrays.copyOf(data, data.length);
          for(int i = 0 ; i < copy.length ; i++)
              copy[i] = Arrays.copyOf(data[i], data[i].length);
          System.out.println(Arrays.equals(data, copy));
          System.out.println(Arrays.deepEquals(data, copy));
      }
  }
  
  // false
  // true
  ```

- Arrays.equals() 함수는 1차 배열만 비교하기 때문에
  data 배열에 들어있는 원소 3개의 번지를 비교했을 것이기에 false가 리턴되었고,
  Arrays.deepEquals() 함수는 1차 배열의 번지가 다르다면 2차, 3차까지 들어가서 항목을 확인하기 때문에
  이 함수는 결국엔 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 라는 항목이 모두 같다는 결과에 도달했을 것이므로
  true가 되었음을 알 수 있다.



#### 7. toString() - deepToString()

- 기존에 우리가 알고 있는 toString() 함수는 해쉬코드를 리턴해주는 String 형식으로 리턴해주는 함수였는데,
  Arrays.toString() 함수는 배열의 항목을 마치 파이썬의 배열처럼 리턴해준다.
  그럼 deepToString() 함수는 뭘까?

- 위의 equals() 함수와 deepEquals() 함수에서 유추할 수 있듯이
  이것은 배열이 일차원 배열이냐 다차원 배열이냐에 따라 갈린다.

- toString() 함수는 일차원 배열을 매개로 사용할때는 잘 출력되지만
  다차원 배열을 매개로 사용하면 해쉬코드 값이 출력되게 된다.
  그에 반해 deepToString() 함수는 일차원, 다차원 상관없이 잘 출력하는 것을 알 수 있다.

- 그럼 왜 toString()이 있냐고 물을 수도 있는데 
  deepToString() 함수는 Object[]만을 매개변수로 받기 때문에 Wrapper 클래스를 사용해야 하지만
  toString() 함수는 기본 자료형의 함수를 오버로딩하고 있기 때문에 사용할 수 있다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] data1 = { 1, 2, 3, 4, 5 };
          Integer[][] data2 = {
              { 1, 2, 3 },
              { 4, 5, 6 }
          };
          
          System.out.println(Arrays.toString(data1));
          System.out.println(Arrays.deepToString(data2));
      }
  }
  
  // [1, 2, 3, 4, 5]
  // [[1, 2, 3], [4, 5, 6]]
  ```

  