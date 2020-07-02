# 리눅스 사용자 관리

- 고전적인 사용자 관리 명령어 : 홈 디렉토리 수동 생성
  - useradd : 사용자 추가
  - usermod : 사용자 변경
  - userdel : 사용자 삭제
- tail -n2 /etc/passwd 또는 cat /etc/passwd
  - 만들어진 사용자의 정보를 알 수 있다.
- sudo passwd 사용자명 : 사용자의 비밀번호 설정
- 홈 디렉토리 소유자 변경
  - sudo chown 사용자명 디렉토리
  - sudo chown 사용자명:그룹명 디렉토리 -> 소유자와 소유그룹이 모두 바뀜



- 향상된 사용자 관리 명령어
  - adduser
  - deluser