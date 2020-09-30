# SQL 명령어2

- DDL
  - `ALTER TABLE 테이블명 연산 컬럼` : 테이블의 컬럼을 조작할 수 있는 명령어이다.
    - `ALTER TABLE tbl ADD name VARCHAR(10) NOT NULL` : tbl 테이블에 name이라는 컬럼을 추가한다.
  - `TRUNCATE TABLE 테이블명` : 테이블을 DROP한 후에 CREATE하는 명령어이다.
    - 테이블 내의 데이터(행)들을 없앤다. (테이블 초기화)
  - `RENAME TABLE 테이블명 TO 바꿀테이블명` : 테이블의 이름을 바꾸는 명령어이다.
    - `RENAME TABLE A.tbl TO B.new_tbl` : A데이터베이스에 있는 tbl 테이블을 B데이터베이스의 new_tbl 테이블로 옮긴다.
  - `CREATE USER '유저이름'@'호스트'` : 새로운 유저를 만드는 명령어.
    - 뒤에 명령어를 더 붙여서 비밀번호 적용이 가능하다.

  - `DROP USER '유저이름'@'호스트'` : 사용자를 삭제하는 명령어.

- DCL
  - `GRANT 권한 ON 데베.테 TO 사용자` : 사용자에게 특정 데이터베이스의 권한을 주는 명령어.
    - `GRANT SELECT, INSERT, UPDATE ON db.tbl TO 'user1'@'localhost'` : user1에게 select, insert, update 권한을 준다.
    - `GRANT` 명령어를 사용하고 `flush privileges` 명령어를 사용해줘야 적용이 된다.
  - `REVOKE ALL PRIVILEGES 데베.테 TO 사용자` : 사용자의 특정 데이터베이스에 대한 권한을 삭제하는 명령어.