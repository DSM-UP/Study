# SetScrollPos 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setscrollpos" target = "_blank">SetScrollPos function - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## SetScrollPos
  
    #include <Winuser.h>

    int SetScrollPos(HWND hWnd, int nBar, int nPos, BOOL bRedraw);
  
지정한 스크롤 바의 스크롤 위치를 설정한다.  
  
*nBar* 인수로 SB_CTL을 주었고, *hWnd* 인수가 시스템 스크롤 바 컨트롤이 아니라면, 시스템은 SBM_SETPOS 메시지를 윈도우에 보내 스크롤 바의 정보를 설정한다.  
  
### Parameters
  
`hWnd`  
스크롤 바 컨트롤 혹은 표준 스크롤 바를 가지고 있는 윈도우의 핸들이다. *nBar* 인수의 값에 의해 의미가 달라진다.  
  
`nBar`  
위치를 설정하고자 하는 스크롤 바를 지정한다. 다음 값들 중 하나가 올 수 있다.  
  
값 | 설명
---|------
SB_CTL | 별도의 스크롤 바 컨트롤이다. *hWnd*는 스크롤 바 컨트롤의 핸들을 나타낸다.
SB_HORZ | 표준 수평 스크롤 바이며 *hWnd*는 스크롤 바를 가진 윈도우의 핸들이다.
SB_VERT | 표준 수직 스크롤 바이며 *hWnd*는 스크롤 바를 가진 윈도우의 핸들이다.
  
`nPos`  
스크롤 바의 새로운 위치를 지정한다. 이 값은 반드시 스크롤 바의 범위 내에 있는 값이어야 한다.  
  
`bRedraw`  
스크롤 바의 위치를 변경한 후 스크롤 바를 다시 그릴 것인지를 결정한다. **TRUE**라면 다시 그리고, **FALSE**라면 다시 그리지 않는다.  
  
### Return value
  
이 함수가 성공하면 스크롤 바의 이전 위치 값이 반환된다.  
  
이 함수가 실패하면 0이 반환된다.