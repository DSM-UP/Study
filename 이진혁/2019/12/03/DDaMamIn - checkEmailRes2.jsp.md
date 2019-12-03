## DDaMamIn - checkEmailRes2.jsp

- DDaMamIn SNS을 만드는 프로젝트인 DDaMamIn에서 Email을 체크시 email을 보내는데에 있어서 오류가 발생하였을 때 요청을 보내서 처리하는 jsp 파일입니다.

- 사실 jsp 파일이라고 하기에도 뭐할 정도로 적은 jsp 문법과 아직 경우의 수가 없어서 대부분 javascript로 짜여있다는 점, 그리고 코드 자체가 그리 길지 않다는 점에서 필요 없다고 생각할 수도 있습니다.

- 하지만 바로 위에서 말했듯이 경우의 수가 증가하게 되면 이 코드들을 바꾸어서 경우의 수에 따른 다른 처리를 해야 하기 때문에 필요한 페이지 입니다.

- 코드는 아래와 같습니다.

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="EUC-KR"%><%!
    String ctxPath = null;
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결과를 확인...</title>
</head>
<body>
	<script>
		location.href = "http://localhost:8081/DDaMamIn/";
		alert("이메일을 찾을 수 없습니다.");
	</script>
</body>
</html>
```

- 위의 코드는 다음과 같은 기능을 합니다.
- 첫 번째로 javascript의 alert 창을 띄우고 location.href 로 인해 html의 끝에 다다르게 되면 효과가 발생되어 http://localhost:8081/DDaMamIn/ 라는 주소에 redirect 되게 됩니다.
- 이렇게 보면 고작 두 줄의 코드밖에 존재하지 않는 필요없는 페이지라는 것을 느낄수도 있겠지만 위에서 말했던 페이지의 중요성과 <%! String ctxPath = null; %> 라는 코드를 보면 알겠지만 Path를 설정해줄 수 있는 코드가 존재하지만 쓰이지 않는다는 것을 알 수 있다.
- 이것은 원래는 java코드로 redirect 를 하려고 했으나 alert과 redirect를 해놓으면 alert 창의 확인을 누르기 전에 redirect가 되어 페이지가 바로 바뀌게 된다.



- 그리고 한 가지 중요한 문제가 존재한다.
- 아래의 코드는 checkEmail2.jsp 라는 페이지인데 아래의 코드는 코드를 보면서 설명하겠다.

```java
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="javax.mail.Authenticator" %>
<%@ page import="java.util.Properties" %>
<%@ page import="javax.mail.internet.MimeMessage" %>
<%@ page import="javax.mail.internet.InternetAddress" %>
<%@ page import="javax.mail.Transport" %>
<%@ page import="javax.mail.Session" %>
<%@ page import="javax.mail.PasswordAuthentication" %>
<%@ page import="javax.mail.MessagingException" %>
<%@ page import="javax.mail.Message" %>
<%@ page import="user.STMPAuthenticator" %>
<%@ page import="java.util.Date" %>
<%@ page import="user.AuthenticationNumber" %>
<%!
    String ctxPath = null;
    String email = null;
    AuthenticationNumber an = null;
    String amho = null;
    boolean check = true;
%><%
	ctxPath = request.getContextPath();
	request.setCharacterEncoding("UTF-8");
	
	email = request.getParameter("email");
	if(email == null || email.equals(""))
		System.out.println("email : null");
	else
		System.out.println("email : " + email);
	
	Properties p = new Properties();
	p.put("mail.transport.protocol", "smtp");
	p.put("mail.smtp.host", "smtp.naver.com");
	p.put("mail.stmt.port", "465");
	p.put("mail.smtp.starttls.enable","true");
	p.put("mail.smtp.auth", "true");
	
	an = new AuthenticationNumber();
	amho = an.getNum();
	an.setCode(amho);
	
	try {
		Authenticator auth = new STMPAuthenticator();
		
		Session mailSession = Session.getDefaultInstance(p, auth);
		
		MimeMessage message = new MimeMessage(mailSession);
		InternetAddress from = new InternetAddress("보내는 이메일");
		message.setFrom(from);
		message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
		message.setSubject("DDaMamIn SNS에서 인증 요청이 왔습니다.");
		message.setContent(an.getHTML(), "text/html; charset=UTF-8");
		message.setSentDate(new Date());
		
		Transport.send(message);
	} catch(Exception e) {
		e.printStackTrace();
		check = false;
	} finally {
		session.setAttribute("amho", amho);
		session.setMaxInactiveInterval(60*20);
	}
	
	System.out.println(check);
	
	if(check)
		response.sendRedirect( ctxPath + "/index.jsp" );
	else
		response.sendRedirect( ctxPath + "/checkEmailRes2.jsp");
%>
```

- 회원가입을 할 때 email check를 하게 되면 form을 통해 그 이메일 주소를 서버에서 받고 그 이메일 주소로 메일을 보낸 뒤 만약 그 메일이 존재하지 않으면 check라는 boolean 형 변수에 false 값을 저장하고 아니면 true 기본 값을 유지한다.
- 이 때 만약 check가 true 라면 정상적인 이메일 통신이 되었으므로 index.jsp 파일로 보내고
- 만약 오류가 발생하거나 정상적인 email이 아니라면 아까 봤던 checkEmailRes2.jsp 파일로 보낸다.
- 하지만 catch 문에서 check = false 로 바꾸는 것을 볼 수 있는데 여기서 중요한 문제가 발생한다.
- 이메일이 정상적인 작동을 하더라도 오류가 발생한다는 것이다. 그 오류의 명은 아래와 같다.


```text
javax.mail.SendFailedException: No recipient addresses
```


- 이를 보면 smtp 오류라고 하는데 이 오류에 대해서는 자세히 확인해봐야 할 것 같다.
- 내일에는 이 오류를 고치고 checkId2.jsp 페이지를 다시 만들어볼 생각이다.