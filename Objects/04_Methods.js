// Объект может содержать методы.
// Например, метод person.fullName возвращает имя и фамилию,
// объекта person, разделенные пробелом.
var person = {
    firstName: "Tom",
    lastName: "Watson",
    age: 20,
    fullName: function() {
    	return this.firstName + " " + this.lastName;
    }
};

alert(person.fullName());
