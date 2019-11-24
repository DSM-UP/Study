// Visual Studio 2019에서 작성된 코드입니다.

#include <iostream>
#include <chrono>
#include <ctime>

// 요일을 결정하기 위해 사용할 열거형 enum
enum { SUNDAY, MONDAY, TUSEDAY, WEDNESDAY, THRUSDAY, FRIDAY, SATURDAY };

class CTimer
{
private:
	int month; // 월
	int day; // 일
	int week; // 요일
	
	void (CTimer::* funcPtr[3])() const; // 함수 포인터 배열

	void WhatTimeIsItNow() const; // 현재 시각 표시
	void WhatDayOfWeekYesterday() const;
	void WhatDayOfWeekFiveDaysAfter() const;

	void PrintDayOfWeek(int day) const; // 인자로 전달된 요일에 해당하는 문자열 출력

public:
	CTimer();
	void run() const;
};

CTimer::CTimer()
	: month(11), day(24), week(SUNDAY)
{
	funcPtr[0] = &CTimer::WhatTimeIsItNow;
	funcPtr[1] = &CTimer::WhatDayOfWeekYesterday;
	funcPtr[2] = &CTimer::WhatDayOfWeekFiveDaysAfter;

	std::cout << "오늘은 " << month << "월 " << day << "일입니다." << std::endl << std::endl;
}

void CTimer::WhatTimeIsItNow() const
{
	auto nowTime = std::chrono::system_clock::now(); // 현재 시각 정보를 받는다.
	time_t time = std::chrono::system_clock::to_time_t(nowTime); // auto 자료형을 time_t로 변형해준다.

	struct tm* clock; // 현재 시각 출력을 상세하게 조정하기 위해 선언
	clock = localtime(&time);

	std::cout << "현재 시각 : " << clock->tm_hour << "시 " << clock->tm_min << "분 " << clock->tm_sec << "초" << std::endl;
}

void CTimer::WhatDayOfWeekYesterday() const
{
	std::cout << "어제는 ";

	if (week != SUNDAY)
		PrintDayOfWeek(week - 1);
	else
		PrintDayOfWeek(week);

	std::cout << "이었습니다." << std::endl;
}

void CTimer::WhatDayOfWeekFiveDaysAfter() const
{
	std::cout << "5일 후는 ";
	PrintDayOfWeek((week + 5) % 7);
	std::cout << "입니다.";
}

void CTimer::PrintDayOfWeek(int day) const
{
	if (day == SUNDAY)
		std::cout << "일요일";
	else if (day == MONDAY)
		std::cout << "월요일";
	else if (day == TUSEDAY)
		std::cout << "화요일";
	else if (day == WEDNESDAY)
		std::cout << "수요일";
	else if (day == THRUSDAY)
		std::cout << "목요일";
	else if (day == FRIDAY)
		std::cout << "금요일";
	else
		std::cout << "토요일";
}

void CTimer::run() const
{
	int option;

	std::cout << "======= 다음 기능 중 하나를 선택해주세요. =======" << std::endl;
	std::cout << "1. 현재 시간은?" << std::endl;
	std::cout << "2. 어제 요일은?" << std::endl;
	std::cout << "3. 5일 후 요일은?" << std::endl;

	if (option == TIME)
		(this->*funcPtr[0])();
	else if (option == YESTERDAY)
		(this->*funcPtr[1])();
	else
		(this->*funcPtr[2])();
}

int main()
{
	CTimer time_obj;

	time_obj.run();

	return 1;
}