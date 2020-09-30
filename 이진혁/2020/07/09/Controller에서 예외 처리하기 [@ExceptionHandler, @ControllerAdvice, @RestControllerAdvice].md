## Controller에서 예외 처리하기 [@ExceptionHandler, @ControllerAdvice, @RestControllerAdvice]

기존에 서버에서 예외가 발생하게 되면 대부분 자바에서는 예외의 스택 트레이스를 보여주기 때문에
사용자 입장에서는 이상한 예외문을 보게 된다.
그러면 사용자 입장에서는 문제가 있는 사이트로 인식할 수밖에 없을 것이다.

원래는 예외가 발생하였을 때 예외가 발생한 페이지로 넘기는 것으로 해결이 가능했으나
스프링에서는 이 예외가 발생했을 경우 가는 페이지를 설정하거나 어떤 예외를 받아들일 것인지
설정할 수 있다.

### 1. @ExceptionHandler

@ExceptionHandler를 메소드 단위에 작성하면 예외가 발생하였을 때 실행되는 메소드로 인식한다.
대게 @RequestMapping과 비슷하게 동작하기 때문에 리턴하는 값으로 View의 이름을 설정할 수도 있고
ModelAndView를 리턴할 수도 있다.

@ExceptionHandler는 value 요소로 받을 예외의 클래스타입을 받는다.
만약 적지 않으면 디폴트로 Exception.class가 작성되게 된다.
다음은 @ExceptionHandler를 사용한 예제이다.

```java
@Controller
public class TestController {
    @ExceptionHandler(NullPointerException.class)
    public String nullPointerExceptionHandler(NullPointerException npe) {
        return "nullError";
    }
    
    @ExceptionHandler
    public String handler(Exception e) {
        return "error";
    }
}
```

이렇게 NullPointerException이 발생하게 되면 nullPointerExceptionHandler()가 작동하게 되어
nullError라는 에러 페이지를 띄워주게 된다.

만약 value 요소에 아무것도 적어주지 않으면 자동으로 Exception 객체에 바인딩되어 사용할 수 있다.

그런데 이런식으로 @ExceptionHandler를 작성하게 되면 현재 존재하는 Contoller에서만 작동하게 되므로
다른 Controller에서 예외가 발생하게 되면 제대로 잡아줄 수가 없다.
따라서 전역으로 예외를 잡기 위해서는 @ControllerAdvice를 작성한다.

### 2. @ControllerAdvice

위에서 말했던 것처럼 모든 @Controller에서 발생하는 예외를 잡아주기 위해서는 @ContorllerAdvice를
클래스 단위에 작성한 Controller는 모든 예외를 받아들인다.

```java
@ControllerAdvice
public class TestController {
    @ExceptionHandler(NullPointerException.class)
    public String nullPointerExceptionHandler(NullPointerException npe) {
        return "nullError";
    }
    
    @ExceptionHandler
    public String handler(Exception e) {
        return "error";
    }
}
```

### 3. @RestControllerAdvice

@ControllerAdvice는 @Controller에서 발생하는 모든 예외를 캐치했다면
@RestControllerAdvice는 @RestController에서 발생하는 모든 예외를 캐치한다.