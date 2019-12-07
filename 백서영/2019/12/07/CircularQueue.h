#ifndef __C_QUEUE_H
#define __C_QUEUE_H

#define TRUE 1
#define FALSE 0
#define QUE_LEN 8

typedef char Data;

typedef struct _cQueue
{
	int front;
	int rear;
	Data queArr[QUE_LEN];
}CQueue;

typedef CQueue Queue;


void QueueInit(Queue* pq);
/*큐의 초기화
생성 후 제일 먼저 호출 되어야 함*/

int isFull(Queue* pq);
/*큐가 가득 차있는 경우 TRUE, 차 있지 않은 경우 FALSE 반환*/

int isEmpty(Queue* pq);
/*큐가 빈 경우 TRUE, 차 있으면 FALSE 반환*/

void EnQueue(Queue* pq, Data data);
/*큐 데이터 저장, 매개변수 data로 전달된 값 저장*/

Data DeQueue(Queue* pq);
/*저장순서가 앞선 데이터 삭제, 삭제된 데이터 반환, 데이터가 하나 이상 존재함 보장(QIsEmpty함수 존재의 필요성)*/


#endif