#pragma once

#include <string>

class AddressData
{
public:
	AddressData(std::string name, std::string phone) : name(name), phone(phone), next(NULL)
	{}

	const std::string& GetName() const;
	const std::string& GetPhone() const;
	void SetNext(const AddressData* next) ;
	const AddressData& GetNext() const;

private:
	std::string name;
	std::string phone;
	const AddressData* next;
};

