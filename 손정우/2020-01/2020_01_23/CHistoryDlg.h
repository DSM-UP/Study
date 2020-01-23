#pragma once


// CHistoryDlg 대화 상자

class CHistoryDlg : public CDialogEx
{
	DECLARE_DYNAMIC(CHistoryDlg)

public:
	CHistoryDlg(CWnd* pParent = nullptr);   // 표준 생성자입니다.
	virtual ~CHistoryDlg();

// 대화 상자 데이터입니다.
#ifdef AFX_DESIGN_TIME
	enum { IDD = IDD_DIALOG_HISTORY };
#endif

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV 지원입니다.

	DECLARE_MESSAGE_MAP()
public:
	virtual BOOL OnInitDialog();
private:
//	CListBox m_listURL;
public:
//	afx_msg void OnSelchangeListUrl();
	CString m_strSeleted;
	CListCtrl m_listURL;
};
