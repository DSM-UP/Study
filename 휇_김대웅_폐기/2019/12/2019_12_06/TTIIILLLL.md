# CORS

- script 태크로 둘러싸여 있는 스크립트에서 생성된 cross-origin http requests는 same origin policy를 적용 받기 때문에 cross-site http requests가 불가능하다.
- AJAX가 널리 사용되면서 XMLHttpRequest에 대해서도 cross-site http requests가 가능해야 한다는 요구가 늘어나자 W3C에서 cors라는 권고안이 나오게 됐다.
- cors 요청의 종류
  1. Simple
  2. Preflight
  3. Credential
  4. Non-Credential



- Simple Request

  아래의 3가지 조건을 모두 만족하면 Simple Request이다.

  - Get, Head, Post 중의 한 가지 방식을 사용해야 한다.
  - 커스텀 헤더를 전송하지 말아야 한다.
  - Post 방식일 경우 Content-Type이 아래 셋 중 하나여야 한다.
    - application/x-www-form-urlencoded
    - multipart/form-data
    - text/plain

  Simple Request는 서버에 1번 요청하고, 서버도 1번 회신하는 것으로 종료된다.

  

- Preflight Request

  Simple Request 조건에 해당하지 않으면 브라우저는 Preflight Request 방식으로 요청한다.

  - Get, Head, Post 외의 다른 방식으로도 요청을 보낼 수 있다.
  - application/xml 처럼 다른 Content-Type으로 요청을 보낼 수 있다.
  - 커스텀 헤더를 사용할 수 있다.

  Preflight Request는 먼저 서버에 예비 요청을 보내고 서버는 예비 요청에 대해 응답한다.

  그 다음에 본 요청을 서버에 보내고 서버도 본 요청에 응답한다.

  **하지만, 예비 요청과 본 요청에 대한 서버단의 응답을 프로그래머가 프로그램 내에서 구분하여 처리하는 것은 아니다.**



- Request with Credential

  HTTP Cookie와 HTTP Authentication 정보를 인식할 수 있게 해주는 요청

  요청 시 xhr.withCredentials = true를 지정해서 Credential 요청을 보낼 수 있고, 서버는 응답 헤더에 반드시 Access-Control-Allow-Credentials: true를 포함해야 한다 Access-Control-Allow-Origin 헤더의 값에는 *가 올 수 없으며 구체적인 도메인이 와야 한다.



- Request without Credential

  cors 요청은 기본적으로 Non-Credential 요청이므로, xhr.withCredentials = true를 지정하지 않으면 Non-Credential 요청이다.