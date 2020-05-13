# UPDATE
  
**출처**  
<a href = "https://opentutorials.org/course/3161/19541" target = "_blank">SQL의 UPDATE 구문 - 생활코딩</a>  
  
테이블에 저장되어 있는 행의 정보를 변경할 수 있는 구문이다. 기본적인 구문은 다음과 같다.  
  
    UPDATE table_name SET col_name = value WHERE where_condition;
  
`table_name`은 자신이 변경하고자 하는 행을 저장하고 있는 테이블의 이름을 넣어주면 된다. 그 뒤, 변경하고자 하는 값은 `value`에, 해당 value가 속해 있는 열의 이름을 `col_name`에 넣어주면 된다.  
  
WHERE 구문 뒤에 나오는 `where_condition`은 어떤 행을 수정할 것인지를 결정하는 구문이다. `col_name = value`의 형태로 지정한다. 이 구문은 절대 빠뜨려서는 안 된다.  
  
만약 행에서 하나의 정보만 변경하는 것이 아니라 다른 정보도 변경하고 싶다면 `con_name1 = value1, col_name2 = value2;`와 같이 ,로 여러 개를 지정할 수 있다.  
