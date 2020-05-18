## 세션[Session]과 쿠키[Cookie]

이번에는 스프링에서의 Session(세션)과 Cookie(쿠키)에 대해서 알아보았다.
그럼 목차부터 알아보도록하자.

1. 세션과 쿠키를 사용하는 이유
2. 세션을 사용하기
3. 쿠키를 사용하기



### 1. 세션(Session)과 쿠키(Cookie)를 사용하는 이유

먼저, 스프링은 HTTP 프로토콜을 기반으로 한 웹 개발을 위한 프레임워크이다.
따라서 HTTP를 사용한다는 특징이 있는데
HTTP 프로토콜은 Connectionless 하다는 특징이 있다.
여기서 Connectionless 하다는 것은 클라이언트와 서버간의 연결을 지속적으로 하지 않는 다는 뜻이다.

그렇기 때문에 HTTP 프로토콜은 클라이언트에서 요청을 보내면 그 요청을 서버가 받고
처리한 뒤 응답을 클라이언트에게 넘겨주면 연결을 끊게 된다.

이러한 특징 덕분에 서버의 부하를 막을 수 있다는 장점이 있지만,
Connectionless 해지기 때문에 지속적인 연결이 불가능하다는 단점이 있다.
그래서 이 단점을 극복하기 위해서 세션과 쿠키를 사용한다.

세션은 어떠한 정보를 서버에 저장하여 클라이언트와의 연결을 지속시키는 기술이라면
쿠키는 어떠한 정보를 클라이언트에 저장하여 서버와의 연결을 지속시키는 기술이라고 할 수 있다.

### 2. 세션을 사용하기

스프링에서 세션을 사용하려면 HttpServletRequest를 매개변수로 받아 사용하거나
HttpSession을 매개변수로 받아서 사용하는 방법이 있다.

#### 2-1. HttpServletRequest 사용하기

HttpServletRequest는 기존에 form 태그에서 즉, 클라이언트의 요청을
서버에서 받아와서 사용하기 위해서 사용했었다.

이 HttpServletRequest를 이용해서 세션을 사용하려면
HttpServletRequest의 메소드인 getSession() 메소드를 이용하면 된다.
getSession() 메소드의 리턴값은 HttpSession 객체이다.
따라서 다음에 소개할 HttpSession은 이 객체를 말한다.

HttpSession의 주요 메소드는 다음과 같다.

```java
public String getId();	// DEEF288F5A2269C790D6CCF9A6D7E138와 같이 32자리의 ID를 리턴한다.
public void setAttribute(String name, Object value);
public Object getAttribute(String name);
public void removeAttribute(String name);
public void setMaxInactiveInterval(int iterval);
public int getMaxInactiveInterval();
public void invalidate();
```

##### 2-1-1. getId()

세션의 고유한 아이디를 리턴한다.
아이디는 DEEF288F5A2269C790D6CCF9A6D7E138와 같이
32자리의 String 타입의 아이디를 리턴하게 된다.

##### 2-1-2. setAttribute()

매개변수로 들어온 name을 키로, value를 값으로 하여
마치 Map과 같은 형태로 세션을 저장한다.

세션에 값을 저장하기 위한 메소드이기 때문에 가장 많이 쓰이는 메소드 중 하나이다.

##### 2-1-3. getAttribute()

setAttribute() 메소드를 통해 저장한 세션의 정보를 얻어오는데 사용한다.
매개변수의 name과 일치하는 name을 가진 세션의 value를 리턴한다.

##### 2-1-4. removeAttribute()

name과 일치하는 name을 가진 세션을 삭제한다.

##### 2-1-5. setMaxInactiveInterval()

매개변수로 들어온 iterval을 초 단위로 하여 세션의 지속시간을 정한다.
60이면 60초이고 60 * 60 * 24은 하루이다.

##### 2-1-6. getMaxInactiveInterval()

남은 세션의 지속시간을 리턴한다.

##### 2-1-7. invalidate()

세션에 있는 모든 세션 정보를 삭제한다.
즉, 세션을 삭제하는 것과 같다.

