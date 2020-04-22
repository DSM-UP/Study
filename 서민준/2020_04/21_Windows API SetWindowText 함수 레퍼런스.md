# SetWindowText 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowtextw" target = "_blank">SetWindowTextW function</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## SetWindowText
  
    #include <Winuser.h>

    BOOL SetWindowText(HWND hWnd, LPCWSTR lpString);
  
지정한 윈도우의 캡션을 설정한다. 윈도우라면 타이틀 바에 캡션이 나타나며, 컨트롤이라면 작업 영역에 나타난다.  
  
다른 프로그램의 컨트롤의 캡션은 바꿀 수 없다.  
  
### Parameters
  
`hWnd`  
캡션을 변경하고자 하는 윈도우의 핸들  
  
`lpString`  
캡션을 담고 있는 문자열  
  
### Return value
  
이 함수가 성공했다면 0이 아닌 값을, 실패했다면 0을 반환한다.