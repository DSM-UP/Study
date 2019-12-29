## Maven - Build LifeCycle

- Maven에는 여러 가지 실행 명령문이 존재한다.

- 예를 들자면 아래와 같이 우리가 많이 사용하는 것들이 존재한다.

  ```xml
  mvn compile		// 컴파일
  mvn test		// 테스트 코드를 이용하여 실행
  mvn package		// 패키징하여 pom.xml에 있는 확장자 형식으로 압축
  ```

- 위의 세 가지 외에도 수많은 명령어들이 존재하는데 그 명령어들은 각각 그 빌드의 순서가 존재한다.

  ```xml
  <phases>
  	<phase>validate</phase>
  	<phase>initialize</phase>
  	<phase>generate-sources</phase>
  	<phase>process-sources</phase>
  	<phase>generate-resources</phase>
  	<phase>process-resources</phase>
  	<phase>compile</phase>
  	<phase>process-classes</phase>
  	<phase>generate-test-sources</phase>
  	<phase>process-test-sources</phase>
  	<phase>generate-test-resources</phase>
  	<phase>process-test-resources</phase>
  	<phase>test-compile</phase>
  	<phase>process-test-classes</phase>
  	<phase>test</phase>
  	<phase>prepare-package</phase>
  	<phase>package</phase>
  	<phase>pre-integration-test</phase>
  	<phase>integration-test</phase>
  	<phase>post-integration-test</phase>
  	<phase>verify</phase>
  	<phase>install</phase>
  	<phase>deploy</phase>
  </phases>
  ```

- 위에서부터 한 칸씩 내려오면서 빌드가 진행된다.
- 그리고 이 빌드 순서를 Build LifeCycle이라고 한다.
- 하지만 이 빌드 라이프사이클은 pom.xml을 고침으로서 바꿀 수 있기 때문에 위의 빌드 라이프 사이클은 Default Build LifeCycle 이라고 할 수 있다.
- 그리고 xml의 형식상 적혀 있는 태그인 phase를 보면 알 수 있겠지만 빌드의 과정 하나하나를 phase(파스)라고 한다.
- 그럼 우리가 compile을 하기 위해서 validate, initialize와 같은 명령문들을 모두 쳐야하는 걸까?
- 그것은 아니다. 실제로 Maven에서 실행하는 명령어들은 compile을 실행하게 되면 위에서부터 compile까지 실행해달라는 명령문이지 compile을 해달라는 명령은 아니다.
- 따라서 compile을 해달라고 명령문을 입력하게 되면 validate부터 compile까지 자동으로 입력이 되어 처리되게 된다.
- 그리고 Maven이 사실 모든 phase에 대한 빌드 종류를 모두 따로 만들어 놨다. 이 말은 compile까지 이루어지는 빌드 과정을 따로 하나 만들어놓고, package까지 이루어지는 빌드 과정을 따로 하나 만들어놓았기 때문에 더 효율적인 처리를 할 수 있다. 하지만 Maven을 사용하는 사용자 입장에서는 이를 알지 않아도 문제 없다.
- 그리고 특히 package 명령문을 실행하였을때 기본적으로 jar 파일로 만들어준다는 것을 어제 알게 되었다.
- 하지만 이것도 pom.xml을 고침으로서 war와 같은 것들로 변경할 수 있다는 것을 알 수 있다.
- jar, war외에도 pom,  ejb, maven-plugin,  ear, rar와 같은 것들이 있다.





```java
* validate : Not defined
* initialize : Not defined
* generate-sources : Not defined
* process-sources : Not defined
* generate-resources : Not defined
* process-resources : org.apache.maven.plugins:maven-resources-plugin:2.6:resources
* compile : org.apache.maven.plugins:maven-compiler-plugin:3.1:compile
* process-classes : Not defined
* generate-test-sources : Not defined
* process-test-sources : Not defined
* generate-test-resources : Not defined
* process-test-resources : org.apache.maven.plugins:maven-resources- 					                            plugin:2.6:testResources
* test-compile : org.apache.maven.plugins:maven-compiler-plugin:3.1:testCompile
* process-test-classes : Not defined
* test : org.apache.maven.plugins:maven-surefire-plugin:2.12.4:test
* prepare-package : Not defined
* package : org.apache.maven.plugins:maven-jar-plugin:2.4:jar
* pre-integration-test : Not defined
```

- 이렇게 validate, initialize, generate-sources와 같은 것들을 phase라고 하고 그에 맞는 프로그램을 Plug-in이라고 한다.
- 그리고 이 프로그램, Plug-in을 세부적으로 나눠놓은 프로그램들을 Goal이라고 한다.
- maven.apache.org라는 사이트에 접속해서 Maven Plugins에서 Plugin들을 바꿀 수 있다.
- 따라서 위의 플로그인들은 디폴트 플러그인이라고 할 수 있다.