#### 2-2. HttpSession 사용하기

HttpServletRequest의 getSession을 통해 HttpSession을 얻었다면,
이 HttpSession을 매개변수로 받으면 이 과정을 제거하고 사용할 수 있다.

하지만 HttpSession은 form 태그로 들어오는 클라이언트의 요청 값을 얻을 수 없기 때문에
한정적으로 사용이 가능하다는 것을 알 수 있다.

사용하는 방법은 HttpServletRequest의 getSession()으로 만들어진 HttpSession과 동일하다.

### 3. 쿠키를 사용하기

쿠키는 세션과는 반대로 서버가 아닌 클라이언트에 저장한다.
따라서 HttpServletRequest에 담았던 세션과는 반대로
HttpServletResponse에 쿠키를 담는다.

쿠키를 사용하는 전체적인 흐름을 보면 다음과 같다.

1. Cookie를 new 키워드를 이용해 생성한다.
2. Cookie에 대한 설정을 한다.
3. Cookie를 HttpServletResponse에 addCookie()를 이용해 저장한다.
4. View 즉, JSP에서 JSTL을 이용해 사용한다.

#### 3-1. 쿠키 생성하기

위에서 말했듯 쿠키는 new 키워드를 통해 직접 생성하여야 한다.
Cookie 클래스의 생성자는 String 타입의 name과 String 타입의 value를 받는다.
쿠키는 세션과 마찬가지로 name을 통해 value를 얻어올 수 있다.

#### 3-2. 쿠키 설정하기

쿠키를 설정하는 쿠키의 주요 메소드는 다음과 같다.

```java
public String getName();
public void setValue(String value);
public String getValue();
public void setDomain(String pattern);
public String getDomain();
public void setPath(String url);
public String getPath();
public void setMaxAge(int expiry);
public int getMaxAge();
```

##### 3-2-1. getName()

생성자에서 설정한 name을 리턴한다.

##### 3-2-2. setValue() - getValue()

생성자에서 설정한 value를 설정하고 리턴한다.

##### 3-2-3. setDomain() - getDomain()

쿠키의 domain 필드의 값을 설정하고 리턴하는 메소드인데
domain은 쿠키가 전송될 서버의 도메인을 지정한다.
setDomain() 메소드를 사용하기 전까지는 null의 값을 가진다.

이 값은 명시적인 것이며 실제로 전송되는 도메인이 변경되지 않는다.

##### 3-2-4. setPath() - getPath()

쿠키의 path 필드의 값을 설정하고 리턴하는 메소드이며
setDomain(), getDomain() 메소드처럼 명시적인 값을 가지며
쿠키를 전송할 경로를 지정한다.

##### 3-2-5. setMaxAge() - getMaxAge()

쿠키의 수명을 정하는데
세션에서의 setMaxInactiveInterval(), getMaxInactiveInterval() 메소드와 같은 역할을 한다.
단위는 [초] 단위이며 0일 경우 쿠키의 시간이 만료되어 사라진다.

세션에서는 invalidate() 메소드를 이용해서 세션을 삭제했지만
쿠키는 setMaxAge() 메소드의 매개변수로 0을 줌으로써 삭제할 수 있다.

#### 3-3. 쿠키 저장하기

세션이 HttpServletRequest에 저장되었다면
쿠키는 클라이언트로 응답을 해야하므로 HttpServletResponse에 저장한다.
HttpServletResponse의 addCookie() 메소드를 이용해서 쿠키를 저장할 수 있다.

#### 3-4. 쿠키 사용하기

쿠키를 클라이언트에서 사용하기 위해서는
View단의 JSP를 살펴보아야 한다.
JSP에서는 보다 JSP를 HTML처럼 보이게 하기 위해서
JSTL이라는 문법을 지원하는데
JSTL의 장점은 자바 코드를 ${}를 이용해서 간단하게 삽입할 수 있다는 점이다.

그래서 쿠키도 쿠키의 name을 이용하여 JSTL과 같이 사용할 수 있다.