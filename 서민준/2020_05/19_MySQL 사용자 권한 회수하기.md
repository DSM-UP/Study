# REVOKE
  
**출처**  
<a href = "https://dev.mysql.com/doc/refman/5.6/en/revoke.html" target = "_blank">MySQL 13.7.1.6 REVOKE Statement</a>  
<a href = "https://wayhome25.github.io/mysql/2017/03/23/mysql-11-user-setting/" target = "_blank">MySQL 0.7 MySQL - 사용자 관리, 권한 - 초보몽키의 개발공부로그</a>  
  
	REVOKE priv_type ON db_name.table_name FROM user;
  
기본적인 문법은 다음과 같다.  
  
REVOKE 명령은 해당 계정에 부여되어 있는 MySQL의 권환을 회수하는 명령이다.  
  
`priv_type`  
어떤 권한을 해제할 것인가를 전달하는 부분이다. 권한 이름은 명령문의 이름을 적어주면 된다. 종류는 다음과 같다.  
  
privilege | mean
----------|-------
CREATE | 데이터베이스 혹은 테이블 생성
DROP | 데이터베이스 혹은 테이블 삭제
GRANT OPTION | 사용자들의 권한을 부여 혹은 제거
LOCK TABLES | 테이블 잠금
ALTER | 테이블 구조 변경
DELETE | 테이블의 튜플 삭제
INDEX | 인덱스 생성 혹은 삭제
SELECT | 튜플 조회
UPDATE | 튜플 내용 변경
CREATE TEMPORARAY TABLES | 임시 테이블 생성
CREATE VIEW | 뷰 생성
SHOW VIEW | 뷰 보기
ALTER ROUTINE | 프로시저, 함수 변경 삭제
CREATE ROUTINE | 프로시저, 함수의 생성
  
저렇게 권한의 이름을 부여하면 되고, 복수 개의 권한을 해제할 경우 ,를 통해 구분할 수 있다.  
  
만약 모든 권한을 회수하고 싶다면, 다음과 같이 하면 된다.  
  
	REVOKE ALL [PRIVILEGES], GRANT OPTION FROM user;
  
`db_name.table_name`  
해당 권한을 해제할 때 어떤 데이터베이스의 어떤 테이블을 대상으로만 회수하는 것을 말한다. 예를 들어 test라는 DB의 test_tbl이라는 테이블에서만 권한을 회수하고 싶다면 `test.test_tbl`을 주면 된다.  
  
만약 모든 데이터베이스 안의 모든 테이블에서 권한을 회수하고 싶다면 `*.*`을 주면 된다.  
  
`user`  
당연하게도 권한을 회수하고자 하는 사용자이다. 사용자를 줄 때는 기본적으로 다음과 같은 형식으로 준다.  
  
	-- Example
	'root'@'localhost'
  
우선 사용자의 이름을 먼저 ''로 감싼다. 그 뒤, @를 적고, 뒤에는 접속 범위를 써주면 된다. 접속범위는 보편적으로 자신의 컴퓨터 내에서만 접속이 가능한 localhost를 사용하는 경우가 많지만 %(외부의 모든 IP에서의 접속도 허용) 등이 있으므로 확인하고 적어주면 된다.  
  
여러 명의 user의 권한을 동시에 회수할 때는 ,를 통해 구분할 수 있다.  
