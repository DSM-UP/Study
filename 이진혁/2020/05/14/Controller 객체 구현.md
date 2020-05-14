## Controller 객체 구현

스프링은 MVC 패턴을 이용하며 프로젝트를 구성하게 되는데 그 구성원에는
데이터베이스를 사용하게 하는 DAO 객체, 웹에서의 URL 매핑을 돕는 Controller 객체,
그리고 본격적인 서버 처리를 하는 Service 객체가 있다.

저번에는 Service와 DAO 객체를 구현하는 방법에 대해서 알아보았으니
이번에는 Controller 객체의 구현 방법을 알아보고 그의 부속 기능들에 대해서 알아보겠다.

### 1. @Controller

먼저 Controller 객체를 구현하기 위해서는 @Controller를 사용하면 된다.
그러면 스프링 컨테이너가 이 클래스가 Controller라는 것을 알고
그 안의 @RequestMapping이 정상적으로 작동하게 된다.

### 2. @RequestMapping

@RequestMapping은 @Controller가 붙은 클래스 내의 메소드에서만 사용할 수 있다.
@RequestMapping에는 value와 method라는 요소가 존재한다.

#### 2-1. value 요소

value 요소는 본 메소드가 클라이언트에서 어떤 URL로 접근하였을 때
본 메소드를 실행할지를 정한다.
만약 value가 "/user"일 경우 http://마지막패키지/user URL 요청이 들어왔을 때
본 메소드를 실행하게 된다.

#### 2-2. method 요소

method 요소는 value 요소의 URL로 들어오는 요청 중 어떤 종류의 요청을 받을지를 결정한다.
method 요소의 값은 RequestMethod의 정적 필드를 사용한다.

RequestMethod 정적 필드의 종류는 다음과 같다.

```java
RequestMethod.GET
RequestMethod.POST
RequestMethod.PUT
RequestMethod.DELETE
RequestMethod.PATCH
RequestMethod.OPTIONS
RequestMethod.HEAD
RequestMethod.TRACE
```

그리고 method 요소의 디폴트 값은 RequestMethod.GET이므로
클라이언트에서 GET 방식 요청을 본래 경우 method 요소를 생략하여도 된다.

참고로 클라이언트에서 요청을 보내면 DispatcherServlet이 받게 되고 그 요청에게 적절한
Controller 클래스를 HandlerMapping이 찾고 그 클래스 안에서 적절한 메소드를 HandlerAdapter가 찾는데
이때 URL은 같지만 요청 방식이 다른 메소드밖에 없을 경우에는
URL이 같고 요청 방식이 다른 메소드를 실행하게 된다.
따라서 method 요소를 없애도 알아서 클라이언트에서 찾아 사용하지만
가독성의 문제로 인해 명시해주는 것이 좋다.

#### 2-3. @RequestMapping을 클래스에 적용하기

@RequestMapping은 @Controller가 작성된 클래스의 메소드에 작성할 수 있다고 알고 있다.
하지만 @RequestMapping을 클래스에도 작성할 수 있는데 왜 사용하는지 알아보자.

다음 Controller 클래스를 살펴보자.

```java
/* TestController.java */

@Controller
public class TestController {
    @RequestMapping(value="/aaa/alist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/aaa/blist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/aaa/clist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/aaa/dlist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/aaa/elist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/aaa/flist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
}
```

이런 TestController 클래스가 존재한다고 생각해보자.
@RequestMapping의 value 요소의 값을 보면 URL이 /aaa로 시작되는 URL인 것을 알 수 있다.
이렇게 비슷한 URL이 반복되게 되면 오히려 가독성이 떨어질 수 있다.
그래서 @RequestMapping을 클래스에 작성함으로서 이를 해결할 수 있다.

위의 TestController 클래스를 @RequestMapping을 이용해서 고치면 다음과 같다.

```java
/* TestController.java */

@Controller
@RequestMapping("/aaa")
public class TestController {
    @RequestMapping(value="/alist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/blist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/clist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/dlist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/elist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
    
    @RequestMapping(value="/flist" method=RequestMethod.GET)
    public String function1(Model model) { ... }
}
```

