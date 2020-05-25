## Database Connection

이번에는 스프링에서의 데이터베이스의 연결에 대해서 알아볼 것이다.
이 글에서는 JdbcTemplate을 사용하지 않기 때문에
순수자바로도 작성할 수 있는 데이터베이스 연결 코드를 작성할 것이다.

데이터베이스 연결을 순수자바로 하는 이유는 나중에
JdbcTemplate를 사용한 것과 비교하여 무엇이 달라졌고
JdbcTemplate가 왜 필요한지 알게 될 것이기 때문이다.

순수자바로 데이터베이스를 연결하는 것은 JSP에서 다루어보았으니
하면서 큰 문제는 없을 것이다.

### 데이터베이스 연결&사용하기

데이터베이스를 연결하는 방법은 다음과 같은 순서로 진행된다.

1. Class.forName() 정적 메소드를 이용하여 드라이버를 초기화한다.
2. DriverManager.getConnection() 정적 메소드를 이용하여
   Connection 객체를 생성한다.
3. Connection 객체의 prepareStatement() 메소드를 이용하여
   PreparedStatement 객체를 생성한다.
4. PreparedStatement 객체의 executeQuerey() 메소드를 실행하여
   SQL문을 실행하고 결과값을 받아낸다.

#### 1) Class.forName()

처음으로 Class.forName() 메소드를 이용하여 드라이버를 초기화하는데
Class.forName() 정적 메소드의 동작 원리는 나중에 JavaStudy에 올라갈 예정이다.

Class.forName() 메소드의 매개변수로는 사용하는 데이터베이스의
드라이버 주소를 String 형태로 작성한다.

만약 MySQL을 사용한다면 "com.mysql.jdbc.Driver"라는 드라이버 주소를 사용한다.

#### 2) DriverManager.getConnection()

드라이버를 메모리에 로딩했다면, DriverManager.getConnection() 정적 메소드를 사용하여
Connection 객체를 얻어야 한다.
Connection 객체에 대한 설명은 나중에 또 다루겠지만 간단하게 정리하면
데이터베이스와 연결하는 통로라고 볼 수 있다.

getConnection() 메소드의 매개변수로는 JDBC URL, MySQL USER ID, USER PW를 받는다.
MySQL의 기본 포트번호를 변경하지 않았고 데이터베이스가 자신의 컴퓨터에 있다면
"jdbc:mysql://127.0.0.1:3306/이름"
위와 같이 설정하면 된다.
그런데 여기서 이름은 스프링 레거시 프로젝트에서 디폴트로 패키지의 마지막
이름을 작성한다.

#### 3) Connection 객체의 prepareStatement()

Connection 객체가 데이터베이스와 연결하는 통로라면
PreparedStatement는 그 통로를 지나가는 SQL문이라고 볼 수 있다.

Connection 객체의 preparStatement() 메소드를 사용하면
PreparedStatement 객체를 얻을 수 있다.
PreparedStatement와 Statement 객체의 차이점은 나중에 따로 업로드할 예정이다.

prepareStatement() 메소드의 매개변수로는 사용하고 싶은 SQL문을 작성한다.
PreparedStatement 객체의 SQL문은 ?를 사용한 식이 사용되는데
이것 또한 나중에 정리하도록 하겠다.

#### 4) executeQuery()

executeQuery() 메소드는 PreparedStatement 객체의 메소드로서,
직접 데이터베이스에 접근하여 쿼리문을 실행하고 그 결과값으로
ResultSet 객체를 받는데
만약 Select 문이라면 ResultSet의 next() 메소드를 이용하여
값을 얻어내고, 다른 INSERT, UPDATE, DELETE 문이라면
성공한 쿼리문의 갯수를 리턴한다.