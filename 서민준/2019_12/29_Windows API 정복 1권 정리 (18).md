# Windows API 정복 1권(김상형 저) 정리 18편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## WM_KEYDOWN

키보드로부터 문자를 입력받고자 할 경우는 WM_CHAR 메시지를 사용하면 된다.  
그러나 WM_CHAR 메시지는 문자만을 입력받는 메시지이므로 문자 이외의 키는 입력받을 수 없다.  
예) 커서 이동키, Ins, Del, PgUp, 펑션키 등의 키 -> 문자 키가 아님 -> 입력 불가능  
이런 키는 수천 번을 눌러도 WM_CHAR 메시지가 전달되지 않는다.  
  
이때는 WM_KEYDOWN 메시지를 사용한다.  
WM_KEYDOWN 메시지는 키보드를 누를 때마다 윈도우로 전달되는데 문자가 아닌 모든 키에 대해서도 발생한다.  
단, Alt키, 윈도우 키, 한영 전환 키 등의 특수 키 몇 가지는 제외된다.  
  
이때 WParam으로는 문자 코드가 아닌 가상 키코드라는 것이 전달된다.  
가상 키코드(Virtual Key Code)란 시스템에 장착된 키보드의 종류에 상관없이 키를 입력받기 위해 만들어진 범용적인 코드값을 말한다.  
  
가상키 코드 | 값 | 키
-----------|----|----
VK_LBUTTON | 01 |
VK_RBUTTON | 02 |
VK_CANCEL | 03 | Ctrl + Break
VK_MBUTTON | 04 |
VK_BACK | 08 | Backspace
VK_TAB | 09 | Tab
VK_CLEAR | 0C | NumLock이 꺼져 있을 때의 5
VK_RETURN | 0D | Enter
VK_SHIFT | 10 | Shift
VK_CONTROL | 11 | Ctrl
VK_MENU | 12 | Alt
VK_PAUSE | 13 | Pause
VK_CAPITAL | 14 | Caps Lock
VK_ESCAPE | 1B | Esc
VK_SPACE | 20 | 스페이스
VK_PRIOR | 21 | PgUp
VK_NEXT | 22 | PgDn
VK_END | 23 | End
VK_HOME | 24 | Home
VK_LEFT | 25 | 좌측 커서 이동키
VK_UP | 26 | 위쪽 커서 이동키
VK_RIGHT | 27 | 위쪽 커서 이동키
VK_DOWN | 28 | 아래쪽 커서 이동키
VK_SELECT | 29 |
VK_PRINT | 2A |
VK_EXECUTE | 2B |
VK_SNAPSHOT | 2C | Print Screen
VK_INSERT | 2D | Insert
VK_DELETE | 2E | Delete
VK_HELP | 2F |
VK_HELP | 30 ~ 39 | 숫자키 0 ~ 9
VK_HELP | 41 ~ 5A | 영문자 A ~ Z
VK_LWIN | 5B | 왼쪽 윈도우 키
VK_RWIN | 5C | 오른쪽 윈도우 키
VK_APP | 5D | Application 키
VK_NUMPAD0 ~ VK_NUMPAD9 | 60 ~ 69 | 숫자 패드의 0 ~ 9
VK_MULTIPLY | 6A | 숫자 패드의 *
VK_ADD | 6B | 숫자 패드의 +
VK_SEPARATOR | 6C |
VK_SUBTRACT | 6D | 숫자 패드의 -
VK_DECMAL | 6E | 숫자 패드의 .
VL_DIVIDE | 6F | 숫자 패드의 /
VK_F1 ~ VK_F24 | 70 ~ 87 | 펑션키 F1 ~ F24
VK_NUMLOCK | 90 | Num Lock
VK_SCROLL | 91 | Scroll Lock

WM_KEYDOWN 메시지가 발생했고 wParam으로 VK_HOME이 전달되었다면 사용자가 Home키를 누른 것이다.  
**숫자 및 영문자의 가상 키코드는 아스키 코드와 같으며** 매크로 상수는 정의되어 있지 않으므로 문자 상수와 wParam을 바로 비교하면 된다.  
단, **영문자의 경우는 대문자 코드와 일치되어 있으므로 반드시 대문자와 비교**해야 한다.  
예를 들어 'Z'키가 눌러졌는지 알고 싶다면 if (wParam == 'Z')로 비교하면 된다.  
  
가상 키코드는 지금까지 나온 모든 키보드는 물론이고 앞으로 만들어질 키보드까지 고려하여 만들어진 범용적인 코드이다.  
코드표를 보면 VK_SELECT, VK_EXECUTE, VK_HELP 등과 같이 현재 키보드에 없는 키값도 미리 정의되어 있으며 펑션키도 F24까지 미리 만들어 놓았다.  
이 외 한국과 일본 등의 2바이트 문자를 지원하기 위한 특수한 가상키까지 포함되어 있는데 가상 키코드를 이렇게 범용적으로 만들어 놓은 이유는 앞으로 Windows를 키보드 구성이 완전히 다른 시스템으로 이식하더라도 키코드를 그대로 쓸 수 있도록 하기 위한 배려이다.​  
  
