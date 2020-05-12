# SELECT
  
**출처**  
<a href = "https://opentutorials.org/course/3161/19540" target = "_blank">SQL의 SELECT 구문 - 생활코딩</a>>  
  
테이블에 들어있는 데이터(행)를 읽어들이는 명령을 말한다. INSERT 구문과 달리 데이터를 읽어들이는 SELECT 구문은 굉장히 복잡해질 수도 있다.  
  
## 테이블에 있는 모든 데이터 출력하기
  
	SELECT * FROM table_name;
  
`table_name`에 자신이 출력하고자 하는 데이터들을 가지고 있는 테이블의 이름을 넣어주면 해당 테이블에 들어있는 모든 데이터를 출력한다.  
  
Ex) topic이라는 테이블의 모든 데이터를 출력한다.  
![all data](https://user-images.githubusercontent.com/51042546/81256370-47e03d80-906b-11ea-9987-669e694828c2.png)  
  
## 특정 속성의 정보만 출력하기
  
	SELECT projection FROM table_name;
  
`projection` 부분에 자신이 출력하고자 하는 열의 이름을 적어주면 해당 열의 정보만 화면에 출력할 수 있다. 만약 여러 개의 속성을 지정하고 싶다면 ,를 통해 여러 개를 지정할 수 있다.  
  
Ex) topic 테이블에서 id, title, created, author 정보만 화면에 출력한다.  
![특정 열만 출력하기](https://user-images.githubusercontent.com/51042546/81256588-e79dcb80-906b-11ea-8215-da537b17d0de.png)  
  
## 특정 값을 지닌 행만 출력하기
  
	SELECT projection FROM table_name WHERE column_name = value;
  
`column_name`에는 가지고 있어야 하는 특정 값이 위치한 열의 이름을 지정한다. 그 뒤, value에는 가지고 있어야 하는 특정한 값을 지정하면 된다.  
  
Ex) topic 테이블에서 author가 seominjun인 행에서 id, title, created, author 정보를 화면에 출력한다.  
![특정 값을 지닌 행만 출력](https://user-images.githubusercontent.com/51042546/81256910-d608f380-906c-11ea-94d9-67a96bb4861d.png)  
  
## 정렬 방식 결정하기
  
화면에 출력될 때 기본적으로 값이 오름차순으로 정렬되어 출력되는데 명령을 통해 내림차순으로 데이터를 출력할 수도 있다.  
  
	SELECT projection FROM table_name WHERE col_name = value ORDER BY col_name order_option;
  
ORDER BY는 WHERE문 뒤에 오게 되는데 이 구문이 바로 데이터의 정렬 방식을 결정하는 구문이다.  
`col_name`은 어떤 값들을 정렬의 기준으로 삼을 것인지를 결정한다. 정렬 방식은 `order_option`에 따라 달라진다.  
  
값 | 설명
---|------
ASC | 오름차순 정렬, 생략하면 자동으로 ASC가 된다.
DESC | 내림차순 정렬
  
Ex) topic 테이블에서 author가 seominjun인 행에서 id, title, created, author 정보를 id 값을 기준으로 내림차순으로 출력한다.  
![내림차순 출력](https://user-images.githubusercontent.com/51042546/81257310-e40b4400-906d-11ea-8c0c-68cf6488ed28.png)  
  
## 출력하는 데이터의 수 제한하기
  
SQL은 매우 많은 양의 데이터를 데이터베이스에 저장할 수 있다. 이 말은 매우 많은 양의 데이터가 들어있는 테이블을 화면에 출력하면 컴퓨터가 멈춰버릴 수도 있는 것이다.  
  
그럴 때를 대비해서 화면에 출력되는 데이터의 수를 제한하는 것이 유용하다. 방법은 다음과 같다.  
  
	SELECT projection FROM table_name WHERE col_name = value ORDER BY order_option LIMIT row_count;
  
LIMIT 구문이 화면에 출력되는 데이터의 수를 제한하는 구문인데 ORDER BY 구문 바로 뒤에 온다. `row_count`에 화면에 출력하고자 하는 데이터의 수를 지정하면 지정한 개수만큼만 화면에 데이터가 출력된다.  
  
Ex) 바로 전 예시에서 보여준 값들 중 2개까지만 화면에 출력한다.  
![화면에 2개의 행만 출력하기](https://user-images.githubusercontent.com/51042546/81257668-d1ddd580-906e-11ea-968d-d6e8f680fba6.png)  
  
