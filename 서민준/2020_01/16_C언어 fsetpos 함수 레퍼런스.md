# C언어 fsetpos 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ fsetpos  
URL : https://modoocode.com/73  
  
## fsetpos
  
    #include <stdio.h>

    int fsetpos(FILE* stream, const fpos_t* pos);
  
스트림의 파일 위치 지정자(position indicator)를 설정한다.  
  
스트림의 위치 지정자를 새로운 위치로 변경한다. 위 함수에서 인자로 전달되는 pos는 fpos_t 객체를 가리키는 포인터로 반드시 **이전의 fgetpos 함수의 호출을 통해 값을 가지고 있어야 한다.**  
  
**파일 끝 지정자는 이 함수의 호출 뒤에 초기화** 되며, 만일 이전에 **ungetc 함수를 호출하였더라면 이 함수의 호출로 인한 모든 영향도 사라지게 된다.**  
  
또한, 스트림의 읽기 및 쓰기 형식으로 열려있을 경우, 이 함수를 호출함을 통해서 읽기 - 쓰기 모드를 변경할 수 있다.  
  
## 인자
  
- stream
  
    - 작업을 수행할 스트림의 FILE 객체를 가리키는 포인터
  
- position
  
    - fpos_t 객체를 가리키는 포인터로, 반드시 이전의 fgetpos 함수를 통해서 값을 지니고 있어야 한다.
  
## 리턴값
  
만일 성공적으로 수행하였다면 0을 리턴한다. 그렇지 않다면 0이 아닌 값을 리턴하고, 전역 변수인 errno를 양수로 설정한다. 이 errno에 설정된 값은 perror 함수를 통해서 무슨 오류인지 확인할 수 있다.