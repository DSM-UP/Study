## 초기화 및 폐기 메소드 [initMethod, destroyMethod, @PostConstruct, @PreDestroy]

### 1. 초기화 및 폐기 메소드란?

초기화 메소드와 폐기 메소드는 이름 그대로 클래스가 인스턴스화 되었을 때
실행되는 메소드를 초기화 메소드, 인스턴스화 된 객체가 GC(Garbage Collector)에 의해
소멸 될 때 실행되는 메소드를 폐기 메소드라고 한다.

쉽게 생성자와 소멸자라고 하는 경우도 있긴 한데 그러면 이미 존재하는 생성자와 소멸자와
헷갈릴 가능성이 있고 그들과는 확연한 차이가 있기 때문에
구분할 필요가 있기 때문에 초기화 메소드와 폐기 메소드라고 구분하여 말하는 것이 좋다.

### 2. initMethod, destroyMethod 요소

initMethod와 destroyMethod는 @Bean의 요소 중에 하나이다.
흔히 @Bean은 아무 속성도 지정해주지 않은 채로 사용하는 경우가 많기 때문에
요소를 잘 사용하지 않는 경향이 있는데 그렇지만 사용되는 요소가
바로 이 initMethod 요소와 destroyMethod 요소이다.

initMethod는 초기화 메소드의 이름을 지정해주고 destroyMethod는 폐기 메소드의 이름을 지정해준다.
만약 초기화 메소드를 testInit() 라고 하고 폐기 메소드를 testDestroy() 라고 한다면
다음과 같이 initMethod와 destroyMethod 요소를 사용할 수 있다.

```java
@Configuration
public class TestConfiguration {
    @Bean(initMethod="testInit", destroyMethod="testDestroy")
    public TestObject testObject() {
        return new TestObject();
    }
}
```

이렇게 초기화 메소드와 폐기 메소드를 지정하게 되면 TestObject 객체를 빈으로 생성할 때
그 객체는 생성시 testInit() 메소드를 실행하고 소멸시 testDestroy() 메소드를 실행한다.

```java
public class TestObject {
    public void testInit() {
        System.out.println("testInit() 호출");
    }
    
    public void testDestroy() {
        System.out.println("testDestroy() 호출");
    }
}
```

이렇게 되면 TestObject 객체가 생성될 때 testInit() 호출이 출력되고
TestObject 객체가 소멸 될 때 testDestroy() 호출이 출력된다.

물론 testInit()와 testDestroy() 메소드는 반환형이 void여야 하고 매개변수가 없어야 한다.

### 3. @PostConstruct, @PreDestroy 어노테이션

initMethod와 destroyMethod 요소는 @Configuration을 통한 설정파일을 통해 빈을 생성할 경우에
그렇게 생성하고 만약 @Conponent를 이용해서 스프링 컨테이너에 빈을 생성하였을 경우네느
초기화 메소드가 될 곳에 @PostConstruct를, 폐기 메소드가 될 곳에 @PreDestroy를 작성한다.

물론 이것도 @PostConstruct와 @PreDestroy가 붙은 메소드의 반환형을 void, 매개변수가 없는 형태가
되어야 한다는 것을 잊으면 안 된다.

만약 TestObject 빈을 생성하기 위해서 @Component를 작성하게 되면 다음과 같이 메소드를 설정할 수 있다.

```java
@Component
public class TestObject {
    @PostConstruct
    public void testInit() {
        System.out.println("testInit() 호출");
    }
    
    @PreDestroy
    public void testDestroy() {
        System.out.println("testDestroy() 호출");
    }
}
```

initMethod, destroyMethod와 똑같이 작동한다.