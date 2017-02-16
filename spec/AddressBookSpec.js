//Describe a new test suite Address Book

describe('Address Book',function(){

	//remember outer functions and variables are in scope of inner specs
	var addressBook,
		thisContact;

	//this will run before each spec
	beforeEach(function(){
		addressBook = new AddressBook();
		thisContact = new Contact();
	})


	//spec to add a contact
	it('should be able to add a contact',function(){
		//No need to initialize in each spec as beforeEach function will do the job to reduce redundancy
		// var addressBook = new AddressBook(),
		// 	thisContact = new Contact();

		addressBook.addContact(thisContact);

		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	//spec to delete a contact
	it('should be able to delete a contact',function(){
		//No need to initialize in each spec as beforeEach function will do the job to reduce redundancy
		// var addressBook = new AddressBook();
		// 	thisContact = new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined()
	});
});