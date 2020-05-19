## SQL

SQL은 Structured Query Language의 약자로서, 한글로 직역하면 구조화된 질의어이다.
여기서 질의하는 곳은 데이터베이스(Database)이므로,
데이터베이스에 접근하기 위해서 사용되는 언어라고 볼 수 있다.

다른 프로그래밍 언어와는 다르게 언어의 논리보다는 구조에 초첨을 맞춘 언어이다.
그래서 다른 프로그래밍 언어를 해봤는가와는 별개로 다른 지식이 필요하다.

SQL은 크게 4가지로 나눌 수 있다.

1. DDL
2. DML
3. DCL
4. TCL

이렇게 DDL, DML, DCL, TCL로 나누어서 사용하는데
사실 DML을 주축으로하여 DDL을 조금만 알아도 간단하게 데이터베이스를 다루는데 큰 문제는 없다.
하지만 데이터베이스에 대해서 조금 더 깊게 알고 싶거나, 다른 사람이 쓴 SQL문을 보고
이해할 수는 있어야 하기 때문에 학습을 하는 것이 좋다.

그럼 DDL부터 시작해서 DCL까지 알아보고
TCL은 나중에 알아보도록 하자.

### 1. DDL

DDL은 Data Definition Language의 약자로서, 데이터를 정의하는 언어이다.
DDL의 명령어에는 CREATE, DROP, ALTER, RENAME, TRUNCATE가 있다.

#### 1-1. CREATE

CREATE 명령어는 데이터베이스나 테이블을 '생성'할 때 사용한다.

##### 1-1-1. DATABASE

데이터베이스를 생성하는 방법은 간단하다.

```mysql
CREATE DATABASE [데이터베이스 이름];
```

만약 'test'라는 데이터베이스를 생성하고 싶다면 다음과 같은 명령어를 작성하면 된다.

```mysql
CREATE DATABASE test;
```

만약 test라는 데이터베이스가 존재하면 에러가 발생하게 된다.

###### 1-1-1-1. IF NOT EXISTS

CREATE DATABASE를 통해 데이터베이스를 생성하게 되면
이미 그 데이터베이스가 존재할 경우 에러가 발생하기 때문에
IF NOT EXISTS 키워드를 통해 미리 에러를 예방할 수 있다.

IF NOT EXISTS 키워드는 존재하지 않을 때 실행하라는 뜻이다.
따라서 생성하려는 데이터베이스가 존재하지 않을 때만 CREATE DATABASE 명령어를 실행할 수 있게 된다.

```mysql
CREATE DATABASE IF NOT EXISTS test;
```

IF EXISTS 도 사용할 수 있는데 이는 존재할 때만 실행하도록 하는 키워드이다.
하지만 데이터베이스가 이미 있는데 실행할 필요는 없으므로 여기에서는 사용하지 않는다.

##### 1-1-2. TABLE

테이블을 생성하는 방법은 데이터베이스를 생성하는 방법과 비슷하다.

```mysql
CREATE TABLE [테이블 이름]( [속성들] );
```

데이터베이스와는 다르게 속성(Attribute)이라는 것이 존재하는데
테이블을 구성하는 속성은 현재는 안에 들어가는 값의 구조라고 생각하고 다음에 자세하게 다루겠다.

만약 user라는 테이블을 생성하고자 한다면 다음과 같이 명령어를 실행하면 된다.

```mysql
CREATE TABLE user(
    user_id		INT(11)		NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_name 	VARCHAR(10)	NOT NULL,
    user_age	INT(11)		NOT NULL
);
```

이 CREATE TABLE 명령어도 이미 존재하는 테이블을 다시 생성하게 되면 에러가 발생하게 된다.

###### 1-1-2-1. IF NOT EXISTS

CREATE TABLE을 하게 되면 데이터베이스와 마찬가지로 에러가 발생할 수 있다.
그래서 IF NOT EXISTS 키워드를 통해 테이블이 존재하지 않을 경우에만 실행하도록 할 수 있다.

```mysql
CREATE TABLE IF NOT EXISTS user(
    user_id		INT(11)		NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_name 	VARCHAR(10)	NOT NULL,
    user_age	INT(11)		NOT NULL
);
```

#### 1-2. DROP

