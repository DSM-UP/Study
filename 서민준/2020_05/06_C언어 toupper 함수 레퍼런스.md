# C언어 toupper 함수 레퍼런스 정리
  
**출처**  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/toupper-toupper-towupper-toupper-l-towupper-l?view=vs-2019" target = "_blank">toupper - MSDN</a>  
  
## toupper
  
    #include <ctype.h>

    int toupper(int c);
  
문자를 대문자로 변환한다.  
  
인수로 전달된 c가 a ~ z의 소문자 알파벳이면 대문자로 변환한다. 만약 c가 알파벳 소문자가 아니라면 원래의 문자 그대로 유지된다.  
  
### Parameters
  
`c`  
변환할 문자  
  
### Return value
  
c에 전달된 문자가 알파벳 소문자라면 해당 인자를 복사해 대문자로 변환한 뒤 반환한다. 만약 알파벳 소문자가 아니라면 변환하지 않고 반환한다.