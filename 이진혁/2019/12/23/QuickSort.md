## Quick Sort

- Quick Sort 즉, 퀵 정렬은 의외로 빠른 정렬 속도를 자랑한다.

- 하지만 최악의 경우 즉, 순서대로 정렬되어 있거나 그 반대의 경우 최악의 n^2의 시간 복잡도를 가진다.

- 그래도 평균적으로 가장 빠른 정렬이라고 알려져 있기 때문에 많이 사용하는 정렬 중 하나이다.

- 이번에는 이 퀵 정렬을 C언어로 구현해보았다.

- 계기는 선생님께서 정답을 보지 않고 퀵 정렬을 구현할 수 있다는 것을 증명해보라는 말에 하게 되었다.

- 아래는 내가 구현한 퀵 정렬의 구현 코드이다.

  ```c
  #include <stdio.h>
  #include <stdlib.h>
  #include <time.h>
  
  #define SIZE 6
  #define SIZE2 10
  
  typedef int Data;
  
  void QuickSort(Data*, int, int);
  void Print(Data*);
  void RandomCreate(Data*);
  
  int main() {
  	//Data arr[SIZE] = { 62, 98, 74, 39, 47, 53 };
  	Data arr[SIZE] = { 0, };
  	RandomCreate(arr);
  
  	printf("변환 전 : ");
  	Print(arr);
  	QuickSort(arr, 0, SIZE - 1);
  	printf("변환 후 : ");
  	Print(arr);
  
  	return 0;
  }
  
  void QuickSort(Data* arr, int start, int end) {
  	int p = start;
  	int l = start + 1;
  	int h = end;
  	int temp = arr[p];
  
  	if (start == end)
  		return;
  	else if (start + 1 == end) {
  		if (arr[start] > arr[end]) {
  			int t = arr[start];
  			arr[start] = arr[end];
  			arr[end] = t;
  		}
  		return;
  	}
  
  	while (1) {
  		if (l >= h) {
  			break;
  		}
  		if (arr[l] >= arr[p] && arr[h] < arr[p]) {
  			int t = arr[l];
  			arr[l] = arr[h];
  			arr[h] = t;
  		}
  		if(arr[l] < arr[p])
  			l++;
  		if (arr[h] >= arr[p])
  			h--;
  	}
  	arr[p] = arr[h];
  	arr[h] = temp;
  
  	QuickSort(arr, start, h);
  	QuickSort(arr, h, end);
  }
  
  void Print(Data* arr) {
  	for (int i = 0; i < SIZE; i++)
  		printf("[%3d] ", arr[i]);
  	printf("\n");
  }
  
  void RandomCreate(Data* arr) {
  	srand(time(NULL));
  	for (int i = 0; i < SIZE; i++)
  		arr[i] = (rand() % 1000) + 1;
  }
  ```

- 위의 코드는 총 세 개의 함수로 이루어져 있는데 그것은 실제로 재귀 함수를 통해 퀵 정렬을 구현하는 QuickSort() 함수와 중간 중간 테스트를 하기 위해서 배열을 출력해줄 Print()  함수, 마지막으로 정렬 되기 전의 배열 값을 랜덤으로 만들어줄 RandomCreate() 함수가 존재한다.
- 사실 RandomCreate() 함수와 Print() 함수는 알 필요가 없기 때문에 QuickSort() 함수만 소개하겠다.

- 그럼 QuickSort() 함수만 뽑아낸 코드는 아래와 같다.

  ```c
  void QuickSort(Data* arr, int start, int end) {
  	int p = start;
  	int l = start + 1;
  	int h = end;
  	int temp = arr[p];
  
  	if (start == end)
  		return;
  	else if (start + 1 == end) {
  		if (arr[start] > arr[end]) {
  			int t = arr[start];
  			arr[start] = arr[end];
  			arr[end] = t;
  		}
  		return;
  	}
  
  	while (1) {
  		if (l >= h) {
  			break;
  		}
  		if (arr[l] >= arr[p] && arr[h] < arr[p]) {
  			int t = arr[l];
  			arr[l] = arr[h];
  			arr[h] = t;
  		}
  		if(arr[l] < arr[p])
  			l++;
  		if (arr[h] >= arr[p])
  			h--;
  	}
  	arr[p] = arr[h];
  	arr[h] = temp;
  
  	QuickSort(arr, start, h);
  	QuickSort(arr, h, end);
  }
  ```

- 일단 퀵 정렬에는 pivot, low, high 라는 개념이 존재한다.

- 일단 pivot은 자신이 마음대로 정할 수 있는데 대부분 가장 첫 번째 값을 pivot으로 가진다.

- 그리고 low는 배열의 왼쪽에서부터 오른쪽으로 움직이는 포인터이며 high는 배열의 오른쪽에서부터 왼쪽으로 움직이는 포인터이다.

- 움직이는 기준은 pivot을 기준으로 low가 pivot의 값보다 클때까지 움직이고 high가 pivot의 값보다 작아질 때까지 움직인다.

- 그러다가 low와 high의 움직임이 멈추게 되면 low와 high의 값을 서로 변경한다.

- 하지만 이때, low가 high의 오른쪽에 존재하게 되면 high와 pivot의 위치를 변경하고 움직인 pivot을 기준으로 왼쪽 오른쪽으로 배열을 나눈 후 재귀를 통해 계속 반복하는 방식이다.

- 위의 코드중에서 가장 특이한 점은 마지막에 재귀를 이용하기 위해서 아래의 코드를 사용한 부분이다.

  ```c
  	...
  	QuickSort(arr, start, h);
  	QuickSort(arr, h, end);
  }
  ```

- 사실 위치가 정해진 pivot (위의 코드에서는 h) 는 제외하고 start부터 pivot-1 까지, 밑의 함수도 h + 1부터 end까지라고 생각하기가 쉽다.
- 실제로 나도 저렇게 구현했다가 오류가 발생하였다.
- 확실히 h-1과 h+1을 사용하는 것은 옳다. 왜냐하면 이것으로 인해 반복을 한 번 더 안 할 수 있기 때문이다.
- 하지만 이 한 번의 연산을 줄이기 위해서 개발자가 생각해야 할 것이 너무 많다는 것이 문제이다.
- 따라서 한 번 더 연산을 하더라도 pivot까지 연산하도록 하는 것이 좋다고 생각한다.