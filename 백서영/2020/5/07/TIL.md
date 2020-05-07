created state- 작업(Job)을 커널에 등록, PCB 할당 및 프로세스 생성, 가용 메모리 공간 체크 및 프로세스 상태 전이

Ready State- 프로세서 외에 다른 모든 자원을 할당 받은 상태(프로세서 할당 대기 상태, 즉시 실행 가능 상태)

Running State - 프로세서와 필요한 자원을 모두 할당 받은 상태PreemptionBlock/sleepBlocked/Asleep state 프로세서 외에 다른 자원을 기다리는 상태Suspended State - 메모리를 할당 받지 못한(빼앗긴) 상태, swap-out, swap-inTerminated/Zombie State - 프로세스 수행이 끝난 상태, 모든 자원 반납 후 커널 내에 일부 PCB 정보만 남아 았는 상태