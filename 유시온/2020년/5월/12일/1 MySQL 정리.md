

2020-05-12 DB 

## MySQL



---

### 단축키

`Ctrl + Shift + Enter` :전체 명령문 실행

`Ctrl + Enter` : 현재 커서 위치 명령문 실행



---

### 문법

`-- 주석들`   : **주석** 코멘트



#### 데이터 확인하기

`USE 데이터베이스명;` : **데이터베이스** 선택

`SHOW DATABASES or TABLES;` : **데이터베이스** 혹은 **테이블**에 대한 정보 출력

`SELECT 열이름 FROM 테이블명 WHERE 조건;` **테이블명**에서 **열이름** 부분의 **조건**을 만족하는 값들을 출력

`SELECT 열이름 AS 별칭 FROM 테이블명 WHERE 조건;` 테이블명**에서 **열이름** 부분의 **조건**을 만족하는 값들을 **별칭**으로 출력



#### 데이터베이스 생성 및 삭제

`CREATE DATABASE 데이터베이스명;` : 데이터베이스 생성

`DROP DATABASE IF EXISTES 데이터베이스명 ` :   데이터베이스가 **있다면(IF EXISTS)** 그 데이터베이스를 지워라



#### 테이블 생성 및 삭제

`CREATE TABLE 테이블명 ( 컬럼명 타입옵션, 컬럼명 타입옵션, ...);` : 테이블명으로 테이블을 만들고, 컬럼을 타입옵션을 참고하여 생성

예시)

```sql
CREATE TABLE user_tbl (
	userID		CHAR(8)		NOT NULL		PRIMARY KEY	, -- 문자 2칸
    name		VARCHAR(10)		NOT NULL,				  -- 가변공간의 문자 (몇개든 상관 X)
    birthYear	INT		NOT NULL,						  -- 숫자
    addr		CHAR(2)		NOT NULL,					  -- 문자 2칸
    mobile1		CHAR(3),								  -- 문자 3칸
    mobile2		CHAR(8),								  -- 문자 8칸
    height		SMALLINT,								  -- 숫자 (작은 사이즈)
    mDate		DATE									  -- 날짜
);
```



`DROP TABLE  IF EXISTS 테이블명` : 테이블명에 해당하는 테이블이 **있다면** 그 테이블을 지워라



#### 테이블 확인 및 입력

`DESC 테이블명` : 테이블의 기본 구조를 보여줌

`INSERT INTO 테이블명 VALUES(칼럼명 타입옵션...)` : 테이블에 VALUES를 넣는다.



#### 특정한 조건의 데이터 조회

* `SELECT 값 FROM 테이블명 WHERE 조건들`

* **관계연산자 사용**
  * `SELECT userID, name FROM user_tbl WHERE height >= 170 AND height <= 182;`
  * `SELECT userID, name FROM user_tbl WHERE birthday >= 1970 OR height >= 182;`
* **연속적인 값일 경우 BETWEEN..AND**
  * `SELECT userID, name FROM user_tbl WHERE height BETWEEN 170 AND 182;`

* **이산적인 값일 경우 IN**
  * `SELECT userID, name FROM user_tbl WHERE addr IN ('대전', '양평')`;

* **문자열이 내용 검색 LIKE**

  * `SELECT name, height FROM user_tbl WHERE name LIKE '유%'`;  유로 시작하는 모든 단어들
  * `SELECT name, height FROM user_tbl WHERE name LIKE '유_'`;  유로 두 글자 단어들

* **ANY/ALL 그리고 서브쿼리**

  * `SELECT name, height FROM user_tbl WHERE height >= (SELECT height FROM user_tbl WHERE name = '유시온')`;

  * `SELECT name, height FROM user_tbl WHERE height >= ANY 또는 ALL(SELECT height FROM user_tbl WHERE name = '유시온, 댕댕이')`; 서브쿼리에 값을 가진 값중 어느것 (ANY) 모든것(ALL)을 만족해야함

* **정렬하여 출력 ORDER BY**

  * `SELECT name, mDate FROM user_tbl ORDERBY mDate;`  오름차순 ASC, 내림차순 DESC
  * `SELECT name, mDate FROM user_tbl ORDERBY mDate DESC, name ASC;`  

* **중복제거 DISTINCT**

  * `SELECT DISTINCT addr FROM user_tbl;`  

* **출력 개수 제한 LIMIT**

  * `SELECT emp_no, hire_date FROM employees ORDER BY hire_date ASC LIMIT 5;` 특정 부분 출력시 5개만 출력