CREATE 명령어가 데이터베이스와 테이블을 생성하는 명령어였다면
DROP 명령어는 데이터베이스와 테이블을 삭제하는 명령어이다.

##### 1-2-1. DATABASE

데이터베이스를 생성하기 위해서 CREATE 명령어를 사용했던 것처럼
반대로 DROP 명령어를 사용하면 데이터베이스를 삭제할 수 있다.

```mysql
DROP DATABASE [데이터베이스 이름];
```

DROP DATABASE 명령어는 삭제하고자하는 데이터베이스가 존재하지 않으면 에러를 발생시킨다.

###### 1-2-1-1. IF EXISTS

CREATE 명령을 할 때는 IF NOT EXISTS 키워드를 사용했었는데
삭제할 때는 존재해야 삭제할 수 있으므로 IF EXISTS 키워드를 사용한다.

##### 1-2-2. TABLE

테이블을 삭제하는 것도 계속 해왔던 것과 같다.

```mysql
DROP TABLE [테이블 이름]( [속성] );
```

DROP TABLE 명령어도 삭제하고자하는 테이블이 존재하지 않으면 에러를 발생시킨다.

###### 1-2-2-1. IF EXISTS

삭제하고자하는 테이블이 없을 경우 발생하는 에러를 방지하기 위해서
IF EXISTS 키워드를 사용한다.

```mysql
DROP TABLE IF EXISTS [테이블 이름]( [속성] );
```

#### 1-3. ALTER

ALTER 명령어는 테이블을 수정하는 명령어이다.
테이블을 수정하는 키워드로는 ADD(추가), MODIFY(수정), DROP COLUMN(삭제)가 있다.

ADD, MODIFY, DROP COLUMN 키워드를 사용하기 위해서
위에서 제시한 예시 테이블을 준비하였다.

```mysql
CREATE TABLE user(
    user_id		INT(11)		NOT NULL	AUTO_INCREMENT	PRIMARY KEY,
    user_name	VARCHAR(10)	NOT NULL,
    user_age	INT(11)		NOT NULL
);
```

##### 1-3-1. ADD

ALTER 명령어를 통해 테이블에 속성을 추가하기 위해서는 ADD 키워드를 사용한다.
그리고 다음과 같이 사용한다.

```mysql
ALTER TABLE [테이블 이름] ADD [속성];
```

위의 예제에서 user_pw 라는 속성을 추가하고 싶다면 다음과 같이 명령어를 작성하면 된다.

```mysql
ALTER TABLE user ADD user_pw VARCHAR(20) NOT NULL;
```

그러면 테이블이 다음과 같이 변경된다.

```mysql
CREATE TABLE user(
    user_id		INT(11)		NOT NULL	AUTO_INCREMENT	PRIMARY KEY,
    user_name	VARCHAR(10)	NOT NULL,
    user_age	INT(11)		NOT NULL,
    user_pw		VARCHAR(20)	NOT NULL
);
```

물론 이미 존재하는 속성을 또 추가하면 에러가 발생한다.

##### 1-3-2. MODIFY

ALTER 명령어를 통해 테이블의 속성을 변경하기 위해서는 MODIFY 키워드를 사용한다.
그리고 다음과 같이 사용한다.

```mysql
ALTER TABLE [테이블 이름] MODIFY [속성];
```

ADD 키워드의 예제에서 새로 추가한 user_pw 속성의 NOT NULL 속성을 제거하기 위해서는
다음과 같이 명령어를 작성하면 된다.

```mysql
ALTER TABLE user MODIFY user_pw VARCHAR(20);
```

이에 대한 user 테이블의 결과는 다음과 같다.

```mysql
CREATE TABLE user(
    user_id		INT(11)		NOT NULL	AUTO_INCREMENT	PRIMARY KEY,
    user_name	VARCHAR(10)	NOT NULL,
    user_age	INT(11)		NOT NULL,
    user_pw		VARCHAR(20)
);
```

물론 없는 속성을 지정하면 에러가 발생한다.

##### 1-3-3. DROP COLUMN

ALTER 명령어를 통해 테이블의 속성을 삭제하기 위해서는 DROP COLUMN 키워드를 사용한다.
그리고 다음과 같이 사용한다.

```mysql
ALTER TABLE [테이블 이름] DROP COLUMN [속성];
```

