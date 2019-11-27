## JSP - email 보내기

- email을 보내기 위해서는 총 세 가지의 절차가 필요하다.

#### 1. Session 생성하기

- 첫 번째 절차인 Session을 생성하는 방법은 간단하다.

```java
Session mailSession = Session.getDefaultInstance(p, auth);
```

- 위와 같은 java코드를 보면 알겠지만 다른 클래스의 인스턴스 생성 방법과 조금 다른 것을 알 수 있다.
- 먼저 mailSession이라는 참조형 변수가 가리키는 인스턴스가 Session.getDefaultInstance() 라는 것이다.
- 이 Session.getDefaultInstance()을 통해 return 되는 문장이 Session의 인스턴스라는 것을 알 수 있다.
- 그리고 매개변수로 넘어간 p 와 auth가 뭔지 궁금할 것이다.
- 일단 첫 번째로 매개변수로 넘어간 p는 아래와 같은 코드에서 생성되었다.

```java
Properties p = new Properties();
p.put("mail.transport.protocol", "smtp");
p.put("mail.smtp.host", "smtp.naver.com");
p.put("mail.stmt.port", "465");
p.put("mail.smtp.starttls.enable","true");
p.put("mail.smtp.auth", "true");
```

- 위의 코드를 보면 Properties라는 클래스에서 생성된 객체라는 것을 알 수 있다.
- 그리고 이 p라는 객체에는 put() 이라는 메소드를 이용해서 smtp의 정보를 담을 수 있게 설계되어 있는데 이 smtp는 메일에 메세지를 보내기 위한 정보라고 생각하면 되겠다.

- 두 번째로 매개변수로 넘어간 auth는 아래와 같은 코드에서 생성되었다.

```java
Authenticator auth = new STMPAuthenticator();
```

- 이렇게 Authenticator 라는 클래스 또는 인터페이스에 상속 또는 구현 되어 있는 STMPAuthenticator 라는 클래스를 가리키는 참조형 변수를 선언하였는데 그 참조형 변수가 auth인 것을 확인할 수 있다.

- Authenticator 라는 클래스는 mail.jar 파일 안에 존재하는 클래스로써 일반적으로 import를 통해 사용할 수 있지만 STMPAuthenticator 라는 클래스는 직접 구현해야 한다.
- 아래의 코드는 STMPAuthenticator 클래스의 구현 코드이다.


```java
public class STMPAuthenticator extends Authenticator {
	@Override
	protected PasswordAuthentication getPasswordAuthentication() {
		String username = "이메일 아이디";
		String password = "이메일 비밀번호";
		return new PasswordAuthentication(username, password);
	}
}
```

- STMPAuthenticator 클래스는 PasswordAuthentication() 이라는 메소드를 상속받고 있는 클래스 라는 것을 알 수 있다.
- 그리고 이 메소드에는 이메일 아이디와 이메일 비밀번호를 얻어와서 return 해준다는 것을 알 수 있다.


#### 2. MimeMessage 클래스에 메세지 정보 담기

- 일단 MimeMessage 클래스 자체는 아까 만든 Session을 이용해서 만들어진다. 아래의 코드를 보면 쉽게 알 수 있다.

```java
MimeMessage message = new MimeMessage(mailSession);
InternetAddress from = new InternetAddress("보낸 사람의 이메일");
message.setFrom(from);
message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("받을 사람의 이메일"));
message.setSubject("test용 제목");
message.setContent("test용 내용", "text/plain");
message.setSentDate(new Date());
```

- 첫 번째 줄에서 message 라는 메세지 객체를 생성한 것을 알 수 있다. 이 과정에서 전에 만들었던 Session 이 사용되는 것이다.
- 그리고 INternetAddress 클래스를 이용하여 보낼 사람 즉, 나의 이메일을 적어주고 setFrom, setRecipients, setSubject, setContent, setSentDate라는 메소드를 이용해서 각각 보내는 사람의 이메일, 받는 사람의 이메일, 메일의 제목, 메일의 내용, 메일의 보낸 시간 이라는 내용을 담아서 저장하게 된다.

#### 3. Transport를 이용하여 메일 보내기

- 이 Transport는 아래의 코드에 나오는 딱 한 줄만 실행하면 된다.

```java
Transport.send(message);
```

- Transport라는 클래스에 send() 메소드를 이용해서 지금까지 작성해온 메세지의 정보를 매개변수로 넘겨주기만 하면 된다.
- 이 Transport 라는 클래스는 객체를 생성하지 않고 메소드를 사용할 수 있는 것으로 보아 static으로 정의된 것을 알 수 있다.