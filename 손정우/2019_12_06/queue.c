#include "queue.h"

void InitQueue(Queue* que) {
	que->rear = 0;
	que->front = 0;
}

int NextIdx(int idx) {
	return (idx + 1) % 8;
}

int isFull(Queue* que) {
	return NextIdx(que->front) == que->rear;
}



int isEmpty(Queue* que) {
	if (que->front == que->rear) return True;
	return False;
}
int Enqueue(Queue* que, wchar_t data) {
	if (isFull(que)) return False;
	que->front = NextIdx(que->front);
	que->data[que->front] = data;
	return True;
}
wchar_t Dequeque(Queue* que) { 
	if (isEmpty(que)) return False;
	que->rear = NextIdx(que->rear);
	return que->data[que->rear];
}

wchar_t GetData(const Queue* que, int idx) {
	if (que->front == que->rear)
		return L' ';
	if (que->front < que->rear) {
		if (que->front < idx && que->rear >= idx)
			return L' ';
	}
	else if (que->front < idx)
		return L' ';
	else if (que->rear >= idx)
		return L' ';

	return que->data[idx];
}
