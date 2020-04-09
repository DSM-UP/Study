## pom.xml

- 스프링 프로젝트에서 pom.xml은 특별한 의미를 가진다.

- 사실 저번에 스프링의 기본 지식에 대해서 공부할 때 한 번 알아봤었는데
  pom.xml은 사용하는 라이브러리를 담아놓는 곳이다.
  이 pom.xml에 이 라이브러리를 사용하겠다고 '명시' 해 놓으면
  어느 공간에 있는 레포지터리에서 그 파일을 다운로드 받아 사용한다.
  이렇게 되면 내 컴퓨터에 저장이 되게 되는데
  그럼 처음에는 다운로드하는데 시간이 많이 소요되다가
  나중에는 이미 깔려있어서 그대로 복사해 가져간다.

- 스프링을 처음 시작하게 되면 기본적으로 다운로드되는 라이브러리가 존재한다.
  그것들은 다음과 같다.

  ```java
  spring-context-4.1.0.RELEASE.jar
  spring-aop-4.1.0.RELEASE.jar
  aopalliance-1.0.jar
  spring-beans-4.1.0.RELEASE.jar
  commons-logging-1.1.3.jar
  spring-expression-4.1.0.RELEASE.jar
  ```

- 이들에 대한 설명은 저번에 공부한 "스프링의 기본 지식"에서 알아봤으니 넘기도록하겠다.