이렇게 중복되는 URL인 "/aaa"를 @RequestMapping에 작성하고 클래스에 붙이면 된다.



### 3. @RequestParam

@RequestParam은 클라이언트 코드에서 보낸 파라미터를 얻을 수 있는 어노테이션이다.
이 어노테이션을 사용하기 전에는 HttpServletRequest를 사용했는데
그럼 먼저, HttpServletRequest에 대해서 알아보자.

#### 3-1. HttpServletRequest 사용하기

HttpServletRequest는 Model 객체와 같이 @RequestMapping이 작성된 메소드의 매개변수로 들어올 수 있는
요소 중에 하나이다.

만약 다음과 같이 클라이언트에서 form 태그를 통해 요청을 보낸다고 생각해보자.

```html
<form action="/project/login" method="get">
    <input type="text" name="userId"/>
    <input type="password" name="userPw"/>
    <input type="email" name="userMail"/>
</form>
```

그러면 Controller에서는 /login URL이 들어왔을 때 처리할 메소드를 만들어야 한다.

```java
@Controller
class LoginController {
    @RequestMapping(value="/login", method=RequestMethod.GET)
    public String userLogin(Model model, HttpServletRequest request) {
        String userId = request.getParameter("userId");
        String userPw = request.getParameter("userPw");
        String userMail = request.getParameter("userMail");
        
        System.out.println(userId);
        System.out.println(userPw);
        System.out.println(userMail);
        
        return "login";
    }
}
```

이렇게 만들 수 있는데
HttpServletRequest를 매개변수로 받아서 getParameter() 메소드를 이용해 name을 추출하면
그 값이 리턴되게 된다.

#### 3-2. @RequestParam 사용하기

@RequestParam은 HttpServletRequest를 대신하여 사용할 수 있다.
대신 HttpServletRequest는 getParameter() 메소드를 이용해서 값을 얻었지만
@RequestParam을 이용하면 값을 매개변수로 받을 수 있다.
만약 위의 예제를 그대로 @RequestParam을 이용한 형태로 바꾸면 다음과 같다.

```java
@Controller
class LoginController {
    @RequestMapping(value="/login", method=RequestMethod.GET)
    public String userLogin(Model model,
                            @RequestParam("userId") String userId,
                           	@RequestParam("userPw") String userPw,
                           	@RequestParam("userMail") String userMail) {
        System.out.println(userId);
        System.out.println(userPw);
        System.out.println(userMail);
        
        return "login";
    }
}
```

매개변수는 조금 지저분해졌을 지는 몰라도 코드는 확실하게 줄었다는 것을 알 수 있다.

##### 3-2-1. required 요소 사용하기

위의 문자열은 기본적으로 value 요소이지만 어노테이션의 특성으로 인해서 생략할 수 있었다.
하지만 이 required 요소가 적용되게 되면 헷갈리면 안 되므로 모두 표기해주어야 한다.

required 요소는 본 값이 무조건 있어야 하는 값인지 아니면 없어서 null이 와도 되는 것인지를 묻는 것이다.
만약 required 요소에 true 값을 넣게 되면 무조건 값이 전달되어야 하며
없을 경우에는 메소드를 실행시키지 않는다.
false 값일 경우에는 값이 전달되지 않아도 그냥 실행한다.

##### 3-2-2. defaultValue 요소 사용하기

defaultValue 요소는 required 요소가 false일 때만 사용할 수 있다.
만약 값이 오지 않았을 때 null이 아니라 디폴트 값을 설정할 수 있게 된다.

#### 3-3. 커맨드 객체 사용하기

우리는 클라이언트에서 보내주는 값을 HttpServletRequest의 getParameter를 통해서 받거나
@RequestParam을 통해서 받을 수 있었다.
하지만 보내주는 값이 어느 한 객체의 필드로 정의되어 있고
그 이름이 name과 같으며
setter와 getter가 정의되어 있다면 그 객체를 그대로 매개변수로 사용할 수 있다.
이러한 경우 그 객체를 커맨드 객체라고 한다.

