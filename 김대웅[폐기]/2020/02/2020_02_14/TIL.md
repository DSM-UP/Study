# TIL

Node.js는 기본적으로 하나의 프로세스에 메모리 제한이 있다. (32bit에서는 512MB, 64bit에서는 1.5GB)

설정을 통해서 제한을 늘릴 수 있지만 worker를 늘리는 것을 권장하고 있다.

- worker를 생성하는 방법
  - child_process
  - cluster
    - 서버의 포트들을 공유할 수 있기 때문에 web application에 매우 적합함.
    - Node.js 0.12버전부터 Round-Robin Load Balancing이 적용됨.
- 프로세스들을 단순히 병렬로 실행하는 것은 child_process.fork()로 가능하고, 로드밸런싱, 포트 공유 등이 필요하다면 클러스터로 접근하는 것이 좋다.
- child_process, cluster 모두 IPC로 프로세스간의 통신이 가능하다.