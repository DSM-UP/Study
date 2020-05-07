# C언어 tolower 함수 레퍼런스 정리
  
**출처**  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/tolower-tolower-towlower-tolower-l-towlower-l?view=vs-2019#syntax" target = "_blank">tolower - MSDN</a>  
  
## tolower
  
    #include <ctype.h>

    int tolower(int c);
  
문자를 소문자로 변환한다.  
  
문자 c가 A ~ Z 사이의 알파벳 대문자일 경우 소문자로 변환해 준다. 만약 알파벳 대문자가 아니라면 변환되지 않고 원본이 반환된다.  
  
### Parameters
  
`c`  
변환하고자 하는 문자  
  
### Return value
  
인수로 전달된 c를 복사해 문자 c가 A ~ Z의 알파벳 대문자라면 소문자로 변환해 반환한다. 만약 대문자가 아니라면 원본 그대로를 반환한다.