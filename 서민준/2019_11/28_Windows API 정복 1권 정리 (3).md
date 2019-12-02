# Windows API 정복 1권 정리 3편

## 분석

        // Visual Studio 2019에서 작성된 코드입니다.  
          
        #include <Windows.h>  
          
        LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);  
        HINSTANCE g_hInst;
        LPCTSTR lpszClass = TEXT("First");
        
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
            switch (iMessage)
            {
            case WM_DESTROY:
                PostQuitMessage(0);
                return 0;
            }

            return(DefWindowProc(hWnd, iMessage, wParam, lParam));
        }

첫 번째 예제를 분석해보는 시간을 가져보도록 하겠다. 소스를 완전히 이해하지는 못하더라도 대충의 구조만이라도 익혀두기 바란다.  

## WinMain

이제 소스를 차근 차근히 분석해 보되 그 전에 우선 익숙해져 있는 DOS 또는 콘솔 프로젝트와의 차이점을 알아보자.

### 헤더 파일

우선 제일 첫 행을 보면 <Windows.h> 하나만 인클루드되어 있다. Windows에서는 하나의 헤더 파일에 모든 API 함수들의 원형과 사용하는 상수들이 죄다 정의되어 있기 때문에 <Windows.h>만 포함하면 거의 문제가 없다.  
  
<Windows.h> 헤더 파일은 기본적인 데이터 타입, 함수 원형, 매크로 상수 등을 정의하며 그 외 Windows 프로그래밍에 필요한 보조 헤더 파일을 포함하고 있다. 그래서 Windows 프로그램의 첫 줄은 항상 #include <Windows.h>로 시작된다. 일단 <Windows.h>를 포함하고 난 후에 함수 원형과 전역변수를 선언한다.  

### 시작점

다음으로 차이나는 점은 프로그램의 시작점인 엔트리 포인트(Entry Point)가 main이 아니라 WinMain이라는 점이다. Windows 프로그램의 시작점은 main이 아닌 WinMain이며 모든 Windows 프로그램은 WinMain에서부터 실행을 시작한다. 원형은 다음과 같다.

**int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpszCmdParam, int nCmdShow)**

WinMain의 원형은 위와 같이 고정되어 있다. APIENTRY 지정자는 Windows의 표준 호출 규약인 __stdcall을 사용한다는 뜻인데 일단은 없다고 생각해도 무방하다. 4개의 인수를 취하는데 각 인수의 의미는 다음과 같다.  
  
인수 | 의미
-----|-----
hInstance | 프로그램의 인스턴스 핸들이다.
hPrevInstance | 바로 앞에 실행된 현재 프로그램의 인스턴스 핸들이다. 없을 경우 NULL이 되며 Win32에서는 항상 NULL이다. 16비트와의 호환성을 위해서만 존재하는 인수이므로 신경쓰지 않아도 된다.
lpszCmdParam | 명령행으로 입력된 프로그램 인수이다. 보통 실행 직후에 열 파일의 경로가 전달된다.
nCmdShow | 프로그램이 실행될 형태이며 최소화, 보통 모양 등이 전달된다.

이 중 hInstance 이외에는 잘 사용되지 않는다. 인스턴스(Instance)라는 말은 실행중인 프로그램 하나를 칭하는 용어이다. Windows는 여러 개의 프로그램이 동시에 실행되는 멀티 태스킹 시스템일 뿐만 아니라 하나의 프로그램이 여러 번 실행될 수도 있다. 이때 실행되고 있는 각각의 프로그램을 프로그램 인스턴스라고 하며 간단히 줄여서 인스턴스라고 한다. 예를 들어 메모장이 두 번 실행되어 있다고 해 보자.  
  
이 때 두 프로그램은 모두 메모장(Notepad.exe)이지만 운영체제는 각각 다른 메모리를 사용하는 다른 프로그램으로 인식한다. 각 메모장은 서로 다른 인스턴스 핸들을 가지며 운영체제는 이 인스턴스 핸들값으로 두 개의 메모장을 서로 구별한다. hInstance란 프로그램 자체를 일컫는 정수값이며 프로그램 내부에서 자기 자신을 가리키는 1인칭 대명사이다.  
  
