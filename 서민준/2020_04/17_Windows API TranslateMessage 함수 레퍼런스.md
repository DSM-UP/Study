# TranslateMessage 함수 레퍼런스 정리
  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-translatemessage" target = "_blank">TranslateMessage function - MSDN</a>  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
  
## TranslateMessage
  
    #include <Winuser.h>

    BOOL TranslateMessage(const MSG* lpMsg);
  
가상 키 메시지를 문자 메시지로 변환한다.  
  
`WM_KEYDOWN` 메시지와 `WM_KEYUP` 메시지의 조합에 의해 `WM_CHAR` 메시지나 `WM_DEADCHAR` 메시지를 만들어낸다.  
  
`WM_SYSKEYDOWN` 메시지와 `WM_SYSKEYUP` 메시지의 조합에 의해 `WM_SYSCHAR` 메시지나 `WM_SYSDEADCHAR` 메시지를 만들어낸다.  
  
이때 키보드 드라이버가 제공하는 ASCII 문자 구성에 따라 문자로 변환되는 키에 대해서만 변환을 하며 나머지 키 입력은 변환하지 않는다.  
  
이렇게 변환된 메시지는 스레드의 메시지 큐로 보내진다.  
  
다음 메시지는 `GetMessage` 함수나 `PeekMessage` 함수에 의해서 읽혀진다.  
  
이 함수는 메시지 루프 내에서 키보드 메시지를 문자 메시지로 변환하기 위한 목적으로만 사용되며 다른 목적으로 사용해서는 안 된다.  
  
### Parameters
  
`lpMsg`  
`GetMessage` 함수나 `PeekMessage` 함수에 의해 스레드의 메시지 큐에서 읽힌 메시지의 정보를 가지고 있는 `MSG` 구조체의 포인터이다.  
  
### Return value
  
만약 메시지가 변환되어 스레드의 메시지 큐로 보내졌다면, 0이 아닌 값을 반환한다.  
  
메시지가 변환되지 못했다면(스레드의 메시지 큐로 보내지지 못했다면), 0을 반환한다.  
  
`WM_KEYDOWN` 메시지, `WM_KEYUP` 메시지, `WM_SYSKEYDOWN` 메시지, `WM_SYSKEYUP` 메시지는 변환 여부에 상관없이 항상 0이 아닌 값을 반환한다.