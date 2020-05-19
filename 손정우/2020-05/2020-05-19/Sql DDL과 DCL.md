# Sql DDL과 DCL

DDL: 데이터 정의 언어

- `CREATE DATABASE 데이터베이스명`: 데이터베이스를 생성
- `CREATE TABLE 테이블명`: 테이블 생성
- `CREATE USER '유저명'@'위치' `: 유저 생성, 위치에는 localhost 등이 들어가며 접속 가능한 경로를 의미,  `*`일 경우 로컬이든 원격이든 상관X
- `DROP DATABASE/TABLE 데이터베이스/테이블명`: 데이터베이스/ 테이블 삭제
- `DELETE USER '유저명'@'위치' `: 유저 삭제
- `TRUNCATE TABLE 테이블명`: 해당 테이블의 모든 행을 삭제한다.
- `ALTER TABLE 테이블명  연산 컬럼`: 해당 테이블의 구조 변경
- `RENAME 테이블명A TO 테이블명B`: 테이블명을 A에서 B로 변경
  (DB_1.TB_1 TODB_2.TB_2 처럼하여 테이블이 위치한 DB도 바꿀 수 있다.)

DCL: 데이터 제어 언어(권한 부여, 삭제 등)

- `GRANT 권한 ON 데이터베이스.테이블 TO 유저명`: 해당 유저에게 주어진 테이블의 권한을 부여
- `REVOKE 권한 PRIVILEGES 데이터베이스.테이블 TO 유저명`: 해당 유저에게 주어진 테이블의 권한을 제거