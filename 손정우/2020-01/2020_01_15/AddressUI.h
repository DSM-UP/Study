#pragma once

#include "AddressBook.h"

class AddressData;

class AddressUI
{
public:
	void run();
	AddressUI(AddressBook& addr_book) : addr_book(addr_book)
	{}

private:
	int printMenu();
	void Add();
	void Search();
	void PrintAll() const;
	//void Remove();

	void PrintData(const AddressData& data) const;
	AddressBook& addr_book;
	
};

