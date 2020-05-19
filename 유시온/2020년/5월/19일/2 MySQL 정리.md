 2020-05-19 DB

## MySQL



---



### 데이터베이스 용어 정리

row, record, tuple : 가로 쭉~~~

column, field attribute : 세로 쭉~~~

table, relation : 전체~~~



---



#### DBMS 언어의 타입들

* DDL 
  * Create
  * Drop
  * Truncate
  * Rename

* DML
  * Select
  * Insert
  * Delete
  * Update
* DCL
  * Revoke : 권한 회수
    * `REVOKE ALL PRIVILEGES 데베.테이블 TO 사용자;`
  * Grant : 권한 주기
    * `GRANT 권한 ON 데베.테이블 TO 사용자;`
* RCL
  * Rollback
  * Commit

