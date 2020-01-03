# Windows API 정복 1권(김상형 저) 정리 22편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 시계

타이머 메시지를 이용해서 간단한 시계를 하나 만들어 보자. 시간이라는 것은 주기적으로 갱신되어야 하는 것이므로 타이머 메시지를 사용하기에 가장 적절한 예이다.  
  
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <Windows.h>

    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("MyTimer");

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
        SYSTEMTIME st;
        static TCHAR sTime[128];

        switch (iMessage)
        {
        case WM_CREATE:
            SetTimer(hWnd, 1, 1000, NULL);
            return 0;

        case WM_TIMER:
            GetLocalTime(&st);
            wsprintf(sTime, TEXT("지금 시간은 %d : %d : %d 입니다."), st.wHour, st.wMinute, st.wSecond);
            InvalidateRect(hWnd, NULL, TRUE);
            return 0;

        case WM_PAINT:
            hdc = BeginPaint(hWnd, &ps);
            TextOut(hdc, 100, 100, sTime, lstrlen(sTime));
            EndPaint(hWnd, &ps);
            return 0;

        case WM_DESTROY:
            KillTimer(hWnd, 1);
            PostQuitMessage(0);
            return 0;
        }

        return(DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

현재 시간을 구할 때는 SYSTEMTIME 구조체와 GetLocalTime이라는 함수를 사용하는데 이것은 지금 다루고 있는 주제가 아니므로 일단 무시하고 그냥 사용하기만 하자. WndProc의 선두에는 시간값을 조사할 st 구조체와 이 시간값을 조사할 st 구조체와 이 시간값을 문자열로 변경하여 저장할 sTime 문자열이 선어되어있는데 sTime은 조사해 놓은 시간을 기억해야 하므로 정적 변수로 선언했다.  
  
WndProc에서 첫 번째로 처리하는 메시지는 WM_CREATE 메시지이다. WM_CREATE 메시지는 윈도우가 처음 생성될 때 발생하는데 이 메시지에서 프로그램 시작시 꼭 한 번만 초기화해야 할 처리를 한다. 프로그램 실행에 필요한 메모리를 할당한다든가 전역변수에 초기값을 대입하는 등의 초기화 처리가 보통 WM_CREATE에서 이루어진다. 이 예제에서는 WM_CREATE 메시지에서 SetTimer 함수를 사용하여 타이머를 생성했다. 즉 윈도우가 만들어질 때 타이머가 생성된다.  
  
    UINT SetTimer(HWND, hWnd, UINT nIDEvent, UINT uElapse, TIMEPROC lpTimerFunc);

hWnd 인수는 타이머 메시지를 받을 윈도우인데 통상 설치하는 윈도우가 메시지를 받으므로 WndProc의 인수로 전달되는 hWnd를 그대로 써 주면 된다. 두 번째 인수 nIDEvent는 타이머의 번호를 지정한다. 하나의 타이머만 사용할 경우 1을 주고 여러 개의 타이머를 사용할 경우 nIDEvent에 겹치지 않게 번호를 부여해야 한다. 예를 들어 세 개의 타이머를 사용한다면 각각 1, 2, 3의 타이머 번호를 지정하며 이 타이머 번호는 WM_TIMER 메시지에서 타이머를 구분하기 위한 표식으로 사용된다.  
  
세 번째 인수 uElapse는 타이머의 주기를 설정하는데 단위는 1/1000초이다. 이 값이 1000이면 1초에 한 번씩 타이머 메시지가 발생할 것이다. 그러나 이 값을 1로 한다고 해서 타이머 메시지가 1초에 1000번씩 발생하는 것은 아니다. 타이머의 최대 해상도는 95/98에서는 0.055초이며 NT/2000에서는 0.01초에 불과하기 때문에 주기를 아무리 짧게 해도 타이머 메시지는 1초에 100회(98에서는 18회) 이상 발생하지 않는다.  
  
네 번째 인수는 타이머 메시지가 발생할 때마다 호출될 함수를 지정하는데 사용하지 않을 경우 NULL로 설정한다. 이 예제에서는 WM_CREATE에서 ID 1번으로 1초에 한 번씩 타이머 메시지를 hWnd로 보내도록 설정하였다. 이제 1초에 한 번씩 hWnd 윈도우에 WM_TIMER 메시지가 전달될 것이다.  
  
WM_TIMER 메시지는 **wParam으로 타이머 ID**를 전달받으며 **lParam으로 타이머 메시지 발생시 호출될 함수의 번지**가 전달된다. 이 예제에서는 타이머가 하나밖에 없으며 타이머 메시지 처리 함수도 지정되지 않았으므로 둘 다 무시하고 사용하지 않는다. WM_TIMER 메시지가 발생하면 GetLocalTime 함수로 시간을 조사한 후 출력을 위해 sTime 문자열로 변환해 둔다. 이제 남은 일은 조사된 시간을 화면으로 출력하는 것이다. WM_TIMER에서는 시간이 바뀔 때마다 화면을 갱신하기 위해 InvalidateRect 함수를 호출하고 있다.  
  
그러면 WM_PAINT 메시지에서 이 문자열을 화면으로 출력할 것이다. 이 프로그램도 시간을 조사하는 부분과 출력하는 부분이 분리되어 있는데 **Windows 프로그램은 항상 이런 식으로 모든 그리기를 WM_PAINT에서 해야 한다.** 현재 시간이 sTime 문자열에 조립되어 있으므로 단순히 TextOut을 사용하여 화면에 sTime 문자열을 뿌리기만 하면 된다.  
  
1초당 한 번씩 시간이 정확하게 갱신될 것이다. 마지막으로 해야 할 일은 윈도우가 파괴될 때 보내지는 WM_DESTROY 메시지에서 설치된 타이머를 제거하는 것이며 이 때는 KillTimer 함수를 사용한다.  
  
    BOOL KillTimer(HWND hWnd, UINT uIDEvent);

타이머는 시스템 전역 자원이므로 더 이상 필요가 없어지면 파괴하는 것이 좋다. KillTimer의 첫 번째 인수로 이 타이머를 소유한 윈도우 핸들을 넘기며 두 번째 인수로 파괴할 타이머 ID를 지정한다. 주의할 것은 **타이머 ID는 SetTimer의 두 번째 인수로 지정한 값**을 말하는 것이지 **SetTimer가 리턴한 값을 말하는 것이 아니라는 점**이다. 이 예제에서는 SetTimer에서 타이머 ID를 1이라는 상수로 주었으므로 파괴할 때도 타이머 ID로 상수 1을 넘겨야 한다. **SetTimer의 리턴값은 타이머를 소유하는 윈도우없이 타이머가 만들어졌을 경우, 즉 SetTimer의 첫 번째 인수가 NULL일 경우에 한해 특별하게 사용하는 것이되 거의 사용되지 않는다.**