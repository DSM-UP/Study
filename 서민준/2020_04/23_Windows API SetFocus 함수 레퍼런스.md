# SetFocus 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setfocus" target = "_blank">SetFocus function - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## SetFocus
  
    #include <Winuser.h>

    HWND SetFocus(HWND hWnd);
  
hWnd가 지정하고 있는 윈도우로 포커스를 강제로 이동시키는데 이 윈도우는 반드시 같은 스레드에 속해 있어야 한다.  
  
이 함수에 의해 포커스를 잃어버리는 윈도우에게 WM_KILLFOCUS 메시지를 보낸다. 그리고 새로 포커스를 얻게 되는 윈도우에게 WM_SETFOCUS 메시지를 보낸다. 새로 포커스를 받는 윈도우와 그 부모 윈도우는 활성화된다.  
  
만약 윈도우가 활성화되었으나 포커스를 가지고 있지 않다면 아무 키나 눌렀을 때 WM_SYSCHAR, WM_SYSKEYDOWN 혹은 WM_SYSKEYUP 메시지가 보내지게 된다.  
  
보통 WM_CREATE에서 원하는 컨트롤에 포커스를 설정하기 위해 이 함수를 사용한다.  
  
### Parameters
  
`hWnd`  
포커스를 가지게 하고자 하는 윈도우의 핸들이다. NULL일 경우 모든 키보드 입력을 무시한다.  
  
### Return value
  
이 함수가 성공하면, 이전에 포커스를 가지고 있던 윈도우의 핸들을 반환한다. 만약 hWnd가 무효한 윈도우거나 같은 스레드에 있는 윈도우가 아닐 경우 NULL을 반환한다.