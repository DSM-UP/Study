# Use MySQL module in Node.js
  
**출처**  
<a href = "https://opentutorials.org/course/3347/21185" target = "_blank">Node.js MySQL 모듈의 기본 사용방법 - 생활코딩</a>  
  
npm 사이트에서 mysql을 지원하는 곳이 있다. node.js package management에서 지원하는 것이니 mysql의 모듈을 사용할 수 있을 것이다. 무엇보다 많은 사람들이 지금 사용하고 있는 모듈이다.  
  
설치 방법은 다음과 같다.  
  
	npm install mysql
  
설치를 완료했다면 기본적인 예제가 하나 있는데 가지고 와서 해석해보도록 하자.  
  
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'me',
		password : 'secret',
		database : 'my_db'
	});

	connection.connect();

	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
		if (error) throw error;
		console.log('The solution is: ', results[0].solution);
	});

	connection.end();
  
기본적으로 모듈이기 때문에 require를 통해서 불러오는 것을 첫 줄에서 확인할 수 있다. 모듈명은 당연히 mysql이다.  
  
바로 아래에는 mysql 모듈에 들어있는 createConnection 함수를 호출하는데, 인자로 객체를 전달한다. 객체의 내용은 다음과 같다.  
  
- host : 데이터베이스 서버를 열어주는 컴퓨터가 어디에 있는지를 나타내는 것을 의미한다. localhost는 자기 자신을 의미한다.  
- user : 사용자의 이름이다. 우리는 root라는 관리자 계정을 통해 작업을 할 것이니 root로 변경하는 것이 좋다.  
- password : user에 대응하는 비밀번호로 알맞게 입력해 놓아야 한다.  
- database : 사용하고자 하는 데이터베이스를 선택한다.  
  
이러한 정보를 가지고 있는 connection이 connect 메소드(함수)를 호출하면 MySQL 서버로 접속할 수 있다.  
  
접속이 끝난 다음에는 connection.query 메소드를 호출한다. 해당 메소드는 첫 번째 인자에 있는 mysql 구문을 서버로 전송하고 그 일이 끝나면 두 번째 인자인 콜백 함수를 호출하게 된다.  
  
콜백 함수의 인자 중 `error`는 어떠한 에러가 있을 때 해당 에러에 대한 정보를 가지고 있다.  
접속 결과는 두 번째 인자인 `result`로 전달되기로 약속되어 있다.
