#include <iostream>

#include <time.h>

#include <iomanip>

#include <fstream>

#include <string>

#include <Windows.h>

using namespace std;



int score = 0; //점수

int cnt = 0; //횟수

void AnswerTrue(); //정답일 때

void AnswerFail(); //오답일 때

void print();



void main() {

	char name[20]; //이름

	char answer[25]; //답

	string group; //분류

	string ques; //문제

	char ans[500]; //답

	char choose[20]; //종료 선택





	ifstream inFile("QUIZ.txt", ios::in); //파일 열기. 입력전용



	print();



	cout << "\t\t게임을 시작하시겠습니까?(Y || y) : ";

	cin >> choose;

	if (!strcmp("Y", choose) || !strcmp("y", choose)) {



		system("cls");

		print();



		ofstream fout("info.txt");

		cout << "\t\t사용자의 이름을 입력해주세요 : ";

		cin >> name;



		fout << name;

		fout.close();



		while (inFile >> group >> ques >> ans) { //저장

			Sleep(1500);     // 3초간 대기 

			system("cls");

			print();

			cout << "\t\t" << group << endl;

			cout << "\t\t" << ques << endl;

			cout << "\t\t답 : ";



			cin >> answer;



			if (!strcmp(ans, answer)) {

				AnswerTrue();

			}

			else {

				AnswerFail();

				cout << "\t\t" << "정답 : " << ans << endl;

			}

			Sleep(1500);     // 3초간 대기 

			system("cls");

			printf("\n\n\n");

			printf("\t--------------------------------------------------------------\n");



			cout << "\t게임 그만할래요(stop) or 게임 계속할래요(아무키나 입력) : ";

			cin >> choose;

			if (!strcmp("stop", choose) || !strcmp("STOP", choose)) {

				Sleep(1500);

				system("cls");

				ifstream infoRea("info.txt", ios::in);

				while (infoRea >> name) {

					printf("\n\n\n");

					cout << "\t\t----------점수 알림----------\t" << endl;

					cout << "\t\t" << "  이름 : " << name << "\t 점수 : " << score << "점" << endl;

				}

				infoRea.close();



				Sleep(1500);

				return;

			}

		}

	}

	else

		return;

}



void print() {

	printf("\n\n\n");

	printf("\t\t-------------------------------------\n");



}



void AnswerTrue() {

	cout << endl;

	system("cls");

	print();

	cout << "\t\t" << "정답입니다." << endl;

	cnt++;

	score++;

	cout << "\t\t" << "---" << endl;

	cout << "\t\t" << cnt << "회" << endl;

	cout << "\t\t" << "---" << endl;

	cout << "\t\t" << " O" << endl;

	cout << "\t\t" << "---" << endl;

	cout << "\t\t" << "현재 점수 : " << score << "점" << endl;

	printf("\t\t-----------------------------------\n");

}



void AnswerFail() {

	cout << endl;

	system("cls");

	print();

	cout << "\t\t" << "아쉽게 틀렸습니다ㅠㅠ" << endl;

	score--;

	cnt++;

	cout << "\t\t" << "---" << endl;

	cout << "\t\t" << cnt << "회" << endl;

	cout << "\t\t" << "---" << endl;

	cout << "\t\t" << " X" << endl;

	cout << "\t\t" << "---" << endl;

	score++;

	cout << "\t\t" << "현재 점수 : " << score << "점" << endl;

	printf("\t\t-----------------------------------\n");

}



