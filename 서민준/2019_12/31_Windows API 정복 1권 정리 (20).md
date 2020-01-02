# Windows API 정복 1권(김상형 저) 정리 20편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## Mouse

Windows와 같은 GUI 운영체제에서는 키보드보다 마우스가 더 많이 사용된다.  
Windows의 공식 입력 장치는 키보드이지만 그래픽 툴이나 DTP, CAD 등의 복잡한 프로그램에서는 마우스가 주요 입력 장치로 사용된다.  
여기서 마우스라고 함은 진짜 쥐처럼 생긴 마우스는 물론이고 노트북의 터치 패드, 트랙볼과 출판용 태블릿 등을 모두 포함하는 명칭이다.  
굉장히 많은 포인팅 장치가 개발되었지만 아직까지도 마우스를 대체할만한 장비는 없는 셈이다.  
키보드 입력 처리를 메시지로 하는 것과 마찬가지로 마우스 입력 처리도 메시지를 받아 처리한다.  
입력에 관한 메시지는 다음과 같은 종류가 있다.  
  
버튼 | 누름 | 놓음 | 더블클릭
----|------|------|----------
좌측 | WM_LBUTTONDOWN | WM_LBUTTONUP | WM_LBUTTONDBLCLK
우측 | WM_RBUTTONDOWN | WM_RBUTTONUP | WM_RBUTTONDBLCLK
중앙 | WM_MBUTTONDOWN | WM_MBUTTONUP | WM_MBUTTONDBLCLK

버튼 세 개의 대해 각각 누름, 놓음, 더블클릭의 9가지 메시지가 있다.  
이 중 주로 왼쪽 버튼의 메시지가 많이 사용되며 가끔 오른쪽 버튼도 사용되고 중앙 버튼은 사용되는 경우가 드물다.  
요즘 버튼 세 개 달린 마우스를 구경하기는 무척 힘들지만 휠 마우스의 휠 버튼이 중앙 버튼 역할을 대신하므로 중앙 버튼 메시지도 잘 활용하면 써먹을 데가 많기는 하다.  
그러나 휠 버튼을 클릭하는 사용자들은 많지 않으므로 가급적 이 메시지는 안 쓰는 것이 좋다.  
  
여담으로 요즘 버튼이 다섯 개 달린 마우스도 있는데 마이크로소프트에서 IE를 지원하기 위해 만든 마우스이다.  
이 마우스는 X버튼이라 불리는 두 개의 버튼을 더 가지고 있으며 각각 앞으로, 뒤로의 기능이 부여되어 인터넷 서핑을 편리하게 해준다.  
이 새로운 버튼을 지원하기 위해 WM_XBUTTON... 메시지가 세 개 추가되었는데 아직 대중적이지 않으므로 이 메시지에 대한 설명은 생략하기로 한다.  
자기들이 만든 마우스를 팔아먹기 위해 메시지 시스템까지 확장했는데 만약 이 마우스를 마이크로소프트가 안 만들었다면 이런 지원까지는 하지 않았을 것이다.  
  
마우스 메시지는 lParam의 상위 워드에 마우스 버튼이 눌러진 y좌표, 하위 워드에 x좌표를 가지며 좌표값을 검출해 내기 위해 HIWORD, LOWORD 등의 매크로 함수를 사용한다.  
즉 마우스 메시지가 발생한 위치의 좌표는 (LOWORD(lParam), HIWORD(lParam))이 된다.  
  
단, **좌표값은 당연히 양수지만 음수가 되는 특별한 경우도 있음**을 주의해야 한다.  
98이후에는 두 개 이상의 모니터가 사용될 수 있는데 이 때 오른쪽 모니터의 입장에서 보면 좌표값이 음수가 되는 경우가 있으며 마우스를 캡처했을 때도 음수 좌표가 전달될 수 있다.  
이때는 **반드시 (int)(short)형으로 다시 한 번 더 캐스팅**하여 부호를 제대로 변환해야 한다.  
양수 좌표만 전달되는 일반적인 경우에는 꼭 그렇게까지 할 필요가 없다.  
  
