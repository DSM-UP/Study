# JOIN  
  
**출처**  
<a href = "https://opentutorials.org/course/3161/19545" target = "_blank">관계형 데이터베이스의 꽃 JOIN - 생활코딩</a>  
  
관계형 데이터베이스의 핵심이 되는 기술이 바로 JOIN이다. 다른 테이블들에 저장되어 있는 각각의 정보를 하나로 모아 출력하는 기술인데 이것이야말로 관계형 데이터베이스의 핵심이라고 할 수 있다.  
  
기본적인 형태는 다음과 같다.  
  
	SELECT * FROM tbl_name1 LEFT JOIN tbl_name2 ON tbl_name1.col_name1 = tbl_name2.col_name2;
  
구문이 조금 긴데 하나씩 살펴보면서 알아가도록 하자.  
  
우선, `tbl_name1`과 `tbl_name2`는 각각 JOIN 하고자 하는 테이블의 이름이다. 그리고 이 두 테이블을 마냥 JOIN시킬 수는 없기 때문에 어떤 속성을 기준으로 서로 결합할지 결정한다.  
  
그걸 나타내는 구문이 바로 ON 구문이다. ON 뒤에는 각각의 테이블에서 서로 결합의 기준이 되고자 하는 값들을 지닌 열의 이름을 지정하면 된다. 그래서 `col_name1`과 `col_name2`는 각각의 테이블에서 서로의 테이블과의 결합 조건을 가지고 있는 열의 이름이다.  
  
이 명령을 실행시키면 두 값이 서로 같은 행에 오게 된다.  
Ex)  
![join](https://user-images.githubusercontent.com/51042546/81514141-52028480-9368-11ea-9cc0-22c68e93886e.png)  
  
## 연결된 테이블에서 불필요한 정보 제외하기
  
위 사진을 보면 서로 JOIN 된 것은 좋지만 보기에는 좋지 않다. author_id와 id는 필요없고 name과 profile만 화면에 출력되면 되기 때문이다.  
  
이 문제를 해결하고 싶다면 SELECT 구문에서 * 로 모든 테이블을 가져오지 말고 보여주고자하는 항목을 적어주면 된다.  
  
	// Ex
	SELECT topic.id, title, description, created, name, profile FROM topic LEFT JOIN author ON topic.author_id = author.id;
  
만약 JOIN 하는 테이블의 같은 이름의 속성이 있을 경우 구분할 수 없기 때문에 어떤 테이블의 속성을 표현할 것인지 명시해야 한다.  
![원하는 정보만 표기하기](https://user-images.githubusercontent.com/51042546/81514944-adcf0c80-936c-11ea-8090-c8a304b69e0f.png)  
  
## 표기되는 속성의 이름 변경하기
  
각 테이블에서 원하는 정보를 가져와 출력하는 것은 좋으나 출력할 때 속성의 이름을 조금 더 명확하게 표기하고자 할 수 있다. 위 예제도 topic 테이블의 id와 author 테이블의 id가 서로 겹치는데 이럴 때는 명확하게 속성의 이름을 알려주면 더 편할 수 있다.  
  
이런 문제를 해결하고자 한다면 AS를 사용하면 된다. 이름을 변경하고자 하는 속성 뒤에 AS를 쓰고 바꿀 속성의 이름을 쓰면 된다.  
  
	// Ex
	SELECT topic.id AS topic_id, title, description, created, name, profile FROM topic LEFT JOIN author ON topic.author_id = author.id;
  
실행 결과  
![표기되는 열의 이름 변경](https://user-images.githubusercontent.com/51042546/81515048-364dad00-936d-11ea-9240-892a040d4b55.png)  
  
이 기술은 데이터베이스의 중복을 제거할 수 있는 기능 중 하나로써 굉장히 유용하다고 볼 수 있다.  
