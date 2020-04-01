# Windows API CreateDC 함수 레퍼런스 정리
  
**출처**  
「Windows API 정복 1권」 - 김상형 저  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-createdcw">MSDN</a>  
  
## CreateDC
  
    #include <Wingdi.h>

    HDC CreateDCW(LPCWSTR pwszDriver, LPCWSTR pwszDevice, LPCWSTR pszPort, const DEVMODEW *pdm);
  
DC를 만들 수 있는 함수이다. 주로 프린터 DC를 만들 때 사용하지만 화면 DC를 만들 때도 사용한다.  
  
Win16의 잔재로 사용하지 않는 인수도 남아있다.  
  
    CreateDC(TEXT("DISPLAY"), NULL, NULL, NULL);
  
이렇게 호출하면 전체 화면에 대한 DC를 얻을 수 있다. 이 호출문 이외의 상황에서 이 함수를 사용하는 경우는 거의 없다.  
  
이 함수로 전체 화면에 대한 DC를 구하면 윈도우 내부 및 화면상 어디에든 출력할 수 있기 때문에 여러 가지 출력 효과를 낼 수 있다.  
  
보통 데스크탑에 뭔가를 그리는 스크린 세이버들이 이 함수를 활용하여 작성되기도 한다.  
  
인수나 자세한 설명은 MSDN 참고