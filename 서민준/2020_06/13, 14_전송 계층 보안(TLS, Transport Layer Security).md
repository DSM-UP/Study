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
    다음으로, 익명 Diffie-Hellman을 사용하지 않는 서버는 클라이언트로부터 인증서를 요구할 수 있다.
    
    - certificate type : 공개 키 알고리즘과 그것의 사용 목적을 나타냄
        - RSA, 서명만
        - DSS, 서명만
        - 고정된 Diffie-Hellman에 대한 RSA : 서명은 RSA로 서명된 인증서를 보내는 것으로 인증만을 위해 사용
        - 고정된 Diffie-Hellaman에 대한 DSS : 위와 비슷, 인증만을 위해 사용
    - certificate_authorities : 수용할 수 있는 인증기관 이름 목록


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