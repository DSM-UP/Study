# TIL

큐

- FIFO 방식의 자료구조

- Enqueue : 큐에 자료를 넣는 행위

- Dequeue : 큐에서 자료를 빼내는 행위

- 1, 2, 3, 4를 순서대로 Enqueue하면 <-출구 1, 2, 3, 4 <-입구 가 된다.

- 4번 Dequeue를 하면 1, 2, 3, 4가 순서대로 빠져나온다.

- 큐가 쓰이는 예
  - 줄스기
  - 프린터 작업 큐
  - 너비 우선 탐색

​    

스택

- LIFO 방식의 자료구조. 자료가 들어갔다 나오는 출입구가 하나이다.

- Push : 스택에 자료를 넣는 행위

- Pop : 스택에서 자료를 빼내는 행위

- Stack Overflow : 스택의 크기보다 많은 자료를 넣었을 때 발생한다. 프로그램에 에러를 낼 수 있다.

- Stack Underflow : 스택에 자료가 없는데 Pop하려고 할 때 발생한다. Stack Overflow와 같이 프로그램에 에러를 낼 수 있다.

- 1, 2, 3, 4를 순서대로 Push하면 <->출입구 4, 3, 2, 1 이 된다.

- 4번 Pop하면 4, 3, 2, 1이 순서대로 빠져나온다.

- 스택이 쓰이는 예
  - 브라우저 뒤로가기 버튼
  - 깊이 우선 탐색

​    

연결 리스트

- 노드들이 연결된 자료구조. 노드에는 자신과 연결되는 노드의 주소, 데이터가 있다.

- 노드 추가 : 노드를 하나 만들고 원래 있던 노드의 next에 새로 만든 노드를 연결시켜야 한다.

- 순회 : 노드의 next가 비어있을 때까지 next하면 된다.

- 삭제 : 만약 삭제하려는 노드가 head라면 head를 next 노드에게 넘기고 노드를 삭제한다. head가 아니라면 삭제하려는 노드의 전 노드의 next를 삭제하려는 노드의 next와 연결하고 노드를 삭제한다.

- 역순 : 비어 있는 공간 prev를 만든다. head부터 시작해서 현재 노드의 next를 prev로 하고, 현재 노드를 prev로 바꾼다. 그리고 현재 노드를 현재 노드의 다음으로 바꾼다. 현재 노드가 비어 있는 공간이 될 때까지 반복하고 마지막에 head를 prev로 바꿔준다.

​    

힙