많은 API 함수들이 hInstance값을 인수로 요구하는데 그래서 이 예제에서는 WinMain의 인수로 전달된 hInstance값을 전역변수 g_hInst에 대입해 두었다.  

    HINSTANCE g_hInst;

    int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpszCmdParam, int nCmdShow)
    {
        g_hInst = hInstance;
    }

hInstance 인수는 기억 부류가 지역변수이기 때문에 WinMain 밖에서는 사용할 수 없기 때문이다. 이 예제에서는 g_hInst 값을 당장 사용하지 않지만 앞으로의 예제에서는 이 값을 수시로 사용하게 될 것이다. g_hInst외에 lpszClass라는 전역 문자열이 정의되어 있는데 이 문자열은 윈도우 클래스를 정의하는데 사용되며 윈도우의 타이틀 바에 표시도기도 한다. 예제에서는 다음 두 변수를 전역으로 선언해 사용하고 있다.  
  
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("First");

프로그램의 시작점이 WinMain이므로 main이라는 이름의 일반 함수를 만들어 사용하는 것도 조금 엽기적이기는 하지만 가능은 하다. 그러나 여러 가지 면에서 볼 때 바람직하지는 않다.

## 메시지 처리 함수

이 프로그램은 두 개의 함수만 정의하고 있다. 하나는 프로그램의 시작점인 WinMain이며 나머지 하나는 WinProc이다. WinProc은 사용자와 시스템이 보내오는 메시지를 처리하는 아주 중요한 일을 한다. Windows에서는 아주 특별한 경우를 제외하고는 이 두 개의 함수가 모두 있어야 한다.  
  
WinMain은 메인 윈도우를 만들고 화면에 윈도우를 표시하기만 할 뿐이며 대부분의 일은 WinProc에서 이루어진다. WinMain은 프로그램을 초기화하고 시작시키기만 하므로 모양이 대체로 일정한데 비해 WinProc은 프로그램의 실질적이고도 고유한 처리를 하는 곳이므로 프로그램에 따라 천차만별로 달라진다. 그래서 소스를 분석할 때 주의깊게 봐야 할 부분은 WinMain이 아니라 WinProc이다. WinMain 바로 윗부분에 WinProc 원형이 선언되어 있다.  
  
    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

함수 원형에 CALLBACK이라는 메크로가 사용되었는데 이 매크로도 APIENTRY와 마찬가지로 __stdcall로 정의되어 있다. 이 외에 WINAPI라는 매크로도 사용되는데 역시 __stdcall이다. 이런 매크로들은 그 자체로 어떤 의미를 가진다기보다는 호환성과 이식성을 위해 존재하는 것들이므로 당분간은 크게 신경쓰지 않아도 상관없다. Win32에서는 __stdcall을 표준 호출 규약으로 사용하는데 그렇지 않은 시스템으로의 이식을 고려하여 중간 메크로를 두는 것 뿐이다.

## 윈도우 클래스

WinMain 함수에서 가장 중요한 일은 메인 윈도우를 만드는 일이다. 윈도우가 있어야 사용자로부터 입력을 받을 수 있고 작업한 결과를 출력할 수도 있기 때문이다. 윈도우를 만들려면 윈도우 클래스를 먼저 등록한 후 CreateWindow 함수를 호출해야 한다. 윈도우 클래스는 만들어질 윈도우의 여러 가지 특성을 정의하는 구조체이며 모든 윈도우는 윈도우 클래스의 정보를 기반으로 하여 만들어진다. 윈도우 클래스는 <Windows.h>에 다음과 같이 정의되어 있는 구조체이다.  
  
    typedef struct tagWNDCLASS
    {
        UNIT style;
        WNDPROC lpfnWndProc;
	    int cbClsExtra;
	    int cbWndExtra;
	    HINSTANCE hInstance;
	    HICON hIcon;
	    HCURSOR hCursor;
	    HBRUSH hbrBackground;
	    LPCSTR lpszMenuName;
	    LPCSTR lpszClassName;
    } WNDCLASS;

