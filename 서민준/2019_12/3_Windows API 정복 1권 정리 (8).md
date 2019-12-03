# Windows API 정복 1권(김상형 저) 정리 8편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 윈도우의 타이틀 바꾸기

예제를 실행시키면 타이틀 바에 First라는 문자열이 나타나는데 이 값은 우리가 CreateWindow 함수의 두 번째 인수로 지정한 lpszClass 문자열이며 이는 또한 윈도우 클래스의 이름이기도 하다.  
타이틀 바에 나타나는 윈도우의 이름을 변경하려면 CreateWindow 함수의 두 번째 인수를 원하는 문자열로 변경하면 된다.  
  
    hwnd = CreateWindow(lpszClass, TEXT("My First Program"), WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, NULL, (HMENU)NULL, hInstance, NULL);

문자열 상수를 쓸 때는 항상 TEXT() 매크로로 둘러싸야 유니코드로 쉽게 이식할 수 있다.  
위 형태로 변경하면 타이틀 바에 My First Program이라는 문자열이 나타날 것이다.  
단순한 문자열일 뿐이므로 한글, 한자, 기호 등도 사용할 수 있다.  
  
실행중에 타이틀 바의 문자열을 변경하고 싶다면 wsprintf 등의 서식 조립 함수로 조리바여 사용하면 된다.  
  
윈도우의 위치와 크기를 지정하는 값은 CreateWindow의 4번째 ~ 7번째 인수까지이다.  
예제에서는 모두 CW_USEDEFAULT를 사용하여 Windows가 정해주는대로 크기와 위치를 사용했다.  
이 값을 다음과 같이 상수로 변경하면 크기와 위치를 원하는대로 지정할 수 있다.  
  
    hWnd = CreateWindow(lpszClass, lpszClass, WS_OVERLAPPEDWINDOW, 100, 100, 300, 200, NULL, (HMENU)NULL, hInstance, NULL);

이렇게 하면 (100, 100)의 위치에 윈도우가 나타나며 폭은 300, 높이는 200이 될 것이다.  
위치만 정하고 폭과 높이는 운영체제가 정하도록 하려면 지정하고 싶은 인수에만 원하는 값을 쓰고 나머지는 CW_USEDEFAULT를 사용한다.  
  
다음 코드는 위치만 (300, 400)으로 지정하고 폭과 높이는 운영체제가 알아서 결정하도록 한다.  
  
    hWnd = CreateWindow(lpszClass, lpszClass, WS_OVERLAPPEDWINDOW, 300, 400, CW_USEDEFAULT, CW_USEDEFAULT, NULL, (HMENU)NULL, NULL);

꼭 특정 위치에 정해진 크기대로 윈도우를 만들어야 한다면 이 인수들을 사용하여 윈도우를 만들 때 크기와 위치를 고정시킬 수 있되 그렇게 하는 경우는 극히 드물다.  
왜냐하면 윈도우는 사용자가 언제든지 타이틀 바를 드래그하여 이동시킬 수 있으므로 운영체제가 화면 해상도에 맞게 적당한 위치에 표시하는 것이 더 자연스럽기 때문이다.