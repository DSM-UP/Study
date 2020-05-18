## ARP

ARP는 Address Resolution Protocol의 약자로서, OSI 7계층에서 3계층에 해당하는 프로토콜이다.
ARP 자체가 프로토콜이라는 뜻을 담고 있기 때문에
ARP 프로토콜 보다는 ARP라고 하는 것이 좀 더 바른 표현이라고 볼 수 있다.

### 1. ARP가 하는 일

같은 네트워크 대역에서 통신하기 위해서는 MAC 주소가 필요하다.
그래서 IP 주소를 이용해서 MAC 주소를 얻어오는 일을 한다.

### 2. ARP 구조

ARP는 총 28바이트로 이루어져 있으며 다음과 같이 구성되어 있다.

1. Hardware Type : 2 byte
2. Protocol Type : 2 byte
3. Hardware Address Length : 1 byte
4. Protocol Address Length : 1byte
5. Opcode : 2 byte
6. Source Hardware Address : 6 byte
7. Source Protocol Address : 4 byte
8. Destination Hardware Address : 6 byte
9. Destination Protocol Address : 4 byte

그럼 이제 각각이 무슨 역할을 하는지 알아보도록 하겠다.

#### 2-1. Hardware Type : 2 byte

Hardware Type은 2계층에서 사용하는 프로토콜의 타입을 저장한다.
2계층의 프로토콜은 많지만 Hardware Address에서 사용하는 것 중
대부분 볼 수 있는 2계층 프로토콜은 이더넷(Ethernet) 프로토콜이므로
이더넷 프로토콜을 가리키는 2 byte 짜리 번호는 16진수로 00 01 이다.

#### 2-2. Protocol Type : 2 byte

Protocol Type은 Protocol Address에서 사용하는 프로토콜의 타입을 저장한다.
이곳의 프로토콜도 다른 것이 저장될 수는 있지만
대부분 볼 수 있는 프로토콜은 IPv4이기 때문에
IPv4의 고유 번호인 08 00 이 있을 확률이 높다.

#### 2-3. Hardware Address Length : 1 byte

Hardware Address Length는 Hardware Address의 길이를 저장하는데
여기서 Hardware Address는 물리적 주소이므로
물리적 주소인 MAC 주소를 말하는 것이다.
따라서 MAC 주소의 길이(크기)인 6 byte 즉, 06이 저장되어 있는 것이 일반적이다.

#### 2-4. Protocol Address Length : 1 byte

Protocol Address Length는 Protocol Address의 길이를 저장한다.
Protocol Address는 IPv4가 일반적이므로 IPv4의 길이(크기)인 4 byte 즉, 04가 일반적이다.

#### 2-5. Opcode : 2 byte

Opcode는 이 ARP가 들어있는 패킷이 요청을 보내는 패킷인지,
아니면 다시 돌아오는 응답 패킷인지 알아내기 위해서
요청 패킷이라면 00 01 을 저장하고 응답 패킷이라면 00 02 를 저장한다.

#### 2-6. Source Hardware Address : 6 byte

Source Hardware Address는 패킷이 출발하는 지점의 MAC 주소를 저장한다.

#### 2-7. Source Protocol Address : 4 byte

Source Protocol Address는 패킷이 출발하는 지점의 IPv4 주소를 저장한다.

#### 2-8. Destination Hardware Address : 6 byte

Destination Hardware Address는 패킷이 도착하는 지점의 MAC 주소를 저장한다.
응답 패킷일 경우 이 도착하는 지점의 MAC 주소를 알아내기 위해서 보내는 것이기 때문에
모두 0으로 채워 넣어, 00 00 00 00 00 00 으로 만들어 보낸다.

#### 2-9. Destination Protocol Address : 4 byte

Destination Protocol Address는 패킷이 도착하는 지점의 IPv4 주소를 저장한다.

### 3. APR를 이용한 네트워크 장비간 통신

같은 네트워크 대역에서 두 네트워크 장비가 통신하기 위해서는 MAC 주소가 필요하기 때문에
ARP를 사용하게 된다.
패킷을 만들 때 ARP만 있는 것이 아니라 2계층 프로토콜인 Ethernet 프로토콜도 앞에 붙여서 간다.
만약 네크워크 장비 A와 네트워크 장비 B가 통신하고자 할 때
네트워크 장비 A가 B에게 통신하기 위해서 ARP에 Ethernet 프로토콜을 붙여 패킷을 만든 뒤 보내게 되는데
생각해보면 어디로 보내야할지 모르는 상태에서 보내라는 것이 말이 안 된다.
그래서 Ethernet 프로토콜의 구조를 보면 MAC 주소를 저장하는데
그곳을 보면 FF FF FF FF FF FF인 것을 볼 수 있다.
IPv4도 모든 bit가 1인 주소를 브로드캐스트 주소라고 하는데
MAC 주소도 모든 bit가 1인 주소를 브로드캐스트 주소라고 한다.