10개나 되는 멤버를 가지고 있는데 WNDCLASS 구조체의 각 멤버 의미는 다음과 같다. 현재 단계에서 이 내용을 일부러 암기할 필요까지는 없지만 대충 어떤 역할을 하는 멤버인지 읽어 두자.

## style

윈도우의 스타일을 정의한다. 즉 윈도우가 어떤 형태를 가질 것인가를 지정하는 멤버이다. 이 멤버가 가질 수 있는 값은 무척 많지만 가장 많이 사용하는 값이 CS_HREDRAW와 CS_VREDRAW이다. 이 두 값을 OR 연산자( | )로 연결하여 사용한다. 이 스타일은 윈도우의 수직(또는 수평) 크기가 변할 경우 윈도우를 다시 그린다는 뜻이다. 이밖에도 많은 값이 올 수 있다.

## lpfnWndProc

이 멤버는 윈도우의 메시지 처리 함수를 지정한다. 메시지가 발생할 때마다 이 멤버가 지정하는 함수가 호출되며 이 함수가 모든 메시지를 처리한다. 메시지 처리 함수의 이름은 물론 마음대로 정할 수 있지만 거의 WndProc으로 정해져 있는 편이다.  
  
WinMain 함수는 프로그램의 시작점이므로 DOS에서 시작점이 반드시 main이어야 하는 것과 마찬가지로 이름이 고정되어 있다. 하지만 메시지 처리 함수인 WndProc은 사용자가 임의로 이름을 정할 수 있는 함수이다. 그러나 관습에 의해 이 함수의 이름은 WndProc로 고정되어 있으므로 이 이름을 그대로 사용하는 것이 좋다. 가끔 WinProc이나 WindowProc 따위로 이름을 붙이는 경우도 있지만 관습이란 오랜 세월동안 많은 똑똑한 사람들에 의해 가장 말썽 없는 형태로 굳어진 것이므로 어겨봐야 득보다 실이 더 많다.

## cbClsExtra, cbWndExtra

일종의 예약 영역이다. Windows가 내부적으로 사용하며 아주 특수한 목적에 사용되는 여분의 공간이다. 예약 영역을 사용하지 않을 경우는 0으로 지정한다.

## hInstance

이 윈도우 클래스를 등록하는 프로그램의 번호이며 WinMain의 인수로 전달된 hInstance값을 그대로 대입하면 된다. 운영체제는 이 윈도우 클래스를 누가 등록했는지 기억해 두었다가 프로그램이 종료될 때 등록을 취소한다.

## hIcon, hCursor

이 윈도우가 사용할 마우스 커서와 아이콘을 지정한다. LoadCursor 함수와 LoadIcon 함수를 사용하여 커서, 아이콘을 읽어와 이 멤버에 대입하면 된다. 사용자가 직접 아이콘과 커서를 만들어 사용할 수도 있지만 여기서는 Windows가 디폴트로 제공하는 아이콘과 커서를 사용하고 있다.

## hbrBackground

윈도우의 배경 색상을 지정한다. 좀 더 정확하게 표현하면 윈도우의 배경 색상을 채색할 브러시를 지정하는 멤버이다. GetStockObject라는 함수를 사용하여 Windows에서 기본적으로 제공하는 브러시를 지정하거나 아니면 COLOR_WINDOW같은 시스템 색상을 지정할 수도 있다. 지정할 수 있는 브러시에는 여러 가지 종류가 있지만 이 예제에서는 가장 일반적인 흰색 브러시(WHITE_BRUSH)를 사용하였으며 윈도우의 배경이 흰색으로 칠해진다.

## lpszMenuName

이 프로그램이 사용할 메뉴를 지정한다. 메뉴는 프로그램 코드에서 실행중에 만드는 것이 아니라 리소스 에디터에 의해 별도로 만들어져 링크시에 같이 합쳐진다. 메뉴를 사용하지 않을 경우 이 멤버에 NULL을 대입한다.

