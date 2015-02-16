var person = {
    firstName: "Tom",
    lastName: "Watson",
    age: 20,
    fullName: function() {
    	return this.firstName + " " + this.lastName;
    }
};
