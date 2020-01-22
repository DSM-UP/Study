#pragma once


// CUserInputDlg 대화 상자

class CUserInputDlg : public CDialogEx
{
	DECLARE_DYNAMIC(CUserInputDlg)

public:
	CUserInputDlg(CWnd* pParent = nullptr);   // 표준 생성자입니다.
	virtual ~CUserInputDlg();

// 대화 상자 데이터입니다.
#ifdef AFX_DESIGN_TIME
	enum { IDD = IDD_DIALOG_USER_INPUT };
#endif

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV 지원입니다.

	DECLARE_MESSAGE_MAP()
public:
	CString m_strURL;
	virtual BOOL OnInitDialog();
	afx_msg void OnBnClickedOk();
};
