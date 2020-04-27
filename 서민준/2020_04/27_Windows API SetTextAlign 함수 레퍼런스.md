# SetTextAlign 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-settextalign" target = "_blank">SetTextAlign function - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## SetTextAlign
  
    #include <Wingdi.h>

    UINT SetTextAlign(HDC hdc, UINT align);
  
텍스트 정렬 방식을 변경한다.  
  
DC에 기본적으로 선택되어 있는 텍스트 정렬 방식은 TA_LEFT | TA_TOP | TA_NOUPDATECP 이다.  
  
### Parameters
  
`hdc`  
텍스트 정렬 방식을 변경할 DC의 핸들이다.  
  
`align`  
정령 방식과 CP 사용 여부 등의 플래그를 지정한다. 정렬 방식은 수평, 수직에 대해 각각 한 종류만 선택할 수 있다.  
  
값 | 설명
---|------
TA_BAASELINE | 텍스트의 기준선에 정렬
TA_BOTTOM | 수직 하단 정렬
TA_TOP | 수직 상단 정렬
TA_CENTER | 수직 중앙 정렬
TA_LEFT | 수평 왼쪽 정렬
TA_RIGHT | 수평 오른쪽 정렬
TA_NOUPDATECP | 문자열이 출력된 후 CP는 변경되지 않는다.
TA_RTLREADING | 문자열을 오른쪽에서 왼쪽으로 출력한다. 한글 Windows에서는 의미가 없다.
TA_UPDATECP | 문자열 출력 좌표를 CP를 사용하며 문자열 출력 후 CP를 변경한다.
  
### Return value
  
이전에 지정되어 있던 정렬 상태를 반환한다. 실패하면 GDI_ERROR를 반환한다.