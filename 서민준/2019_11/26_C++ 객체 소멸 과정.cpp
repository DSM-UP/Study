// Visual Studio 2019에서 작성된 코드입니다.

#include <iostream>

class Simple
{
private:
	char str[10];

public:
	Simple(const char* s)
	{
		strcpy(str, s);
	}

	~Simple()
	{
		std::cout << "called destructor!" << std::endl;
	}
};

int main()
{
	Simple* pSim = new Simple("Simple"); // stack에 할당 된 것은 Simple* 메모리 뿐!

	delete pSim; // 반드시 delete를 명시해야 한다!
	
	return 1;
}