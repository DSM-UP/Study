#pragma once

#include <string>

#include "AddressData.h"

class AddressBook
{
public:
	AddressBook() : head(nullptr), tail(nullptr)
	{}
	void AddAddress(const std::string& name, const std::string& phone);
	const AddressData* Search(const std::string& name) const;
	
	class iterator {
	private:
		const AddressData* data;
	public:
		iterator(const AddressData* const data) : data(data)
		{}
		const AddressData& operator*() {
			return *data;
		}
		const iterator& operator++() {
			data = &(data->GetNext());
			return *this;
		}
		const iterator& operator++(int) {
			data = &(data->GetNext());
			return *this;
		}

		bool operator!=(const iterator& it) {
			return data != it.data;
		}
	};

private:
	AddressData* head;
	AddressData* tail;
	friend AddressBook::iterator begin(AddressBook& ab);
	friend const AddressBook::iterator end(AddressBook& ab);
};