브로드캐스트는 모든 주소를 뜻하므로 모든 주소에 요청 패킷을 보내게 된다.
패킷을 살펴보면 다음과 같다.

```packet
Hardware Type : 00 01
Protocol Type : 08 00
Hardware Address Length : 06
Protocol Address Length : 04
Opcode : 00 01
Source Hardware Address : aa aa aa aa aa aa
Source Protocol Address : c0 a8 64 1e			// 네트워크 장비 A의 IPv4 : 192.168.100.30
Destination Hardware Address : 00 00 00 00 00 00
Destination Protocol Address : c0 a8 64 3c		// 네트워크 장비 B의 IPv4 : 192.168.100.60
```

받는 네트워크 장비인 B의 MAC 주소를 알아내기 위해서 요청 패킷을 보내는 것이므로
Destination Hardware Address가 00 00 00 00 00 00 이다.
이는 이 IPv4를 알고 싶다는 것을 의미한다.

그리고 Ethernet 프로토콜의 내부를 보면 보내는 곳의 MAC 주소와 도착하는 곳의 MAC 주소를 저장하는데
보내는 곳의 MAC 주소는 알지만 도착하는 곳의 MAC 주소는 모른다.
그래서 도착하는 곳의 MAC 주소를 FF FF FF FF FF FF로 하고 이는 브로드캐스트 주소이므로
모든 네트워크 장비에 요청 패킷을 보낸다.

브로드캐스트는 정말 모든 네트워크 장비에 보내므로 외부 네트워크 대역에도 요청 패킷이 갈 수 있지만
브로드캐스트로 이루어진 요청 패킷은 공유기에서 받아드리지 않고 삭제하기 때문에
바깥 네트워크 대역에는 요청 패킷이 가지 않는다.

그렇게 네트워크 장비 B가 요청 패킷을 받으면 다음과 같이 패킷을 변경한 뒤 다시 네트워크 장비 A로 보낸다.

```packet
Hardware Type : 00 01
Protocol Type : 08 00
Hardware Address Length : 06
Protocol Address Length : 04
Opcode : 00 02
Source Hardware Address : bb bb bb bb bb bb
Source Protocol Address : c0 a8 64 3c			// 네트워크 장비 B의 IPv4 : 192.168.100.60
Destination Hardware Address : aa aa aa aa aa aa
Destination Protocol Address : c0 a8 64 1e		// 네트워크 장비 A의 IPv4 : 192.168.100.30
```

응답 패킷은 Opcode가 00 01에서 00 02로 변하고 출발지와 도착지가 변경된 상태,
그리고 원하는 MAC 주소를 저장한 상태로 A 네트워크 장치로 보낸다.

### 4. Spoofing 공격

Spoofing(스푸핑) 공격은 ARP의 취약점을 바탕으로 공격하는 기법이다.
ARP는 브로드캐스트로 모두에게 패킷을 보내, Destination Protocol Address와 같은 IPv4를 가진
네트워크 장치의 MAC 주소를 얻는다.
그런데 돌아오는 응답 패킷에 대한 인증 절차를 거치지 않는다는 취약점이 존재한다.

이러한 취약점을 바탕으로 스푸핑은 MAC 주소를 얻기 위해 브로드캐스트를 보내는 희생자 네트워크 장치와
원래 패킷이 찾아가야 했던 서버 사이에서 중개자 역할을 해서 그 속의 정보를 빼내는 공격 기법이다.

스푸핑을 하는 방법은 다음과 같다.

1. 브로드캐스트로 오는 패킷을 내가 받는다.
2. 받은 패킷을 서버에게 보내고 결과물을 얻는다.
3. 그 결과물을 희생자 네트워크 장치에게 보낸다.
4. 그렇게 얻은 결과물을 나도 가진다.
   (물론 결과물을 가져가는 것뿐만 아니라 다른 정보를 넣어서 교란 시킬 수도 있다.)

이러한 형식의 스푸핑 공격은 희생자 네트워크 장치 입장에서는 내 정보가 빠져나가고 있는 건지 알 수도 없다.
왜냐하면 정상적으로 작동이 되고 서버에 패킷도 정상적으로 가는 것처럼 보이기 때문이다.