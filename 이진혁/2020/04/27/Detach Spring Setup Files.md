## Detach Spring Setup Files

- 지금까지 스프링 설정파일을 사용할 때는 하나의 스프링 설정파일에 모든 설정 정보를 넣었다.
  그래서 하나의 스프링 설정파일이 심하게 길어지는 효과를 볼 수 있었다.
  하지만 실제로는 엄청나게 많은 데이터와 Bean의 생성을 담당하기 때문에
  더 많이 길어지게 된다.
  따라서 Bean을 분리해서 설정할 수 있도록 스프링 설정 파일을 분리시킬 수 있다.

#### 1. 분리하는 기준

- 스프링 설정파일을 분리하는 기준은 함수와 비슷하다.
  스프링 설정파일의 기능 단위로 분리해주면 된다.
  만약 DB접근 Bean의 생성을 담당하는 설정 파일과
  Service를 담당하는 Bean의 생성을 담당하는 설정 파일을 나눌 수 있다.

#### 2. 어떻게 분리하는가?

- 분리하는 방법은 말 그대로 파일을 나눠서 적용하면 된다.
- 만약 기능을 세 가지로 나누고 싶다면
  applicationContext1.xml, applicationContext2.xml, applicationContext3.xml으로
  나눌 수 있다.

#### 3. 어떻게 사용하는가?

- 하지만 파일을 나누게 되면 원래 했던 것처럼 GenericXmlApplicationContext를
  활용할 수 없게 되는데 사용하기 위해서는 원래 매개변수로 주었던
  클래스패스 문자열을 담은 문자열 배열을 매개변수로 주면 된다.

- 만약 applicationContext1.xml, applicationContext2.xml, applicationContext3.xml으로 나누어서
  사용한다고 했을 때 다음과 같이 스프링 설정 파일을 사용할 수 있다.

  ```java
  String[] ctxs = {"classpath:applicationContext1",
                  "classpath:applicationContext2",
                  "classpath:applicationContext3"};
  GenericXmlApplicationContext ctx =
      new GenericXmlApplicationContext(ctxs);
  ```

- 이렇게 되면 스프링 설정 파일 세 가지를 모두 사용할 수 있게 된다.
  이 방법 말고도 임포트하는 방법도 있다.

  ```xml
  <!-- applicationContext1.xml -->
  
  <xmls....
  
  	<import resource="classpath:applicationContext2"/>
  	<import resource="classpath:applicationContext3"/>
  
  ...>
  ```

- 이렇게 사용하게 되면 applicationContext1.xml 만 사용해도 모든 기능을 사용할 수 있게 된다.