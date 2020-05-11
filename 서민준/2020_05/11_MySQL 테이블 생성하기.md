# create table
  
**출처**  
<a href = "https://opentutorials.org/course/3161/19537" target = "_blank">MySQL 테이블의 생성 - 생활코딩</a>  
  
스키마를 생성하는데 성공하였다면 해당 스키마가 관리하는 테이블을 생성할 차례이다. MySQL에서 전반적으로 테이블을 만드는 방법은 다음과 같다.  
  
	CREATE TABLE table_name(
		col_name1 datatype(lenght) options,
		col_name2 datatype(lenght) options,
		...
	);
  
그럼 이제 저 명령문들을 하나씩 해석해 보자.  
  
`table_name`  
말 그대로 생성하고자 하는 테이블의 이름을 뜻한다.  
  
`col_name1`, `col_name2`  
열의 이름을 지정한다. 즉, 모여져 있는 값들을 분류하고자 하는 카테고리를 지정한다고 볼 수 있다.  
  
`datatype`  
해당 열에 저장하고자 하는 데이터의 타입을 지정한다. 지정된 타입의 데이터만 저장할 수 있고 다른 데이터 타입의 데이터는 저장할 수 없다. MySQL의 데이터 타입에 대해서는 다음 사이트를 참조하면 좋을 것 같다. (<a href = "https://www.techonthenet.com/mysql/datatypes.php" target = "_blank">MySQL: Data Types</a>)  
  
`lenght`  
사용자에게 보여주고자 하는 정보의 길이를 지정한다. 지정된 길이만큼만 정보가 보여진다. 지정하지 않으면 저장되어 있는 모든 내용을 사용자에게 보여주게 된다.  
  
`options`  
저장되는 정보들에 대해 여러 가지 옵션을 지정할 수 있다. 복수의 옵션을 지정할 때는 공백(Space key) 키를 통해 여러 옵션을 구분할 수 있다.  
  
options | 설명
--------|------
NULL | 데이터를 저장할 때 NULL 값이나 빈 데이터를 저장할 수 있다.
NOT NULL | 반드시 어떠한 데이터를 저장해야 하며 데이터를 저장하지 않은 상태로 둘 수 없다.
AUTO_INCREMENT | 다음에 들어오는 데이터는 가장 마지막에 저장된 데이터보다 1 큰 값으로 자동 저장된다.
  
## PRIMARY KEY
  
테이블을 생성할 때 지정하는데 이것은 해당 테이블이 가지고 있는 열(속성) 중에서 메인이 되는 키를 지정할 때 사용한다. 이 키를 지정하는 이유는 다음과 같다.  
  
1. 성능적인 측면  
2. 중복을 방지  
