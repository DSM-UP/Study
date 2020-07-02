<<<<<<< HEAD
# mongoDB

## Collection

### 2-1. 생성

`db.createCollection(name, [options])`

- name : 컬렉션 이름
- optinos : document 타입으로 구성된 해당 컬렉션의 설정값
    - size : 해당 컬렉션의 최대 사이즈를 byte 단위로 지정한다.
    - max : 해당 컬렉션에 추가할 수 있는 최대 document 갯수를 지정한다.

### 2-2. 조회

`show collections`

### 2-3. 제거

`db.컬렉션명.drop()`

### 2-4. 유틸

=======
# mongoDB

## Collection

### 2-1. 생성

`db.createCollection(name, [options])`

- name : 컬렉션 이름
- optinos : document 타입으로 구성된 해당 컬렉션의 설정값
    - size : 해당 컬렉션의 최대 사이즈를 byte 단위로 지정한다.
    - max : 해당 컬렉션에 추가할 수 있는 최대 document 갯수를 지정한다.

### 2-2. 조회

`show collections`

### 2-3. 제거

`db.컬렉션명.drop()`

### 2-4. 유틸

>>>>>>> fcd0fbc7db4292ed39c085ae81536bb7026d8e8b
`db.OLD컬렉션명.renameCollection('New컬렉션명') ` : 컬렉션의 이름 변경