## lpszClassName

윈도우 클래스의 이름을 문자열로 정의한다. 여기서 지정한 이름은 CreateWindow 함수에 전달되며 CreateWindow 함수는 윈도우 클래스에서 정의한 특성값을 참조하여 윈도우를 만든다. 어디까지나 이름일 뿐이므로 변수명이나 함수명을 만들듯이 마음대로 작성할 수 있다. 중간에 공백을 포함하거나 심지어 한글을 쓰는 것도 가능하다. 그러나 윈도우 클래스의 이름은 실행 파일의 이름과 일치시켜 작성하는 것이 보통이다.  
  
멤버의 수가 너무 많아 한 번에 다 익히기 힘들겠지만 이 중에 제일 중요한 멤버는 윈도우 클래스의 이름을 정의하는 lpszClassName과 메시지 처리 함수를 지정하는 lpfnWndProc이다. 나머지는 대부분 디폴트나 0, NULL같은 값들을 주면 무난하다. 윈도우 클래스를 구조체를 정의한 후 RegisterClass 함수를 호출하여 윈도우 클래스를 등록한다.  
  
    ATOM RegisterClass(CONST WNDCLASS* lpWndClass);

RegisterClass 함수의 인수로 WNDCLASS 구조체의 번지를 전달한다. 이런 이런 특성을 가진 윈도우를 앞으로 사용하겠다는 등록 과정이며 운영체제는 이 윈도우 클래스의 특성을 잘 기억해 놓는다. WinMain의 앞부분을 보면 WNDCLASS 구조체의 각 멤버에 값을 대입하고자 윈도우 클래스를 등록하는 코드가 있다. 단순한 대입문의 연속인데 어떤 값들이 대입되었는지 잘 살펴보자.  
  
    WNDCLASS WndClass;

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

가장 일반적인 윈도우를 만들 수 있는 무난한 값들을 대입했다. 여분 메모리는 쓰지 않고 흰색 배경 커서와 아이콘은 운영체제가 제공하는 것을 사용했으며 메뉴는 사용하지 않는다. 이 윈도우 클래스를 등록한 프로그램은 hInstance이며 전달되는 메시지는 WndProc 함수가 처리하도록 했다. WndClass는 멤버가 좀 많은 구조체일 뿐이다. 그래서 다음과 같이 선언과 동시에 초기화하는 것도 가능하다.  
  
    WNDCLASS WndClass = { CS_HREDRAW | CS_VERDRAW, WndProc, 0, 0, hInstance, LoadIcon(NULL, IDI_APPLICATION),
    LoadCursor(NULL, IDC_ARROW), (HBRUSH)GetStockObject(WHITE_BRUSH), NULL, lpszClass };

이렇게 선언하면 코드의 줄 수가 짧아지긴 하지만 구조체의 각 멤버들을 개별적으로 변경하는 경우가 많기 때문에 선언과 동시에 초기화하는 경우는 별로 없다. 아무튼 WNDCLASS는 단순한 구조체 이상이 아니므로 신기하게 생각할 필요도 없고 C 문법 수준에서 쉽게 이해되는 것이므로 어려운 것도 아니다. 다만, 각 멤버가 가질 수 있는 값의 종류와 상세한 효과들이 조금 복잡할 뿐이다.

## 윈도우 생성

윈도우 클래스를 등록한 후에는 이 윈도우 클래스를 기본으로 실제 윈도우를 생성한다. 윈도우를 생성할 때는 CreateWindow 함수를 사용한다.  
  
    HWND CreateWindow(lpszClassName, lpszWindowName, dwStyle, x, y, nWidth, nHeight, hwndParent, hmenu, lpvParam)

윈도우라는 것이 그다지 간단한 물건이 아니다 보니 보다시피 인수가 무척 많은 편이다. Windows API 함수들은 대체로 인수가 많다. 각 인수의 의미를 알아보자.

## lpszClassName

