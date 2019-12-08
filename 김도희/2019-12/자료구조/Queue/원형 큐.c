#include <stdio.h>
#include <stdlib.h>

#define MaX_QUEUE 8

typedef int element;
typedef struct {
	int front;
	int rear;
	element data[MaX_QUEUE];
}Queue;

void Init(Queue* q)
{
	q->rear = q->front = 0;
}

int empty(Queue* q)
{
	return	(q->front == q->rear);
}

int full(Queue* q)
{
	return ((q->rear + 1) % MaX_QUEUE) == q->front;
}

void print(Queue* q)
{
	printf("현재 front : %d  현재 rear : %d \n\n", q->front, q->rear);
	int i = q->front;

	if (!empty(q)) {
		do {
			i = (i + 1) % MaX_QUEUE;
			printf("%d | ", q->data[i]);
			if (i == q->rear)
				break;
		} while (i != q->front);
	}
	printf("\n");
}

void enqueue(Queue* q, int data)
{
	if (full(q))
	{
		printf("포화");
		exit(0);
	}
	q->rear = (q->rear + 1) % MaX_QUEUE;
	q->data[q->rear] = data;
}

element dequeue(Queue* q)
{
	if (empty(q))
	{
		printf("공백");
		exit(0);
	}
	q->front = (q->front + 1) % MaX_QUEUE;
	return q->data[q->front];
}

element peek(Queue* q)
{
	if (empty(q))
	{
		printf("공백");
		exit(0);
	}
	return q->data[(q->front + 1) % MaX_QUEUE];
}

int main()
{
	Queue q;
	int data;

	Init(&q);
	printf("==========데이터 입력==========");

	while (!full(&q))
	{
		printf("\n\n정수 입력 : ");
		scanf("%d", &data);
		enqueue(&q, data);
		print(&q);
	}
	printf("\n큐 포화 상태\n\n");

	printf("==========데이터 삭제=========="); 

	while (!empty(&q))
	{
		data = dequeue(&q);
		printf("\n\n꺼낸 정수 : %d\n", data);
		print(&q);
	}
	printf("\n큐 공백 상태\n\n");

	return 0;
}