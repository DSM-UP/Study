
// MyBrowserView.h: CMyBrowserView 클래스의 인터페이스
//

#pragma once


class CMyBrowserView : public CHtmlView
{
protected: // serialization에서만 만들어집니다.
	CMyBrowserView() noexcept;
	DECLARE_DYNCREATE(CMyBrowserView)

// 특성입니다.
public:
	CMyBrowserDoc* GetDocument() const;

// 작업입니다.
public:

// 재정의입니다.
public:
	virtual BOOL PreCreateWindow(CREATESTRUCT& cs);
protected:
	virtual void OnInitialUpdate(); // 생성 후 처음 호출되었습니다.

// 구현입니다.
public:
	virtual ~CMyBrowserView();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// 생성된 메시지 맵 함수
protected:
	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnMypageNaver();
	afx_msg void OnMypageGoogle();
	afx_msg void OnMypageUserinput();
};

#ifndef _DEBUG  // MyBrowserView.cpp의 디버그 버전
inline CMyBrowserDoc* CMyBrowserView::GetDocument() const
   { return reinterpret_cast<CMyBrowserDoc*>(m_pDocument); }
#endif