생성하고자 하는 윈도우의 클래스를 지정하는 문자열이다. CreateWindow 함수는 윈도우 클래스에 정의된 속성대로 윈도우를 생성한다. 앞에서 등록한 WNDCLASS 구조체의 lpszClassName 멤버의 이름을 여기에 기입한다.

## lpszWindowName

윈도우의 타이틀 바에 나타날 문자열이다. 여기서 지정한 문자열이 윈도우의 타이틀 바에 나타난다. 프로그래머가 마음대로 지정할 수 있다.

## dwStyle

만들고자 하는 윈도우의 형태를 지정하는 인수이다. 일종의 비트 필드값이며 거의 수십 개를 헤아리는 매크로 상수들이 정의되어 있고 이 상수들을 OR연산자로 연결하여 윈도우의 다양한 형태를 지정한다. 크기 조절이 가능하도록 할 것인가, 타이틀 바를 가질 것인가, 또는 스크롤 바의 유무 등등을 세세하게 지정할 수 있다. 가능한 스타일값에 관한 자세한 내용은 앞으로 천천히 알아볼 것이되 일단은 WS_OVERLAPPEDWINDOW스타일을 사용하면 가장 무난한 윈도우가 된다. 즉 시스템 메뉴, 최대 최소 버튼, 타이틀 바, 경계선을 가진 윈도우를 만드는데 메모장과 비슷한 표준 윈도우라고 생각하면 된다.

## X, Y, nWidth, nHeight

인수의 이름이 의미하듯이 윈도우의 크기와 위치를 지정하며 픽셀 단위를 사용한다. 이 값을 100, 100, 640, 480으로 주면 화면의 (100, 100) 위치에 폭 640픽셀, 높이 480픽셀 크기로 윈도우가 만들어질 것이다. 정수값을 바로 지정해도 되며 CW_USEDEFAULT를 사용하면 운영체제가 화면 크기에 맞게 적당한 크기와 위치를 알아서 설정한다.

## hWndParent

부모 윈도우가 있을 경우 부모 윈도우의 핸들을 지정한다. MDI 프로그램이나 팝업 윈도우는 윈도우끼리 수직적인 상하관계를 가져 부자(parent-child) 관계가 성립되는데 이 관계를 지정하는 인수이다. 부모 윈도우가 없을 경우, 즉 자신이 최상위 윈도우일 경우는 이 값을 NULL로 지정하는데 이렇게 하면 데스크 탑을 부모로 가져 바탕 화면 어디나 돌아다닐 수 있는 윈도우가 된다.

## hmenu

윈도우에서 사용할 메뉴의 핸들을 지정한다. 윈도우 클래스에도 메뉴를 지정하는 멤버가 있는데 윈도우 클래스의 메뉴는 그 윈도우 클래스를 기반으로 하는 모든 윈도우에서 공통적으로 사용되는 반면 이 인수로 지정된 메뉴는 현재 CreateWindow 함수로 만들어진 윈도우에서만 사용된다. 윈도우 클래스에서 지정한 메뉴를 그대로 사용하려면 이 인수를 NULL로 지정하며 다른 메뉴를 사용하려면 이 인수에 원하는 메뉴 핸들을 지정한다.

## hinst

윈도우를 만드는 주체, 즉 프로그램의 핸들을 지정한다. WinMain의 인수로 전달된 hInstance를 대입하면 된다. 운영체제는 누가 윈도우를 만들었는지 기억해 두었다가 프로그램이 종료될 때 파괴되지 않은 윈도우를 자동으로 파괴한다.

## lpvParam

CREATESTRUCT라는 구조체의 번지이며 여러 개의 윈도우를 만들 때 각 윈도우에 고유의 파라미터를 전달하는 특수한 목적에 사용된다. 보통은 NULL 값을 사용하며 잘 사용되지 않으므로 일단은 무시하자.  
  
