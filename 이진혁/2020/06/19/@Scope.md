## @Scope

### 1. @Scope를 왜 사용할까?

여기서 말하는 Scope는 우리가 알고 있던 {} 중괄호의 개념이 아니라
스프링 컨테이너에서 생성되는 빈(객체)의 인스턴스 생성 상태를 말한다.

스프링의 빈의 스코프의 종류는 다음과 같다.

```java
singleton
prototype
request
session
globalSession
```

이러한 스코프의 종류를 문자열 형태로 @Scope를 구성한다.
그럼 @Scope의 값인 위의 리스트에 대해서 알아보도록 하겠다.

### 2. @Scope 요소들 알아보기

#### 2-1. singleton

빈 스코프를 singleton(싱글톤)으로 설정하게 되면 스프링 컨테이너에서 생성되는 모든 빈이 싱글톤으로 생성된다.따라서 getBean() 메소드를 사용하면 빈을 가져올 때 계속 같은 객체만 리턴한다.
하지만 스프링의 빈이 기본적으로 싱글톤 설정이 되어 있기 때문에
명시적으로만 할 뿐 굳이 할 필요는 없다.

#### 2-2. prototype

빈 스코프를 prototype(프로토타입)으로 설정하게 되면
기존의 싱글톤이 아닌 싱글톤이 적용되지 않은 상태가 되어서 getBean() 메소드를 사용해서
빈을 가져올 때 각각 다른 객체를 생성해서 리턴한다.

#### 2-3. request

빈 스코프를 request(요청)으로 설정하게 되면 HTTP 요청당 하나의 빈을 생성하게 됩니다.
하지만 이 설정은 ApplicationContext에만 적용되기 때문에 다른 설정과 오해하면 안 됩니다.
생각해보면 만약 ApplicationContext처럼 스프링 설정 파일이 아니라
기본 스프링 빈이 HTTP 요청당 하나의 빈을 생성하게 되면 값을 저장할 수 없게 되므로 당연한 것입니다.

#### 2-4. session

빈 스코프를 session(세션)으로 설정하게 되면 HTTP 세션당 하나의 빈을 생성하게 됩니다.
이도 request 값과 같게 ApplicationContext에만 적용됩니다.

#### 2-5. globalSession

빈 스코프를 globalSession으로 설정하게 되면 session과 같지만
ApplicationContext가 아니라 포털 ApplicationContext에만 적용됩니다.

### 3. @Scope 사용하기

@Scope를 사용하지 않으면 기본적으로 싱글톤이므로 싱글톤이면 안 되는 컴포넌트에
@Scope("prototype")을 사용하면 getBean() 메소드를 사용할 때마다 다른 객체가 생성된다.

```java
@Component
@Scope("prototype")
public class Box {
    private String element;
    
    public Box() {}
    public Box(String element) {
        this.element = element;
    }
    
    public void setElement(String element) {
        this.element = element;
    }
    
    public String getElement() {
        return element;
    }
}
```

이렇게 되면 Box 객체를 생성할 때마다 다른 Box 객체를 생성할 수 있다.