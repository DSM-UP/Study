#include <stdio.h>
#include <stddef.h> // 유니코드 처리를 위한 헤더파일
#include <locale.h> // 유니코드 지역 설정을 위한 헤더파일

#include "queue.h"
#include "screen.h"


int input(wchar_t* in) { //사용자로부터 입력받는 함수
	//0을 리턴시 잘못된 입력
	//1을 리턴시 정상적인 입력
	//2를 리턴시 pop
	//-1을 리턴시 종료


	if (!wscanf_s(L"%c", in, sizeof(wchar_t))) (*in) = (unsigned short)0; // 입력을 받고 입력이 실패하는 것을 체크
	while (getchar() != '\n')*in = 0; //입력후 잔여 버퍼 제거 및 잘 못된 입력 체크
	
	if ((*in) <= 32) //잘 못된 입력일시 이를 알려주고 다시 입력
		return 0;
	else if (*in == L'0') return 2; // 0을 입력함
	else if (*in == L'9') return -1; //9를 입력함
	else return 1;	//push해야할 값을 입력함
}


int main() {
	wchar_t in;	//입력을 저장할 변수
	wchar_t temp; // 중간 결과물 (pop을 하고 나온 데이터)를 임시로 저장할 임시 변수
	wchar_t stateText[100]; //상태를 설명할 문자열

	Queue que;  //큐

	setlocale(LC_ALL, ""); // 유니코드 지역 설정
	InitQueue(&que); //큐를 초기화
	
	SetQueue(&que);


	while (1) {
		PrintScreen();
		switch (input(&in)) {
		case 0:
			SetComment(L"입력 오류", L"잘 못된 입력입니다.");
			SetState(NULL, NULL);
			break;
		case 1:
			if (!Enqueue(&que, in)) {
				SetState(L"큐 상태", L"큐가 가득찼습니다.");
				break;
			}
			swprintf(stateText, 100, L"입력한 원소 : %c", in);
			SetState(L"큐 상태", stateText);
			break;
		case 2:
			temp = Dequeque(&que);
			if (temp == 0)
				SetState(L"큐 상태", L"큐가 비어있습니다.");
			else {
				swprintf(stateText, 100, L"삭제(pop)한 원소 : %c", temp);
				SetState(L"큐 상태", stateText);
			}
			break;
		case -1:
			return 0;
		}
	}

	return 0;
}