지금 당장 CreateWindow의 모든 인수에 대해 다 외우려고 할 필요까지는 없고 예제에서 어떤 값이 사용되었는가와 그 의미가 무엇인가만 대충 보고 가자. 여기서 잠깐 잔소리를 하자면 API 공부를 할 때는 무시할 건 과감하게 무시하고 지나가는 요령이 필요하다. CreateWindow 함수는 API를 처음 배우는 사람에게 무척 중요하기는 하지만 그렇다고 처음부터 11개나 되는 인수들의 정확한 의미까지 속속들이 이해할 필요는 없다. 기회가 될 때마다 다시 체계적으로 복습하게 될 것이다.  
  
x, y, lpszWindowName 등 쉽게 이해되는 인수들만 대충 봐두면 되지 lpvParam같은 전문적이고 어려운 인수의 의미나 dwStyle인수의 모든 스타일값에 대해 반드시 알아야 하는 것은 아니다. 물론 완벽하게 이해한다고 해서 나쁠 것은 없겠지만 처음부터 그렇게 하다가는 제풀에 지쳐 금세 흥미를 잃고 만다. 흥미를 위해 공부하는 것은 아니지만 생소한 것을 배울 때 흥미는 무시할 수 없는 요건이므로 초반에 너무 많은 체력을 낭비하지 말도록 하자. 중요한 것은 이론적으로 의미가 있는 큰 줄기를 먼저 파악하는데 정성을 쏟으라는 것이다.  
  
CreateWindow 함수는 윈도우에 관한 모든 정보를 메모리에 만든 후 윈도우를 대표하는 번호인 윈도우 핸들을 리턴한다. 넘겨지는 윈동 핸들은 hWnd라는 변수에 저장되었다가 이 윈도우를 참조하는 모든 함수의 인수로 사용된다. CreateWindow 함수로 만든 윈도우는 메모리상에만 있을 뿐이며 아직까지 화면에 출력되지 않았다. 메모리에 만들어진 윈도우를 화면으로 보이게 하려면 다음 함수를 사용해야 한다.  
  
    BOOL ShowWindow(hWnd, nCmdShow);

hWnd 인수는 화면으로 출력하고자 하는 윈두우의 핸들이며 CreateWindow 함수가 리턴한 핸들을 그대로 넘기면 된다. nCmdShow는 윈도우를 화면에 출력하는 방법을 지정하며 다음과 같은 매크로 상수들이 정의되어 있다.  
  
매크로 상수 | 의미
------------|-----
SW_HIDE | 윈도우를 숨긴다.
SW_MINIMIZE | 윈도우를 최소화하고 활성화시키지 않는다.
SW_RESTORE | 윈도우를 활성화시킨다.
SW_SHOW | 윈도우를 활성화하여 보여준다.
SW_SHOWNORMAL | 윈도우를 활성화하여 보여준다.

nCmdShow 인수에 어떤 값을 넘겨줄 것인가는 전혀 고민할 필요가 없으며 WinMain 함수의 인수로 전달된 nCmdShow를 그대로 전달하면 된다. 이 값은 프로그램을 실행시킨 쉘로부터 전달된 것이며 이는 곧 사용자가 프로그램 등록 정보 대화상자에서 지정한 값이다. 그래서 ShowWindow(hWnd, nCmdShow);와 같이 거의 호출 형식이 정해져 있는 셈이다. 설명이 좀 길어지긴 했지만 윈도우를 만들고 화면에 나타내는 코드는 다음 두 줄이다.  
  
    hWnd = CreateWindow(lpszClass, lpszClass, WS_OVERLAPPEDWINDOW,
	CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, NULL, (HMENU)NULL, hInstance, NULL);
    ShowWindow(hWnd, nCmdShow);

여기까지 실행되면 화면에 윈도우가 출력된다. 이후부터는 메시지 루프가 시작되며 프로그램이 사용자와 Windows, 그리고 다른 프로그램과 정보를 상호 교환하며 실행된다.  
  
이 과정은 거의 정형화되어 있으며 WinMain에서 반드시 해야 할 과정들이다. 그래서 WinMain의 모양은 대부분의 프로그램에서 거의 유사하다.