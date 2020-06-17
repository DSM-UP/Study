# 전송 계층 보안(TLS, Transport Layer Security)

## TLS 구조

![캡처](C:\Users\user\Desktop\TLS 구조.JPG)

### 핸드 셰이크(Handshake) 프로토콜

해당 프로토콜을 통해 서버와 클라이언트가 서로를 인증할 암호 키를 협상할 수 있다.

| Type    | Lenght  | Content       |
| ------- | ------- | ------------- |
| 1바이트 | 3바이트 | 0 바이트 이상 |

- Type(유형) : 10개의 메시지 중 하나를 나타낸다.

    | 메시지 유형         | 매개 변수                                                    |
    | ------------------- | ------------------------------------------------------------ |
    | hello_request       | 없음                                                         |
    | client_hello        | version(버전), random(랜덤), session id(세션 id), cipher suite(암호 도구), compression method(압축 방법) |
    | server_hello        | version(버전), random(랜덤), session id(세션 id), cipher suite(암호 도구), compression method(압축 방법) |
    | certificate         | 연속된 X.509v3 인증서                                        |
    | server_key_exchange | parameters(매개 변수), signature(서명)                       |
    | certificate_request | type(유형), authorities(기관)                                |
    | server_done         | 없음                                                         |
    | certificate_verify  | signature(서명)                                              |
    | client_key_exchange | parameters(매개 변수), signature(서명)                       |
    | finished            | hash value(해시값)                                           |

- Lenght(길이) : 메시지의 길이를 바이트로 나타냄

- Content(내용) : 위 표에서 매개 변수에 해당



클라이언트와 서버 사이의 논리적 연결을 설정하는데 필요한 초기 교환 4단계가 존재한다.

![핸드셰이크 프로토콜 동작](C:\Users\user\Desktop\핸드셰이크 프로토콜 동작.JPG)

1. 보안 기능 설정

    논리적 연결 시작, 연관될 보안 기능을 설정

    클라이언트가 client_hello message를 보내는 것으로 핸드셰이크 프로토콜의 동작이 시작된다.

    - client_hello message 매개변수

        - version (버전)

            클라이언트가 수용할 수 있는 가장 높은 SSL 버전

        - random (랜덤)

            클라이언트가 생성한 랜덤한 값, 비표 역할을 하고 재전송 공격을 막기 위해 키 교환 동안 사용

        - session id (세션 id)

            가변-길이의 세션 식별자
            값이 0이 아닌 경우 : 클라이언트가 기존 연결의 매개 변수 갱신 혹은 기존 세션에서 새 연결의 생성을 원함

            값이 0인 경우 : 클라이언트가 새 세션으로 새 연결을 설정하길 원함

        - ciphersuite (암호 도구)

            클라이언트가 지원하는 암호 알고리즘 도구를 포함하는 목록
            선호도가 감소하는 순으로 나열
            목록의 각 요소는 키 교환 알고리즘과 암호 명세를 정의함

        - compression method(압축 방법)
            클라이언트가 쓸 수 있는 압축 방법 목록



    client_hello 메시지를 보낸 후 클라이언트는 해당 메시지와 동일한 매개변수를 가지는 server_hello 메시지를 기다린다.
    
    - server_hello message
    
        - version
            클라이언트가 제시한 버전 중 가장 낮은 버전과 서버에서 제공할 수 있는 가장 높은 버전을 택해서 포함
    
        - random
            클라이언트의 random 필드와는 무관하게 생성
    
        - session id
            클라이언트의 session id 필드가 0이 아니라면 서버는 동일한 값을 사용
    
            클라이언트의 session id 필드가 0이라면 서버의 session id 필드는 새 세션을 위한 값으로 채워짐
    
        - ciphersuite
            클라이언트가 제안한 것 중 서버가 선택한 압호 도구
    
        - compression method
            클라이언트가 제안한 것 중에서 서버가 선택한 압축 방법

