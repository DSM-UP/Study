## DDaMamIn - checkEmailRes2 Error Correction

- 어제 checkEmailRes2.jsp 을 만들어서 이메일을 체크하면서 발생하는 것들을 처리하는 화면을 만들었었다.
- 하지만 checkEmail2.jsp 에서 메일에서 오류가 나든 안 나든 오류가 try에서 오류가 발생하여 catch에서 check라는 boolean 형 변수를 false로 바꿔주는 사태가 벌어지게 되었다.
- 따라서 제대로 된 이메일을 치든 없는 이메일을 치든 언제나 checkEmailRes2.jsp 페이지로 이동하게 되었다.
- 이 오류가 왜 일어나는지 확인하기 위해서 try {...} catch (Exception e) { e.printStackTrace() } 라는 코드를 작성하여 무슨 에러가 발생하는지 알아보았다.
- 하지만 어제 말했던 것처럼 둘다 javax.mail.SendFailedException 이라는 에러가 발생하게 된다는 것을 알 수 있었다. 아니 정상적인 이메일을 입력했을 때 왜 오류가 발생하는지 이해가 안 되었다.
- 하지만 오늘 그 오류를 해결할 수 있었다.



- 해결방법은 catch에서 잡아주는 에러의 방식을 Exception 에서 MessagingException 으로 바꾸는 것이다.
- Exception class는 MessagingException , IOException 등과 같은 여러 가지 예외들의 조상클래스이다.
- 따라서 Exception class는 MessagingException 과 같이 Exception class를 상속 받아서 구현한 넓은 범위의 예외를 처리할 수 없다.
- 따라서 Exception 을 MessagingException 으로 바꿈으로써 해결할 수 있었다.