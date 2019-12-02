# Windows API 정복 1권(김상형 저) 정리 6편

**저작권 문제시 연락주시면 바로 처리하도록 하겠습니다. 학생으로서 독서를 읽은 뒤 정리하면서 학습하는 용도로만 사용하였습니다. 양해 부탁드립니다.**

## 배경색 바꾸기

우리가 만든 예제의 배경은 흰색이었다.  
왜 흰색이 되었는가 하면 WndClass의 멤버 중 배경 색상을 지정하는 hbrBackground가 흰색 브러시로 지정되어 있기 때문이다.  
  
    WndClass.hbrBackground = (HBRUSH)GetStockObject(WHITE_BRUSH);

GetStockObject 함수는 Windows가 기본적으로 제공하는 브러시, 펜 등의 핸들을 구하는 함수인데 이 함수의 인수로 WHITE_BRUSH를 지정했기 때문에 배경색을 칠하는 데 흰색 브러시가 사용되었다.  
이 값을 BLACK_BRUSH로 변경하면 검정색이 배경색으로 사용되며 LTGRAY_BRUSH로 변경하면 옅은 회색 배경이 만들어진다.  
  
그렇다고 해서 YELLOW_BRUSH나 RED_BRUSH 따위로 변경한다고 해도 노랑색이나 빨강색 배경이 나타나지는 않는다.  
Windows의 기본 브러시는 흰색, 검정색, 회색 뿐이며 원색 브러시는 제공하지 않는다.  
  
Windows가 제공하는 브러시 이외의 브러시를 사용하려면 별도의 방법을 사용해야 하는데 일단 구경이나 해보자.  
다음 코드는 파란색 배경을 가지는 윈도우를 만든다.  
  
    WndClass.hbrBackground = CreateSolidBrush(RGB(0, 0, 255));

다음 코드는 빨간색의 기울어진 바둑판 배경을 그린다.  
  
    WndClass.hbrBackground = CreateHatchBrush(HS_DIAGCROSS, RGB(255, 0, 0));

원하는 색상과 무늬의 브러시를 만들어 배경 브러시로 지정하기만 하면 된다.  
원칙대로 하자면 파괴도 해야 하는데 실습중이라 파괴는 생략했다.  
특정 색상을 지정하는 것보다 COLOR_WINDOW + 1 시스템 색상을 지정하여 사용자가 제어판에서 설정한 윈도우 배경색을 쓰는 것이 좋다.