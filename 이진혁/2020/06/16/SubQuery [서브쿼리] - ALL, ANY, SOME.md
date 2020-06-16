## SubQuery [서브쿼리] - ALL, ANY, SOME

### 1. 서브쿼리란?

기존에 SELECT, UPDATE, DELETE, INSERT 구문을 우리는 쿼리(Query)라고 한다.
이러한 쿼리를 중첩하여 사용하는 쿼리를 서브쿼리라고 한다.
예를 들어 SELECT 문의 결과를 이용하여 UPDATE를 하는 것을 UPDATE 서브쿼리라고 한다.
그런데 UPDATE의 결과를 이용하여 SELECT 구문을 실행할 수는 없다.
왜냐하면 SELECT 구문은 결과가 반환되어 나오지만 UPDATE, DELETE, INSERT 구문은
결과가 처리되기만 할 뿐 결과가 나오지는 않기 때문이다.

서브쿼리의 종류로는 SELECT 서브쿼리, UPDATE 서브쿼리, DELETE 서브쿼리, INSERT 서브쿼리가 존재하는데
SELECT 구문은 계속해서 결과를 반환하기 때문에 다중 서브쿼리를 만들어낼 수도 있다.

#### 1-1. INSERT 서브쿼리

일단 다음과 같이 테이블 구조가 만들어져 있다고 하자.(테이블 이름은 student)

| num  | name   | height | age  |
| ---- | ------ | ------ | ---- |
| 1    | 김대웅 | 100    | 18   |
| 2    | 김도희 | 150    | 18   |
| 8    | 백서영 | 140    | 18   |
| 9    | 서민준 | 180    | 18   |
| 11   | 손정우 | 110    | 18   |
| 15   | 유시온 | 160    | 18   |

만약 name이 '유시온'인 행을 복사하여 삽입하시오.
라는 문제가 있을 경우 우리는 서브쿼리를 이용해서 INSERT 구문을 실행시킬 수도 있다.

```sql
INSERT INTO student(num, name, height, age)
	SELECT num, name, height, age FROM student WHERE name = '유시온';
```

기존의 INSERT 구문과는 다르게 values 키워드가 없는 것을 알 수 있고,
대신 SELECT 문이 들어가서 속성들을 채워주는 것을 볼 수 있다.

위 SQL문을 작성하게 되면 다음과 같이 student 테이블 구조가 바뀐다.
| num  | name   | height | age  |
| ---- | ------ | ------ | ---- |
| 1    | 김대웅 | 100    | 18   |
| 2    | 김도희 | 150    | 18   |
| 8    | 백서영 | 140    | 18   |
| 9    | 서민준 | 180    | 18   |
| 11   | 손정우 | 110    | 18   |
| 15   | 유시온 | 160    | 18   |
| 15   | 유시온 | 160    | 18   |

참고로 모든 속성이 아니라 일부분의 속성만을 바꿔주기 위해서 서브쿼리를 사용하게 되면
에러가 발생하게 되므로 반드시 모든 속성을 다룰 때만 사용하기를 바란다.
위 에러를 예로 들자면 다음과 같다.

```sql
INSERT INTO student(num, name, height, age)
	SELECT num, name, SELECT height, age FROM student WHERE name = '유시온';
```

위 코드 작성시 에러가 발생하게 된다.

#### 1-2. UPDATE 서브쿼리

UPDATE 서브쿼리나 INSERT 서브쿼리, DELETE 서브쿼리는 모두 같은 방식으로 동작하는 것을 느낄 수 있다.
UPDATE 서브쿼리는 SET 절에 서브쿼리를 넣느냐와 WHERE 절에 서브쿼리를 넣느냐로 나뉘게 된다.

##### SET 절의 서브쿼리

SET 절에 서브쿼리를 삽입하게 되면 변경할 값을 SELECT 구문에서 받아와야 한다.
따라서 다음과 같이 만들 수 있다.

name이 '유시온'인 행의 name을 num이 1인 행의 name으로 변경하라.
라는 문제가 주어졌을 때 우리는 UPDATE 서브쿼리로 다음과 같이 SQL문을 작성할 수 있다.

```SQL
UPDATE student SET name = (SELECT name FROM student WHERE num = 1)
	WHERE name = '유시온';
```

이렇게 SQL문을 작성하였을 때 student 테이블은 다음과 같이 변경된다.

| num  | name   | height | age  |
| ---- | ------ | ------ | ---- |
| 1    | 김대웅 | 100    | 18   |
| 2    | 김도희 | 150    | 18   |
| 8    | 백서영 | 140    | 18   |
| 9    | 서민준 | 180    | 18   |
| 11   | 손정우 | 110    | 18   |
| 15   | 김대웅 | 160    | 18   |
| 15   | 김대웅 | 160    | 18   |

