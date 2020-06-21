## Text 파일 읽기 [Resource]

스프링 프레임워크에서는 Text 파일 같은 리소스들을 읽기 위해서 Resource 클래스를 지원한다.
Resource에 @Value를 이용해서 Text 파일과 같은 리소스의 classpath를 지정해주면
그 파일을 기준으로 Resource 객체를 생성한다.

>   @Value에 대한 설명은 'Properties 파일 사용하기 [@PropertySource, @Value, Environment, Properties Class].md' 파일을 참고하세요.

Resource 객체를 이용하여 Text 파일을 읽는 방법은 다음과 같습니다.

1.  Resource 필드에 @Value를 작성하여 클래스패스를 지정한다.
2.  File 클래스의 정적 메소드인 lines()를 이용해서 File 객체를 Stream 형태로 변경한다.
3.  Stream을 이용해서 데이터를 가지고 논다.

사실 Resource를 @Value를 사용하지 않고도 사용할 수 있는데 그것은 아래에서 다루도록 하겠다.
먼저 스프링에서 지원하는 Resource와 @Value를 이용해서 Test 파일을 읽어보자.

```java
@Configuration
public class TestConfiguration {
    @Value("classpath:test.txt")
    private Resource resource;
    
    @Bean
    public Stream txtStream() {
        return File.lines(Paths.get(resource.getURI()), Charset.forName("UTF-8"));
    }
}
```

TestConfiguration은 test.txt 파일을 읽기 위해서 설계된 Configuration 파일이다.
File 클래스의 정적 메소드인 lines() 메소드는
첫 번째 매개변수로 URI 타입을 받는데 현재 사용하고자 하는 Text 파일의 URI를 작성해야 한다.
두 번째 매개변수로는 보면 알겠지만 파일을 구성하는 문자셋을 정한다.
UTF-8로 해도 되고 euc-kr을 사용해도 되는데 웹 표준인 UTF-8을 사용하는 것이 좋다.

JUnit을 이용해서 위 클래스를 테스트 해보자.

```java
public class TestClass {
    @Test
    public void test() {
        ApplicationContext ctx =
            new AnnotationConfigApplicationContext(TestConfiguration.class);
        Stream txtStream = ctx.getBean("txtStream");
        txtStream.forEach(System.out :: println);
    }
}

// HelloWorld
// HelloWorld
// HelloWorld
```

이렇게 test.txt 파일의 내용이 다음과 같았음을 알 수 있다.

```text
HelloWorld
HelloWorld
HelloWorld
```

왜냐하면 lines() 메소드는 한 줄씩 읽어오기 때문이다.

### 다양한 Resource 구현체들

지금까지는 @Value를 이용해서 Resource 필드를 초기화시키고 사용하였다.
하지만 Resource 객체를 구현한
ClassPathResource, FileSystemResource, UrlResource를 사용하면 리소스 파일들을 쉽게 읽어올 수 있다.
각각의 Resource 구현체들은 사용하는 곳이 다른데

ClassPathResource는 클래스 패스를 이용해서 리소스 파일을 가져오는 가장 일반적인 방법이다.
FileSystemResource는 자바 프로젝트안이 아닌 바깥의 리소스를 사용할 때는 이 클래스를 사용해야 한다.
UrlResource는 http://~~ 등의 URI를 통한 리소스를 사용할 때 사용한다.