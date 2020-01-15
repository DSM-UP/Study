#include "AddressBook.h"
#include "AddressData.h"

void AddressBook::AddAddress(const std::string& name, const std::string& phone)
{
	AddressData* new_addr = new AddressData(name, phone);
	
	if (head == nullptr) {
		head = new_addr;
		tail = new_addr;
	}

	tail->SetNext(new_addr);
	new_addr->SetNext(nullptr);
	tail = new_addr;
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

AddressBook::iterator begin(AddressBook& ab) {
	return AddressBook::iterator(ab.head);
}
const AddressBook::iterator end(AddressBook& ab) {
	return AddressBook::iterator(nullptr);
}