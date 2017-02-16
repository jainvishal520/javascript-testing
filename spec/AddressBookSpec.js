//Describe a new test suite Address Book

describe('Address Book',function(){
	//spec to add a contact
	it('should be able to add a contact',function(){
		var addressBook = new AddressBook(),
			thisContact = new Contact();

		addressBook.addContact(thisContact);

		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	//spec to delete a contact
	it('should be able to delete a contact',function(){
		var addressBook = new AddressBook();
			thisContact = new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined()
	});
});