wParam에는 마우스 버튼의 상태와 키보드 조합 키(Shift, Ctrl)의 상태가 전달된다.  
조합키 상태는 다음 값들과 비트 연산을 해보면 알 수 있다.  
이 값을 참조하면 쉬프트 클릭, 좌우 동시 누름 등의 조건을 검출할 수 있다.  
  
값 | 설명
---|-----
MK_CONTROL | Ctrl 키가 눌러져 있다.
MK_LBUTTON | 마우스 왼쪽 버튼이 눌러져 있다.
MK_RBUTTON | 마우스 오른쪽 버튼이 눌러져 있다.
MK_MBUTTON | 마우스 중앙 버튼이 눌러져 있다.
MK_SHIFT | Shift 키가 눌러져 있다.

마우스 버튼의 누름 메시지 외에 마우스가 이동할 때마다 전달되는 WM_MOUSEMOVE 메시지가 있다.  
이 메시지도 다른 마우스 메시지와 마찬가지로 lParam에 마우스 커서의 위치가 전달되며 wParam에 조합키 상태가 전달된다.  
또한 휠 마우스가 등장함으로써 WM_MOUSEWHEEL이라는 메시지가 추가되었다.  
  
메시지의 추가 정보로 전달되는 wParam, lParam은 둘 다 32비트 크기를 가지므로 총 64비트의 정보를 전달할 수 있다.  
인수의 개수는 둘인데 좀 더 많은 정보를 전달해야 하는 메시지들이 가끔 있다.  
마우스 메시지만 해도 x, y, 조합키의 상태 등 세 가지 값이 전달되어야 한다.  
그래서 32비트 인수의 상하위 워드나 바이트를 잘라 여러 개의 인수를 합쳐서 전달하며 메시지를 받는 쪽에서는 wParam, lParam에 묶여서 전달되는 값을 잘라서 사용해야 한다.  
이럴 때는 다음과 같이 정의된 매크로를 사용하여 개별정보를 분리해낸다.  
  
    #define LOWORD(l)           ((WORD)(((DWORD_PTR)(l)) & 0xffff))
    #define HIWORD(l)           ((WORD)((((DWORD_PTR)(l)) >> 16) & 0xffff))
    #define LOBYTE(w)           ((BYTE)(((DWORD_PTR)(w)) & 0xff))
    #define HIBYTE(w)           ((BYTE)((((DWORD_PTR)(w)) >> 8) & 0xff))

DWORD로부터 상, 하위 워드 추출, WORD로부터 상, 하위 바이트를 추출하는 매크로들인데 캐스트 연산자, 비트 AND, 쉬프트 연산자들의 조합으로 값을 추출한다.  
C 연산자 정도만 이해하고 있다면 이 정도 매크로는 쉽게 해석될 것이다.  
만약 이 매크로의 내용이 잘 분석되지 않는다면 C의 비트 연산자들을 좀 더 공부해야 한다.  
  
반대로 두 개의 16비트값을 가지고 32비트값을 조립해야 할 경우도 있는데 이때는 다음 매크로를 사용한다.  
  
    #define MAKEWORD(a, b)      ((WORD)(((BYTE)(((DWORD_PTR)(a)) & 0xff)) | ((WORD)((BYTE)(((DWORD_PTR)(b)) & 0xff))) << 8))
    #define MAKELONG(a, b) ((LONG)(((WORD)(((DWORD_PTR)(a)) & 0xffff)) | ((DWORD)((WORD)(((DWORD_PTR)(b)) & 0xffff))) << 16))

MAKEWORD는 두 개의 바이트로부터 16비트값을 만들고 MAKELONG은 두 개의 16비트 값으로 32비트값을 만든다.  
이 외에 MAKELONG과 똑같이 정의된 MAKEWPARAM, MAKELPARAM 매크로가 정의되어 있는데 메시지를 직접 보내고자 할 때 파라미터 조립에 가끔 사용된다.  
예를 들어 (123, 98) 좌표를 lParam에 실어 보내려면 MAKELPARAM(123, 98) 매크로를 사용한다.  
  
