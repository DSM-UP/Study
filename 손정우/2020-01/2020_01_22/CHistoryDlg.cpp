// CHistoryDlg.cpp: 구현 파일
//

#include "pch.h"
#include "MyBrowser.h"
#include "CHistoryDlg.h"
#include "afxdialogex.h"


// CHistoryDlg 대화 상자

IMPLEMENT_DYNAMIC(CHistoryDlg, CDialogEx)

CHistoryDlg::CHistoryDlg(CWnd* pParent /*=nullptr*/)
	: CDialogEx(IDD_DIALOG_HISTORY, pParent)
{

}

CHistoryDlg::~CHistoryDlg()
{
}

void CHistoryDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_LIST_URL, m_listURL);
}


BEGIN_MESSAGE_MAP(CHistoryDlg, CDialogEx)
END_MESSAGE_MAP()


// CHistoryDlg 메시지 처리기


BOOL CHistoryDlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	for (int i = 0; i < theApp.m_arURL.GetCount(); i++)
		m_listURL.AddString(theApp.m_arURL[i]);
	return TRUE;  // return TRUE unless you set the focus to a control
				  // 예외: OCX 속성 페이지는 FALSE를 반환해야 합니다.
}
