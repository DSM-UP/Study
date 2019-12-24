# Windows API 정복 1권(김상형 저) 정리 13편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 그래픽 출력

그래픽 출력도 문자열을 출력하는 방법과 크게 다르지 않다. 다음과 같은 그래픽 출력 함수들을 사용한다.  
  
    COLORREF SetPixel(hdc, nXPos, nYPos, clrref);
    DWORD MoveToEx(hdc, x, y, lpPoint);
    BOOL LineTo(hdc, xEnd, yEnd);
    BOOL Rectangle(hdc, nLeftRect, nTopRect, nRightRect, nBottomRect);
    BOOL Ellipse(hdc, nLeftRect, nTopRect, nRightRect, nBottomRect);

보다시피 모든 GDI 함수의 첫 번째 인수는 항상 DC 핸들인 hdc이므로 TextOut 함수와 마찬가지로 DC핸들부터 얻어야 그래픽을 출력할 수 있다.  
  
우선 SetPixel 함수는 화면에 점을 출력하는데 (nXPos, nYPos) 좌표에 clrref 색상으로 점을 출력한다.  
다른 출력 함수들과는 달리 **DC의 색상 정보를 쓰지 않고 인수로 색상을 전달받는다는 점이 독특**한데 점이라는 것은 색상 하나만으로 표현되므로 매번 다르게 지정하는 경우가 많기 때문이다.  
점은 가장 기본적인 그래픽 요소이지만 점만으로 표현할 수 있는 것이 거의 없어 Windows 환경에서는 잘 사용되지 않는다.  
  
선을 그을 때는 MoveToEx 함수와 LineTo 함수를 같이 사용해야 한다.  
GDI는 텍스트 모드의 커서에 해당하는 CP를 항상 유지하는데 LineTo 함수는 CP에서부터 지정한 좌표까지 선을 그으며 CP를 끝점으로 이동시킨다.  
그래서 LineTo를 연속적으로 호출하면 계속 이어지는 선을 그을 수 있다.  
MoveToEx는 CP를 지정한 좌표 (x, y)로 이동시키며 이동 전의 CP 좌표를 lpPoint에 대입하는데 이전 CP값이 필요치 않은 경우 lpPoint에 NULL을 전달하면 된다.  
통상 이전 좌표가 필요없기 때문에 NULL을 지정한다.  
(A, B) - (C, D)까지 선을 긋고 싶다면 다음과 같이 두 함수를 연속적으로 호출한다.  
  
    MoveToEx(hdc, A, B, NULL);
    LineTo(hdc, C, D);

MoveToEx 함수로 CP를 (A, B) 좌표로 이동시킨 후 LineTo 함수를 호출하면 현재 좌표인 (A, B)에서 LineTo 함수의 인수로 전달된 (C, D) 좌표로 선이 그어진다.  
  
선 하나를 긋기 위해 두 개의 함수 호출이 필요한데 Line(hdc, x1, y1, x2, y2) 형식의 래퍼 함수를 만들어 한 번에 선을 그을 수도 있다.  
  
    void Line(HDC hdc, int x1, int y1, int x2, int y2)
    {
        MoveToEx(hdc, x1, y1);
        LineTo(hdc, x2, y2);
    }

사각형을 그리는 Rectangle 함수와 타원을 그리는 Ellipse함수는 둘 다 인수가 동일하다.  
Rectangle 함수는 지정한 두 점 (Left, Top)과 (Right, Bottom)을 대각선으로 하는 사각형을 그리며 사각형 내부를 채우기도 한다.  
Ellipse 함수는 지정한 사각형에 내접하는 타원을 그린다.  
  
타원의 좌표 지정에 중심점과 장단축의 반지름을 쓰지 않고 직접 외접 사각형을 쓰는 이유는 Windows 환경의 주 입력장치가 마우스이기 때문이다.  
마우스의 이동 경로를 따라 타원을 쉽게 그리기 위해 중심과 반지름 대신 외접 사각형을 지정하도록 되어 있다.  
만약 (x, y) 중심에 반지름 r의 타원을 그리고 싶다면 다음과 같이 호출하면 된다.  
약간의 응용만 하면 얼마든지 원하는 모양의 타원을 그릴 수 있으며 이런 기능을 자주 사용한다면 래퍼 함수를 하나 만들어 놓고 사용하면 된다.  
  
    Ellipse(hdc, x - r, y - r, x + r, y + r);

이제 이 함수들을 직접 테스트해 보자.  
  
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <Windows.h>

    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("DrawText");

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

        switch (iMessage)
        {
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        case WM_PAINT:
            hdc = BeginPaint(hWnd, &ps);
            SetPixel(hdc, 10, 10, RGB(255, 0, 0));
            MoveToEx(hdc, 50, 50, NULL);
            LineTo(hdc, 300, 90);
            Rectangle(hdc, 50, 100, 200, 180);
            Ellipse(hdc, 220, 100, 400, 200);
            EndPaint(hWnd, &ps);
            return 0;
        }

        return (DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

BeginPaint 함수를 호출하여 DC 핸들을 먼저 얻은 후 그래픽 출력 함수들을 연속적으로 호출하였다.  
SetPixel 함수로 빨간색 점을 찍었는데 이 호출문에서 RGB(255, 0, 0)이 빨간색을 의미한다.  
MoveToEx와 LineTo 함수로 선을 그었으며 Rectangle 함수와 Ellipse 함수로 사각형과 타원을 각각 그려 보았다.  
  
DC의 개념만 이해되면 그래픽 출력은 아주 쉬운 편에 속하므로 더 이상의 설명은 생략한다.  
선의 색상과 굵기, 채워지는 면의 무늬 등을 바꾸는 방법은 다음에 알아보기로 하자.  
GDI는 선, 사각, 타원 외에도 다각형, 원주, 부채꼴, 곡선 등의 다양한 그리기 함수들을 제공한다.