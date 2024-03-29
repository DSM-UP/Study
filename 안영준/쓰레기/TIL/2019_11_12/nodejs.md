# NODE JS

==================(2019-11-12 / 9시 0분)===================

#### 핵심 개념

노든는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임입니다. NODE.js는 이벤트 기반, 논블로킹 I/O 모델을 사용해 가볍고 효율적입니다. NODE.js의 패키지 생태계인 npm은 세계에서 가장 큰 오픈소스라이브러리 생태계이고 합니다.(- 노드의 공식 사이트)

#### 서버

서버 = 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 프로그램 혹은 컴퓨터.

클라이언트 = 요청을 보내는 주체로 브라우저, 데스크톱 프로그램,모바일 앱, 다른 서버에 요청을 보내는 서버일 수도 있다.

#### 런타임

런타임 = 특정 언어로 만든 프로그램등을 실행할 수 있는 환경을 뜻함.

노드의 내부구조



Node.jsCore Library

Node.js BInding

v8(오픈소스 자바스크립트 엔진)|libuv(비동기 I/O)



#### 이벤트 기반

이벤트 기반 = 이벤트가 발생하였을 떄 미리 지정해둔 작업 수행 하는 방식 (클릭,네트워크 요청 등)

이것을 미리 등록해두어야하는데 이것을(이벤트 리스너에 콜백 함수를 등록한다고 함)

노드는 자바스크립트 코드에서 맨 위부터 한 줄씩 실행함.



이벤트 루프 = 이벤트 발생 시 호출할 콜백 함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역할을 담당. 노드가 종료될 떄까지 이벤트 처리를 위한 작업을 반복하므로 루프라고 불림

태스크 큐 =  이벤트 발생 후 호출되어야 할 콜백 함수들이 기다리는 공간 콜백들이 이벤트 루프가 정한 순서대로 줄을 서있어 콜백 큐라고도 부름.

백그라운드 = 타이머나 I/O 작업 콜백 또는 이벤트 리스너들이 대기하는 곳 

#### 논 블로킹 I/O

이벤트 루프를 잘 활용하면 오래 걸리는 작업을 효율적으로 처리할수있음. 오래걸리는 함수를 백그라운드로 보내서 다음코드가 먼저 실행하게되고 그함수가 다시 큐를 거쳐 호출 스택이 올라오기를 기다리는 방식임.

블로킹보다는 논블로킹이 같은 방식을 더 짧은 시간동한 처리함.(블로킹은 기다리지만 논블로킹은 한번에 읽어드리고 하나씩 수행하기 때문)

블로킹과 논블로킹과 비슷한 비동기와 동기

비동기 =  논블로킹 , 동기 = 블로킹 (오래 걸리는 작업은 나중에 적용됨)



싱글 스레드 = 작업을 혼자서 처리하는것(멀티 스레드는 여러개의 스레드가 일을 나눠서 처리하는것)

위에서 말했던 논블로킹 방식이 중요한 이유가 바로 노드는 싱글 스레드이기 때문,  만약 싱글 스레드가 

블로킹방식이었다면 요청한 후 결과가 나올때까지 기다려, 매우 느려짐.

하지만 논블로킹방식이기에 한번에 요청을 받고, 그리고 결과가 나오면 바로 출력하는식임.

멀티스레드가 좋아보이지만, 메모리 낭비가 발생할 수있음(왜냐하면  한개로도 충분한데 여러개일때, 한개만 해야되는 일이 생기면 노는게발생하고, 그에 따른 비용과, 메모리낭비가 되기 떄문)

프로세스 = 운영체제에서 할당하는 작업의 단위. 노드는 인터넷 브라우저 같은 프로그램은 개별적인 프로세스임. 프로세스 간에는 메모리 등의 자원을 공유하지 않습니다.

스레드 = 프로세스 내에서 실행되는 흐름의 단위. 하나의 프로세스는 스레드를 여러개 가질 수있음. 스레드는 부모 프로세스의 자원을 공유. 즉 같은 메모리에 접근 가능.

사실 노드 또한 스레드가 많지만, 사용자가 사용할 수있는 스레드가 하나이기에 싱글 스레드임.

(노드는 프로세스 자체를 복사해 작업을 동시에 처리하는 멀티 프로세싱 방식임. )



