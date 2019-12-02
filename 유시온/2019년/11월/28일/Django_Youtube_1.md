# Django

> #### https://www.youtube.com/watch?v=Cph0s6dT0Ik&list=PLieE0qnqO2kSHhEZzTBTtCUOKO1G_-Ctd 
> #### Seoul Wiz님의 Youtube 강의를 참고해 작성하였습니다.

## [T24] 장고(Django) 01강_웹프로그래밍과 Django

### 1-1 네트워크

현대의 모든 사물은 네트워크에 연결되어 있다.
네트워크에 연결되어 있다면, 네트워크에 존재하는 사물을 컨트롤 할 수 있다.


### 1-2 client와 server
 
- client : 노트북, 랩탑, 스마트폰 등에서 서버에서 정보를 받는 곳. 
- server : 클라이언트가 어떤 정보를 원할 때, 줄수 있는 정보가 모여있는 곳.

클라이언트가 요청(request)을 하면, 서버에서는 응답(response)을 한다.
즉, 이 둘의 관계는 데이터를 주고 받는 관계이다.
이 둘에서 데이터를 주고 받을 때, **HTTP**라는 통신 프로토콜을 이용한다.


### 1-3 HTTP의 특징

Client/Server 프로세싱 과정

1. Client가 Server에 요청한다.
2. 요청에 따라 Server에서 작업한다.
3. Client에 응답을 한다.
4. 연결 해제.
5. (연결을 유지하기 위해서 쿠키 또는 세션을 이용한다.)

연결을 해제 하는 이유는 Client의 수는 굉장히 많기 때문에 Server에 부담이 될 수 있다.
그러므로, **HTTP는 Server가 응답을 한 후 연결을 해제시킨다.**

HTTP는 연결을 끊어버리는데, 연결을 끊으면 안되는 경우에 쿠키나 세션에 저장을 한다.

> 쿠키 : 데이터가 Client에 머무는 것.

Client에서 요청을 보낼 때, 유니크한 Key 값을 같이 보내는데.
이 값을 서버에서 판단하여 연결을 *유지했던 것 처럼* 흐름을 이어나갈 수 있다.

그러나, 쿠키는 Client에 저장되므로 보안상 문제가 될 수 있다. 

> 세션 : 데이터가 Server에 머무는 것.

Server에서 세션을 생성하여 연결을 *유지했던 것 처럼* 흐름을  이어나갈 수 있다.


### 1-4 HTTP 처리 방식

Client와 Server는 request와 response를 처리하는데, 이 방식을 HTTP라 한다.
또한, Server와 DB 사이에도 request와 response를 처리한다.

Client와 Server 사이에는 방식이 8개가 있다.

방식 | 예시
-----|-----
POST | 새로운 글을 서버에 입력하길 원할 때
GET | 데이터를 필요하여 받아오길 원할 때
PUT | 기존 서버 데이터를 수정하길 원할 때
DELETE | 데이터를 삭제하길 원할 때
HEAD | X
OPTION | X
TRACE | X
CONNECT | X

이 중, POST, GET, PUT, DELETE 방식을 많이 사용한다.  

특히, POST와 GET은 HTML의 form태그에서 지원을 한다.

Server와 DB 사이에는 방식이 4개가 있다.

방식 | 예시
-----|-----
create | 생성
read | 조회
update | 수정
delete | 삭제


### 1-5 POST와 GET

- [GET]
    * URL에 데이터가 노출됨
    * 데이터 길이에 제한이 있음
    * 상대적으로 보안에 취약함
    
- [POST]
    * 요청 메시에 데이터를 닫음
    * 상대적으로 보안에 강함
    * django에서 주로 사용


### 1-6 URL

**URL 기본 형태**  
`https://a.com/search.a?query=Django`  
- 프로토콜 통신규약이 먼저 나온다. `https://`
- 서버 도메인(호스트)에 접근한다. `a.com/`
- 서버의 세부 경로에 접근한다. `search.a`
- 요청을 한다. `?query=Django`

이 형태는 최근까지 사용한 URL의 형태였다.

**REST URL 형태**
`https://a.com/search/Django`  
- 프로토콜 통신규약이 먼저 나온다. `https://`
- 서버 도메인(호스트)에 접근한다. `a.com/`
- URL 맵핑(데이터) 스트링으로 처리한다. `search/Django`
(이 경우, 규칙을 만들어 그때그때 함수를 호출한다.)


### 1-8 서버 구성 

> Client > Server > DB  

이 순서로 데이터 요청이 들어온다.  
이때, Server는 크게 두 가지로 구성이 되어 있다.

1. [웹 서버]
    * 주로 정적인 데이터 요청 처리
    * 동적인 데이터 요청시 애플리케이션 서버에 전달
    * ex) 사이트 메인 페이지 불러오기
    
2. [애플리케이션 서버]
    * 주로 동적인 데이터 요청 처리
    * Database 연동
    * ex) 사이트에서 정보 검색하기

이 두 서버 외에도, 이미지 서버나 메일 서버 등 서버를 세분화 할 수 있다.

그러나 이 경우, 비용이 많이 든다.
