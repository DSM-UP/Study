## JSP - Email, html로 꾸미기

- 일반적으로 email을 보내는 방법은 저번에 공부해보았다.
- 따라서 대부분의 사이트가 지원하는 이메일 인증방식에서는 이메일의 배경이 꾸며져 있는 것을 볼 수 있다.
- 이메일의 배경은 대부분 html로 설정되어 있는데 jsp에서 이메일을 보낼 때 어떻게 html 파일을 보내줘야 할까?
- 정답은 일반적으로 사용하고 있던 코드에서 확인할 수 있었다.

```java
MimeMessage message = new MimeMessage(mailSession);
InternetAddress from = new InternetAddress("jinjin0816@naver.com");
message.setFrom(from);
message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("0816jinjin@gmail.com"));
message.setSubject("DDaMamIn SNS에서 인증 요청이 왔습니다.");
message.setContent(AuthenticationNumber.getHTML(), "text/html;charset=UTF-8");
message.setSentDate(new Date());
```

- 저번에 만들었던 코드와 setContent() 함수가 달라진 것을 볼 수 있다.
- 예전에는 text/plain 이라고 되어 있던 것이 html 코드를 보낼것이라는 text/html 이라는 것으로 바뀌었고, 저번에는 한글이 깨지는 현상이 일어났었는데 charset=UTF-8 로 설정해줌으로써 깨지지 않게 바꾸었다.
- 그리고 저번에는 보지못한 AuthenticationNumber.getHTML() 이라는 함수가 존재한다.
- 객체를 생성하지 않은 것으로 보아 static으로 선언한 것을 알 수 있다.
- 물론 이 함수는 내가 직접 만들었다.
- 이 함수는 아래와 같이 html 코드를 String 형으로 return 해주는 함수이다.

```java
public String getHTML() {
		String html = "<head><style>"
				+ "#back {"
						+ "position : absolute;"
						+ "left : 50%;"
						+ "background-color : #7F00FFFF;"
						+ "height : 300px;"
						+ "width : 500px;"
				+ "}"
				+ "#injeung {"
						+ "text-align : center;"
						+ "color : white;"
						+ "font-size : 30px;"
				+ "}"
				+ "#content {"
						+ "text-align : center;"
						+ "color : white;"
						+ "font-size : 60px;"
				+ "}"
			+ "</style></head>"
			+ "<body>"
					+ "<div id='back'>"
							+ "<p id='injeung'>인증번호</p>"
							+ "<p id='content'>" + createNum() + "</p>"
					+ "</div>"
			+ "</body>";
	return html;
}
```

- 위와 같이 그냥 미리 설정해놓은 html 코드를 return  하는 것을 볼 수 있다.
- 이렇게 html 코드를 작성해놓으면 작성해 놓은 html 코드가 이메일에 영향을 미처서 그대로 보낼 수 있다.