#include <iostream>
using namespace std;

class MyFriendInfo
{
private:
	char* name;
	int age;
public:
	MyFriendInfo(const char* name1, int age1)
	{
		name = new char[strlen(name1) + 1];
		strcpy(name, name1);
		age = age1;
	}

	void showMyFriendInfo()
	{
		cout << "이름 : " << name << endl;
		cout << "전화번호 : " << age << endl;
	}
};

class MyFriendDetailInfo : public MyFriendInfo
{
private:
	char* addr;
	char* phone;

public:
	MyFriendDetailInfo(const char* name1, int age1,const char* add, const char* phon)
		:MyFriendInfo(name1, age1)
	{
		addr = new char[strlen(add) + 1];
		strcpy(addr, add);
		phone = new char[strlen(phon) + 1];
		strcpy(phone, phon);
	}

	void showMyFriendDetailInfo()
	{
		showMyFriendInfo();
		cout << "주소 : " << addr << endl;
		cout << "전화번호 : " << phone << endl;
	}
};

int main()
{
	MyFriendDetailInfo fren1("노규태", 17, "대전", "010-111-1111");
	MyFriendDetailInfo fren2("홍자영", 19, "부산", "010-222-2222");
	fren1.showMyFriendDetailInfo();
	fren2.showMyFriendDetailInfo();
}