2. 서버 인증과 키 교환

    인증할 필요가 있다면 서버는 자신의 인증서를 보내는 것으로 시작함 (certificate message)

    메시지는 1개 이상의 X.509 인증서를 포함
    

    요구된다면 server_key_exchange message를 보낼 수도 있다.
    단, 다음 두 경우에는 요구되지 않는다.

    1. 서버가 고정된 Diffie-Hellman 매개 변수와 함께 인증서를 보냈을 경우
    2. RSA 키 교환을 사용할 경우
       


    서명 : 일반적으로 메시지에 해시를 취하고 송시나의 개인 키를 이용해그 해시를 함호화를 해서 생성함
    
    ```
    hash(ClientHello.random || ServerHello.random || ServerParams);
    ```


    초기 hello message에서 얻은 두 개의 random 값을 포함시켜 적용하기 때문에 재전송 공격과 위장된 개체를 확실히 막을 수 있다.


​    
​    다음으로, 익명 Diffie-Hellman을 사용하지 않는 서버는 클라이언트로부터 인증서를 요구할 수 있다.
​    
​    - certificate type : 공개 키 알고리즘과 그것의 사용 목적을 나타냄
​        - RSA, 서명만
​        - DSS, 서명만
​        - 고정된 Diffie-Hellman에 대한 RSA : 서명은 RSA로 서명된 인증서를 보내는 것으로 인증만을 위해 사용
​        - 고정된 Diffie-Hellaman에 대한 DSS : 위와 비슷, 인증만을 위해 사용
​    - certificate_authorities : 수용할 수 있는 인증기관 이름 목록


    항상 요구되는 메시지는 server_done message이다. server_hello와 연관된 메시지의 끝을 나타내기 위해 서버가 보냄
    이 메시지를 보낸 이후는 서버가 클라이언트의 응답을 기다림

3. 클라이언트 인증과 키 교환

    server_done message를 수신했고, 인증서를 요구하였다면, 클라이언트는 서버가 확실한 인증서를 제공했는지 확인할 필요 있음
    server_hello message 매개 변수가 수용할 만한지 검사
    모든 조건이 만족되면 클라이언트는 한 개 이상의 메시지를 서버로 되돌려 보냄

    서버가 인증서를 요구했다면, 클라이언트는 certificate message를 보낸다.
    적합한 인증서가 없는 경우, no_certifictae 경고를 보낸다.

    client_key_exchange message를 보낸다. 이 메시지는 반드시 이 단계에서 보내야 한다.
    메시지 내용과 키 교환의 유형에 따라 다르다.

    - RSA
        클라이언트가 48 바이트 사전-마스터 비밀을 생성
        서버의 인증서로부터 얻은 공개키를 이용 혹은 server_key_exchange message에서 얻은 임시 RSA를 통해 암호화
        마스터 비밀을 계산

    - 임시 혹은 익명 Diffie-Hellman
        클라이언트의 공개 Diffie-Hellman 매개 변수를 보냄

    - 고정된 Diffie-Hellman
        클라이언트의 공개 Diffie-Hellman 매개 변수는 인증 메시지 안에 보내지기에 비어 있음

        

    클라이언트의 인증서가 정확하다는 것을 확실히 하기 위해 ceertificate_verify message를 보낼 수 있음
    보내기 위해서는 서명 능력이 있는 클라이언트 인증서가 꼭 있어야 한다.

4. 종료
    안전한 연결 설정을 완성하는 단계
    클라이언트는 change_cipher_spec message를 보내고 계류 상태 암호 명세를 현재 상태 암호 명세에 복사
    이 메시지는 핸드셰이크 프로토콜의 일부로 여겨지지는 않지만 암호 명세 변경 프로토콜을 사용해서 보냄
    새 알고리즘, 키, 비밀 하에 즉시 findisehd message를 서버로 보냄으로서 키 고환과 인증 과정이 성공적으로 이루어졌음을 확인

    이 두 메시지에 대한 응답으로 서버는 change_cipher_spec message를 보내고, 계류 상태를 현재 상태 암호 명세로 전송하고, 자신의 finisehd message를 보낸다.

    이 시점에서 핸드셰이크가 완료되며 클라이언트와 서버는 응용 계층에서 데이터 교환을 시작할 수 있음

### 암호 명세 변경 프로토콜 (Change Cipher Spec Protocol)

SSL 레콛 프로토콜을 사용하는 3가지 TLS-지정 프로토콜 중 하나, 가장 간단

1 바이트로 구성, 값 1을 갖는 한 개의 메시지로 구성

