# SetScrollRange 함수 레퍼런스 정리
  
**출처**  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setscrollrange" target = "_blank">SetScrollRange function - MSDN</a>  
  
## SetScrollRange
  
    #include <Winuser.h>

    BOOL SetScrollRange(HWND hWnd, int nBar, int nMinPos, int nMaxPos, BOOL bRedraw);
  
스크롤 바의의 범위를 설정한다.  
  
표준 스크롤 바, 스크롤 바 컨트롤 상관없이 스크롤 바라면 이 함수를 통해 스크롤 바의 범위를 지정할 수 있다. 보통은 생성 직후 설정하는 경우가 보편적이다.  
  
이 함수를 통해 최소, 최대 값을 같게 만들 수 있는데, 같게 만들었다면 스크롤 바가 숨겨지는 효과가 있다. 하지만, 이런 효과를 만들기 위해서는 ShowScrollBar 함수를 호출하는 것이 더 바람직하다.  
  
### Parameters
  
`hWnd`  
스크롤 바 컨트롤의 핸들이다. 이 값은 nBar 인수의 값에 따라 해석 방법이 달라진다.  
  
`nBar`  
위치를 설정할 스크롤 바를 지정한다. 다음 세 가지 값 중 하나를 가진다.  
  
값 | 설명
---|-----
SB_CTL | 별도의 스크롤 바 컨트롤이다. `hWnd`는 스크롤 바 컨트롤의 핸들을 나타낸다.
SB_HORZ | 표준 수평 스크롤 바이다. `hWnd`는 스크롤 바를 가진 윈도우의 핸들이다.
SB_VERT | 표준 수직 스크롤 바이다. `hWnd`는 스크롤 바를 가진 윈도우의 핸들이다.
  
`nPos`  
스크롤 바의 새로운 위치를 지정한다. 이 위치는 반드시 스크롤 바의 범위 내에 있어야 한다.  
  
`nMinPos`  
스크롤 바의 범위 중 최솟값을 지정한다.  
  
`nMaxPos`  
스크롤 바의 범위 중 최댓값을 지정한다.  
  
`bRedraw`  
스크롤 바의 범위를 변경한 후 다시 그릴 것인가를 지정한다. 프로그램 실행 중 범위를 변경했다면 이 인수에 TRUE를 줘, 범위를 다시 그려야 한다.  
  
### Return value
  
성공하면 0이 아닌 값을, 실패하면 0을 반환한다.