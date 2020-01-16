#include "AddressUI.h"
#include <iostream>

#include "AddressData.h"

void AddressUI::run()
{
	int in;
	while ((in = printMenu()) != 0) {
		switch (in) {
		case 1:
			Add();
			break;
		case 2:
			Search();
			break;
		case 3:
			PrintAll();
			break;
		case 4:
			//Remove();
			break;
		}
		system("pause>null");
	}


}

int AddressUI::printMenu()
{
	system("cls");
	std::cout << "[1]추가" << std::endl;
	std::cout << "[2]검색" << std::endl;
	std::cout << "[3]전체 출력" << std::endl;
	std::cout << "[4]삭제" << std::endl;
	std::cout << "[0]종료" << std::endl;

	int input;
	std::cin >> input;

	return input;
}

void AddressUI::Add()
{
	std::string name;
	std::string phone;

	std::cout << "이름 : ";
	std::cin >> name;

	std::cout << "전호번호 : ";
	std::cin >> phone;

	addr_book.AddAddress(name, phone);

}

void AddressUI::Search()
{
	std::cout << "===찾기===" << std::endl;
	std::cout << "이름 : ";

	std::string name;
	std::cin >> name;

	const AddressData* data = addr_book.Search(name);

	if (data == nullptr) {
		std::cout << "찾을 수 없습니다." << std::endl;
		return;
	}

	PrintData(*data);
}

void AddressUI::PrintAll() const
{
	for (AddressBook::iterator it = begin(addr_book); it != end(addr_book); it++) {
		PrintData(*it);
	}
	
	/*for (auto data : addr_book) {
		PrintData(data);
	}*/
}

void AddressUI::PrintData(const AddressData& data) const
{
	std::cout << "[" << &data << "]" << data.GetName() << "\t"
		<< data.GetPhone() << "[" << &(data.GetNext()) << "]" << std::endl;
}