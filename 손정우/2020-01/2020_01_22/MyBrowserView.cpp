
// MyBrowserView.cpp: CMyBrowserView 클래스의 구현
//

#include "pch.h"
#include "framework.h"
// SHARED_HANDLERS는 미리 보기, 축소판 그림 및 검색 필터 처리기를 구현하는 ATL 프로젝트에서 정의할 수 있으며
// 해당 프로젝트와 문서 코드를 공유하도록 해 줍니다.
#ifndef SHARED_HANDLERS
#include "MyBrowser.h"
#endif

#include "MyBrowserDoc.h"
#include "MyBrowserView.h"
#include "CUserInputDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// CMyBrowserView

IMPLEMENT_DYNCREATE(CMyBrowserView, CHtmlView)

BEGIN_MESSAGE_MAP(CMyBrowserView, CHtmlView)
	// 표준 인쇄 명령입니다.
	ON_COMMAND(ID_FILE_PRINT, &CHtmlView::OnFilePrint)
	ON_COMMAND(ID_MYPAGE_NAVER, &CMyBrowserView::OnMypageNaver)
	ON_COMMAND(ID_MYPAGE_GOOGLE, &CMyBrowserView::OnMypageGoogle)
	ON_COMMAND(ID_MYPAGE_USERINPUT, &CMyBrowserView::OnMypageUserinput)
END_MESSAGE_MAP()

// CMyBrowserView 생성/소멸

CMyBrowserView::CMyBrowserView() noexcept
{
	// TODO: 여기에 생성 코드를 추가합니다.

}

CMyBrowserView::~CMyBrowserView()
{
}

BOOL CMyBrowserView::PreCreateWindow(CREATESTRUCT& cs)
{
	// TODO: CREATESTRUCT cs를 수정하여 여기에서
	//  Window 클래스 또는 스타일을 수정합니다.

	return CHtmlView::PreCreateWindow(cs);
}

void CMyBrowserView::OnInitialUpdate()
{
	CHtmlView::OnInitialUpdate();

	Navigate2(_T("C:\\"));
}


// CMyBrowserView 인쇄



// CMyBrowserView 진단

#ifdef _DEBUG
void CMyBrowserView::AssertValid() const
{
	CHtmlView::AssertValid();
}

void CMyBrowserView::Dump(CDumpContext& dc) const
{
	CHtmlView::Dump(dc);
}

CMyBrowserDoc* CMyBrowserView::GetDocument() const // 디버그되지 않은 버전은 인라인으로 지정됩니다.
{
	ASSERT(m_pDocument->IsKindOf(RUNTIME_CLASS(CMyBrowserDoc)));
	return (CMyBrowserDoc*)m_pDocument;
}
#endif //_DEBUG


// CMyBrowserView 메시지 처리기


void CMyBrowserView::OnMypageNaver()
{
	Navigate2(_T("http://www.naver.com"));
}


void CMyBrowserView::OnMypageGoogle()
{
	Navigate2(_T("http://www.google.com"));
}


void CMyBrowserView::OnMypageUserinput()
{
	CUserInputDlg dlg;
	if (dlg.DoModal() == IDOK) {
		Navigate2(dlg.m_strURL);
		theApp.m_arURL.Add(dlg.m_strURL);
	}
}
