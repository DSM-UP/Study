## STS를 이용한 웹 프로젝트

스프링으로 웹 프로젝트를 구성할 때 STS(Spring Tool Suit)이라는 이클립스 플러그인을 다운로드하면
쉽게 웹 프로젝트 구성을 할 수 있다.

다음에 STS를 이용하지 않고 웹 프로젝트를 만드는 방법에 대해서 공부하겠지만
STS를 사용할 수 있는 경우에는 웬만하면 사용하는 것이 좋다.
실제로 STS를 사용하면 자동으로 만들어주는 폴더들의 형식을
STS를 사용하지 않으면 직접 만들어주어야 하기 때문이다.

### 1. STS 다운로드하기

STS 플러그인을 사용하기 위해서는 당연히 다운로드를 해야한다.
사이트에 직접 가서 다운로드하는 방법도 있겠지만
이클립스에서는 Marketplace를 지원하기 때문에 이클립스 내에서 다운로드가 가능하다.
다운로드하는 방법은 다음과 같다.

1. 왼쪽 상단의 [Help] -> [Eclipse Marketplace]에 들어간다.
2. 위의 배너에서 [Search]를 클릭하고 [Find:]에 'STS'라고 검색한다.
3. 그러면 Spring Tools 3와 Spring Tools 4가 존재하는데 Spring Tools 3를 Install 한다.
   하지만 Spring Tools 3도 두 개가 있다는 것을 알 수 있는데 사실 둘 중 아무거나 다운로드하여도
   둘 다 다운로드가 되므로 아무거나 다운로드 하면 된다.
4. 여러 가지 선택할 것이 뜨는데 디폴트로 모두 선택되어 있으므로 [Confirm]을 클릭한다.
5. 다운로드를 완료하고 이클립스를 다시 시작한다.

위 과정을 모두 거치면 정상적으로 이클립스에 STS를 다운로드할 수 있다.

### 2. Spring Project 생성하기

스프링 프로젝트에는 여러 가지 프로젝트 종류가 존재한다.
하지만 우리는 Spring Legacy Project를 사용할 것이다.
왜냐하면 현재 우리나라 대부분의 스프링 강의는 Spring Legacy Project를 사용하기 때문이다.
그리고 STS 4에는 Spring Legacy Project가 없기 때문에
STS 4가 아닌 STS 3를 다운로드한 것이다.

그래서 Spring Legacy Project를 생성하는 방법은 다음과 같다.

1. 왼쪽 상단의 [File] -> [New] -> [Other...] 클릭
2. [Wizards:]에 'spring'을 작성(작성만하고 검색은 하지 말자)
3. Spring 폴더의 Spring Legacy Project를 선택하고 [Next] 클릭
4. Project name:에 원하는 프로젝트명을 작성하고
   Tempates:의 Spring MVC Project를 선택하고 [Next] 클릭
5. 패키지명을 삼단 구조로 작성한 뒤 [Finish] 클릭

이렇게 Spring Legacy Project를 생성하면 STS에서 제공하는 파일 구조가 완성이 된다.
기본적인 파일 구조는 다음과 같다.

```file_structure
src
	main
		java
			com
				mycompany
					myapp
						HomeController.java
		resource
		webapp
			resources
			WEB-INF
				classes
				spring
					appServlet
						servlet-context.xml
					root-context.xml
				views
					home.jsp
				web.xml
	test
		java
			com
				mycompany
					myapp
		resource
			log4j.xml
```

STS는 자동으로 이렇게 파일 구조를 만들어주지만 STS 없이 웹 프로그래밍을 할 때
test 폴더와 같은 부분은 없어도 무방하다.

그리고 이클립스 IDE에서는 main 폴더 밑의 java 폴더를 삭제하고
위에 src/main/java 폴더와, src/main/resource 폴더로 따로 나누는 경우도 있습니다.

또한 자동으로 생성해주는 Controller인 HomeController.java 파일과 View인 home.jsp 파일이 존재한다.

### 3. 스프링 프로젝트 실행하기

스프링 프로젝트를 실행하기 위해서는 Controller와 View를 만들어주어야 한다.
하지만 처음 프로젝트를 생성했을 때 디폴트로 만들어주는 Controller와 View가 존재하므로
이에 대해 한 번 알아보아야 한다.

```java
package com.mycompany.myapp;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat =
            DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
}

/*
디폴트 Controller인 HomeController 클래스는 @Controller를 이용해서
이 클래스가 Controller라는 것을 명시하고
@RequestMapping을 이용해서 path와 보내는 방식을 결정할 수 있다.
메소드의 매개변수인 Model은 서버 안에서 데이터를 전달하는 개체이고
Locale은 필수요소가 아니다.
HomeController 클래스가 하는 일이 현재 시각을 출력해주는 것이기 때문에 존재한다.
리턴값으로 "home"을 주는데 이 문자열을 통해 Model 값을 View에 보내게 된다.
리턴값이 home이므로 home.jsp라는 View에 보낸다.
*/
```

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
</body>
</html>

<!--
Controller에서 받은 Model 값을 이용해서 serverTime을 찍어내서 화면에 출력한다.
-->
```

이제 이 코드를 실행시켜야 하는데
클래스에 대고 [Ctrl] + [F11]을 하면 이상한 URL로 접근해서 404 에러가 발생하게 된다.
그래서 프로젝트 자체를 실행하여야 하므로 프로젝트에 우클릭하고 [Run As] -> [Run on Server] 클릭을 통해
프로젝트를 실행시킬 수 있다.

그럼 디폴트로 만들어진 Controller와 View가 아닌 내가 직접 만드려면 그 위치에 각각의 Controller와 View를
작성하면 된다.

Test.java Controller와 test.jsp View를 만들면 다음과 같다.

```java
package com.mycompany.myapp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String test(Model model) {
		model.addAttribute("SpringVersion",
                           org.springframework.core.SpringVersion.getVersion());
		return "test";
	}
}

/*
HomeController는 / path를 가지고 있기 때문에 처음 실행하면 HomeController가 실행되고
/test/ URL을 입력하면 Test가 실행된다.

org.springframework.core.SpringVersion.getVersion()은
스프링의 버전을 출력하는 코드이다.
*/
```

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Test</title>
</head>
<body>
<h1>
	Hello world!
</h1>

<P>This spring version is ${SpringVersion}</P>
</body>
</html>
```

프로젝트를 실행하고 http://localhost:8090/myapp/test/ 를 치면
Hello world!
This spring version is 4.3.4.RELEASE
가 출력이 된다.