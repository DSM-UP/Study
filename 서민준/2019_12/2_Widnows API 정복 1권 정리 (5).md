# Windows API 정복 1권(김상형 저) 정리 5편

**저작권 문제시 바로 연락주시면 처리하도록 하겠습니다. 도서를 읽고 정리한 것이니 양해 부탁드립니다.**

## 윈도우 프로시저

메시지 처리 함수 : 메시지가 발생할 때 프로그램의 반응을 처리하는 일을 한다.  
WinProc이라는 이름으로 존재한다.  
윈도우 프로시저(Window Procedure)라는 뜻이다.  
  
WndProc는 WinMain에서 호출하는 것이 아니라 운영체제에 의해 호출된다.  
WinMain내의 메시지 루프는 메시지를 메시지 처리 함수로 보내기만 할 뿐이며 WndProc은 메시지가 입력되면 운영체제에 의해 호출되어 메시지를 처리한다.  
  
콜백(CallBack) 함수 : 운영체제에 의해 호출되는 응용 프로그램 내의 함수  
  
WndProc의 인수는 모두 4개이며 MSG 구조체의 앞쪽 멤버 4개와 동일하다.  
hWnd는 메시지를 받을 윈도우의 핸들  
  
iMessage는 어떤 종류의 메시지인가, 즉 어떤 변화가 발생했는가에 관한 정보  
  
if (iMessage == WM_LBUTTONDOWN) // 마우스 버튼이 눌러졌다면  
화면의 어디쯤에서 마우스 버튼이 눌러졌는지, 즉 키보드로부터 문자가 입력되었다는 메시지가 입력되었다면 어떤 문자가 입력되었는가에 관한 추가적인 정보가 필요  

저런 추가 정보들이 wParam, lParam으로 전달됨. wParma, lParam은 그래서 메시지별로 전달되는 값이 다르다.  
  
메시지를 처리하는 WndProc의 구조는 대체로 다음의 형태를 가진다. 다양한 종류의 메시지가 전달될 수 있는데 전달된 메시지의 종류에 따라 다중 분기하여 운영체제로부터 전달된 신호에 반응하는 형식이다.  
  
    switch (iMessage)
    {
    case Msg1:
        처리1;
        return 0;
    case Msg2:
        처리2;
        return 0;
    case Msg3:
        처리3;
        return 0;
    default:
        return DefWindowProc(...);
    }

case문은 프로그램이 처리할 메시지의 수만큼 반복될 것이다.  
WndProc은 메시지를 무사히 처리했으면 0을 리턴하도록 약속되어 있다.  
  
DefWindowProc 함수는 WndProc에서 처리하지 않은 나머지 메시지에 관한 처리를 한다.  
[ EX ]  
시스템 메뉴를 더블클릭하면 프로그램이 종료 -> 이런 처리는 별도로 하지 않아도 DefWindowProc 함수에서 알아서 한다.  
그래서 윈도우의 이동이나 크기 변경 따위의 처리는 프로글매이 직접 할 필요없이 DefWindowProc으로 넘기기만 하면 된다.  
  
우리의 첫 예제의 메시지 처리 함수는 다음과 같이 정의되어 있다.  
  
    LRESULT CALLBACK WndProc(HWND hWnd, UINT iMessage, WPARAM wParam, LPARAM lParam)
    {
        switch (iMessage)
        {
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        }

        return (DefWindowProc(hWnd, iMessage, wParam, lParam));
    }

위 메시지 처리 함수는 WM_DESTROY 메시지만을 처리하고 있으며 나머지 메시지에 대해서는 DefWindowProc에 맡긴다.  
WM_DESTROY : 프로그램을 끝내려고 할 때 발생하는 메시지  
(시스템 메뉴 더블클릭, Alt + F4를 눌렀을 때 등에 발생한다.)  
  
WndProc에서 이 메시지가 발생하면 메시지 루프의 PostQuitMessage 함수를 호출하여 WM_QUIT 메시지를 보낸다.  
WM_QUIT 메시지가 입력되면 메시지 루프의 GetMessage 함수 리턴값이 FALSE가 되어 while루프를 빠져나오며 WinMain이 종료된다.  
  
WM_DESTORY 이외의 메시지는 모두 DefWindowProc 함수로 전달되며 이 함수에서 디폴트 처리를 수행한다.  
그래서 별다른 코드를 작성하지 않아도 타이틀 바를 드래그하면 윈도우가 이동하며 경계선을 드래그하면 크기가 조정되고 최소, 최대, 종료 버튼이 동작하는 것이다.  
  
WndProc은 메시지를 처리했을 경우 반드시 0을 리턴해야 한다.  
또한 DefWindowProc 함수가 메시지를 처리했을 경우 이 함수가 리턴한 값을 WndProc 함수가 다시 리턴해야 한다.