위의 예제에서 변경한 user_pw 속성을 제거하고자 하면 다음과 같이 명령어를 작성한다.

```mysql
ALTER TABLE user DROP COLUMN user_pw;
```

위의 명령어에 대한 테이블의 결과는 다음과 같다.

```mysql
CREATE TABLE user(
    user_id		INT(11)		NOT NULL	AUTO_INCREMENT	PRIMARY KEY,
    user_name	VARCHAR(10)	NOT NULL,
    user_age	INT(11)		NOT NULL
);
```

물론 없는 테이블을 지정하면 에러가 발생한다.

#### 1-4. RENAME

##### 1-4-1. Single Table

하나의 테이블의 이름을 변경하기 위해서 RENAME 명령어를 사용할 수 있다.
단일 테이블의 이름을 변경하는 방법은 다음과 같다.

```mysql
RENAME TABLE [원래 테이블 이름] TO [새 테이블 이름];
```

위에서 만들었던 user 테이블의 이름을 new_user 로 바꾸기 위해서는 다음과 같은 명령어를 작성한다.

```mysql
RENAME TABLE user TO new_user;
```

물론 없는 테이블의 이름을 변경하고자 하면 에러가 발생한다.

##### 1-4-2. Many Table

여러 개의 테이블의 이름을 변경하기 위해서는 콤마로 구분하여 TO 구문을 사용하면 된다.

```mysql
RENAME TABLE [원래 테이블 이름1] TO [새 테이블 이름1],
			 [원래 테이블 이름1] TO [새 테이블 이름1],
			 .
			 .
			 .
			 [원래 테이블 이름n] TO [새 테이블 이름n];
```

##### 1-4-3 Move Table

RENAME 명령어는 이름을 변경하는 것뿐만 아니라 A 데이터베이스에 존재하던 테이블을
B 데이터베이스로 보낼 수도 있다.

물론 이름을 바꾸어도 되고 이름을 그대로 유지해도 된다.

```mysql
RENAME TABLE [현재 데이터베이스 이름].[원래 테이블 이름] TO [다른 데이터베이스 이름].[새 테이블 이름];
```

물론 이 명령어도 여러 개 붙여서 사용하는 것이 가능하다.

#### 1-5. TRUNCATE

TRUNCATE 명령어는 테이블 내의 정보들을 모두 삭제하는 명령이다.
만약 DML의 INSERT 명령을 통해 여러 값을 넣어두었다면 그 모든 값이 사라지고
AUTO_INCREMENT를 사용했을 경우 이도 1부터 시작하게 된다.

TRUNCATE는 내부적으로 모든 데이터를 DELETE 하는 것이 아닌
테이블을 DROP하고 새로 CREATE하기 때문에 복구가 불가능하지만
하나하나 DELETE하는 것보다는 훨씬 빠르다는 장점이 있다.

TRUNCATE를 사용하는 방법은 다음과 같다.

```mysql
TRUNCATE TABLE [테이블 이름];
```

### 2. DML

DML은 Data Manipulation Language의 약자로서, 데이터를 조작하는 언어이다.
DML의 명령어에는 INSERT, SELECT, UPDATE, DELETE가 있다.

#### 2-1. INSERT

INSERT 명령어는 영어 뜻 그대로 데이터를 '삽입'하는 명령어이다.
우리는 테이블을 만들고 그에 맞는 속성을 만든다.
그렇게 되면 우리는 그 속성에 맞는 데이터를 넣어야 한다.

그 데이터를 삽입하기 위한 명령어가 INSERT 명령어이다.
INSERT 명령어를 사용하는 방법은 다음과 같다.

```mysql
INSERT INTO [테이블 이름] ([속성]) VALUES ([속성에 대한 값]);
```

이에 대한 예제로 user 테이블이 있다고 할 때 INSERT 명령어를 통해 레코드를 추가하는 예제이다.

```mysql
CREATE TABLE user(
	user_name	VARCHAR(20)	NOT NULL,
    user_age	INT(11)		NOT NULL,
    user_id		VARCHAR(20)	NOT NULL,
    user_pw		VARCHAR(20) NOT NULL
);
```

