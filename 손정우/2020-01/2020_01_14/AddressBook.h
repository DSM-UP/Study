#pragma once

#include <string>

class AddressData;

class AddressBook
{
public:
	void AddAddress(const std::string& name, const std::string& phone);
	const AddressData* Search(const std::string& name) const;
	void begin();
private:
	AddressData* head;

};

