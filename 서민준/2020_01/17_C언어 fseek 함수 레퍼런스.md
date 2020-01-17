# C언어 fseek 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ fseek  
URL : https://modoocode.com/72  
  
## fseek
  
    #include <stdio.h>

    int fseek(FILE* stream, long int offset, int origin);
  
스트림 위치 지정자(position indicator)의 위치를 조정한다.  
  
origin 인자로 전달된 위치로부터 offset 인자로 전달된 만큼 더한 위치로 위치 지정자를 설정한다. 이 함수를 호출한 이후에는 파일 끝 지정자(End Of File indicator)가 초기화 되고, 이전에 만일 ungetc 함수를 호출하였다면 이로 인한 효과는 모두 사라지게 된다.  
  
만일 텍스트 파일에 fseek 함수를 사용할 때, offset 값으로 0이 아닌 값 혹은 ftell 함수에 의해 반환된 값을 사용할 때에는 일부 플랫폼에서는 약간 문제가 생겨서 예상치 못했던 위치에 위치 지정자가 설정되어 있는 경우가 있다.  
  
스트림이 읽기 및 쓰기 형식으로 열려있을 때, 이 함수를 호출함을 통해 읽기 - 쓰기 모드를 전환할 수 있다.  
  
## 인자
  
- stream
  
    - 작업을 수행할 스트림의 FILE 객체를 가리키는 포인터
  
- offset
  
    - origin으로 부터 얼마나 떨어진 곳에 설정할 지에 대한 값
  
- origin
  
    - offset이 더해지는 위치로, <stdio.h>에 정의된 다음과 같은 매크로 상수들을 이용
      
    상수 | 설명
    -----|------
    SEEK_SET | 파일의 시작
    SEEK_CUR | 현재 파일 포인터의 위치
    SEEK_END | 파일의 끝
  
## 리턴값
  
성공하였다면 0을 리턴한다. 그렇지 않다면 0이 아닌 값을 리턴한다.