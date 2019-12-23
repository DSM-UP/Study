#ifndef QUEUE_H
#define QUEUE_H

#include <stddef.h>

#define True 1
#define False 0

typedef struct _queue {
	wchar_t data[8];
	int rear;
	int front;
}Queue;

void InitQueue(Queue* que);//큐를 초기화한다.

int NextIdx(int idx);//매개변수로 들어온 인덱스의 다음 인덱스를 리턴
int isFull(Queue* que); //큐가 가득찼는지 확인하는 함수 True시 가득참, False시 가득차지 않음

int isEmpty(Queue* que);//큐가 비었는지 검사하는 함수, Ture시 비어있음, False시 비어있지 않음
int Enqueue(Queue* que, wchar_t data);//큐에 데이터를 삽입, 리턴값이 False(0)일시 큐가 가득참, True시 정상 작동
wchar_t Dequeque(Queue* que);//큐에 데이터 제거, 리턴값이 False(0)일시 큐가 비어있음, Flase 이외의 리턴 시 정상작동

wchar_t GetData(const Queue* que, int idx); //매개변수로 들어온 인덱스에 위치한 데이터를 리턴한다. *출력용도외에는 쓰지 말 것*



#endif // !QUEUE_H



