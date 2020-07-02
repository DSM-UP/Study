# SQL SELECT

- 특정한 조건의 데이터 조회

  - 관계 연산자 사용
    - SELECT userID, name FROM user_tbl WHERE birthYear >= 1970 **AND** height >= 182;
    - SELECT userID, name FROM user_tbl WHERE birthYear >= 1970 **OR** height >= 182;

  - 연속적인 값일 경우 BETWEEN...AND
    - SELECT userID, name FROM user_tbl WHERE height **BETWEEN** 170 **AND** 182;
  - 이산적인 값일 경우 IN
    - SELECT name, addr FROM user_tbl WHERE addr IN ('서울', '부산');
  - 문자열의 내용 검색 LIKE
    - SELECT name, height FROM user_tbl WHERE name LIKE '바%'; -> '바'로 시작하는 모든 문자
    - SELECT name, height FROM user_tbl WHERE name LIKE '바_'; -> '바'로 시작하는 두 글자 문자
  - ANY/ALL 그리고 서브쿼리 (쿼리 안에 하위 쿼리)
    - SELECT name, height FROM user_tbl WHERE height >= (SELECT height FROM user_tbl WHERE name = '바비킴');
    - SELECT name, height FROM user_tbl WHERE height >= {ANY or ALL}(SELECT height FROM user_tbl WHERE name IN ('바비킴', '조용필'));
  - 정렬하여 출력 ORDER BY
    - SELECT name, mDate FROM user_tbl ORDER BY mDate; -- 오름차순 ASC(default), 내림차순 DESC
    - SELECT name, mDate FROM user_tbl ORDER BY mDate DESC, name ASC; -- 앞에 있는 mDate를 기준으로 먼저 정렬하고 같을 경우 name으로 정렬
  - 중복 제거 DISTINCT
    - SELECT DISTINCT addr FROM user_tbl;
  - 출력 개수 제한 LIMIT
    - SELECT emp_no, hire_date FROM employees ORDER BY hire_date ASC LIMIT 5; -- 5개 출력