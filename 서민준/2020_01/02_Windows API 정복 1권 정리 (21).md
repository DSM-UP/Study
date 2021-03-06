# Windows API 정복 1권(김상형 저) 정리 21편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 더블클릭

마우스 버튼 누르기, 놓기, 이동하기 외에 중요한 마우스 동작으로 더블클릭(Double Click)이 있다.  
더블클릭이란 짧은 시간 안에 마우스 버튼을 두 번 빠르게 누르는 동작인데 프로그램 실행, 확정적인 선택 등에 많이 사용된다.  
  
앞에서 만든 예제를 조금 더 확장하여 왼쪽 버튼을 더블클릭하면 화면을 지워 보자.  
왼쪽 마우스 더블클릭 메시지인 WM_LBUTTONDBLCLK 메시지에 화면을 지우는 코드를 작성하면 될 것이다.  
  
    case WM_LBUTTONDBLCLK:
        InvalidateRect(hWnd, NULL, TRUE);
        return 0;

화면을 지우는 것은 아주 간단하다.  
InvalidateRect 함수를 호출하여 작업영역 전체를 무효화해 버리면 된다.  
예제의 경우 WM_PAINT 메시지를 처리하지 않으므로 무효영역이 생기면 DefWindowProc이 WM_PAINT 메시지를 처리하며 이 함수는 배경색으로 윈도우를 지운다.  
그래서 단순히 InvalidateRect 함수만 호출하면 화면이 지워지는 것이다.  
  
그럼 과연 이 코드를 추가하면 화면이 지워질까?  
직접 프로그램을 실행하여 왼쪽 버튼을 더블클릭해보면 화면이 전혀 지워지지 않을 것이다.  
왜냐하면 우리가 만든 이 윈도우는 더블클릭에 대한 메시지를 지원하지 않기 때문이다.  
  
마우스 왼쪽 버튼을 두 번 누르면 WM_LBUTTONDOWN 메시지와 WM_LBUTTONUP 메시지가 교대로 두 번 발생할 뿐이며 아무리 마우스 버튼을 잽싸게 눌러도 더블클릭 메시지는 발생하지 않는다.  
더블클릭 메시지를 받고자 하면 윈도우 클래스의 스타일에 "이 윈도우는 더블클릭 메시지를 원한다"는 의사 표시를 해야 한다.  
  
    WndClass.style = CS_HREDRAW | CS_VREDRAW | CS_DBLCLKS;

WndClass.style 멤버에 **CS_DBLCLKS** 플래그를 추가하면 이 윈도우는 더블클릭 메시지를 지원하게 된다.  
이제 실행해 보면 더블클릭 메시지가 제대로 발생할 것이며 화면도 잘 지워진다.  
윈도우 스타일에 이 플래그를 추가하고 마우스 버튼을 두 번 누르면 두 번째 WM_LBUTTONDOWN 메시지가 WM_LBUTTONDBLCLK 메시지로 변경되어 전달된다.  
  
보편적으로 많이 사용되는 **더블클릭 메시지를 디폴트로 지원하지 않고 꼭 CS_DBLCLKS 플래그를 지정하도록 되어 있는 이유**는 **더블클릭을 검출하는데도 그만큼 실행시간의 감소가 요구**되며 **어떤 프로그램은 더블클릭보다 WM_LBUTTONDOWN을 두 번 받기를 원할 수도 있기 때문**이다.  
  
더블클릭이란 마우스 버튼을 두번 누르기만 한다고 해서 인정되는 것이 아니라 일정한 영역안을 정해진 사간안에 연속적으로 눌러야 인정된다.  
더블클릭으로 인정할 시간 간격이나 마우스 포인터의 위치 따위의 규칙을 프로그램에서 자체적으로 만들어 쓰고 싶다면 이 플래그를 주지 말고 직접 처리해야 한다.  
트리플 클릭이나 더 많은 수의 클릭을 검출하고 싶을 때도 마우스 메시지를 직접 다룰 필요가 있는데 운영체제가 더블클릭을 처리해 버리면 트리플 클릭을 검출하기 어려워진다.  
워드만 해도 트리플 클릭이 문단 선택의 의미를 가지며 페이지 메이커라는 프로그램은 최대 다섯 번까지의 연속 클릭을 정의하기도 한다.  
그래서 꼭 필요한 경우에 한해서 더블클릭을 지원하도록 되어 있다.  
  
WM_LBUTTONDOWN과 그 일당들은 모두 작업영역 내에서 발생하는 마우스 메시지들이다.  
프로그래밍 대상이 작업영역에 국한되므로 이 메시지들만 처리하면 마우스 입력은 모두 받을 수 있다.  
  
이런 작업영역 마우스 메시지외에 비작업영역에서 발생하는 마우스 메시지도 있다.  
여기서 비작업영역이란 타이틀 바, 경계선 메뉴, 스크롤 바 따위를 의미한다.  
이런 메시지들은 모두 작업영역 메시지의 이름에 NC(Non Client)가 덧붙여진다.  
예를 들어 비작업영역에서 마우스 왼쪽 버튼을 누르면 WM_NCLBUTTONDOWN 메시지가 발생한다.  
  
비작업영역 메시지는 시스템이 내부적인 용도로 사용한다.  
예를 들어 경계선 위에서 커서가 움직이면 커서 모양이 크기 조절이 가능하다는 뜻의 양쪽 화살표 모양(↕ 또는 ↔)으로 바뀐다.  
이런 메시지의 처리는 DefWindowProc에서 도맡아 하므로 프로그램이 직접 처리할 필요는 없다.  
그러나 꼭 필요할 경우 굳이 이 메시지를 받겠다면 처리한 후 반드시 DefWindowProc으로 보내주어야 한다.  
그렇지 않으면 표준 마우스 인터페이스가 동작하지 않는다.  
  
프로그램을 좀 더 멋있게 디자인하고 싶으면 비작업영역을 직접 그릴 수도 있는데 이럴 때는 비작업영역에서 마우스 메시지도 직접 처리해야 할 것이다.  
표준적인 윈도우만 사용한다면 이 메시지를 사용할 일은 무척 드물다.  
  
---  
  
지금까지 몇 가지 메시지들을 공부해 보면서 각 메시지별로 wParam, lParam에 어떤 부가 정보가 전달되는지를 보았다.  
이 정보들은 메시지 별로 의미가 정해져 있고 전달해야 할 정보가 많은 메시지는 상위, 하위 워드에 나누어 보내기도 한다.  
어쨌든 둘 다 32비트값이므로 메시지가 전달할 수 있는 부가 정보는 총 64비트이다.  
  
그런데 16비트 Windows에서는 이와 달랐다.  
Win32에서는 둘 다 32비트이지만 Win16에서는 wParam은 16비트였고 lParam만 32비트였다.  
  
wParam의 w는 WORD라는 뜻이며 lParam의 l은 LONG이라는 뜻으로 인수의 길이를 나타내었다.  
지금은 둘 다 32비트이므로 w, l문자는 더 이상 길이가 아닌 단순한 이름일 뿐이다.