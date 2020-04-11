# OAuth

Client, Owner, Resource Server이렇게 세 주체가 존재한다.

Client는 OpenAPI를 사용하는 서버, Owner는 계정을 가지고 서비스를 사용하는 유저, Resource Server는 OAuth를 통해 접근을 지원하는 서버이다.



OAuth 인증은 아래의 단계를 거친다

1. Client는 Resource Server에게 서비스를 이용할 토큰을 요청한다
2. Resource Server는 Client id를 발행한다.



1. Owner가 Client의 서비스를 이용하기 위해 타 서비스와 연동하길 희망한다.
2. Owner는 Client id를 가지고 Resource Server에 요청한다.
3. Resource Server는 Owner의 권한을 확인 및 요청한다.(로그인)
4. Owner의 권한이 확인 되면 Owner를 Client로 리다렉트 시키고 request 토큰을 발행한다.
5. Owner는 request 토큰을 가지고 Client로 가서 access 토큰을 요청한다.
6. Client는 request 토큰으로 Resource Server에서 access 토큰을 요청한다.
7. Resource Server는 access 토큰을 발행한다.
8. 사용한다.