만약 다음과 같이 User 클래스가 정의되어 있다고 생각하자.

```java
public class User {
    private String userId;
    private String userPw;
    private String userMail;
    
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }
    public String getUserPw() {
        return userPw;
    }
    public void setUserMail(String userMail) {
        this.userMail = userMail;
    }
    public String getUserMail() {
        return userMail;
    }
}
```

이럴 때 name이 userId, userPw, userMail인 input 태그와 form 태그를 가진 클라이언트 코드가 존재한다면
그 코드의 요청 속 존재하는 값들은 User라는 객체로 받을 수 있게 된다.
만약 User에 있는 필드가 아닌 다른 값이 존재하거나 name과 변수명이 일치하지 않으면 예외가 발생한다.
userId와 userPw는 있는데 userMail이 없는 경우는 상관 없다.

다음은 HTML의 일부, Controller 객체의 일부이다.

```html
<form action="/project/login" method="get">
    <input type="text" name="userId"/>
    <input type="password" name="userPw"/>
</form>

<form action="/project/join" method="get">
    <input type="text" name="userId"/>
    <input type="password" name="userPw"/>
    <input type="email" name="userMail"/>
</form>
```

```java
@RequestMapping(value="/login", method=RequestMethod.GET)
public String login(User user) {
    System.out.println(user.getUserId);
    System.out.println(user.getUserPw);
    System.out.println(user.getUserMail);	// null
    
    return "login";
}

@RequestMapping(value="/join", method=RequestMethod.GET)
public String join(User user) {
    System.out.println(user.getUserId);
    System.out.println(user.getUserPw);
    System.out.println(user.getUserMail);
    
    return "join";
}
```

기존에 View 즉, JSP를 구성할 때 Model에 addAttribute() 메소드를 이용하여
저장한 값들을 ${이름} 형식으로 사용할 수 있었는데
이렇게 HTML, Controller를 구성하게 된다면 메소드에 사용한 User의 변수명으로
도트 연산자를 통해 접근할 수 있다.
예를 들어 userId에 접근하기 위해서는 다음과 같이 접근한다.

```jsp
${user.userId}
```

여기서는 이렇게 사용한 변수명(user)을 그대로 사용하게 되는데
이를 바꾸고 싶다면 @ModelAttribute를 사용하면 된다.

##### 3-3-1. @ModelAttribute를 매개변수에 사용하기

@ModelAttribute를 사용하면 View에서 사용되는 이름을 바꿀 수 있다.
다음과 같이 User 앞에 @ModelAttribute에 value 요소에 값을 주면 된다.

```java
@RequestMapping(value="/join", method=RequestMethod.GET)
public String join(@ModelAttribute("myuser") User user) {
    System.out.println(user.getUserId);
    System.out.println(user.getUserPw);
    System.out.println(user.getUserMail);
    
    return "join";
}
```

```jsp
${myuser.userId}
```

위와 같이 사용할 수 있다.

##### 3-3-2. @ModelAttribute를 메소드에 사용하기

@ModelAttribute를 메소드에 사용하게 되면 어느 URL 요청에서도 실행되는 메소드가 완성된다.
다음과 같이 @ModelAttribute를 사용하게 되면 언제든지 value 값을 이용해
View에 띄워줄 수 있다.

```java
@ModelAttribute("springVersion")
public String getVersion() {
    return org.springframework.core.SpringVersion.getVersion();
}
```

### 4. 프로퍼티 데이터 타입

커맨드 객체에 있는 프로퍼티의 타입을 기본적으로 String으로 세팅해놓으면
form 태그에서 어떤 값이 들어와도 받을 수 있게 된다.

그런데 form 태그에서 주는 값을 기준으로 자동으로 타입을 변경하게 만들 수 있다.
만약 HTML의 form 태그가 저렇게 되었있다면 String, String[], int, boolean, List 값을 받으려면 어떻게 해야할까?

