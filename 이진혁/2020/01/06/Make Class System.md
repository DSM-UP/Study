## Make Class System

- 자료구조 시간에 반편성을 하기 위해서 성적과 가중치를 이용하여 만점 70점인 점수를 계산하는 프로그램을 만들게 되었다.

- 일단 아래의 코드를 보자.

  ```c
  #include <stdio.h>
  
  #define SIZE	18
  #define STD_CNT	6
  
  enum { E = 1, D, C, B, A };
  
  void Average(int*, int*, const char*);
  
  int main() {
  	int points[STD_CNT][SIZE] = {
  		{ A, B, E, B, C, D, E, E, C, D, C, B, E, A, D, C, D, D },
  		{ B, C, C, A, D, E, C, B, D, D, A, E, E, C, E, C, D, B },
  		{ B, C, C, C, C, B, A, A, E, D, E, C, C, C, C, C, A, B },
  		{ B, C, C, C, E, E, B, D, C, B, C, C, C, A, B, D, D, E },
  		{ A, C, E, B, D, C, C, E, B, E, E, A, C, A, E, E, C, E },
  		{ A, B, B, A, E, C, A, E, A, C, C, E, E, A, C, E, C, E }
  	};
  	int gajungchi[SIZE] = { 3, 3, 3, 3, 3, 2, 2, 3, 6, 3, 3, 3, 3, 3, 2, 3, 7, 3 };
  	const char* name[STD_CNT] = { "공영길", "김대웅", "김도희", "김선민", "민준혁", "배길준" };
  
  
  	printf("이름\t\t합계\t\t평균\n--------------------------------------\n");
  	for (int i = 0; i < STD_CNT; i++)
  		Average(points[i], gajungchi, name[i]);
  
  	return 0;
  }
  
  void Average(int* name_p, int* gajungchi, const char* name) {
  	double sum = 0.0;
  	int gajung = 0;
  
  	for (int i = 0; i < SIZE; i++) {
  		sum += name_p[i] * gajungchi[i];
  		gajung += gajungchi[i];
  	}
  
  	printf("%s\t\t", name);
  	printf("%.0lf\t\t", sum);
  	printf("%.03lf\t\t", (sum / gajung) * 20 * 0.7);
  	printf("\n");
  }
  ```

- 일단 성적의 등급은 A, B, C, D, E가 있기 때문에 enum을 이용하여 하고 E가 가장 낮은 점수인 1을 가지고 있고 A가 5점이므로 E에 초기값 1을 주고 1, 2, 3, 4, 5로 값을 주었다.
- 이름을 담은 name 배열과 그들의 점수를 담은 points 이차원 배열을 선언하고 가중치를 담은 gajungchi 배열을 선언하여 Average() 함수에 점수를 담은 배열, 가중치배열, 이름을 매개변수로 넘겨서 평균을 구한 뒤 모두 출력한다.

