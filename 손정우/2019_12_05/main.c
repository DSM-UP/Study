#include <stdio.h>
#include <stdlib.h>
#include <stddef.h> // 유니코드 처리를 위한 헤더파일
#include <locale.h> // 유니코드 지역 설정을 위한 헤더파일

#include "screen.h"


void input(wchar_t* in) { //사용자로부터 입력받는 함수
	while (!wscanf(L"%c", in)) { //잘 못된 입력일시(wsacnf의 리턴값이 0) 이를 알려주고 다시 입력
		printf("잘 못 된 입력입니다.");
	}

}


int main() {
	wchar_t in;	//입력을 저장할 변수
	int i = 0;
	const char *c;
	setlocale(LC_ALL, ""); // 유니코드 지역 설정

	c = "asfd";


	while (1) {
		printf("%d", i++);

		PrintScreen();
		system("pause");
	}

	//input(&in);

	//if (!in) {
	//	//큐 삭제
	//}
	//else {
	//	//큐입력
	//}








	return 0;
}