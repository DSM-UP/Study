# OnPaint와 OnDraw의 차이점

MFC로 프로그래밍는 메세지 처리 기반으로 동작한다
따라서 MFC에서는 각각의 메세지를 해당 메세지를 담당할 클래스와 그 클래스의 메소드 형식으로 제공한다
특히 뷰를 담당하는 CView클래스는 화면을 그리는 메소드로 OnPaint와 OnDraw가 있다

문득 이 둘의 차이점이 무엇인지 궁금해졌다



CView가 아닌 다른 클래스에서 즉 뷰가 아닌 윈도우에서 그려할 필요가 있을때 WM_PAINT 메시지가 발생되고 이에 의해 호출되는 OnPaint를 구현하여 그린다

하지만 CView를 상속하여 사용하면 OnDraw함수는 순수 가상 함수라 무조건 구현해야한다
여기서 OnPaint도 구현한다면 OnDraw함수가 동작하지 않는다

그 이유는 CView의 OnPaint가 OnDraw함수를 호출하기 때문이다
우리가 OnPaint를 오버라이딩하여 구현하면 부모(CView)에서 OnDraw를 호출하지 않게 된다

그렇다면 왜 OnPaint와 OnDraw 이렇게 두가지 방법을 지원할까?

CView는 다른 클래스와는 다르게 좀 더 범용적으로 출력이 가능하다 프린터에 출력하는 것이 그 예다
이런 이유로 다른 클래스에서도 사용하는 기존의 출력 방식인 OnPaint 보다 범용적인 함수가 필요했고 그래서 만든 것이 OnDraw 함수가 된다

이런 이유로 실제로 OnPaint 보단 OnDraw를 사용하길 권하고 OnPaint를 만들고자 하면 Visual Studio에서는 친절히 부모(CView)의 OnPaint 함수를 호출하지 말라고 주석까지 달아놓는다



