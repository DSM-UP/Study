## Socket and ServerSocket

- socket은 서버와 클라이언트가 소통할 수 있도록 만들어주는 매개체이다.
- 웹이 아닌 일반적인 바닐라 java에서 소켓 통신을 할 수 있도록 하는 클래스는 Socket이라는 클래스와 ServerSocket이라는 클래스이다.

- 먼저 ServerSocket이라는 클래스는 이 클래스에 속하는 파일이 Server라는 것을 알 수 있게 한다.
- 일단 ServerSocket은 매개변수로 포트번호를 받게 되는데 이 포트번호로 클라이언트가 접속할 수 있도록 돕는 역할을 한다.
- Socket은 정말 소켓의 역할을 할 수 있도록 하는데 서버측에서의 Socket은 ServerSocket의 인스턴스를 이용하여 accept() 라는 함수를 실행하게 되는데 이 함수는 클라이언트에 요청이 들어올 때 까지 기다리는 것을 말한다.