# mongoDB 명령어

## document

### 3-1. 생성

`db.컬렉션명.insert(document)`로 document를 추가한다.

`db.컬렉션명.insert([document1, document2, ...])`과 같이 배열 형식으로 전달하면 여러 document를 추가할 수 있다.

### 3-2. 조회

`db.컬렉션명.find([query, projection])`으로 컬렉션의 document 리스트를 확인할 수 있다.

한 줄이 너무 길어 불편할 때는 끝에 `.pretty()`를 붙이면 json이 보기 좋게 나온다.


매개변수로 아래와 같은 것들이 들어갈 수 있다.

- `query` : document를 조회할 때 기준을 정한다. 이 매개변수를 비우거나, { }를 전달하면 컬렉션에 있는 모든 document를 조회할 수 있다.
- `projection` : document를 조회할 때 보여질 field를 정한다.
    ex) `db.컬렉션명.find( { }, { _id: false, title: true, content: false })`

`find()`는 기준값에 해당하는 document들을 선택해 cursor를 반환한다.

cursor는 query 요청의 결과를 가리키는 포인터로 cursor 객체를 통해 보이는 데이터의 수를 제한하거나 데이터를 정렬하는 등에 사용된다.

이 포인터는 10분간 사용되지 않으면 소멸된다.

### 3-3. 제거

`db.컬렉션명.remove(criteria[, justOne])`로 document를 제거할 수 있다.

매개변수로 들어가는 객체의 속성들은 아래와 같다.

- `criteria` : 데이터 기준 값으로서 일치하면 기본적으로 다 삭제한다. 이 값이 { }이면 컬렉션의 모든 데이터를 제거하기 때문에 주의해야 한다.
- `justOne` : 이 값이 true면 1개의 document만 제거한다.