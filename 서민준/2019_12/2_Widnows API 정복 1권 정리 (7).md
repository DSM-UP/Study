# Windows API 정복 1권(김상형 저) 정리 7편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 커서 바꾸기

윈도우 위에 마우스 커서를 위치시키면 화살표 모양의 표준 커서가 나타난다.  
이 커서가 사용되는 이유는 WndClass에서 커서를 지정하는 멤버가 다음과 같이 정의되었기 있기 때문이다.  
  
    WndClass.hCursor = LoadCursor(NULL, IDC_ARROW);

hCursor 멤버는 윈도우가 기본적으로 사용할 커서를 지정하며 LoadCursor 함수는 커서를 읽어 오는 함수이다.  
  
    HCURSOR LoadCursor(HINSTANCE hInstance, LPCTSTR lpCursorName);

첫 번째 인수 hInstance는 커서를 가지고 있는 프로그램의 인스턴스 핸들이되 Windows가 제공하는 표준 커서를 사용하려면 이 인수를 NULL로 지정한다.  
두 번째 인수 lpCursorName은 사용하고자 하는 커서의 이름을 지정한다.  
Windows가 디폴트로 제공하는 **커서**에는 다음과 같은 종류가 있다.  
  
값 | 설명  
---|------
IDC_ARROW | 화살표 모양  
IDC_CROSS | 십자 모양
IDC_IBEAM | I자 모양
IDC_NO | 원 안에 빗금이 쳐진 모양
IDC_WAIT | 모래시계 모양

LoadCursor 함수의 두 번째 인수로 이 값들을 지정해 보고 다시 컴파일하여 커서를 변경해 보자.  
Windows가 제공하는 표준 커서외에 자신이 직접 커서를 디자인해서 사용하는 방법도 있는데 이 방법은 다음에 알아보자.  
  
커서를 바꿀 수 있는 것처럼 타이틀 바의 좌상단에 표시되는 **프로그램의 아이콘**도 바꿀 수 있다.  
LoadIcon 함수의 lpCursorName의 매개변수로 다음 인자값들을 줘보자.  
  
값 | 모양
---|------
IDI_ASTERISK | i가 들어간 말풍선
IDI_ERROR | x가 들어간 버튼
IDI_EXCLAMATION | !가 들어간 세모 모양 경고
IDI_QUESTION | ?가 들어간 말풍선

아이콘도 운영체제가 제공하는 것이 아닌 원하는 모양으로 디자인해서 사용할 수 있지만 예제 수준에서는 번거롭다.  

WndClass의 멤버들을 변경하면 생성되는 윈도우의 여러 가지 속성을 원하는대로 설정할 수 있다.