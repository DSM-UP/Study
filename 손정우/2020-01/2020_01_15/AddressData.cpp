#include "AddressData.h"


const std::string& AddressData::GetName() const
{
	return name;
}

const std::string& AddressData::GetPhone() const
{
	return phone;
}

void AddressData::SetNext(const AddressData* next)  {
	this->next = next;
}

const AddressData& AddressData::GetNext() const
{
	return *next;
}