```mysql
INSERT INTO user (user_name, user_age, user_id, user_pw)
	VALUES ('이진혁', 18, 'root',  '1111');
INSERT INTO user (user_name, user_age, user_id, user_pw)
	VALUES ('공영길', 18, 'sppu',  '2222');
INSERT INTO user (user_name, user_age, user_id, user_pw)
	VALUES ('손정우', 18, 'tqqv',  '3333');
INSERT INTO user (user_name, user_age, user_id, user_pw)
	VALUES ('김대웅', 18, 'srrw',  '4444');
```

##### 2-1-1. 속성 지정하지 않기

위의 INSERT문에서는 [속성]을 지정해주었다.
하지만 이 속성을 지정하지 않고 순서대로 넣어주는 방법도 있다.

```mysql
INSERT INTO [테이블 이름] VALUES ([속성 순서대로 값]);
```

#### 2-2. SELECT

SELECT 명령어도 영어 뜻 그대로 데이터를 '검색'하여 데이터를 보여주는 명령어이다.
INSERT 명령어를 통해 테이블에 값을 넣으면 INSERT한 값을 SELECT로 볼 수 있게 된다.

```mysql
SELECT [볼 속성] FROM [테이블 이름];
```

이게 SELECT문을 사용하기 위한 기본적인 문법이다.
만약 위의 user 테이블을 보기 위해선 다음과 같이 작성한다.

```mysql
SELECT * FROM user;
```

```mysql
+-----------+----------+---------+---------+
| user_name | user_age | user_id | user_pw |
+-----------+----------+---------+---------+
| 이진혁     | 18		 | root	   | 1111	 |
| 공영길     | 18		 | sppu    | 2222	 |
| 손정우     | 18		 | tqqv    | 3333	 |
| 김대웅     | 18		 | srrw    | 4444	 |
+-----------+----------+---------+---------+
```

*은 모든 요소를 뜻한다. * 대신 user_name, user_age, user_id, user_pw를 사용해도 된다.

##### 2-2-1. WHERE

WHERE 키워드는 출력하는 것에 대한 조건을 거는 것이다.
만약 user_name이 이진혁인 레코드를 검색하고자 한다면 다음과 같이 작성하면 된다.

```mysql
SELECT * FROM user WHERE user_name = '이진혁';
```

```mysql
+-----------+----------+---------+---------+
| user_name | user_age | user_id | user_pw |
+-----------+----------+---------+---------+
| 이진혁     | 18		 | root	   | 1111	 |
+-----------+----------+---------+---------+
```

여기서는 == 연산자가 아닌 =을 사용한다.
또한 >, <, >=, <=, != 연산자를 사용할 수 있다.

###### 2-2-1-1. LIKE

LIKE 키워드는 WHERE 뒤에 연산자로서 사용할 수 있으며
%를 이용해서 ~으로 끝나는 것, ~로 시작하는 것, ~가 들어간 것을 조회할 수 있다.

```mysql
SELECT * FROM user WHERE user_id LIKE '%r%';
```

이렇게 작성하면 r이 user_id에 r이 들어간 모든 레코드를 조회한다.

```mysql
+-----------+----------+---------+---------+
| user_name | user_age | user_id | user_pw |
+-----------+----------+---------+---------+
| 이진혁     | 18		 | root	   | 1111	 |
| 김대웅     | 18		 | srrw    | 4444	 |
+-----------+----------+---------+---------+
```

###### 2-2-1-2. OR

OR 연산자를 사용하면 여러 개의 조건을 OR문으로 묶을 수 있다.
만약 이름이 '이진혁' 이거나 user_pw이 '3333'인 user 테이블의 레코드를 가져오면 다음과 같다.

```mysql
SELECT * FROM user WHERE user_name = '이진혁' OR user_pw = '3333';
```

```mysql
+-----------+----------+---------+---------+
| user_name | user_age | user_id | user_pw |
+-----------+----------+---------+---------+
| 이진혁     | 18		 | root	   | 1111	 |
| 손정우     | 18		 | tqqv    | 3333	 |
+-----------+----------+---------+---------+
```

###### 2-2-1-3. AND

OR 연산자 대신 AND 연산자도 사용할 수 있다.
알고 있듯이 OR 연산자는 둘 중 하나라도 참이라면 참이지만
AND 연산자는 둘 다 모두 참이여야만 참이다.

###### 2-2-1-4. IN

IN은 WHERE절 뒤에 오는 연산자와 같은 역할을 한다.
IN을 사용하는 방법은 다음과 같다.

