## Calendar-3

- 이번에는 저번에 C언어로 캘린터를 만드는 프로젝트를 이어서 만들어서 완성하게 되었다.

- 일단 먼저 코드부터 살펴보자면 아래와 같다.

  ```c
  #include <stdio.h>
  #include <stdlib.h>
  
  #define HEIGHT	6
  #define WIDTH	7
  
  int** InitCalendar(int**);
  void CreateCalendar(int**, int, int);
  void PrintCalendar(int**, int, int);
  void DeleteCalendar(int**);
  int FindYoilOfOneMonthOneDay(int);
  int FindYoilOfThisMonthOneDay(int, int, int);
  int FindLastDayOfThisMonth(int, int);
  
  int main() {
  	int** calendar = NULL;
  
  	calendar = InitCalendar(calendar);
  	CreateCalendar(calendar, 2000, 2);
  	PrintCalendar(calendar, 2000, 2);
  	DeleteCalendar(calendar);
  
  	return 0;
  }
  int** InitCalendar(int** calendar) {
  	calendar = (int**)malloc(sizeof(int*) * HEIGHT);
  	if (calendar == NULL) return;
  	for (int i = 0; i < HEIGHT; i++)
  		calendar[i] = (int*)malloc(sizeof(int) * WIDTH);
  
  	return calendar;
  }
  
  void CreateCalendar(int** calendar, int year, int month) {
  	int yoilOfThisMonthOneDay = FindYoilOfThisMonthOneDay(year, month, FindYoilOfOneMonthOneDay(year));
  	int lastDayOfThisMonth = FindLastDayOfThisMonth(year, month);
  	int count = 0;
  
  	for (int i = 0; i < HEIGHT; i++) {
  		for (int j = 0; j < WIDTH; j++) {
  			if ((i == 0 && count < yoilOfThisMonthOneDay) || (count > lastDayOfThisMonth))
  				calendar[i][j] = 0;
  			else
  				calendar[i][j] = ++count;
  		}
  	}
  
  	return calendar;
  }
  
  void PrintCalendar(int** calendar, int year, int month) {
  	printf("    [%4d년 %2d월 달력]\n", year, month);
  	for (int i = 0; i < HEIGHT; i++) {
  		for (int j = 0; j < WIDTH; j++)
  			printf("%2d  ", calendar[i][j]);
  		printf("\n");
  	}
  }
  
  void DeleteCalendar(int** calendar) {
  	for (int i = 0; i < HEIGHT; i++)
  		free(calendar[i]);
  	free(calendar);
  }
  
  int FindYoilOfOneMonthOneDay(int year) {
  	int yoil = year - 1;
  	for (int i = 1; i <= year; i++)
  		if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0))
  			yoil++;
  
  	int temp = yoil % 7;
  	if (temp == 6) temp = 0;
  	else temp++;
  
  	return temp;
  }
  
  int FindYoilOfThisMonthOneDay(int year, int month, int yoil) {
  	int yun = 0;
  	if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
  		yun = 1;
  
  	int arr[13] = { 0, 31, 28 + yun, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
  
  	for (int i = 1; i < month; i++)
  		yoil += arr[i];
  
  	return yoil % 7;
  }
  
  int FindLastDayOfThisMonth(int year, int month) {
  	int yun = 0;
  	if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
  		yun = 1;
  
  	int arr[12] = { 31, 28 + yun, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
  
  	return arr[month-1];
  }
  ```

- C언어로 코드를 만들면서 중요한 부분은 두 가지라고 생각한다.
- 첫 번째는 이중 포인터로 이차원 배열을 사용할 때 그 이중 포인터는 우리가 알던 포인터의 역할을 제대로 수행하지 못한다는 것이다.
- 일단, main 함수에서 int** calendar 라는 달력이라는 변수를 이중 포인터로 선언하였다.
- 그리고 곧 이 이중 포인터는 동적할당을 받으면서 마치 이차원 배열처럼 사용되게 된다.
- 이 때 이 InitCalendar()라는 함수는 void 형이 아니라 int** 형을 가지게 되는데 이것은 초기화가 InitCalendar() 함수 안에서는 되었는데 main의 calendar 라는 변수는 되지 않았기 때문이다.
- 그래서 리턴 값을 int**로 설정해두었다.



- 두 번째는 class가 필요한 시점이 존재한다는 것이다.
- 위의 코드에서 만든 여러 가지 함수들을 살펴보자면 calendar, year, month, day와 같은 매개변수가 사용되지만 사실 year, month와 같은 매개변수는 class 즉, 객체지향적 시선으로 살펴보았을 때 멤버 변수로 지정해놓는다면 매개변수로 두지 않아도 될 일이었다.
- 물론 구조체를 사용할 수 있었을 것이지만 그걸 생각 못했다.