| 1        |
| -------- |
| 1 바이트 |

계류 상태를 현재 상태에 복사하는 것이 유일한 목적

이 연결에 사용될 암호 도구를 갱신

### 경고 프로토콜

대등 개체에게 TLS-관련 경고를 할 때 사용

| Level    | Alert    |
| -------- | -------- |
| 1 바이트 | 1 바이트 |

- Level : 메시지의 엄밀성을 전달하기 위해 경고(1) 혹은 심각(2) 중 하나의 값을 가짐
    - 심각(fatal) : TLS는 즉시 연결 단절, 이 세션에서 어떤 새로운 연결을 설정할 수 없음
- Alert : 특정 경고를 나타내는 코드가 들어있음
    - 항상 심각(always fatal)
        - unexpected_message : 적합하지 않은 메시지 수신
        - bad_record_mac : 부정확한 MAC 주소 수신
        - decompressed_failure : 압축풀기 함수에 적합하지 않은 입력
        - handshake_failure : 사용할 수 있는 옵션이 주어졌을 때 수용할 수 있는 보안 매개 변수의 집합을 송신자가 협상할 수 없음
        - illegal_parameter : 핸드셰이크 메시지 안의 한 필드가 범위 밖에 있거나 다른 필드와 모순
        - decryption_failed : 부정확하게 복호화된 암호문
        - record_overflow : TLS 레코드의 길이가 페이로드와 함께 수신 || 복호화된 암호문의 길이가 페이로드보다 길다.
        - unknown_ca : 올바른 인증서 체인(부분 체인) 수신 && CA 인증서 위치 확인 불가 || 알고 있거나 신뢰할 만한 CA와 매칭 불가
        - access_denied : 올바른 인증서를 수신 && 접근 통제가 적용해 송신자와 협상을 진행하지 않기로 결정
        - decode_error : 필드가 해당 영역을 벗어남 || 메시지 길이가 달라 메시지 복호화 불가
        - export_restriction : 키 길이 규제를 따르지 않는 협상 탐지
        - protocol_version : client가 협상을 시도한 protocol 버전이 지원되지 않는 버전이다.
        - insufficient_security : 협상 실패, handshake_failure 대신 이 경고 반환
        - internal_error : 대등과 무관한 내부 오류 || 올바른 프로토콜과는 무관한 오류 -> 지속 불가
    - 이외의 경고
        - close_notify : 송신자가 이 연결에서 더 이상 메시지를 전송하지 않을 것을 수신자엑 알림
        - bad_certificate : 수신된 인증서에 문제가 있음
        - unsupported_certificate : 수신된 인증서의 유형을 지원하지 않음
        - certificate_revoked : 인증서가 서명자에 의해 취소됨
        - certificate_expired : 인증서의 유효기간이 지남
        - certificate_unknown : 인증서 처리 중 알 수 없는 문제 발생
        - decrypt_error : 핸드셰이크 암호 동작 실패
        - user_canceled : 프로토콜 실패와는 무관한 이유로 인해 이 핸드셰이크가 취소됨
        - no_renegotiation : 송신측이 재협상을 할 수 없다는 것을 나타냄, 항상 경고이다.

### 하트비트 프로토콜

- 하트비트(heartbeat) : 정상적으로 동작한다는 걸 나타내기 위해(시스템의 다른 부분과 동기화를 하기 위해) H/W나 S/W가 생성하는 주기적 신호

프로토콜 개체의 가용성을 모니터링 할 때 사용하는 프로토콜

TLS Record Protocol 위에서 구동되면 두 개의 메시지 유형으로 구성됨

- heartbeat_request : 언제라도 보낼 수 있음, 페이로드 길이, 페이로드, 패딩필드 존재
- heartbeat_response : hearbeat_request 메세지가 오면 바로 전달됨

핸드셰이크 프로토콜의 1단계에서 하트비트 프로토콜이 사용됨



다음과 같은 목적으로 사용한다.

- 송신자는 수신자가 아직 작동하고 있는지를 확인할 수 있다.
- 휴지(idle) 상태의 연결에서 하트비트느느 활성화 상태를 유지함, 아이들 연결 상태를 허용하지 않는 침입차단시스템이 차단을 하지 못하게 막음

