#include "screen.h"

//화면 출력을 위한 헤더 screen.h를 구현한 부분
//화면 출력에 필요한 전역 함수들이 정의 되어있다.

void PrintScreen() {
	int i;

	RenderScreen();
	for (i = 0; i < paragraphNum; i++)
		paragraph[i]();

	paragraphNum = 0;
}

void RenderScreen() {
	paragraph[paragraphNum++] = PrintExp;
	paragraph[paragraphNum++] = PrintQueue;
	paragraph[paragraphNum++] = PrintInput;
}
void SetState(const char* title, const char* context) {
}
void PrintExp() {
	printf("삽입을 원하는 원소를 입력하세요.\n");
	printf("pop을 하고 싶다면 0을 입력하세요.\n");
	printf("프로그램을 종료하고 싶다면 9를 입력하세요.\n");
}

void PrintQueue()
{
}

void PrintInput() {
	printf("입력 : ");
}
