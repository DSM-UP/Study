### 41강 텔넷(telnet) 서비스 사용하기



#### telnet 설치하기

* `dpkg -s telnetd` : `telnetd`가 설치되어 있는지 확인한다.
  * 왜 `telnet'd'`인가?
    * telnet demo : telnet의 인터페이스를 사용할 수 있게 함.
* `sudo apt install telnetd` : `telnetd`를 설치한다.



#### 윈도우 텔넷 클라이언트 사용하기

* 윈도우에는 기본적으로 텔넷 클라이언트가 인스톨되어 있다.
* 제어판 > 프로그램 > Windows 기능 켜기/끄기 > 텔넷 클라이언트 
* 리눅스 서버 telnet ip를 알기 위해 `ifconfig` 명령어를 사용해야 한다. 

