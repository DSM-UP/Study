# Windows API 정복 1권(김상형 저) 정리

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 메시지 박스

메시지 박스는 조그만 별도의 윈도우를 열어서 사용자에게 정보를 전달하거나 질문을 하는 장치이며 MessageBox 함수 호출 한 번으로 비교적 간단하게 만들 수 있다.  
  
    int MessageBox(HWND hWnd, LPCTSTR lpText, LPCTSTR lpCaption, UINT uType);

hWnd :  메시지 박스의 오너(Owner) 윈도우  
오너 윈도우 :  메시지 박스를 소유한 윈도우를 말하는데 메시지 박스는 화면의 중앙에 나타나며 메시지 박스가 떠 있는 동안 오너 윈도우는 사용할 수 없는 상태가 된다.  
사용자가 메시지 내용을 완전히 읽고 메시지 박스를 닫아야만 오너 윈도우를 사용할 수 있다.  
 
lpText : 메시지 박스에 출력할 문자열  
lpCaption : 메시지 박스의 타이틀 바에 나타날 제목 문자열  
uType : 메시지 박스에 어떤 종류의 버튼이 나타날 것인가를 지정하는 여러 가지 플래그들이며 다음과 같은 값들이 가능하다.  
  
값 | 설명
---|-----
MB_ABORTRETRYIGNORE | Abort, Retry, Ignore 세 개의 버튼이 나타난다.
MB_OK | OK 버튼 하나만 나타난다.
MB_OKCANCEL | OK, Cancel 두 개의 버튼이 나타난다.
MB_RETRYCANCEL | Retry, Cancel 두 개의 버튼이 나타난다.
MB_YESNO | Yes, No 두 개의 버튼이 나타난다.
MB_YESNOCANCEL | Yes, No, Cancel 세 개의 버튼이 나타난다.

단순히 어떤 사실을 알리는 메시지라면 MB_OK만 있으면 되고 긍정 / 부정에 대한 질문이라면 예 / 아니오 버튼을 표시하도록 한다.  
  
버튼의 종류를 지정하는 이런 값 외에 아이콘을 출력하는 다음과 같은 플래그도 사용할 수 있다.  
버튼 종류 플래그와 아이콘 플래그를 OR 연산자로 연결하여 uType 인수에 지정한다.  
  
값 | 아이콘
MB_ICONEXCLAMATION, MB_ICONWARNING | !
MB_ICONINFORMATION, MB_ICONASTERISK | i
MB_ICONQUESTION | ?
MB_ICONSTOP, MB_ICONERROR, MB_ICONHAND | X

예를 들어 OK, Cancel(한글 Windows에서는 확인, 취소) 두 개의 버튼을 나타내게 하고 에러 아이콘을 나타내고 싶다면 uType 인수는 MB_OKCANCEL | MB_ICONERROR로 지정한다.  
마우스의 왼쪽 버튼이 눌러지면 메시지 박스를 보여주도록 해 보자.  
  
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <Windows.h>

    LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
    HINSTANCE g_hInst;
    LPCTSTR lpszClass = TEXT("MessageBox");

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
    	case WM_LBUTTONDOWN:
	    	MessageBox(hWnd, TEXT("마우스 왼쪽 버튼을 눌렀습니다."), TEXT("메시지 박스"), MB_OK);
    		return 0;
    	case WM_DESTROY:
	    	PostQuitMessage(0);
	    	return 0;
    	}

    	return (DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

간단한 전달 내용을 문자열로 출력하며 OK버튼 하나만 표시하여 메시지 박스를 담을 수 있도록 하였다.  
  
전달사항을 단순히 전달하는 용도 외에 사용자에게 질문을 하고 대답을 입력받는 용도로도 사용할 수 있다.  
이 때는 메시지 박스를 호출한 후 사용자가 어떤 버튼을 눌렀는지를 살펴보면 되는데 MessageBox 함수는 리턴값으로 사용자가 누른 버튼값을 돌려준다.  
  
값 | 설명
---|-----
IDABORT | Abort 버튼을 눌렀다.
IDCANCEL | Cancel 버튼을 눌렀다.
IDIGNORE | Ignore 버튼을 눌렀다.
IDNO | No 버튼을 눌렀다.
IDOK | Ok 버튼을 눌렀다.
IDRETRY | Retry 버튼을 눌렀다.
IDYES | Yes 버튼을 눌렀다.

만약 사용자에게 게임을 계속할 것인가를 묻고 싶다면 다음과 같이 코드를 작성한다.  
  
    if (MessageBox(hWnd, TEXT("게임을 계속 하시겠습니까?"), TEXT("질문"), MB_YESNO) == IDYES)
    {
       // 게임 계속 처리
    }
    else
    {
        // 게임 중지
    }

MessageBox 함수를 호출하여 질문을 먼저 하되 메시지 박스에는 Yes, No 두 개의 버튼만을 배치한다.  
그리고 그 리턴값을 살펴보고 IDYES가 리턴되었으면, 즉 사용자가 Yes 버튼을 눌렀으면 게임을 계속하고 그렇지 않으면 게임을 중지하는 것이다.  
  
메시지 박스는 사용 방법이 쉽고 결과를 금방 확인할 수 있기 때문에 초보자의 실습용으로 많이 사용되며 디버깅용으로도 자주 활용되고 있다.  
특정 시점에 변수값을 확인해 보고 싶다면 메시지 박스로 변수값을 출력해 보면 된다.