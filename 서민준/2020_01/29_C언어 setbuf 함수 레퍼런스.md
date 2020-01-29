# C언어 setbuf 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ setbuf  
URL : https://modoocode.com/61  
  
## setbuf
  
    #include <stdio.h>

    void setbuf(FILE* stream, char* buffer);
  
스트림 버퍼를 설정한다. 특정한 스트림의 입출력 작업을 위한 버퍼를 설정하며 이는 보통 fully buffered 스트림으로 설정된다.  
  
만일 두 번째 인자가 NULL이라면 이 스트림은 unbuffered 스트림으로 설정된다.  
  
두 번째 인자는 반드시 BUFSIZ 이상의 길이를 가지는 배열을 가리켜야만 한다 (BUFSIZ는 <stdio.h>(C++은 <cstdio>)에 정의되어 있는 상수이다). fully buffered 스트림의 경우 쓰기 작업은 스트림과 연관되는 장비 (예를 들어 파일 입출력을 한다면 연관되는 장비는 하드 디스크가 된다) 에 바로 쓰이지 않는다. 그 대신, 쓰여질 데이터가 버퍼에 한 데 모인 뒤, 한 블록이 채워지면 그제서야 쓰기를 시작하게 된다.  
  
물론, 블록이 다 채워지지 않았는데도 불구하고 강제적으로 스트림을 비우므로써 데이터가 쓰여지게 할 수 있고 이 작업은 fflush 함수를 호출하거나, fclose 함수를 호출해 파일을 닫아버리면 된다. 참고로 모든 버퍼들은 프로그램이 종료될 때 자동적으로 비워진다.  
  
unbuffered 스트림의 경우, 데이터는 매 쓰기 작업마다 장비에 직접적으로 쓰이게 된다.  
  
파일을 열게 되면 기본적으로 할당된 버퍼를 가지게 된다. 하지만 이 함수를 호추함으로써 사용자 정의된 버퍼를 사용하거나 특정한 스트림을 unbuffered 스트림으로 만들어버릴 수 있다.  
  
보통 시스템 표준 스트림들, 예를 들면 stdout이나 stderr은 모두 기본적으로 리다이렉트(redirect) 되지 않는 이상 unbuffered 스트림으로 설정된다.  
  
## 인자
  
- stream
  
작업을 수행할 스트림의 FILE 객체를 가리키는 포인터
  
- buffer
  
사용자가 직접 할당한 버퍼로, 최소 BUFSIZ 이상의 바이트를 가져야 한다. unbuffered 스트림으로 바꾸려면 NULL 포인터를 전달하면 된다.