#include <iostream>

#include "AddressBook.h"
#include "AddressUI.h"

int main() {
	AddressBook addr_book;
	AddressUI main_ui(addr_book);

	main_ui.run();



	return 0;
}