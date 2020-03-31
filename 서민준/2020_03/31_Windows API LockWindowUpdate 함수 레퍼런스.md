# Windows API LockWindowUpdte 함수 레퍼런스 정리
  
**출처**  
「Windows API 정복 1권」 - 김상형 저  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-lockwindowupdate">MSDN</a>  
  
## LockWindowUpdate
  
    #include <Winuser.h>

    BOOL LockWindowUpdate(HWND hWndLock);
  
화면 그리기를 금지 / 허가할 때 사용하는 함수이다. 한 번에 한 개의 윈도우만 잠글 수 있다.  
  
그리기 금지된 윈도우는 DC 핸들을 받을 때 가시 영역이 비어있는 DC를 발급받는다. 그래서 무효 영역과는 상관없이 클리핑 영역도 NULL이 되어 화면으로의 출력은 어떠한 것도 할 수 없게 된다.  
  
인수에 NULL을 전달하면 그리기 금지를 해제할 수 있다.  
  
금지는 한 번에 하나의 윈도우에만 걸 수 있다.  
  
운영체제는 금지된 윈도우의 모든 출력을 검사해 출력이 나간 모든 영역을 저장하여 금지가 해제된 후 한꺼번에 출력을 진행한다.  
  
흔히 사용하지는 않지만 다른 윈도우의 방해를 받지 않거나 깔끔한 처리를 위해 종종 사용하게 된다.  
  
## Parameters
  
    hWndLock
  
그리기 금지의 대상이 되는 윈도우 핸들이다. 만약 NULL이 전달된다면 그리기가 금지되어 있던 윈도우가 그리기가 허가된다.  
  
## Return value
  
이 함수가 성공하면 0이 아닌 값이, 실패하면 0이 반환된다.  
  
보통 실패하는 경우는 다른 윈도우가 이미 금지된 상태인데 또다른 윈도우를 금지시키려고 할 때 일어나는 경우가 많다.