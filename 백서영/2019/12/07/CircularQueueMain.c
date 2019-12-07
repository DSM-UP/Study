#include <stdio.h>
#include "CircularQueue.h"
#include <Windows.h>

void Screen(Queue* pq, const char *mes, char chk);
void Peek(Queue* pq);

int main() {
	Queue q;
	QueueInit(&q);
	char input;
	Screen(&q, "", NULL);
	while (1)
	{
		printf("\n\n입력 값: ");
		scanf("%c", &input);
		system("cls");
		while (getchar() != '\n');

		if (input == '0')
			DeQueue(&q);
		else if (input == '9')
			return 0;
		else
			EnQueue(&q, input);
	}
	
	
	return 0;
}

void Screen(Queue* pq, const char* mes, char chk)
{
	printf("%s %c", mes, chk);
	printf("\n\n삽입을 원하는 원소를 입력하세요.\n0을 입력하면 원소를 pop합니다.\n프로그램을 종료하려면 9를 누르세요\n\n");

	Peek(pq);
}

void Peek(Queue* pq)
{
	printf("\t원 형 큐\n");
	printf("  rear = %2d \ front = %2d\n", pq->rear, pq->front);
	printf("   ,---, ,---, ,---,\n");
	printf("   | %c | | %c | | %c | \n", pq->queArr[0], pq->queArr[1], pq->queArr[2]);
	printf("   '-0-' '-1-' '-2-'\n");
	printf("   ,---,       ,---,\n");
	printf("   | %c |       | %c | \n", pq->queArr[7], pq->queArr[3]);
	printf("   '-7-'       '-3-'\n");
	printf("   ,---, ,---, ,---,\n");
	printf("   | %c | | %c | | %c | \n", pq->queArr[6], pq->queArr[5], pq->queArr[4]);
	printf("   '-6-' '-5-' '-4-'\n");
}