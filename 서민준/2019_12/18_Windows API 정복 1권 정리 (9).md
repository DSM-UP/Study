# Windows API 정복 1권(김상형 저) 정리 9편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 윈도우 스타일

CreateWindow 함수의 세 번째 인수 dwStyle은 윈도우의 모양과 동작 방식을 결정하는 여러 가지 속성을 지정한다.  
여러 가지 스타일 값을 가지는 32비트 정수 값이며 이 값을 변경함에 따라 다양한 모양의 윈도우를 만들 수 있다.  
  
dwStyle에 사용할 수 있는 값들은 OR연산자로 연결하여 여러 가지 속성을 한꺼번에 지정한다.  
  
값 | 설명
---|-----
WS_CAPTION | 타이틀 바를 가진다.
WS_HSCROLL | 수평 스크롤 바를 가진다.
WS_VSCROLL | 수직 스크롤 바를 가진다.
WS_MAXIMIZEBOX | 최대화 버튼을 가진다.
WS_MINIMIZEBOX | 최소화 버튼을 가진다.
WS_SYSMENU | 시스템 메뉴를 가진다.
WS_THICKFRAME | 크기를 조절할 수 있는 경계선을 가진다.
  
예제에서 사용하는 WS_OVERLAPPEDWINDOW는 다음과 같이 정의되어 있다.  
  
    #define WS_OVERLAPPEDWINDOW(WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX)

여기서 wS_OVERLAPPED는 실제로 0이므로 아무런 의미가 없으며, 타이틀 바, 시스템 메뉴, 크기 조절이 가능한 경계선, 최소, 최대화 버튼 등의 스타일이 한꺼번에 정의되어 있다.  
즉 WS_OVERLAPPED 스타일을 사용하면 가장 평범한 모양의 윈도우가 만들어진다.  
  
CreateWindow의 dwStyle 인수를 다음과 같이 변경해 보자.  
  
    WS_CAPTION | WS_SYSMENU

단 두개의 스타일만 남기고 나머지 스타일은 모두 제거했다.  
프로그램을 다시 컴파일한 후 실행해 보면 타이틀 바와 시스템 메뉴만 있을 뿐 최대, 최소화 버튼은 없다.  
또한 윈도우의 크기를 조절하는 경계선이 없기 때문에 경계선을 드래그하여 윈도우의 크기를 변경할 수도 없다.
  
WS_MAXIMIZEBOX, WS_MINIMIZEBOX 스타일을 차례대로 추가 지정하면 타이틀 바에 최대화 버튼, 최소화 버튼이 생길 것이다.  
  
이번에는 다음과 같이 변경해 보자.  
  
    WS_OVERLAPPEDWINDOW | WS_VSCROLL

이렇게 변경한 후 다시 프로그램을 실행하면 오른쪽에 수직 스크롤 바가 달린 윈도우가 만들어진다.  
여기에 WS_HSCROLL 스타일까지 주면 수평 스크롤 바도 생긴다.  
  
이외에 윈도우의 모양을 변경할 수 있는 상당히 많은 dwStyle 값들이 있지만 꽤 어려운 전문용어를 동원해야 설명 가능한 것들도 있고 표준 윈도우에는 사용할 수 없는 값들도 있다.  
  
마지막 실습으로 다음 코드를 작성해 보자.  
  
    LRESULT CALLBACK WndProc(HWND hWnd, UINT iMessage, WPARAM wParam, LPARAM lParam)
    {
        switch (iMessage)
        {
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        case WM_LBUTTONDOWN:
            MessageBeep(0);
            return 0;
        }

        return (DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

이 코드를 작성한 후 윈도우를 마우스 왼쪽 버튼으로 누르면 스피커를 통해 "띵띵" 소리가 날 것이다.  
사용자의 입력에 뭔가 반응을 보이는 것이다.