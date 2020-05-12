## Service와 DAO 객체 구현

스프링은 Controller, Service, DAO와 같은 객체들로 구성되어 있다.
전에 Controller는 @Controller를 이용해서 구현했었다.
Service 객체와 DAO객체는 예상대로 @Service를 이용해서 구현할 수 있다.
하지만 @Service 외에도 @Repository나 @Component가 존재하는데
각각의 어노테이션은 같은 기능을 하지만 사용하는 곳이 다르고 조금씩 속성의 차이가 있다.

다음은 데이터베이스를 사용하지 않고 간단하게 로그인, 회원가입을 가능하게 하는 예제이다.
이번에는 코드가 많으므로 전부 다 작성하고 이해해보는 것이 중요하다.

```java
/* MainController.java */

package com.test.project;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String main(Model model) {
		return "main";
	}
}
```

```java
/* UserController.java */

package com.test.project;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {
	
	@Autowired
	private UserService service;
	
	@RequestMapping(value="/join", method=RequestMethod.POST)
	public String userJoin(Model model, HttpServletRequest request) {
		String userId = request.getParameter("userId");
		String userPw = request.getParameter("userPw");
		String userAge = request.getParameter("userAge");
		String userMail = request.getParameter("userMail");
		
		System.out.println("userId : " + userId);
		System.out.println("userPw : " + userPw);
		System.out.println("userAge : " + userAge);
		System.out.println("userMail : " + userMail);
		
		service.userInsert(userId, userPw, userAge, userMail);
		
		model.addAttribute("userId", userId);
		model.addAttribute("userPw", userPw);
		model.addAttribute("userAge", userAge);
		model.addAttribute("userMail", userMail);
		
		return "userJoinOK";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String userLogin(Model model, HttpServletRequest request) {
		String userId = request.getParameter("userId");
		String userPw = request.getParameter("userPw");

		System.out.println("userId : " + userId);
		System.out.println("userPw : " + userPw);
		
		User user = service.userFind(userId, userPw);
		
		try {
			model.addAttribute("userId", user.getUserId());
			model.addAttribute("userPw", user.getUserPw());
		} catch(NullPointerException e) {
			System.out.println("일치하는 회원정보가 존재하지 않습니다.");
			return "error";
		} catch(Exception e) {
			e.printStackTrace();
			return "error";
		}
		
		return "userLoginOK";
	}
}
```

```java
/* UserService.java */

package com.test.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	UserDAO userDAO;
	
	public void userInsert(String userId, String userPw, String userAge, String userMail) {
		userDAO.insert(userId, userPw, userAge, userMail);
	}
	
	public User userFind(String userId, String userPw) {
		return userDAO.select(userId);
	}
}
```

```java
/* UserDAO.java */

package com.test.project;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class UserDAO {
	private Map<String,User> database;
	
	public UserDAO() {
		this.database = new HashMap<String, User>();
	}
	
	public void insert(String userId, String userPw, String userAge, String userMail) {
		User user = new User(userId, userPw, userAge, userMail);
		database.put(userId, user);
	}
	
	public User select(String userId) {
		return database.get(userId);
	}
}
```

```java
/* User.java */

package com.test.project;

public class User {
	private String userId;
	private String userPw;
	private String userAge;
	private String userMail;
	
	public User(String userId, String userPw, String userAge, String userMail) {
		this.userId = userId;
		this.userPw = userPw;
		this.userAge = userAge;
		this.userMail = userMail;
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserPw() {
		return userPw;
	}
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	public String getUserAge() {
		return userAge;
	}
	public void setUserAge(String userAge) {
		this.userAge = userAge;
	}
	public String getUserMail() {
		return userMail;
	}
	public void setUserMail(String userMail) {
		this.userMail = userMail;
	}
}
```

```jsp
<!-- userJoinOK.jsp -->

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>userJoinOK</title>
</head>
<body>

<p>회원가입하신 것을 축하드립니다.</p>
<a href="/project/resources/html/index.html">메인으로</a>

</body>
</html>
```

```jsp
<!-- userLoginOK.jsp -->

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>userLoginOK</title>
</head>
<body>

<p>로그인하신 것을 축하드립니다.</p>
<a href="/project/resources/html/index.html">메인으로</a>

</body>
</html>
```

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>메인 페이지</title>
</head>
<body>
    
<h1>메인 페이지 입니다.</h1>
<a href="/project/resources/html/login.html">로그인하기</a>
<a href="/project/resources/html/join.html">회원가입하기</a>
    
</body>
</html>
```

```html
<!-- login.html -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>로그인 페이지</title>
</head>
<body>
    
<h1>로그인 페이지 입니다.</h1>

<form action="/project/login" method="post">
	아이디 : <input type="text" name="userId"/>
	비밀번호 : <input type="password" name="userPw"/>
	<input type="submit" name="Login"/>
</form>
<a href="/project/resources/html/index.html">메인으로</a>
    
</body>
</html>
```

```html
<!-- join.html -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>로그인 페이지</title>
</head>
<body>
    
<h1>회원가입 페이지 입니다.</h1>

<form action="/project/join" method="post">
	아이디 : <input type="text" name="userId"/>
	비밀번호 : <input type="password" name="userPw"/>
	나이 : <input type="text" name="userAge"/>
	메일 : <input type="text" name="userMail"/>
	<input type="submit" value="Join"/>
</form>
<a href="/project/resources/html/index.html">메인으로</a>
    
</body>
</html>
```

이렇게 많은 예제 코드가 있엇는데 전체적인 동작은 다음과 같다.
시작은 index.html에서 시작한다.
로그인을 위해 login.html로 갈 수 있고 회원가입을 위해 join.html로 갈 수 있다.

join.html에서 회원가입을 시도하면 /project/join 으로 접속 시도한다.
그러면 /project/join 즉, /join에 접속 시도할 때 실행되는 @RequestMapping을 가지고 있는
메소드는 UserController 클래스에 존재하므로
그 안의 userJoin() 메소드를 실행한다.
userJoin() 메소드에서는 getParameter() 메소드를 이용해서
userId, userPw, userAge, userMail을 가져와 service를 통해 DB에 저장한다.
여기서 DB는 UserDAO 클래스의 HashMap으로 대체한다.
이렇게 성공적으로 회원가입에 성공하면 userJoinOK.jsp로 접속하여
정상적으로 회원가입이 되었다는 것을 알려준다.

이렇게 회원가입을 다 하고 index.html로 돌아온 뒤 login.html로 들어가
로그인 시도를 하게 되면 /project/login 즉, /login 접속을 시도하게 되면
UserController 클래스에 존재하는 userLogin() 메소드를 실행하여
로그인을 성공적으로 합니다.
그러면 UserLoginOK.jsp 파일에 들어가서 성공적으로 로그인이 되었다는 것을 알려줍니다.

여기서 UserController 클래스 내에서 필드로 사용되고 있는 UserService가
@Service를 사용한 서비스이다.
서비스는 Controller와 View를 제외한 것들을 생각하면 된다.
따라서 DAO도 @Service를 작성하는 서비스 객체이다.
DAO는 Database Access Object의 약자로서, 데이터베이스에 접근하기 위해서 사용되는
메소드들의 집합이다.
따라서 데이터베이스에 접근하기 위해서 insert(), select() 메소드를 지원하게 된다.
물론 delete, update와 같이 더 만들 수 있지만 현재는 필요 없는 기능이기 때문에 제외했다.

현재는 @Service를 사용했지만 @Repository, @Component도 존재하며
이들의 차이점은 나중에 설명할 것이다.