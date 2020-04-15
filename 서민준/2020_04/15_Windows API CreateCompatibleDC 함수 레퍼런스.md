# CreateCompatibleDC 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-createcompatibledc" target = "_blank">CreateCompatibleDC function - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## CreateCompatibleDC
  
    #include <Wingdi.h>

    HDC CreateCompatibleDC(HDC hdc);
  
인자로 전달된 `hdc`와 색상 포맷이 같은 메모리 DC를 생성한다. 색상 포맷이 같은 DC끼리는 비트맵 전송이 가능하기 때문에 비트맵을 출력할 때 주로 사용한다.  
  
메모리 DC가 만들어지면 DC의 모든 값들이 기본 디폴트 값으로 설정되기 때문에 커먼 DC로 사용할 수도 있다. 당연히 DC의 값을 설정하거나 pen, brush 등의 설정도 가능하다.  
  
더 이상 메모리 DC가 필요하지 않다면 `DeleteDC` 함수를 호출하여 메모리 DC를 해제해야 한다.  
  
## Parameters
  
`hdc`  
참조할 DC의 핸들이다. 만약 `NULL`이라면 현재 화면과 색상 포맷이 같은 메모리 DC를 생성한다.  
  
## Return value
  
만약 이 함수가 성공하면 메모리 DC의 핸들을 반환한다.  
  
만약 이 함수가 실패하면 `NULL`을 반환한다.