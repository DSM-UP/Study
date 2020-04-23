# SetWindowPos 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowpos" target = "_blank">SetWindowPos function - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## SetWindowPos
  
    #include <Winuser.h>

    BOOL SetWindowPos(HWND hWnd, HWND hWndInsertAfter, int X, int Y, int cx, int cy, UINT uFlags);
  
윈도우의 크기, 위치, Z 순서를 동시 혹은 일부만 변경한다.  
  
크기만 변경하거나 위치만 변경할 수 있어 굉장히 유용하게 사용되는 함수 중 하나이다. 보통은 Z순서를 변경하기 위한 목적으로 많이 사용된다.  
  
일부만 변경하기 위해서는 마지막 인수인 `uFlags`에 적절한 플래그를 전달해야 한다.  
  
### Parameters
  
`hWnd`  
크기, 위치, Z 순서를 변경할 윈도우의 핸들  
  
`hWndInsertAfter`  
윈도우의 Z 순서를 결정하는 윈도우의 핸들이다. Z 순서를 변경할 때 이 핸들의 윈도우 앞에 hWnd가 배치된다.  
  
hWnd가 액티브 상태일 경우 이 인수는 무시된다. 윈도우 핸들 대신 Z 순서를 지정하는 값들이 올 수 있다.  
  
값 | 설명
---|------
HWND_BOTTOM | hWnd가 지정하는 윈도우를 Z 순서의 제일 바닥으로 한다. 만약 이 윈도우가 Top Most 속성을 가지고 있다면 이 속성이 해제되고 모든 윈도우의 제일 아래쪽에 배치된다.
HWND_NOTOPMOST | Top Most 속성을 가지지 않은 윈도우 중에서 가장 위에 배치된다. Top Most 속성을 가지고 있는 윈도우보다는 아래에 위치하게 된다. 만약 이 윈도우가 Top Most 속성을 가지고 있다면 그 속성은 해제된다.
HWND_TOP | Z 순서에서 가장 위에 배치한다.
HWND_TOPMOST | Top Most 속성을 hWnd가 가리키는 윈도우에 지정한다. 이 속성을 지니게 되면 Top Most를 지니지 않은 윈도우들보다 항상 위에 위치하게 된다.
  
`X`  
윈도우가 이동하고자 하는 x 좌표이다. 픽셀 단위이다.  
  
`Y`  
윈도우가 이동하고자 하는 y 좌표이다. 픽셀 단위이다.  
  
`cx`  
변경하고자 하는 윈도우의 폭이다. 픽셀 단위이다.  
  
`cy`  
변경하고자 하는 윈도우의 높잉이다. 픽셀 단위이다.  
  
`uFlags`  
윈도우의 위치와 크기 변경에 대한 여러 가지 값들을 지정할 수 있다.  
  
값 | 설명
---|-----
SWP_ASYNCWINDOWPOS | 이 함수를 부른 스레드와 윈도우를 소유한 스레드가 다른 입력 큐를 사용할 경우 시스템은 윈도우를 소유한 스레드에게 요구를 포스팅하기만 한다. 이는 호출 스레드가 다른 스레드가 요구를 처리하는 동안 블럭되는 것을 방지한다.
SWP_DEFERERASE | WM_SYNCPAINT 메시지의 발생을 금지한다.
SWP_DRAWFRAME | 윈도우 주변에 프레임을 그린다.
SWP_FRAMECHANGED | SetWindowLong(Ptr) 함수로 프레임의 스타일을 변경하였을 경우, 변경된 속성으로 프레임을 다시 그린다. 크기가 변경되지 않아도 WM_NCCALCSIZE 메시지가 전달된다.
SWP_HIDEWINDOW | 윈도우를 숨긴다. 이동과 크기 변경이 무시된다.
SWP_NOACTIVATE | 크기 변경 후 윈도우를 활성화시키지 않는다.
SWP_NOOPYBITS | 작업 영역의 내용을 저장했다가 크기나 위치 변경 후 다시 작업 영역을 복구하는 작업을 수행하지 않는다.
SWP_NOMOVE | 위치는 이동하지 않는다. X, Y 인수가 무시된다.
SWP_NOOWNERZORDER | 소유자의 Z 순서를 변경하지 않는다.
SWP_NOREDRAW | 크기, 위치를 변경한 후 다시 그리지 않는다. 해당 윈도우에 의해 다시 드러나는 윈도우도 다시 그려지지 않는다.
SWP_NOREPOSITION | SWP_NOOWNERZORDER 플래그와 동일하다.
SWP_NOSENDCHANGING | 윈도우로 WM_WINDOWPOSCHANGING 메시지를 보내지 않는다.
SWP_NOSIZE | 크기를 변경하지 않는다. cx, cy 인수가 무시된다.
SWP_NOZORDER | Z 순서를 현재 상태로 유지한다. hWndInsertAfter 인수가 무시된다.
SWP_SHOWWINDOW | 윈도우를 보인다. 이동과 크기 변경은 무시된다.
  
### Return value
  
이 함수가 성공하면 0이 아닌 값을, 실패하면 0을 반환한다.