##### WHERE 절의 서브쿼리

WHERE 절에 서브쿼리를 삽입하게 되면 변경할 때의 조건을 SELECT 구문에서 받아와야 한다.
그렇다면 height가 110인 행의 num보다 작은 행들의 name을 '김대웅'으로 변경하시오.
라는 문제가 있다고 하자.
그렇다면 우리는 다음과 같이 UPDATE 서브쿼리를 작성할 수 있다.

```sql
UPDATE student SET name = '김대웅'
	WHERE num < (SELECT num FROM student WHERE height = 110);
```

그렇다면 student 테이블은 다음과 같이 변경된다.

| num  | name   | height | age  |
| ---- | ------ | ------ | ---- |
| 1    | 김대웅 | 100    | 18   |
| 2    | 김대웅 | 150    | 18   |
| 8    | 김대웅 | 140    | 18   |
| 9    | 김대웅 | 180    | 18   |
| 11   | 손정우 | 110    | 18   |
| 15   | 김대웅 | 160    | 18   |
| 15   | 김대웅 | 160    | 18   |

#### 1-3. DELETE 서브쿼리

DELETE 서브쿼리는 WHERE 절에서만 서브쿼리를 만들어 사용할 수 있다.
그렇다면 num이 1인 행의 name을 가진 행들을 모두 삭제하라라는 요청이 온다고 한다면
우리는 다음과 같은 DELETE 서브쿼리를 작성할 수 있다.

```sql
DELETE FROM student WHERE name = (SELECT name FROM student WHERE num = 1);
```

이렇게 SQL문을 작성하게 되면 다음과 같이 student 테이블이 변경된다.

| num  | name   | height | age  |
| ---- | ------ | ------ | ---- |
| 11   | 손정우 | 110    | 18   |

#### 1-4. SELECT 서브쿼리

SELECT 서브쿼리가 기본적으로 가장 복잡하게 사용될 수 있는 서브쿼리이다.
SELECT 서브쿼리는 WHERE 절에서만 사용이 가능하지만 SELECT 서브쿼리는 여러 번 중첩될 수 있기 때문에
일부러 복잡하게 만들고자 한다면 쉽게 복잡하게 SQL문을 작성하도록 유도할 수 있다.
하지만 그렇게 심각하게 서브쿼리를 중첩해놓지는 않는다.

SELECT 서브쿼리를 위해서 테이블을 다시 작성하자면 다음과 같다.

| num  | name   | height | age  |
| ---- | ------ | ------ | ---- |
| 1    | 이진혁 | 174    | 18   |
| 2    | 손정우 | 169    | 18   |
| 3    | 유시온 | 176    | 18   |
| 4    | 김대웅 | 140    | 19   |
| 5    | 공영길 | 172    | 20   |

여기서 age가 20인 행의 height 보다 큰 height를 가진 행의 num과 name을
출력하라라는 요청이 들어왔을 경우 SELECT 서브쿼리를 사용할 수 있다.
이를 SQL문으로 작성하면 다음과 같다.

```sql
SELECT num, name FROM student
	WHERE height > (SELECT height FROM student WHERE age = 20)
```

위의 SQL문의 결과는 다음과 같은 테이블 상태를 출력한다.

| num  | name   |
| ---- | ------ |
| 1    | 이진혁 |
| 3    | 유시온 |

### 2. ALL, ANY, SOME

그렇다면 서브쿼리와 함께 사용되는 ALL, ANY, SOME 키워드는 무엇을 말하는 것일까?
서브쿼리를 작성하면서 지금까지는 문제가 없었을 것이다.
하지만 당장 위의 SELECT 서브쿼리 예제를 살펴보면
만약 age가 20인 행이 두 개 이상이었다면?
height를 어떤 행의 height와 비교해야 할지 몰라서 에러가 발생했을 것이다.
이를 해결해주는 것이 바로 ALL, ANY, SOME이다.

#### 2-1. ALL

ALL 키워드는 서브쿼리의 모든 결과에 대하여 비교하도록 만드는 키워드이다.
따라서 만약 age가 20인 행이 두 개 있었다면 두 가지 행의 height 값을 둘 다 비교하여
모든 height 값을 만족하는 행에 대한 처리만 한다.

#### 2-2. ANY

ANY 키워드는 서브쿼리의 결과 중 하나라도 만족한다면 그 행도 포함된다.
만약 age가 20인 행이 두 개 있었는데 height가 각각 172, 180이라면
height가 172보다 큰 행도 되고 180보다 큰 행도 된다.

#### 2-3. SOME

SOME 키워드는 ANY와 동일하게 작동한다.
하지만 영어권에서 ANY라는 키워드 보다는 SOME이라는 키워드가 더 와닿기 때문에 사용한다고 한다.