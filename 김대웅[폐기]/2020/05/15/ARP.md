# ARP 프로토콜

- ARP가 하는 일
  - 같은 네트워크 대역에서 통시하기 위해 필요한 MAC주소를 IP주소를 이용해서 알아오는 프로토콜
  - 같은 네트워크 대역에서 통신하더라도 데이터를 보내기 위해서는 7계층부터 캡슐화를 통해 데이터를 보낸다. 그렇기 때문에 IP주소와 MAC주소가 모두 필요하다.
  - IP주소를 알고 MAC주소를 모르더라도 ARP를 통해 통신할 수 있다.

- ARP 프로토콜의 구조
  - Hardware type (2byte) : 2계층 프로토콜의 타입 -> Ethernet(0001)
  - Protocol type (2byte) : 출발지, 목적지 Protocol Address의 타입 -> IPv4(0800)
  - Hardware Address Length (1byte) : 하드웨어 주소 길이 -> MAC주소(06)
  - Protocol Address Length (1byte) : 프로토콜 주소 길이 -> IPv4주소(04)
  - Opcode (2byte) : ARP 프로토콜 요청인지 응답인지 나타내는 코드.
    - 0001 이면 요청
    - 0002 이면 응답
  - 출발지 MAC주소 (6byte)
  - 출발지 IPv4주소 (4byte) (Protocol Address)
  - 목적지 MAC주소 (6byte)
  - 목적지 IPv4주소 (4byte) (Protocol Address)
  - 왠만하면 ARP 프로토콜은 0001 0800 06 04 으로 시작한다.

- ARP 요청 과정

  - PC A(IP : 192.168.0.10, MAC : aa-aa-aa-aa-aa-aa)와 PC C(IP : 192.168.0.30, MAC : cc-cc-cc-cc-cc-cc)가 같은 네트워크 대역에 있다고 가정한다.

  - PC A는 PC C와 통신을 하려고 한다. 그래서 ARP 요청을 만들고 Ethernet으로 Encapsulation한다.
  - 이 때 ARP 프로토콜은 요청이므로 Opcode가 1이 되고, 목적지 MAC주소는 모르므로 0으로 채운다.
  - 마찬가지로 목적지 MAC주소는 모르기 때문에 Ethernet 프로토콜에는 F로 채운다.
    - MAC주소가 F로 채워져 있으면 브로드캐스트를 의미한다.
  - ARP 요청을 받은 스위치는 Ethernet 프로토콜을 Decapsulation하고, 브로드캐스트이기 때문에 같은 네트워크 대역에 있는 모든 장비에 ARP 요청을 보낸다.

  - 요청을 받은 장비들은 Ethernet 프로토콜을 확인하고 ARP 프로토콜을 확인해본다.
    - 만약 목적지 IP주소가 자신이 아니라면 패킷을 버린다.
    - 만약 목적지 IP주소가 자신이 맞다면 ARP 응답 패킷을 만든다.
  - ARP 요청을 받은 PC C는 목적지 IP주소가 자신이기 때문에 요청에 대한 응답을 한다. Opcode를 2로 하고, 목적지 MAC, IP주소를 요청한 PC A의 주소로 입력하고 응답을 보낸다.
  - 응답을 받은 PC A는 ARP 캐시 테이블에 PC C의 맥주소가 cc-cc-cc-cc-cc-cc라는 것을 저장한다.



- ARP 프로토콜은 3계층이지만 같은 네트워크 대역에서만 쓰인다.
  - 이유 : ARP 프로토콜은 MAC주소를 몰라서 Ethernet 프로토콜로 브로드캐스트하는 것이다. 그런데 3계층 장비는 브로드캐스트가 오면 그걸 다른 네트워크 대역에 브로드캐스트 하지 않는다.