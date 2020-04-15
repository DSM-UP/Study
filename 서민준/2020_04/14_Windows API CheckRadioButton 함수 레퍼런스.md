# Windows API CheckRadioButton 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-checkradiobutton" target = "_blank">CheckRadioButton - MSDN</a>  
<a href = "http://www.soen.kr/">SoEn:소프트웨어 공학 연구소</a>  
  
## CheckRadioButton
  
    #include <Winuser.h>

    BOOL CheckRadioButton(HWND hDlg, iint nIDFirstButton, int nIDLastButton, int nIDCheckButton);
  
그룹으로 묶여있는 라디오 버튼 중에서 원하는 항목을 선택해 체크시키는 함수이다.  
  
라디오 버튼의 체크 상태를 변경하기 위해 각 라디오 버튼으로 `BM_SETCHECK` 메시지를 보낸다.  
  
`nIDFirstButton`과 `nIDLastButton`으로 같은 그룹 내에 있는 라디오 버튼의 범위를 지정한다. 해당 범위 내에 있는 ID의 버튼들은 모두 같은 그룹에 속해 있는 버튼으로 생각한다.  
  
`nIDCheckButton`에 지정된 ID를 지닌 버튼만을 체크하고 나머지 버튼의 체크는 모두 해제한다.  
  
### Parameters
  
`hDlg`  
라디오 버튼을 가지고 있는 대화상자의 핸들이다.  
  
`nIDFirstButton`  
그룹 내의 첫 번째 라디오 버튼의 ID이다.  
  
`nIDLastButton`  
그룹 내의 마지막 라디오 버튼의 ID이다.  
  
`nIDCheckButton`  
체크하고자 하는 라디오 버튼의 ID이다.  
  
### Return value
  
함수가 성공하면 0이 아닌 값을, 실패하면 0을 반환한다.