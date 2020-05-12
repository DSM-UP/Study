Database 생성 

```mysql
CREATE DATABASE 데이터베이스명;
```

Database 선택

```mysql
USE 데이터베이스명;
```

Table 생성

```mysql
CREATE TABLE 테이블_명;
```



뒤에 ...이 붙으면 복수 가능



데이터 조회

```mysql
SELECT [ALL/DISTINCT] 컬럼명 [as 별칭] [,컬럼명...]
FROM 테이블_명 [,테이블명] [WHERE 조건식]
[ORDER BY 컬럼명 [ASC/DESC],[컬럼명...] ]
[LIMIT 갯수];
```

ALL/DISTINGT: 중복인 결과에 대해 모두 보여주거나 1개만 보여주거나

ASC/DESC: 오름차순/내림차순



조건식

NULL 검사: `데이터 IS [NOT] NULL`

논리연산: `조건식 AND/OR 조건식`

범위: `컬럼명 BETWEEN 시작 값 AND 끝 값`

값 형태: `데이터 LIKE '내용'`  내용 예시) '%김%', '김_' | %는 몇개든 상관 없음 _는 1글자만

~중 하나: `데이터 IN (내용...)`

