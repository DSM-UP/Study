# MongoDB  database 명렁어

**출처**

<a href="https://sjh836.tistory.com/100" target="_blank">빨간색코딩 - 티스토리</a>



## database

### 1-1. 생성

`use 데이터베이스명`으로 생성한다.

이미 있는 경우 존재하는 데이터베이스를 사용하게 된다.

### 1-2. 조회

1개 이상의 Collection이 있어야 데이터베이스 리스트에서 조회된다.

- db : 현재 사용 중인 데이터베이스를 확인한다.
- show dbs : 데이터베이스 리스트를 확인한다.
- db.stats() : 데이터베이스의 상태를 확인한다.

### 1-3. 제거

`db.dropDatabase()`로 데이터베이스를 제거한다.

이때, use로 해당 데이터베이스를 선택하고 실행해야 한다.