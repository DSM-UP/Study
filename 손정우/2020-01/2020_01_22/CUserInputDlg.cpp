// CUserInputDlg.cpp: 구현 파일
//

#include "pch.h"
#include "MyBrowser.h"
#include "CUserInputDlg.h"
#include "afxdialogex.h"


// CUserInputDlg 대화 상자

IMPLEMENT_DYNAMIC(CUserInputDlg, CDialogEx)

CUserInputDlg::CUserInputDlg(CWnd* pParent /*=nullptr*/)
	: CDialogEx(IDD_DIALOG_USER_INPUT, pParent)
	, m_strURL(_T(""))
{

}

CUserInputDlg::~CUserInputDlg()
{
}

void CUserInputDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
	DDX_Text(pDX, IDC_EDIT_URL, m_strURL);
}


BEGIN_MESSAGE_MAP(CUserInputDlg, CDialogEx)
	ON_BN_CLICKED(IDOK, &CUserInputDlg::OnBnClickedOk)
END_MESSAGE_MAP()


// CUserInputDlg 메시지 처리기


BOOL CUserInputDlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// TODO:  여기에 추가 초기화 작업을 추가합니다.

	return TRUE;  // return TRUE unless you set the focus to a control
				  // 예외: OCX 속성 페이지는 FALSE를 반환해야 합니다.
}


void CUserInputDlg::OnBnClickedOk()
{
	UpdateData();
	CDialogEx::OnOK();
}
