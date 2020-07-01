# TIL

- AMQP (Advanced Message Queuing Protocol)
  - 인스턴스가 데이터를 교환할 때 사용하는 방법이다. Message Queue를 기반한 표준 프로토콜이다.
  - MQ를 사용하는 이유 : 메시지를 분실하지 않기 위해서 사용한다.
- AMQP의 세 가지 필수 컴포넌트
  - 대기열(Queue) : 메시지를 메모리나 디스크에 저장했다가 Consumer에게 메시지를 전달
    - 영구적 큐
    - 독점적 큐
    - 자동 삭제 큐
  - 교환기(Exchange) : Publisher로부터 수신한 메시지를 큐에 분배하는 라우터의 역할
    - 직접 교환기
    - 토픽 교환기
    - 팬아웃 교환기
  - 바인딩(Binding) : 교환기와 대기열 간의 연결