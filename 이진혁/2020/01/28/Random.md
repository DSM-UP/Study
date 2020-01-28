## Random

- 우리가 랜덤의 값을 얻고자 할때 대부분 Math 클래스의 정적 메소드인 random() 함수를 사용하곤 한다.

- 하지만 진정으로 Random의 값을 얻어내기 위한 클래스가 존재하였는데
  그 클래스가 바로 Random 클래스이다.

- Random 클래스에서 지원하는 메소드는 아래와 같다.

  ```java
  public boolean nextBoolean();
  public float nextFloat();
  public double nextDouble();
  public long nextLong();
  public int nextInt();
  public int nextInt(Long);
  
  public void nextBytes(byte[]);
  public double nextGaussian();
  public void setSeed(Long);
  
  /*
  
  public DoubleStream doubles( < 여러 가지 > );
  public IntStream ints( < 여러 가지 > );
  public LongStream longs( < 여러 가지 > );
  
  */
  ```

- 이렇게 위와 같이 생각보다 많은 메소드를 제공하고 있다.

- 아래의 doubles, ints, longs 메소드는 Stream에 관한 메소드이므로 대부분 사용할 일이 없다.

- 그럼 본론으로 들어가서 메소드에 대한 설명을 해보겠다.



#### nextBoolean() - nextFloat() - nextDouble() - nextLong() - nextInt() - nextInt(Long)

- 위의 여섯 개의 함수가 Random 클래스의 주축을 담당하고 있는 메소드들이다.

- 쉽게 nextInt로 예를 들어보자면 아래와 같다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Random r = new Random();
          for(int i = 0 ; i < 10 ; i++) {
              System.out.print(r.nextInt() + " ");
          }
      }
  }
  
  // 13 8983 77892 -12341 4123 -1231 545 -89 9 1234
  ```

- 이렇게 양수와 음수를 포함한 int 범위의 숫자를 리턴한다.
  다른 함수들도 비슷하게 동작한다.

- 먼저 nextBoolean() 은 true, false를 랜덤으로 리턴한다.
  nextLong() 함수는 long 범위의 숫자를 리턴한다. 물론 양수, 음수 포함이다.
  nextFloat() 함수는 0이상 1미만의 float으로 나타낼 수 있는 실수중 하나를 리턴한다.
  nextDouble() 함수는 nextFloat() 함수와 같이 0이상 1미만의 double으로 나타낼 수 있는 수를 리턴한다.
  nextInt(Long) 함수는 0이상 매개변수로 들어온 Long-1 만큼의 수까지 중에서 랜덤으로 수를 하나 리턴한다.
  물론 정수로 리턴한다.

- 이 nextInt(Long) 함수가 이 Random 클래스의 꽃이라고 생각한다.
  Math.random() 를 사용하면서 이를 해결하기 위해서 계산했던 것이
  이 함수 하나면 모든것이 해결될 수 있기 떄문이다.



#### nextBytes()

- nextBytes() 함수는 위의 nextInt와 nextLong과 같은 형태로 계산하지 않는다.
- 애초에 매개변수로 byte[]을 받고 있기 때문에 다르다는 것을 알 수 있다.
- 이 nextBytes() 함수는 매개변수로 들어온 byte[]에 랜덤의 byte 값을 넣어준다.
  그리고 리턴값이 void이므로 아무것도 리턴되지 않고 원본 배열이 변경된다.
  양수와 음수를 모두 포함한다.

- 아래는 nextBytes() 함수를 사용한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          byte[] bytes = new byte[5];
          Random r = new Random();
          r.nextBytes(bytes);
          
          for(byte b : bytes)
              System.out.print(b + " ");
      }
  }
  
  // 49 28 63 42 -83
  ```

- 정상적으로 잘  출력되는 것을 볼 수 있다.



#### nextGaussian()

- 이 함수는 특이하게 가우스 분포 즉, 정규 분포를 따르는 랜덤값을 리턴한다.
  리턴 값이 double 이므로 계산 범위는 nextDouble() 함수와 동일하다.
- 하지만 정규 분포를 따르기 때문에
  모든 범위의 수가 나올 확률이 같은 다른 함수와는 다르게
  끝과 끝의 값이 잘 나오지 않고 중앙값의 확률이 높게 설정되어 있다.
  이것을 사용할때가 있을 것이라고 생각한다.
  물론 우리가 직접 만들 수도 있는 함수이다.



#### setSeed(Long)

- seed가 뭐냐고 물을 수도 있는데
  이 Random 함수는 생성자가 두 개 존재한다.
  하나는 위에서 계속 사용했던 기본 생성자와
  Long 형의 seed를 설정할 수 있는 생성자가 있다.
- seed가 같은 Random 클래스는 같은 랜덤값을 가져서 같은 값이 나오게 되어 있다.
- 따라서 setSeed() 함수는 Random 클래스를 사용하는 중간에 seed를 바꾸고 싶을때 사용하면 된다.