```html
<form action="/project/join" method="get">
    <input type="text" name="userId"/>
    <input type="password" name="userPw"/>
    <input type="text" name="userAge"/>
    <input type="radio" name="userAgree" value="true"/>
    <input type="radio" name="userAgree" value="false"/>
    <input type="checkbox" name="userHobby" value="soccer"/>
    <input type="checkbox" name="userHobby" value="basketball"/>
    <input type="checkbox" name="userHobby" value="baseball"/>
    <input type="text" name="userPhones[0].userPhone1"/>
    <input type="text" name="userPhones[0].userPhone2"/>
    <input type="text" name="userPhones[0].userPhone3"/>
    <input type="text" name="userPhones[1].userPhone1"/>
    <input type="text" name="userPhones[1].userPhone2"/>
    <input type="text" name="userPhones[1].userPhone3"/>
</form>
```

위에서 만들었었던 User 클래스를 다음과 같이 바꿔보자.

```java
public class User {
    private String userId;
    private String userPw;
    private int userAge;
    private boolean userAgree;
    private String[] userHobby;
    private List<UserPhone> userPhones;
    
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }
    public String getUserPw() {
        return userPw;
    }
    public void setUserAge(int userAge) {
        this.userAge = userAge;
    }
    public int getUserAge() {
        return userAge;
    }
    public void setUserAgree(boolean userAgree) {
        this.userAgree = userAgree;
    }
    public boolean getUserAgree() {
        return userAgree;
    }
    public void setUserHobby(String[] userHobby) {
        this.userHobby = userHobby;
    }
    public String[] getUserHobby() {
        return userHobby;
    }
    public void setUserPhones(List<UserPhone> userPhones) {
        this.userPhones = userPhones;
    }
    public List<UserPhone> getUserPhones() {
        return userPhones;
    }
}
```

이렇게 자동으로 String, int, boolean, String[], List<> 형식으로 캐스팅이 된다.
그런데 다른 것들은 쉽게 이해가 되는데 List 형식은 쉽게 이해 되지 않을 수도 있다.
이 List 형식을 확인하려면 UserPhone에 대해서 알아보아야 한다.

```java
public class UserPhone {
    private String userPhone1;
    private String userPhone2;
    private String userPhone3;
    
    public void setUserPhone1(String userPhone1) {
        this.userPhone1 = userPhone1;
    }
    public String getUserPhone1() {
        return userPhone1;
    }
    public void setUserPhone2(String userPhone2) {
        this.userPhone2 = userPhone2;
    }
    public String getUserPhone2() {
        return userPhone2;
    }
    public void setUserPhone3(String userPhone3) {
        this.userPhone3 = userPhone3;
    }
    public String getUserPhone3() {
        return userPhone3;
    }
}
```

이렇게 되어 있을 경우 User 객체의 userPhones 리스트를 배열로 취급하여
[0]번의 userPhone1, userPhone2, userPhone3의 값을 명시하면 된다.

### ModelAndView 사용하기

기존에 @RequestMapping을 사용하는 메소드는 기본적으로 Model 객체를 매개변수로 받는다.
그런데 이 Model 객체를 사용할 경우 Model에 View에 적용할 데이터들을
addAttribute() 메소드를 이용해서 저장하고 보여줄 JSP 파일의 이름을 리턴하는 형식으로 사용한다.

여기서 Model 객체 대신 ModelAndView 객체를 사용할 수 있다.
정확히는 매개변수로 Model 객체를 그대로 두고 ModelAndView 객체를 새로 생성하여
addObject() 메소드로 View로 보여줄 데이터를 저장하고,
setViewName() 메소드로 보여줄 View의 이름을 저장한다.
그리고 리턴값을 String에서 ModelAndView를 

다음과 같이 사용할 수 있다.

```java
@RequestMapping(value="/login", method=RequestMethod.GET)
public ModelAndView login(Model model) {
    ModelAndView mav = new ModelAndView();
    
    mav.addObject(model.getParameter("userId"));
    mav.addObject(model.getParameter("userPw"));
    mav.addObject(model.getParameter("userMail"));
    mav.addObject(model.getParameter("userAge"));
    
    return mav;
}
```