- 시간 복잡도 : 힙을 구성하는데 O(  ![img](file:///C:\Users\user\AppData\Local\Temp\DRW0000406c693d.gif)  ). 최대 또는 최솟값을 찾을 때는 O(1).

  ![그림입니다.  원본 그림의 이름: CLP0000494c4a94.bmp  원본 그림의 크기: 가로 728pixel, 세로 483pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c6934.bmp)  

- 이것은 Max Heap이다. Max Heap은 부모의 값이 자식의 값보다 크다. 또한 루트에는 가장 큰 값이 들어간다. [0]7, [1]6, [2]5, [3]4, [4]2, [5]1, [6]3

- 반대로 Min Heap은 부모의 값이 자식의 값보다 작으며, 루트에는 가장 작은 값이 들어간다.

- Heapify : 일반적인 트리를 힙 트리로 바꾸는 과정. 현재 있는 자료의 개수를 2로 나눠서 1로 뺀 인덱스부터 siftdown을 한다.

- siftdown : 부모 노드와 자식 노드들의 값을 비교해서 부모 노드보다 큰 값이 없다면 넘어가고 부모 노드보다 큰 값이 있다면 둘 중 더 큰 노드와 부모를 교환하는 것이다. 그리고 교환한 노드를 부모 노드로 해서 자식 노드와 비교하는 것을 반복한다. 자식 노드가 없으면 끝.

​    

힙 정렬

- 성능 : O(  ![img](file:///C:\Users\user\AppData\Local\Temp\DRW0000406c693f.gif)  )

- 과정
  - 루트와 마지막 노드를 교환한다.
  - 기존의 루트(현재 마지막 노드)는 배제하고 루트에서 siftdown을 한다.
  - 과정 1, 2를 반복.

​    

​    

이진 탐색 트리

- 성능
  - 검색 : O(log n)
  - 삭제 : O(log n)
  - 삽입 : O(log n)

- 자신의 왼쪽 서브 트리는 자신의 값보다 작은 값이 있고, 오른쪽 서브 트리는 자신의 값보다 큰 값이 있는 이진 트리.

- 예

  ![그림입니다.  원본 그림의 이름: CLP000029a0932e.bmp  원본 그림의 크기: 가로 711pixel, 세로 521pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c6935.bmp)  

- 삽입 과정 (위 트리에 12 삽입)
  - 10 보다 크므로 오른쪽
  - 15보다 작으므로 왼쪽
  - 13보다 작으므로 왼쪽
  - 더 이상 자식 노드가 없으므로 13의 왼쪽 서브 트리로 안착.

- 탐색 과정 (위 트리에서 9 탐색)
  - 9는 10보다 작으므로 왼쪽
  - 9는 7보다 크므로 오른쪽
  - 9 탐색 완료.
  - 만약에 자식 노드가 없을 때까지 찾았는데 일치하는 값이 없다면 찾는 값이 없       는 것이다.

- 삭제 과정
  - 경우 1 (삭제할 노드에 자식 노드가 없을 때)
    - 탐색을 통해 삭제할 노드를 찾는다.
    - 노드를 삭제한다.
  - 경우 2 (삭제할 노드에 자식이 하나 있을 때)
    - 탐색을 통해 삭제할 노드를 찾는다.
    - 노드를 삭제하고 자식 노드를 그곳에 채워 넣는다.

  - 경우 3 (삭제할 노드에 자식 노드가 두 개 있을 때)
    - 탐색을 통해 삭제할 노드를 찾는다.
    - 노드를 삭제하고 오른쪽 서브 트리에서 가장 왼쪽에 있는 노드로 삭제한 부분을 채워 넣는다.

​    

순회

  ![그림입니다.  원본 그림의 이름: CLP000029a00002.bmp  원본 그림의 크기: 가로 592pixel, 세로 502pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c6936.bmp)  

pre order 순회

 5 -> 3 -> 1 -> 4 -> 7

  ![그림입니다.  원본 그림의 이름: CLP000029a00001.bmp  원본 그림의 크기: 가로 420pixel, 세로 315pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c6937.bmp)  

in order 순회

 1 -> 3 -> 4 -> 5 -> 7

  ![그림입니다.  원본 그림의 이름: CLP000029a00003.bmp  원본 그림의 크기: 가로 454pixel, 세로 254pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c6938.bmp)  

 in order 순회를 하면 정렬된 값들이 나온다.

post order 순회

 1 -> 4 -> 3 -> 7 -> 5

  ![그림입니다.  원본 그림의 이름: CLP000029a00004.bmp  원본 그림의 크기: 가로 475pixel, 세로 310pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c6939.bmp)  



그래프 개념

  ![그림입니다.  원본 그림의 이름: CLP00002cf04db0.bmp  원본 그림의 크기: 가로 476pixel, 세로 313pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c693a.bmp)

- vertex가 있고 edge가 있을 때 그래프라고 부른다.

- edge에 방향성이 있을 때 direct 그래프라고 한다.

- edge에 방향성이 없으면 undirect 그래프라고 한다.

- edge에 가중치가 있을 때 weighted 그래프라고 한다.

- vertex list : vertex를 모아 놓은 리스트.

- edge list : edge를 모아 놓은 리스트. 0에서 1로 가는 edge는 (0, 1)로 표현.

- adjacency list : vertex들의 인접 vertex를 타나내는 리스트

- adjacency matrix : 인접 리스트와 달리 matrix 모양으로 인접한 vertex를 표현.

​    

깊이 우선 탐색

  ![그림입니다.  원본 그림의 이름: CLP00002cf00001.bmp  원본 그림의 크기: 가로 640pixel, 세로 602pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c693b.bmp)  

- 과정 (stack, current, visited)
  - 0 탐색(current 0). 인접한 두 vertex(1, 2) push. visited에 0 추가.
  - stack에서 하나 pop(2). 2 탐색(current 2). 4, 5 push. visited 2 추가.
  - pop(5). 5 탐색(current 5). visited 5 추가.
  - pop(4). 4 탐색(current 4). 6 push. visited 4 추가.
  - pop(6). 6 탐색(current 6). visited 6 추가.
  - pop(1). 1 탐색(current 1). 3 push. visited 1 추가. 
  - pop(3). 3 탐색(current 3). visited 3 추가. 끝.



9. 너비 우선 탐색

  ![그림입니다.  원본 그림의 이름: CLP00002cf00001.bmp  원본 그림의 크기: 가로 640pixel, 세로 602pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c693b.bmp)  

- 과정 (queue, current, visited)
  - 0 enqueue. 0 dequeue(current 0). 1, 2 enqueue. visited 0 추가.
  - 1 dequeue(current 1). 3 enqueue. visited 1 추가.
  - 2 dequeue(current 2). 4, 5 enqueue. visited 2 추가.
  - 3 dequeue(current 3). visited 3 추가.
  - 4 dequeue(current 4). 6 enqueue. visited 4 추가.
  - 5 dequeue(current 5). visited 5 추가.
  - 6 dequeue(current 6). visited 6 추가.

​    

다익스트라 알고리즘

  ![그림입니다.  원본 그림의 이름: CLP00002cf00002.bmp  원본 그림의 크기: 가로 696pixel, 세로 424pixel](file:///C:\Users\user\AppData\Local\Temp\Hnc\BinData\EMB0000406c693c.bmp)  

|      | A    | B    | C    | D    | E    | F    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| A    | 0 A  | 4 A  | 2 A  | 7 A  | INF  | INF  |
| C    |      | 4 A  | 2 A  | 7 A  | 5 C  | INF  |
| B    |      | 4 A  |      | 7 A  | 5 C  | 14 B |
| E    |      |      |      | 6 E  | 5 C  | 13 E |
| D    |      |      |      | 6 E  |      | 13 E |
| F    |      |      |      |      |      | 13 E |

- 인접하지 않은 vertex와의 거리는 무한으로 한다.

- 한 싸이클에서 가장 적은 거리를 가지는 vertex를 방문한다.

- 만약 거리가 같다면 아무 vertex나 방문한다.

​    

순열

- 예 : A B C
  - 첫 번째 문자 swap (A, B, C) (B, A, C) (C, B, A)
  - 두 번째 문자 swap (A, B, C) (B, A, C) (C, B, A)(A, C, B) (B, C, A) (C, A, B)

  - 끝. (A, B, C) (B, A, C) (C, B, A) (A, C, B) (B, C, A) (C, A, B)



비트 연산자

- AND : 둘 다 1이여야 1.

 0 & 0 => 0

 0 & 1 => 0

 1 & 0 => 0

 1 & 1 => 1

- OR : 둘 중 하나라도 1이면 1.

 0 | 0 => 0

 0 | 1 => 1

 1 | 0 => 1

 1 | 1 => 1

- XOR : 둘이 같으면 1, 다르면 0

 0 ^ 0 => 0

 0 ^ 1 => 1

 1 ^ 0 => 1

 1 ^ 1 => 0

- NOT : 0이면 1, 1이면 0.

 ~0 => 1

 ~1 => 0

- << (LEFT SHIFT)

 0001 << 2 => 0100

- \>> (RIGHT SHIFT)

 0100 >> 2 => 0001