#include "screen.h"

//화면 출력을 위한 헤더 screen.h를 구현한 부분
//화면 출력에 필요한 전역 함수들이 정의 되어있다.

void PrintScreen() {
	int i;
	system("cls");
	RenderScreen();
	for (i = 0; i < paragraphNum; i++)
		paragraph[i]();

	paragraphNum = 0;
}

void RenderScreen() {
	AddContext(PrintExp);
	AddContext(PrintQueue);
	AddContext(PrintInput);
}
void AddContext(void(*func)()) {
	paragraph[paragraphNum++] = func;
}
void SetState(const wchar_t* title, const wchar_t* context) {
	if (title == NULL && context == NULL) {
		if (stateTitle && stateContext)
			AddContext(PrintState);
		return;
	}
	stateTitle = title;
	stateContext = context;
	AddContext(PrintState);
}

void SetComment(const wchar_t* title, const wchar_t* context) {
	commentTtile = title;
	commentContext = context;
	AddContext(PrintComment);
}

void SetQueue(const Queue* que) {
	queForPrint = que;
}

void PrintState() {
	wprintf(L"[%s]%s\n\n", stateTitle, stateContext);
}

void PrintComment() {
	wprintf(L"[%s]%s\n\n", commentTtile, commentContext);
}


void PrintExp() {
	printf("삽입을 원하는 원소를 입력하세요.\n");
	printf("pop을 하고 싶다면 0을 입력하세요.\n");
	printf("프로그램을 종료하고 싶다면 9를 입력하세요.\n\n");
}



void PrintQueue() {
	printf("    원형 큐    \n");
	printf("rear = %d / front = %d\n", queForPrint->rear, queForPrint->front);
	printf(",-----, ,-----, ,-----,\n");
	wprintf(L"   %c      %c       %c\n",GetData(queForPrint, 0), GetData(queForPrint, 1), GetData(queForPrint, 2));
	printf("`--0--` `--1--` `--2--`\n");
	printf(",-----,         ,-----,\n");
	wprintf(L"   %c               %c\n", GetData(queForPrint, 7), GetData(queForPrint, 3));
	printf("`--7--`         `--3--`\n");
	printf(",-----, ,-----, ,-----,\n");
	wprintf(L"   %c      %c       %c\n", GetData(queForPrint, 6), GetData(queForPrint, 5), GetData(queForPrint, 4));
	printf("`--6--` `--5--` `--4--`\n");

}

void PrintInput() {
	printf("입력 : ");
}