마우스 메시지를 사용하여 그림판과 같이 작업영역에 곡선을 그리는 예제를 만들어 보자.  
마우스 버튼의 누름, 놓음, 이동 세 가지 메시지에 대한 코드만 작성하면 된다.  
마우스 버튼이 눌러지면 그리기를 시작하고 마우스 커서의 이동에 따라 LineTo 함수로 선을 긋기만 하면 되는 아주 간단한 예제이다.  
  
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <Windows.h>

    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("Mouse");

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
        static int x;
        static int y;
        static BOOL bNowDraw = FALSE;

        switch (iMessage)
        {
        case WM_LBUTTONDOWN:
            x = LOWORD(lParam);
            y = HIWORD(lParam);
            bNowDraw = TRUE;
            return 0;
        case WM_MOUSEMOVE:
            if (bNowDraw == TRUE)
            {
                hdc = GetDC(hWnd);
                MoveToEx(hdc, x, y, NULL);
                x = LOWORD(lParam);
                y = HIWORD(lParam);
                LineTo(hdc, x, y);
                ReleaseDC(hWnd, hdc);
            }
            return 0;
        case WM_LBUTTONUP:
            bNowDraw = FALSE;
            return 0;
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        }

        return (DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

현재 마우스 위치를 저장할 변수 x, y와 현재 선을 그리고 있는 중인지를 저장할 변수 bNowDraw를 선언한다.  
이 변수들은 값을 계속 저장하고 있어야 하므로 static으로 선언하였다.  
  
왼쪽 마우스 버튼이 눌러지면(WM_LBUTTONDOWN 메시지가 발생하면) 버튼이 눌러진 위치의 좌표를 x, y 변수에 대입하고 마우스가 움직이면(WM_MOUSEMOVE) 시작점 (x, y)에서 마우스가 움직이고 있는 위치까지 선을 긋는다.  
마우스 이동 메시지가 반복적으로 전달되므로 이 과정은 마우스 버튼을 놓을 때까지 반복된다.  
  
마우스 이동시 다음번 WM_MOUSEMOVE 메시지를 위해 lParam으로 전달된 현재 위치를 x, y 정적 변수에 저장해 두는데 이 값은 다음 번 WM_MOUSEMOVE 메시지에서 직전 위치로 사용된다.  
그리기 코드를 다음 두 부분으로 나누어 보면 조금 더 이해하기 쉽다.  
  
    // 직전 위치에서 현재 위치까지 선 그음
    MoveToEx(hdc, x, y, NULL);
    LineTo(hdc, LOWORD(lParam), HIWORD(lParam));

    // 다음번 그리기를 위해 현재 위치를 저장해 놓는다.
    x = LOWORD(lParam);
    y = HIWORD(lParam);

이 코드를 정리하여 x, y가 미리 현재 위치를 대입받도록 한 것이 바로 예제의 코드이다.  
  
마우스 버튼이 놓아지면 bNowDraw를 FALSE로 변경하여 마우스가 움직여도 선이 그려지지 않게 한다.  
bNowDraw는 마우스 버튼을 누른 채로 움직이고 있는지를 기억하는 변수인데 if (bNowDraw) 조건문을 잠시 주석 처리해 놓고 실행해 보면 이 변수가 어떤 역할을 하는지 알 수 있을 것이다.  
  
선을 그릴 때마다 일일이 DC 핸들을 발급받는 것 외에는 알고리즘이 아주 간단하다.  
**WM_PAINT 메시지 이외의 부분에서 화면에 출력해야 할 때는 GetDC 함수를 호출하여 DC 핸들을 발급받아야 함**을 유의하자.  
  
마우스가 움직이는 대로 선이 그려질 것이다.  
이 예제는 그림을 그리기는 하되 WM_PAINT에 관한 처리는 하지 않았으므로 그려진 그림은 언제든지 지워질 가능성이 있다.  
즉 화면에 그림을 그리기는 해도 복구 능력이 없다.  
이 문제를 해결하려면 그려지는 그림을 일이이 저장해 두어야 하는데 현재 단계에서는 그 방법을 논하기 어렵다.  
화면 전체를 비트맵으로 저장하든가 아니면 연결 리스트를 사용하여 마우스의 움직임을 일일이 보관해야 하는데 이런 의문점은 잠시 접어두었다가 다음에 공부하자.