```mysql
SELECT * FROM [테이블 이름] WHERE 속성 IN (값1, 값2, 값3...);
```

만약 user_name이 이진혁, 공영길인 레코드를 출력하고자 하면 다음과 같다.

```mysql
SELECT * FROM user WHERE user_name IN ('이진혁', '공영길');
```

```mysql
+-----------+----------+---------+---------+
| user_name | user_age | user_id | user_pw |
+-----------+----------+---------+---------+
| 이진혁     | 18		 | root	   | 1111	 |
| 공영길     | 18		 | sppu    | 2222	 |
+-----------+----------+---------+---------+
```

##### 2-2-2. ORDER BY

###### 2-2-2-1. ASC

ORDER BY와 ASC를 같이 쓰면 테이블을 어느 속성을 오름차순으로 정렬할 수 있다.
다음은 user 테이블을 user_name 속성을 기준으로 오름차순 정렬한 것이다.

```mysql
SELECT * FROM user ORDER BY user_name ASC;
```

```mysql
+-----------+----------+---------+---------+
| user_name | user_age | user_id | user_pw |
+-----------+----------+---------+---------+
| 공영길     | 18		 | sppu    | 2222	 |
| 김대웅     | 18		 | srrw    | 4444	 |
| 손정우     | 18		 | tqqv    | 3333	 |
| 이진혁     | 18		 | root	   | 1111	 |
+-----------+----------+---------+---------+
```

###### 2-2-2-2. DESC

ORDER BY와 DESC를 같이 쓰면 테이블을 어느 속성을 내림차순으로 정렬할 수 있다.
다음은 user 테이블을 user_name 속성을 기준으로 내림차순 정렬한 것이다.

```mysql
SELECT * FROM user ORDER BY user_name DESC;
```

```mysql
+-----------+----------+---------+---------+
| user_name | user_age | user_id | user_pw |
+-----------+----------+---------+---------+
| 이진혁     | 18		 | root	   | 1111	 |
| 손정우     | 18		 | tqqv    | 3333	 |
| 김대웅     | 18		 | srrw    | 4444	 |
| 공영길     | 18		 | sppu    | 2222	 |
+-----------+----------+---------+---------+
```

#### 2-3. UPDATE

UPDATE 명령어는 데이터의 정보를 갱신하는 명령어이다.
UPDATE 명령어의 형식은 다음과 같다.

```mysql
UPDATE [테이블 이름] SET [속성][연산] WHERE [조건];
```

WHERE의 조건식은 SELECT와 같다.

#### 2-4. DELETE

DELETE 명령어는 데이터의 정보를 삭제하는 명령어이다.
DELETE 명령어의 형식은 다음과 같다.

```mysql
DELETE FROM [테이블 이름] WHERE [조건]
```

WHERE의 조건식은 SELECT와 같다.

## 3. DCL

DCL은 Data Control Language의 약자로서, 데이터를 제어하는 언어이다.
DCL은 GRANT, REVOKE가 있다.

#### 3-1. GRANT

GRANT는 사용자에게 권한을 주는 명령어이다.
GRANT로 줄 수 있는 권한은 굉장히 많은데
우리가 기본적으로 사용하는 root 계정은 모든 권한을 가지고 있습니다.

GRANT 명령어를 사용하는 방법은 다음과 같습니다.

```mysql
GRANT [권한] ON [데이터베이스 이름].[테이블 이름] TO '[유저 아이디]'@'[호스트]';
```

이렇게 GRANT 명령어를 작성하게 되면 [유저 아이디]에게 [데이터베이스 이름] 데이터베이스에 있는
[테이블 이름] 테이블에 대한 [권한] 권한을 주는 명령어가 된다.
모든 데이터베이스와 모든 테이블에 적용하기 위해서는 * . *을 사용하면 된다.

#### 3-2. REVOKE

REVOKE 명령어는 권한을 뺏는, 회수하는 명령어이다.
GRANT로 준 권한을 회수할 수 있다.

REVOKE 명령어를 사용하는 방법은 다음과 같습니다.

```mysql
REVOKE [권한] ON [데이터베이스 이름].[테이블 이름] FROM '[유저 아이디]'@'[호스트]';
```

GRANT와 형식적인 면은 같으므로 쉽게 이해할 수 있다.