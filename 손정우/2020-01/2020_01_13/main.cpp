#include <afxwin.h>


//응용 프로그램 클래스 선언
class CHelloApp : public CWinApp {
public:
	virtual BOOL InitInstance() override;
};

//메인 윈도우 클래스 선언
class CMainFrame : public CFrameWnd {
public:
	CMainFrame();
protected:
	afx_msg void OnPaint();
	afx_msg void OnLButtonDown(UINT nFlags, CPoint point);
	DECLARE_MESSAGE_MAP();
};

CHelloApp theApp;

BOOL CHelloApp::InitInstance() {
	m_pMainWnd = new CMainFrame;
	m_pMainWnd->ShowWindow(m_nCmdShow);
	return TRUE;
}

CMainFrame::CMainFrame() {
	Create(NULL, _T("HelloMFC"));
}

void CMainFrame::OnPaint() {
	CPaintDC dc(this);
	const TCHAR* msg = _T("Hello, MFC");
	dc.TextOutW(100, 100, msg, lstrlen(msg));
}

void CMainFrame::OnLButtonDown(UINT nFlags, CPoint point) {
	MessageBox(_T("마우스 클릭"), _T("마우스 메세지"));
}

BEGIN_MESSAGE_MAP(CMainFrame, CFrameWnd)
	ON_WM_PAINT()
	ON_WM_LBUTTONDOWN()
END_MESSAGE_MAP()