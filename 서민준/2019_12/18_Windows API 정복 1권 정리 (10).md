# Windows API 정리(김상형 저) 정리 10편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## DC의 필요성

Windows는 세 가지 동적 연결 라이브러리(DLL)로 구성되어 있는데 메모리를 관리하고 프로그램을 실행시키는 KERNEL, 유저 인터페이스와 윈도우를 관리하는 USER, 그리고 화면 처리와 그래픽을 담당하는 GDI가 그것들이다.  
Windows API 함수의 대부분은 이 세 가지 DLL에 의해 제공되고 있다.  
출력을 하려면 우리는 GDI(Graphic Device Interface) 모듈에 특별히 관심을 기울여야 하는데 화면으로 출력되는 모든 글자와 그림은 GDI를 통해야 하기 때문이다.  
  
DC(Device Context)란 출력에 필요한 모든 정보를 가지는 데이터 구조체이며 GDI 모듈에 의해 관리된다.  
문자열의 모양을 지정하는 폰트, 선의 색상과 굵기, 채움 무늬와 색상, 그리기 모드 등등이 모두 출력에 필요한 정보들이다.  
화면 출력에 DC가 필요한 이유를 직관적으로 이해하기 위해 몇 가지 전형적인 예를 들어 설명해 보자.

### 상황 1

우선 화면에 선을 긋는 LineTo라는 함수를 생각해 보자.  
선이라는 도형은 시작점과 끝점을 잇는 모든 점들의 집합으로 정의되므로 선을 긋기 위해서는 최소한 시작점과 끝점의 좌표가 필요하다.  
한 점의 좌표는 X값, Y값으로 구성된다는 것은 상식이며 따라서 LineTo(X1, Y1, X2, Y2)와 같은 식으로 함수를 호출하여 기본적인 선분을 그을 수 있다.  
그러나 조금 더 생각해 보면 구체적인 선을 긋기 위해 두 점의 좌표 외에도 여러 가지 정보가 더 필요하다는 것을 알 수 있다.  
선의 색상, 굵기, 모양, 선을 그리는 모드, 좌표값을 해석하는 방법 등의 추가 정보가 있어야 비로소 완벽한 선을 그을 수 있다.  
이런 정보들을 모두 인수로 넘긴다면 LineTo 함수는 다음과 같이 복잡한 모양이 될 것이다.  
  
    LineTo(StartX, StartY, EndX, EndY, Color, Width, Shape, ROP, mode, ......)

사실 다양한 모양의 선을 긋기 위해서는 이보다 훨씬 더 많은 정보가 필요하다.  
선의 특성을 결정하는 값들이 아주 많을 수 있으므로 이런 정보들을 일일이 인수로 전달하는 것보다는 한 곳에 모아 두고 그 값들을 사용하는 방법이 훨씬 더 편리하고 효율적이다.  
그래서 이런 정보들을 모두 모아 DC라는 것을 만들고 그리기 함수에서 DC의 핸들을 넘겨받아 그리기에 필요한 추가 정보는 모두 DC에 정의되어 있는 값을 사용한다.  
이런 방식을 사용하면 LineTo 함수는 다음과 같이 간단해질 수 있을 것이다.  
  
    LineTo(hDC, X, Y)

선의 시작점과 색상, 굵기 따위의 정보는 모두 hDC에 들어 있으며 LineTo 함수는 hDC와 끝점의 좌표만 인수로 전달받으면 된다.  
색상이나 굵기를 바꾸고 싶으면 DC에 보관된 정보를 바꿔놓고 LineTo를 호출하면 된다.  
이때 DC는 그리기에 필요한 다양한 정보들의 저장소 역할을 한다.

### 상황 2

(50, 50) 좌표에서 (150, 100) 좌표로 선을 긋는다고 해 보자.  
이때 다음 두 결과중 어떤 것이 과연 논리적으로 맞는 것일까?  
  
1. 화면의 원점을 기준으로 (50, 50) - (150, 100)까지 선을 그은 것
2. 윈도우의 작업영역을 기준으로 선을 그은 것

2번이 Windows 사용자는 보편적으로 기대하는 출력 결과임이 당연하다.  
Windows용 프로그램은 혼자서 실행되는 것이 아니며 화면을 독점적으로 사용하지 않는다.  
그래서 모든 출력문은 화면이 아닌 윈도우를 기준으로 하며 이러한 원점에 대한 정보도 DC에 있다.  
그리기 함수들은 DC의 원점 정보를 참조하여 자신이 그려야 할 그래픽의 화면상 위치가 어디인지를 정확하게 계산해서 출력한다.  
DC는 그리기 함수들이 참조하는 원점의 정보를 제공한다.

### 상황 3

