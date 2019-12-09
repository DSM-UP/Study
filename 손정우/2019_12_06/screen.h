#ifndef SCREEN_H
#define SCREEN_H

//화면 출력을 위한 헤더
//화면 출력에 필요한 전역 함수들과 전역 변수 등이 선언 되어있다.
#include <stdio.h>
#include <stdlib.h>
#include "queue.h"

void(*paragraph[5])();
int paragraphNum;
const wchar_t* stateTitle, *stateContext;
const wchar_t* commentTtile, * commentContext;
const Queue* queForPrint;


void PrintScreen();
void RenderScreen();
void AddContext(void(*func)());
void SetState(const wchar_t* title, const wchar_t* context);
void SetComment(const wchar_t* title, const wchar_t* context);
void SetQueue(const Queue* que);

void PrintState();
void PrintComment();
void PrintExp();
void PrintQueue();
void PrintInput();

#endif // !SCREEN_H
