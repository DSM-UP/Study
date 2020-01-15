#include "AddressBook.h"
#include "AddressData.h"

const AddressBook& AddressBook::GetInstance()
{
	static AddressBook addr_book;
	return addr_book;
}

void AddressBook::AddAddress(const std::string& name, const std::string& phone)
{
	AddressData* new_addr = new AddressData(name, phone);
	new_addr->SetNext(*head);
	head = new_addr;
}

const AddressData* AddressBook::Search(const std::string& name) const
{
	const AddressData* cur_data = this->head;
	while (cur_data->GetName() != name) {
		cur_data = &(cur_data->GetNext());
		if (cur_data == NULL) return NULL;
	}
	
	return cur_data;
}
