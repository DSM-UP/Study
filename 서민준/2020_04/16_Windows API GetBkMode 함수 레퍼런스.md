# GetBkMode 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-getbkmode">GetBkMode function - MSDN</a>  
<a href = "http://www.soen.kr/">SoEn:소프트웨어 공학 연구소</a>  
  
## GetBkMode
  
    #include <Wingdi.h>

    int GetBkMode(HDC hdc);
  
DC에 설정되어 있는 배경 혼합 모드를 조사한다.  
  
배경 혼합 모드란 출력되는 문자열의 배경을 어떻게 처리할 것인가를 지정하는 값이다. 불투명 모드와 투명 모드가 있다.  
  
두 값은 다음과 같다.  
  
값 | 설명
---|------
OPAQUE | 문자열, 브러시, 펜이 작성되기 전에 현재 배경 색을 배경에 채운다. 그래서 지정된 배경 색상에 의해 뒷쪽 그림이나 무늬가 채워지게 된다.
TRANSPARENT | 투명한 배경색상을 사용하여 출력한 후에도 배경이 바뀌지 않는다.
  
배경 혼합 모드의 디폴트 값은 OPAQUE이다.  
  
### Parameters
  
`hdc`  
배경 혼합 모드를 조사하고자 하는 DC의 핸들이다.  
  
### Return value
  
이 함수가 성공하면, 조사한 배경 혼합 모드의 값을 반환한다.  
  
이 함수가 실패하면, 이 반환된다.