WM_KEYDOWN 메시지 처리 루틴에서 wParam의 값과 가상 키코드값을 비교해 봄으로써 어떤 키가 눌러졌는지를 알아낼 수 있다.  
lParam으로 전달되는 값은 WM_CHAR와 동일하나 역시 잘 사용되지 않는다.  
다음의 예제는 커서 이동키를 검출하여 문자 'A'를 화면에서 상하좌우로 이동한다.  
소스를 입력해볼 필요없이 눈으로 보기만 해도 이해할 수 있을 것이다.  
  
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <Windows.h>

    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("KeyDown");

    int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpszCmdParam, int nCmdShow)
    {
        HWND hWnd;
        WNDCLASS WndClass;
        MSG Message;
        g_hInst = hInstance;

        WndClass.cbClsExtra = 0;
        WndClass.cbWndExtra = 0;
        WndClass.hbrBackground = (HBRUSH)GetStockObject(WHITE_BRUSH);
        WndClass.hCursor = LoadCursor(NULL, IDC_ARROW);
        WndClass.hIcon = LoadIcon(NULL, IDI_APPLICATION);
        WndClass.hInstance = hInstance;
        WndClass.lpfnWndProc = WndProc;
        WndClass.lpszClassName = lpszClass;
        WndClass.lpszMenuName = NULL;
        WndClass.style = CS_HREDRAW | CS_VREDRAW;
        RegisterClass(&WndClass);

        hWnd = CreateWindow(lpszClass, lpszClass, WS_OVERLAPPEDWINDOW,
            CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, NULL, (HMENU)NULL, hInstance, NULL);
        ShowWindow(hWnd, nCmdShow);

        while (GetMessage(&Message, NULL, 0, 0))
        {
            TranslateMessage(&Message);
            DispatchMessage(&Message);
        }

        return (int)Message.wParam;
    }

    LRESULT CALLBACK WndProc(HWND hWnd, UINT iMessage, WPARAM wParam, LPARAM lParam)
    {
        HDC hdc;
        PAINTSTRUCT ps;
        static int x = 100;
        static int y = 100;

        switch (iMessage)
        {
        case WM_KEYDOWN:
            switch (wParam)
            {
            case VK_LEFT:
                x -= 8;
                break;
            case VK_RIGHT:
                x += 8;
                break;
            case VK_UP:
                y -= 8;
                break;
            case VK_DOWN:
                y += 8;
                break;
            }
            InvalidateRect(hWnd, NULL, TRUE);
            return 0;
        case WM_PAINT:
            hdc = BeginPaint(hWnd, &ps);
            TextOut(hdc, x, y, TEXT("A"), 1);
            EndPaint(hWnd, &ps);
            return 0;
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        }

        return (DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

x, y라는 정수형 변수 두 개를 100으로 초기화하고 WM_PAINT 메시지에서 이 변수의 위치에 문자 'A'를 출력한다.  
x, y 변수는 좌표값을 기억해야 하므로 static 변수로 선언하였다.  
WM_KEYDOWN 메시지에서는 wParam을 읽어 커서 이동키일 경우 x, y를 커서 이동키의 방향에 따라 조정함으로써 'A'를 화면에서 이동시킨다.  
키보드에 자동 반복 기능이 있으므로 계속 누르고 있으면 이 메시지가 반복적으로 발생한다.  
WM_KEYDOWN에서 좌표를 조정한 후는 반드시 조정된 좌표가 화면에 반영되도록 InvalidateRect 함수를 호출해야 한다.  
  
키보드를 누를 때마다 가상 키코드를 점검하여 커서 이동키에 따라 x, y 좌표값을 조정한 후 화면을 다시 그리고 있다.  
그래서 커서 이동키로 마치 A문자를 이동시키는 것처럼 보인다.  
이때 화면을 다시 그리기 위해 InvalidateRect 함수를 호출하는데 세 번째 인수에 TRUE를 주어 배경을 지운 후 그렸다.  
만약 이 인수를 FALSE로 변경하면 어떻게 될까?  
직접 실행해 보면 알겠지만 A문자가 이동은 하지만 기존 출력된 A문자가 지워지지는 않는다.  
  
보다시피 A문자가 꼬리를 질질 끌면서 작업영역을 돌아다니는데 위치는 변하지만 이전에 출력되어 있던 문자가 지워지지 않기 때문이다.  
물론 이 경우도 잔상만 남아 있을 뿐 유효한 A문자는 하나밖에 없기 때문에 다른 윈도우로 살짝 가려보면 잔상은 지워질 것이다.  
이런 허깨비가 없도록 출력루틴을 잘 관리해야 한다.  
이 예를 통해 InvalidateRect의 세 번째 인수가 어떤 역할을 하는지 쉽게 이해할 수 있을 것이다.  
  
WM_KEYDOWN의 반대 메시지는 WM_KEYUP이며 키가 떨어질 때 발생한다.  
wParam, lParam의 의미는 WM_KEYDOWN과 동일하다.  
키보드는 눌러질 때 입력된 것으로 간주하기 때문에 WM_KEYUP 메시지는 별로 잘 사용되지 않는다.  
키가 떨어지는 것도 일종의 사건이므로 운영체제는 사소한 변화에 대해서도 메시지를 보내는데 이 메시지를 쓸 것인가 아닌가는 응용 프로그램이 필요에 다라 결정하면 된다.