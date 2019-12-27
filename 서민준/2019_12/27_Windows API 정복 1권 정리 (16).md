# Windows API 정복 1권(김상형 저) 정리 16편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## WM_CHAR 메시지

DOS(콘솔) 환경에서는 명시적으로 입력을 받는 함수들이 따로 있다.  
getch, gets, scanf 등의 함수들은 사용자로부터 입력을 요구하는데 입력이 완료될 때까지 절대로 리턴하지 않으며 따라서 이 함수가 리턴하기 전까지 프로그램의 실행은 잠시 중단된다.  
싱글 태스킹 환경에서는 혼자만 실행되므로 입력을 받기 전에 시스템 전체를 완전히 블록해도 아무 문제가 없다.  
입력을 받아야 다음 동작을 결정할 수 있으므로 입력 완료 전에 뒤쪽 명령을 실행할 필요도 없는 것이다.  
  
그러나 Windows 환경에서는 이런 명시적인 입력 함수가 존재하지 않으며 반드시 메시지를 받아야 한다.  
왜냐하면 여러 개의 프로그램이 동시에 실행되는 멀티 태스킹 환경이며 사용자가 언제 자신에게 관심을 가질지 예측할 수 없기 때문이다.  
  
Windows 환경에서는 주로 마우스가 많이 사용되지만 아직까지도 컴퓨터의 가장 기본적인 입력 장치는 키보드이다.  
키보드로부터 입력이 발생했을 경우 Windows는 포커스를 가진 프로그램에게 키보드 메시지(WM_CHAR, WM_KEYDOWN)를 보내며 이런 메시지를 받아 키보드 입력을 처리한다.  
  
여기서 포커스(Focus)란 입력 초점이라는 뜻이며 키보드 입력을 받아들일 수 있는 상태라는 뜻이다.  
포커스를 가진 상태란 활성화되어 있고 현재 사용자가 쓰고 있다는 뜻인데 한 번에 오직 하나의 프로그램만 활성화된다.  
아무리 여러 개의 프로그램이 동시에 실행되는 멀티 태스킹 환경이라 하더라도 활성화될 수 있는 프로그램은 오직 하나밖에 없으며 활성화된 프로그램만 포커스를 가지고 키보드 입력을 받아들일 수 있다.  
  
활성화된 프로그램내에서도 단 하나의 컨트롤만 포커스를 가질 수 있으며 포커스를 가진 컨트롤의 주변에는 캐럿이 나타나거나 포커스 사각형이 그려져 그렇지 않은 컨트롤과 다르게 보인다.  
아무 대화상자나 열어서 Tab키를 눌러가면서 포커스를 이동해 보면 버튼, 에디트, 리스트 박스 등이 포커스를 가질 때와 그렇지 않을 때 모양이 달라진다는 것을 확인할 수 있다.  
포커스를 가진 컨트롤만 키보드 입력을 받을 수 있으며 관련 메시지도 포커스를 가진 컨트롤에게만 전달된다.  
  
한 번에 하나의 프로그램만 키보드의 입력을 받을 수 있는 이유는 간단하다.  
시스템에 키보드는 하나뿐이며 키보드를 사용하는 주체인 사용자도 오직 한 명뿐이기 때문이다.  
  
