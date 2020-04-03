# DMI 백엔드 분석기 (1일차)

백엔드 환경 : Node.js(Javascript), Express(프레임워크)

진입점 : app.js

의존성
async, express, socket.io, xlsx, sequelize

---

## app.js

웹서버, 채팅 서버 런치, 오류 및 기본 라우터들 관리

### 기본 라우터

| 라우터      | 파일 위치           |
| ----------- | ------------------- |
| /           | ./routes            |
| /auth       | ./routes/auth       |
| /attendance | ./routes/attendance |
| /student    | ./routes/student    |
| /absence    | ./routes/absence    |
| /club       | ./routes/club       |
| /class      | ./routes/class      |
| /chat       | ./routes/chat       |

### 디렉토리

| 이름        | 역할                                                         |
| ----------- | ------------------------------------------------------------ |
| documents   | 날짜에 따른 활동, 담당선생님, 동아리 위치, 학생 정보 등 처음 선생님으로 부터 엑셀 파일로 넘겨받고 사용할 파일들이 위치한다 |
| image       | 로고, 개발자 사진, 기타 서비스에서 사용할 사진들이 위치한다  |
| middlewares | jwt 확인 등을 시행하는 미들웨어의 구현이 위치한다            |
| models      | ORM을 위한 구현들이 위치한다                                 |
| routes      | API를 제공하기 위한 비지니스 로직이 위치한다                 |
| utils       | jwt 관리, 날짜 변환 등의 구현이 위치한다                     |



---

## routes/index.js

'/'의 라우터

### GET activity

주어진 날짜의 활동을 반환한다

#### req

query : year, month, day

#### res

0, 1, 2, 3 중 하나 (??????????)

#### 동작 방식

xlsx로 `afterSchoolSchedule.xlsx`을 읽어 json으로 변경후 루프 돌아서 주어진 날짜와 같은 날짜의 활동을 가져온다



### Patch activity

주어진 날짜의 활동을 주어진 활동으로 바꿉니다

#### req

query : year, month, day

body : { "activity" : 활동 종류 }

#### 동작 방식

xlsx로 `afterSchoolSchedule.xlsx`을 읽어 json으로 변경후 루프 돌아서 주어진 날짜와 같은 날짜의 활동을 변경 후 객체를 xlsx를 활용해서 파일 변경한다



### Patch activity-each

주어진 두 날짜의 활동을 교환합니다

#### req

body : {"date1" : [연도, 월, 일], "date2" : [연도, 월, 일] }

#### 동작 방식

xlsx로 `afterSchoolSchedule.xlsx`을 읽어 json으로 변경한 후 주어진 두 날짜가 같은지 확인한다. 다르다면 루프를 돌아서 각 날자의 인덱스를 가져온 후 두 활동을 스왑한다



### Get teachers

모든 선생님들을 반환한다

#### res

{teahcers : [선생님들]}

#### 동작 방식

Sequelize라는 ORM 라이브러리를 활용해 DB의 teacher 테이블로 부터 객체화된 데이터들을 가져온 후 반환한다

### Get teachers/specific

Patch teachers

Patch teacher-each

Get create/class

Get create/students

Get create/teachers

Get create/clubs

