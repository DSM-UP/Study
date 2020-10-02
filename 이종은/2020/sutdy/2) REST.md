## REST

Representational State Transfer

: 네트워크 상에서 Client와 Sercer 사이의 통신 방식 중 하나이다. 자원의 표현으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미한다.

> 자원: 해당 소프트웨어가 관리하는 모든 것
>
> 자원의 표현: 그 자원을 표현하기 위한 이름 (자원이 DB의 학생 정보일 때 자원의 표현을 STUDENTS로 정한다.)
>
> 상태 전달: 데이터가 요청되어지는 시점에서 자원의 상태를 전달한다. (JSON 또는 XML을 통해 데이터를 주고 받는 것이 일반적)

#### 구성 요소

REST의 **구성 요소**는 자원, 행위, 표현이 있다.

1. **URL (자원)**

   자원을 명시하기 위해서 자원마다 고유한 ID가 존재하고 이 자원은 Server에 존재한다. 고유 ID는 HTTP URL이다. (HTTP URL을 통해 자원을 명시한다.) Client는 URL을 이용해 자원을 지정한다.

2. **HTTP Method (행위)**

   HTTP 프로토콜은 GET, POST, PUT, DELETE와 같은 메서드를 제공한다. Method를 통해 해당 자원에 대한 CRUD Operation을 적용한다.

   > CRUD Operation
   >
   > Create: 생성 (POST)
   >
   > Read: 조회 (GET)
   >
   > Update: 수정 (PUT)
   >
   > Delete: 삭제(DELETE)

   Client는 URL을 이용해 자원을 지정하고, 메서드로 지정된 자원에 대한 조작을 서버에 요청한다.

3. **Representation (표현)**

   클라이언트가 자원의 상태에 대한 조작을 요청하면 서버는 이에 응답(Representation)을 보낸다. 

   REST에서 하나의 자원은 여러 형태의 Representation로 나타내어질 수 있다. (JSON, XML, TEXT, RSS 등)

#### 특징

1. Uniform (유니폼 인터페이스)

   리소스 (URL)에 대한 요청을 통일되고 한정적으로 수행하는 아키텍처 스타일이다. 요청하는 Client가 플랫폼에 (android, ios, jsp 등) 무관하며, 특정 언어나 기술에 종속받지 않는 특징을 의미한다.

   덕분에 REST API는 HTTP를 사용하는 모든 플랫폼에서 요청이 가능하다.

   [^아키텍처]: 컴퓨터를 기능면에서 본 구성 방식

2. Stateless (무상태성)

   작업을 위한 상태 정보를 저장 및 관리하지 않는다. 서버에서 불필요한 정보를 관리하지 않으므로 구현이 단순하다. 

3. Cacheable (캐시 가능)

   HTTP라는 기존의 웹표준을 그대로 사용하기 때문에 웹의 기존 장점을 최대로 활용할 수 있다.

4. Self-descriptiveness (자체 표현 구조)

   요청 메세지만 보고도 이를 쉽게 이해할 수 있는 자체 표현 구조로 되어있다. 

5. Client-Server 구조

   Client와 (사용자인증, 세션과 로그인 정보 등 직접 관리) Server의 (API 제공) 역할이 확실히 구분됨으로 서로 간의 의존성이 줄어든다.

6. 계층형 구조

   REST 서버는 다중 계층으로 구성될 수 있다. 네트워크 기반의 중간 매체를 사용할 수 있고 (PROXY, 게이트웨이 등) 보안, 로드 밸런싱, 암호화 계층 등을 추가해 구조상의 유연성을 둘 수 있다.

#### REST API 예시

이름이 종은, 직업이 학생인 유저를 생성해라. 

```
HTTP POST , http://home/users/
{
	"users":{

		"name":"종은",

		"job":"학생"
	}
}
```

유저(users)는 생성되는 리소드, 생성해라는 메서드, 이름이 종은, 직업이 학생인은 메세지가 된다. (JSON문서로 표현됨)

[^JSON]: DATA 교환 형식이다. 데이터를 표시하는 표현 방법이다. (JSON 형식의 문서를 쉽게 JS 객체로 변환할 수 있다.)

1. Create (생성)

   ```
   HTTP POST, http://home/users/
   {
   	"name":"달",
   	"job":"강아지"
   }
   ```

2. Read (조회)

   ```
   HTTP GET, http://home/users/종은
   ```

   http://home/users/라는 유저 리소스에서 이름이 종은인 정보를 조회한다.

3. Update (수정)

   ```
   HTTP PUT, http://home/users/달
   {
   	"name":"달",
   	"job":"우리 강아지"
   }
   ```

   http://home/users/라는 유저 리소스에서 이름이 달인 유저의 직업을 우리 강아지로 수정한다.

4. Delete (삭제)

   ```
   HTTP DELETE, http://home/users/종은
   ```

   



