# SetTextColor 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-settextcolor" target = "_blank">SetTextColor function - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## SetTextColor
  
    #include <Wingdi.h>

    COLORREF SetTextColor(HDC hdc, COLORREF color);
  
TextOut 함수나 ExTextOut 함수에 의해 쓰여지는 글자들은 DC에 설정되어 있는 전경색으로 출력되는데 그 전경색을 변경할 수 있다.  
  
디폴트 DC의 전경색은 검정색이므로 디폴트 DC를 사용하면 검정색이 문자색으로 출력된다.  
  
### Parameters
  
`hdc`  
전경색을 변경하고자 하는 DC의 핸들이다.  
  
`color`  
바꾸고자 하는 전경색의 색상값이다. RGB 매크로로 색상값을 지정한다.  
  
### Return value
  
이전에 DC에 설정되어 있던 전경색의 색상값을 반환한다. 이 함수가 실패한다면 CLR_INVALID를 반환한다.