다음은 키보드로부터 입력된 문자들을 계속 화면으로 출력하는 예제이다.  
  
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <Windows.h>

    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("Key");

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
        static TCHAR str[256];
        int len;

        switch (iMessage)
        {
        case WM_CHAR:
            len = lstrlen(str);
            str[len] = (TCHAR)wParam;
            str[len + 1] = 0;
            InvalidateRect(hWnd, NULL, FALSE);
            return 0;
        case WM_PAINT:
            hdc = BeginPaint(hWnd, &ps);
            TextOut(hdc, 100, 100, str, lstrlen(str));
            EndPaint(hWnd, &ps);
            return 0;
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        }

        return (DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

키보드에서 키를 누르면 입력한 문자들이 화면 상단에 출력될 것이다.  
WndProc을 보면 우선 문자 배열 str이 크기 256으로 선언되어 있으며 WM_CHAR 메시지에서 이 문자 배열에 사용자가 입력한 문자들을 모은다.  
단 이 변수는 WndProc에 선언되어 있는 지역변수이므로 그냥 선언하면 메시지가 발생할 때마다 초기화되기 때문에 static을 붙여 정적 변수로 선언해야 한다.  
아니면 아예 WinMain 함수 이전에 선언하여 전역변수로 선언해도 된다.  
  
입력된 문자들을 바로바로 출력하지 않고 반드시 문자열에 모아 두어야 하는 이유는 키보드 입력이 발생하는 시점과 문자열을 출력해야 할 시점이 분리되어 있기 때문이다.  
키보드 입력 시점은 키보드 메시지인 WM_CHAR가 발생했을 때인데 이 메시지에서 문자열을 조립하기만 하고 출력은 WM_PAINT에서 처리한다.  
물론 WM_CHAR 메시지에서 문자열을 바로 출력하는 것도 가능하기는 하지만 Windows 프로그램은 화면을 다시 그릴 준비를 항상 해 두어야 하며 모든 출력은 WM_PAINT에서 하도록 되어 있다.  
만약 WM_CHAR에서 문자를 입력받는 족족 화면으로 출력해 버리면 다른 프로그램에 의해 언커버되어 지워졌을 때 다시 복구되지 않는다.  
  
WM_CHAR 메시지는 입력된 문자의 코드를 wParam으로 전달하며 우리는 wParam의 값을 읽어 사용자가 어떤 문자를 눌렀는지를 알아낸다.  
예를 들어 사용자가 'S' 키를 눌렀다면 wParam은 S의 문자 코드값인 0x53이 전달되며 이 값을 그대로 화면으로 출력하면 문자 S가 출력될 것이다.  
lParam에는 비트별로 복잡한 정보가 전달된다.  
  
이 중 필요한 정보가 있으면 lParam을 참조하여 사용하고 필요없으면 wParam만 사용하되 WM_CHAR 메시지에서 lParam의 정보들을 사용해야 할 경우는 드물므로 당장 관심을 가질 필요는 없다.  
메시지 별로 필요한 추가 정보는 함께 전달되는 wParam, lParam을 통해 넘어오는데 wParam과 lParam을 사용하는 방법은 메시지별로 다르므로 추가 정보에 대한 사항은 따로 공부해야 한다.  
다음 코드는 wParam으로 전달된 문자 코드를 str 문자 배열에 저장한다.  
  
    len = lstrlen(str);
    str[len] = (TCHAR)wParam;
    str[len + 1] = 0;

문자열의 제일 끝 부분에 wParam값을 써 넣고 바로 뒤쪽에 0을 써 넣어 문자열 끝을 표시한다.  
메시지의 추가 정보는 받고자하는 타입에 맞게 적당히 캐스팅해서 사용해야 한다.  
키 입력이 있을 때마다 이 동작을 반복함으로써 str 문자 배열에는 입력된 키 값이 차곡차곡 쌓여갈 것이다.  
  
키보드 메시지에는 str배열에 문자열을 집어넣기만 하며 문자열을 화면으로 출력하는 일은 WM_PAINT에서 맡는다.  
단 키보드 메시지에 의해 문자열이 다시 입력되더라도 화면상의 변화는 없으므로 WM_PAINT 메시지를 발생시켜야 하는데 이 때는 InvalidateRect 함수를 호출하면 된다.  
WM_CHAR에서 문자열을 조립한 후 InvalidateRect 함수를 호출하여 키보드가 입력될 때마다 화면을 다시 그리도록 하였다.  
  
InvalidateRect 호출문을 빼 버리면 입력은 받지만 화면이 제때 갱신되지 않을 것이다.  
이 함수 호출문이 있어야 키보드에 눌러진 키의 문자가 화면으로 즉시 출력된다.  
**한글도 입력할 수 있지만 조립중인 문자는 보이지 않다가 음절이 완성될 때마다 화면으로 출력**된다.  
키보드를 누르면서 WM_CHAR 메시지가 발생했을 때의 동작을 잘 생각해 보기 바란다.  
입력된 문자가 어떻게 str 배열에 모여 한꺼번에 출력되는가를 상상해 볼 수 있을 것이다.  
  
Windows용 프로그램은 입력받는 부분과 출력하는 부분이 따로 분리되어 있다.  
출력에 필요한 모든 정보는 따로 저장해 두고 WM_PAINT에서 일괄적으로 출력해야 한다.  
이런 입력과 출력의 특수성 때문에 DOS나 콘솔 환경에 비해 Windows 환경에서 C언어를 배우는 것이 어려운 것이다.