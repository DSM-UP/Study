# TIL

Public API : 사용자에게 노출해도 되는 API

Private API : 사용자에게 노출하면 안되는 API

Public API와 Private API의 접근을 제한하는 방법 : 네트워크 환경 분리.

Public 게이트웨이를 만들 때 고려해야 할 사항

- 제한된 API만 허용한다.
- https 모듈로 SSL 보안 통신을 이용한다.
- https 통신을 하더라도 GET과 DELETE는 보안상 위험하다.

process 객체를 이용한 모니터링

- process.title : 프로세스 이름
- process.pid : 프로세스 아이디
- process.cwd() : 실행 경로
- process.uptime() : 실행 시간
- process.cpuUsage() : CPU 사용량
- process.memoryUsage() : 메모리 사용량
- process.platform : 운영체제