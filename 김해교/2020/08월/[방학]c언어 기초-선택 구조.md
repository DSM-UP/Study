### 선택 구조

{2020년 8월 18일 월요일}

#### **if문을 활용하여 작성할 것(1~4)**



<1>입력한 수가 3의 배수이면서 5의 배수인지 판별하라.

```c
#include <stdio.h>

int main(){
	int drainage; // drainage = 배수
	scanf("%d", &drainage); 
	if(drainage%3==0 && drainage%5==0){ // drainage가 3의 배수이면서 5인지 판별한다.
		printf("3의 배수이면서 5의 배수입니다."); // 맞으면 저 문구가 출력된다.
	}
}
```



<2>두 개의 알파벳을 입력하면 두 알파벳 사이의 알파벳만을 출력하라.

ex) x B

x y z A B (출력)

```c
#include <stdio.h>

int main(){
	char i;
	char a, b;
	scanf("%c %c", &a, &b);
	if(a>='a'&&a<='z'){ // 만약 a가 'a'부터 'z'까지의 소문자일 때
		for(i=a; i<='z'; i++){ // 입력된 a부터 z까지 반복한다
			printf("%c ", i); // 반복하면서 i출력
		}
	}
	else if(a>='A'&&a<='Z'){  // 만약 a가 'A'부터 'Z'까지의 대문자일 때
		for(i=a; i<='Z'; i++){  // 입력된 a부터 Z까지 반복한다
			printf("%c ", i);
		}
	}
	if(b>='a'&&b<='z'){  // 만약 b가 'a'부터 'z'까지의 소문자일 때
		for(i='a'; i<=b; i++){ // a부터 입력된 'b'까지 반복한다
			printf("%c ", i);
		}
	}
	else if(b>='A'&&b<='Z'){ // 만약 b가 'A'부터 'Z'까지의 대문자일 때 
		for(i='A'; i<=b; i++){ // a부터 입력된 'B'까지 반복한다
			printf("%c ", i);
		}
	}
	return 0;
}
```



<3>나이를 입력받아 나이에 따라 입장료를 계산하라.

[조건] 8세 미만 : 무료

8세 이상 60세 미만 : 정가(30,000원) / 60세 이상 : 정가의 75%(7,500원)

```c
#include <stdio.h>

int main(){
	int age;
	scanf("%d", &age);
	if(age<8){ // 만약 나이가 8세 미만이면
		printf("무료입니다."); 
	}
	else if(age>=8 && age<60){ // 그렇지 않고 나이가 8세 이상 60세 미만이면
		printf("30,000원입니다.");
	}
	else{ 
		printf("7,500원입니다.");	
	}
    
	return 0;
}
```



#### **switch ~ case문을 활용하여 작성할 것**(5~9)



<5> <1>을  switch ~ case문으로 출력하라.

```c
#include <stdio.h>

int main(){
	int a, num=0;
	scanf("%d", &a);
	if(a%3==0&&a%5==0){ // 입력된 a가 3의 배수이거나 5의 배수이면
		num = 1; 
	}
	else if(a%3==0){ // 입력된 a가 3의 배수이면
		num = 2;
	}
	else if(a%5==0){ // 입력된 a가 5의 배수이면
		num = 3;
	}
	else num = 0 // 위에 조건들에 맞지 않으면 0
	switch(num){ //num 기준으로
		case 1: // num = 1이면
			printf("3의 배수이면서 5의 배수입니다.");
			break;
		case 2: // num = 2이면
			printf("3의 배수이지만 5의 배수입니다.");
			break;
		case 3: // num = 3이면
            printf("3의 배수는 아니지만 5의 배수입니다.");
			break;
		default : // 다 아니면
			printf("3의 배수이면서 5의 배수가 아닙니다.");
			break;
	}
	return 0;
}
```



<7> 성적을 입력받아 학점을 결정하라.

```c
#include <stdio.h>

int main(){
	int grades, num;
	scanf("%d", &grades);
	num = grades/10; // num에 성적의 십의 자리 숫자를 저장
	switch(num){
		case 10: // num 번호가 10이면
		case 9: // num 번호가 9이면
			printf("A");
			break;
		case 8: // num 번호가 8이면
			printf("B");
			break;
		case 7: // num 번호가 7이면
			printf("C");
			break;
		case 6: // num 번호가 6이면
			printf("D");
			break;
		default : // 그렇지 않으면
			printf("F");
			break;
	}
	return 0;
}
```



<9> 특정한 달을 입력하면 그 달의 일수를 출력하라.

```c
#include <stdio.h>

int main(){
	int month;
	scanf("%d", &month);
	switch(month){ // 달을 기준으로 잡는다.
		case 1: 
		case 3:
		case 5:
		case 7: 
		case 8: 
		case 10: 
		case 12:  
			printf("%d월의 일수는 31일입니다.", month);
			break; 
		case 4: 
		case 6: 
		case 9: 
		case 11: 
			printf("%d월의 일수는 30일입니다.", month);
			break;
		case 2: 
			printf("%d월의 일수는 28일입니다.", month);
			break;
		default : 
			printf("없는 달입니다."); 
	}
	return 0;
}
```