Windows는 여러 개의 프로그램이 동시에 실행되는 멀티 태스킹 시스템이기 때문에 그리기 함수에 의해 실제 출력되는 모양은 주변환경에 따라 달라진다.  
두 개의 윈도우가 겹쳐져 있는 상황에서 아래쪽 윈도우에 원을 그리는 명령을 내렸다고 할 때 다음 두 가지 중 어떤 결과가 합당할까?  

1. 겹쳐져 있는 윈도우에도 원이 표시되도록 그려진다.
2. 아래쪽에 있는 윈도우에만 원이 표시되도록 그려진다.

당연히 2번이 우리가 기대하는 결과이다.  
1번처럼 자신보다 더 위에 있는 윈도우의 영역을 침범하는 그런 건방진 윈도우를 본 적이 없다.  
이런 경우는 원을 그리더라도 그려야 할 부분이 있고 그리지 말아야 할 부분이 있는데 자신보다 위쪽에 다른 윈도우가 있으면 이 영역에는 그리지 말아야 한다.  
이런 복잡한 처리를 원 그리기 함수가 직접 한다는 것은 불가능하며 DC를 통해야만 이런 처리가 가능하다.  
DC는 현재 상황에서 어떤 영역이 출력 허가된 영역인가를 계산하여 허가된 영역에만 출력을 내 보낸다.  
그래서 윈도우끼리 겹치더라도 다른 윈도우 영역을 침범하지 않도록 보장한다.  
이 때 DC는 윈도우끼리의 출력 결과가 서로를 방해하지 않도록 완충 역할을 한다.  
  
만약 이런 장치가 없다면 모든 그리기 함수는 원점을 정말 정밀하게 계산해야 할 것이며 그리기가 금지된 영역에 출력을 하지 않기 위해 극도로 조심해야 할 것이다.  
이런 이유 외에도 장치 독립성 확보 등 DC의 존재 이유는 여러 가지가 있지만 여기서는 DC를 왜 사용해야 하는가만 직감적으로 이해하고 넘어가자.  
DC가 그리기에 필요한 여러 가지 정보와 안전 장치 역할을 하기 때문에 모든 그리기 함수는 DC의 핸들을 첫 번째 인수로 전달받아야 한다.

## 문자열 출력

이벤트 드리븐 시스템에서는 사건이 일어나야 코드가 실행되므로 먼저 문자열 출력 시점을 결정해야 한다.  
변화가 없다면 코드가 실행되어야 할 이유가 없으므로 가장 발생시키기 쉬운 마우스 왼쪽 버튼이 눌러질 때를 사용하기로 한다.  
마우스 왼쪽 버튼이 눌러질 때 WM_LBUTTONDOWN 메시지가 발생하므로 WndProc에서 이 메시지를 받았을 때 문자열을 출력하면 된다.  
  
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <Windows.h>

    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("TextOut");

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

	    hWnd = CreateWindow(lpszClass, lpszClass, WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, NULL, (HMENU)NULL, hInstance, NULL);
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

	    switch (iMessage)
	    {
	    case WM_DESTROY:
		    PostQuitMessage(0);
		    return 0;
	    case WM_LBUTTONDOWN: // 마우스 왼쪽 버튼을 눌렀다면
		    hdc = GetDC(hWnd);
		    TextOut(hdc, 100, 100, TEXT("Beautiful Korea"), 15); // (100, 100)에 문자열을 출력한다.
		    ReleaseDC(hWnd, hdc);
		    return 0;
	    }

	    return(DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

WndClass 구조체의 윈도우 클래스명을 지정하는 lpszClass 전역 문자열만 변경하였으며 WinMain은 모두 첫 번째 예제의 것을 그대로 사용하였다.  
보다시피 프로그램이 변경되어도 WinMain의 내용은 거의 변경되지 않으며 대부분 WndProc의 내용만 변경된다.  
WndProc에 WM_LBUTTONDOWN 메시지를 처리하는 코드가 추가되었는데 처리해야 할 메시지가 추가될 때마다 switch문의 case만 늘리고 필요한 지역 변수를 WndProc의 선두에 선언한다.  
  
WM_LBUTTONDOWN에서는 GetDC 함수로 DC를 얻고 TextOut 함수로 (100, 100) 좌표에 15자 길이의 문자열을 출력한 후 ReleaseDC 함수로 DC를 해제하였다.  
예제를 실행하고 마우스로 윈도우의 임의 영역을 클릭하면 100, 100 좌표에 Beautiful Korea라는 문자열이 출력될 것이다.  
  
마우스 클릭에 의해 WM_LBUTTONDOWN 메시지가 발생했고, 이 메시지 처리부에서 문자열을 출력한 것이다. 아직 문제가 남아 있지만 어쨌든 문자열을 출력하는 데는 성공했다.