# C언어 abort 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/abort?view=vs-2019" target = "_blank">abort - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## abort
  
    #include <process.h>

    void abort();
  
프로그램을 비정상적으로 종료합니다.  
  
이 함수로 인해 프로그램이 종료되면 표준 에러 스트림(stderr)에 `R6010 - abort() has been called`라는 메시지를 출력한다.  
  
그 뒤, _exit 함수를 호출하여 exit 코드 3을 반환하면서 프로그램을 종료한다.  
  
### Return value
  
함수 자체의 반환값은 없지만 이 함수에 의해 호출된 _exit 함수에서 exit 코드 3을 반환한다.