### TLS 레코드 프로토콜

- 기밀성 : 핸드셰이크 프로토콜은 TLS 페이로드를 관용 암호화 하는데 쓸 공유 비밀 키 정의
- 메시지 무결성 : 핸드셰이크 프로토콜 또한 메시지 인증 코드(MAC)를 생성하는데 사용할 공유 비밀 키 정의

![TLS 레코드 프로토콜 동작](C:\Users\user\Desktop\TLS 레코드 프로토콜 동작.JPG)

- 단편화 : 각 상위-계층 메시지를 작은 블록으로 단편화한다.

- 압축 (옵션) : 손실되는 것이 없어야 한다. 내용의 길이가 1,024 바이트 이상 늘어나서는 안 됨, 디폴트 압축 알고리즘은 비어 있음

- 메시지 인증 코드(MAC, Message Authentication Code) 첨부 : HMAC 알고리즘을 이용해 압축된 데이터의 MAC을 계산

- 패딩 추가 : 블록 암호만 할 수 있는 옵션, 마지막 바이트는 패딩의 길이를 표시

- 암호화 : 대칭 암호로 암호화

- 헤더 붙이기 : 다음과 같은 필드로 구성된 헤더가 붙음

    ​	![TLS 레코드 프로토콜 형식](C:\Users\user\Desktop\TLS 레코드 프로토콜 형식.JPG)

    - 컨텐츠 유형(Contents Type)(8비트) : 포함된 단편을 처리할 때 사용하는 상위 계층 프로토콜
        - 정해진 값으로는 change_cipher_spec, alert, handshake, application_data가 있다.
    - 주 버전(Major Version)(8비트) : 사용 중인 SSL의 주 버전
    - 부 버전(Minor Version)(8비트) : 사용 중인 서브 버전
    - 압축된 길이(Compressed Lenght)(16비트) : 평문 단편(압축을 했다면 압축된 단편)의 바이트 단위 길이



## TLS 개념

### 연결 (Connection)

적절한 서비스를 제공하는 전송

TLS에서 이런 연결은 대등-대-대등 관계

일시적 연결이며 모든 연결은 하나의 세션에 연관됨

### 세션 (Session)

한 클라이언트와 한 서버 사이의 연관

시작하기 위해서는 핸드셰이크 프로토콜을 이용해야 함

다수의 연결이 공유하는 암호적 보안 매개 변수를 정의

## TLS 상태

### 세션 상태

- 세션 식별자 : 활동 상태나 재시작할 수 있는 세션 상태를 나타내기 위해 서버가 선택하는 임의의 바이트 열
- 대등 인증서 : 대등의 X509.v3 인증서, 비어있을 수 있다.
- 압축 방법 : 암호화를 하기 전 압축에 사용하는 알고리즘
- 암호 명세 : MAC 계산에 사용되는 용량이 큰 데이터에 대한 암호 알고리즘, 해시 알고리즘 등
- 마스터 비밀 : 클라이언트와 서버가 공유하는 비밀
- 재시작 여부 : 새 연결을 시작하기 위해 세션을 사용할 수 있는지를 나타내는 플래그

### 연결 상태

- 서버와 클라이언트 랜덤 : 각 연결에 사용하려고 서버와 클라이언트가 선택하는 바이트 열
- 서버 기록 MAC 비밀 : 서버가 보낸 데이터로 MAC을 계산할 때 사용하는 비밀 키
- 클라이언트 기록 MAC 비밀 : 클라이언트가 보낸 데이터로 MAC을 계산할 때 사용하는 비밀 키
- 서버 기록 키 : 서버가 데이터를 암호화, 클라이언트가 복호화할 때 사용하는 관용 암호 키
- 클라이언트 기록 키 : 클라이언트가 데이터를 암호화, 서버가 복호화할 때 사용하는 관용 암호 키
- 초기화 벡터 : CBC 모드로 블록 암호를 사용할 때, 초기화 벡터가 각 키에 대해 유지
- 순서 번호 : 전송, 수신한 메시지에 대해 별도로 순서 번호 부여, 암호 명세 변경 메시지를 송,수신 하는 경우 0번 부여, 2^64-1을 넘어서는 안 된다.