# ICMP 프로토콜

- ICMP(Internet Control Message Protocol)가 하는 일
  - 네트워크 컴퓨터 위에서 돌아가는 운영체제에서 오류 메시지를 전송 받는 데 주로 쓰인다.
  - 프로토콜 구조의 Type과 Code를 통해 오류 메시지를 전송 받는다.
- ICMP 프로토콜의 구조
  - Type (1byte) : 대분류
    - 대표적인 값
      - `0` : 통신 확인 응답
      - `8` : 통신 확인 요청
      - `3` : 목적지까지 도달하지 못함.
      - `11` : 목적지에 도달했는데 응답을 못받음.
      - `5` : 상대방의 라우팅 테이블을 수정할 때 사용.
  - Code (1byte) : 소분류
  - Checksum (2byte) : 헤더가 오류가 있는지 없는지 나타내는 값
  - Other message specific information (4byte)