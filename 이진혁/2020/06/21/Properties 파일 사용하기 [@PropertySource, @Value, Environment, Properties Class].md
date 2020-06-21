## Properties 파일 사용하기 [@PropertySource, @Value, Environment, Properties Class]

Spring이나 SpringBoot를 한 번이라도 접해봤다면 .properties 파일을 한 번쯤은 본 적이 있을 것이다.
이 파일은 자바 영역에서 사용되는 파일으로서 주로 데이터를 저장하는데 사용되며
간단한 정적 데이터 저장에만 사용되기 때문에 XML이나 JSON에 비하면 가벼운 저장 파일이다.

그래서 이번에는 이런 .properties 확장자를 가진 Properties 파일을 사용하는 방법에 대해서 알아보았다.
먼저 Properties 파일을 사용하는 방법은 굉장히 다양하다.
하지만 일반적으로 사용되는 두 가지 방법을 알아보겠다.

### 1. Properties 클래스 사용하기

스프링 프레임워크를 사용하지 않고 Properties 파일을 사용하기 위해서는 Properties 클래스를 사용하면 된다.
Properties 클래스는 java.util 패키지에 존재하는 클래스로서 스프링에 의존적이지 않은 클래스이다.
Properties 클래스를 사용하는 방법은 다음과 같다.

1.  Properties와 FileInputStream 객체를 생성한다.
2.  Properties 객체의 메소드인 load() 메소드를 이용해서 Properties 파일을 로드한다.
3.  getProperties() 메소드를 이용해서 Properties 파일을 읽는다.

그럼 위 순서를 참고하여 Properties 클래스를 사용해 Properties 파일을 사용해보겠다.
일단 다음과 같이 Properties 파일이 구성되어 있다고 하자.

```properties
test.data1 = data1
test.data2 = data2
test.data3 = data3
```

그리고 위 Properties 파일을 사용하는 예제이다.

```java
public class MainClass {
    public static void main(String[] args) {
        Properties properties = null;
        FileInputStream fis = null;
        final String path = "test.properties";
        // 같은 파일 경로에 test.properties 파일이 존재해야 함
        String data1 = null;
        String data2 = null;
        String data3 = null;
        
        try {
            properties.load(fis);
            data1 = properties.getProperties("test.data1", "null");
            data2 = properties.getProperties("test.data2", "null");
            data3 = properties.getProperties("test.data3", "null");
            
            System.out.println("data1 : " + data1);
            System.out.println("data2 : " + data2);
            System.out.println("data3 : " + data3);
        } catch(Exception e) {
            e.printStackTrace();
            System.exit();
        } finally {
            fis.close();
        }
    }
}

// data1 : data1
// data2 : data2
// data3 : data3
```

이렇게 간단하게 Properties 객체를 이용해서 Properties 파일을 읽을 수 있다.
잠시 getProperties() 메소드에 대한 설명을 하자면,
첫 번째 매개변수는 Properties 파일의 key(키)값을 작성하는 곳이고
두 번째 매개변수는 첫 번째 매개변수로 들어간 key(키)값이 없을 경우에 디폴트로 들어가는 값을 작성한다.

### 2. @PropertySource 사용하기

@PropertySource는 스프링 프레임워크에서 지원하는 어노테이션이다.
이 어노테이션은 Properties 파일뿐만 아니라 XML, JSON도 읽을 수 있게 설정되어 있다.
하지만 주로 Properties 파일을 읽는데 사용된다.

@PropertySource를 사용하면 Environment 객체를 이용해 Properties 파일에 있는 값들을 저장해놓거나,
@Value를 이용해서 순간순간 값을 가져오는 방법이 있다.

@PropertySource를 사용할 때는 value 요소에 Properties 파일의 path를 작성하면 된다.

#### 2-1. Environment 객체 사용하기

Environment 객체를 사용할 때는 Properties 객체를 사용할 때처럼 getProperty() 메소드를 사용하면 된다.
getProperty() 메소드는 Properties 객체의 getProperty() 메소드에서 조금 추가된 느낌이다.

getProperty() 메소드는 다음과 같이 오버라이딩 되어 있다.

```java
public String getProperty(String key);
public T getProperty(String key, Class<T> targetType);
public String getProperty(String key, String defaultValue);
public T getProperty(String key, Class<T> targetType, T defaultValue);
```

원하는 key(키)값을 이용해 value(값)을 얻어올 수도 있고,
원하는 타입으로 캐스팅해서 얻어올 수도 있고, 디폴트 값을 설정할 수도 있으며 둘 다 할 수도 있다.

다음과 같이 Properties 파일이 구성되어 있다고 하자.

```properties
test.str = data
test.int = 10
test.double = 0.1
test.string = test
```

그럼 다음과 같이 Environment 객체를 이용하여 값을 얻어올 수 있다.

```java
@PropertySource("classpath:test.properties")
public class MainClass {
    @Autowired
    private static Environment environment;
    
    public static void main(String[] args) {
        String str = environment.getProperty("test.str");
       	int intData = environment.getProperty("test.int", Integer.class,
                                              new Integer(100));
        double doubleData = environment.getProperty("test.double", Double.class);
        String stringData = environment.getProperty("test.string", "default_value");
        
        System.out.println(str);
        System.out.println(intData);
        System.out.println(doubleData);
        System.out.println(stringData);
    }
}

// data
// 10
// 0.1
// test
```

#### 2-2. @Value 사용하기

위에서 Environment 객체를 사용할 때는 @PropertySource의 value 요소로 들어갔던 path에 있는
Properties 파일에 있는 모든 값이 Environment로 @Autowired 되어 자동주입되었었는데
@Value를 사용하면 굳이 Environment 객체를 사용하지 않고도 바로 값을 가져올 수 있다.
@Value는 원래 디폴트 값을 넣어주는 어노테이션이다.
따라서 @Value는 사용할 수 있는 곳이 무궁무진하며 절대 Properties 파일에 종속된 것이
아니라는 것을 반드시 알아야 한다.

원래 @Value를 사용하는 방법은 다음과 같다.

```java
@Controller
public class TestController {
    @Value("test");
    private String test;
    
    @GetMapping("/test");
    public String test(Model model) {
        model.addAttribute(test);
        return "test";
    }
}
```

이렇게 test라는 변수에 "test"라는 값을 넣을 수 있도록 해준다.
이런 @Value에 플레이스홀더라는 형식을 이용해서 값을 넣을 수 있다.
예를 들면 다음과 같다.

```java
@Value("${test.data}")
```

이걸 @PropertySource와 연계하면 @PropertySource의 요소로 들어온 path에 있는 Properties 파일의
key(키) 중에서 test.data 라는 키를 가진 데이터가 있다면 그 값을 가져오는 것이다.
따라서 이 @Value를 받은 필드에게 그 값을 저장한다.
다음과 같은 예제를 볼 수 있겠다.

```java
@PropertySource("classpath:test.properties")
public class MainClass {
    @Value("${test.str}")
    private static String test;
    
    public static void main(String[] args) {
        System.out.println(test);
    }
}

// data
```

