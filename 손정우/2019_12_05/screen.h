#ifndef SCREEN_H
#define SCREEN_H

//화면 출력을 위한 헤더
//화면 출력에 필요한 전역 함수들과 전역 변수 등이 선언 되어있다.
#include <stdio.h>

void(*paragraph[5])();
int paragraphNum;


void PrintScreen();
void RenderScreen();
void SetState(const char* title, const char* context);
void SetComment(const char* title, const char* context);

void PrintExp();
void PrintQueue();
void PrintInput();

#endif // !SCREEN_H
