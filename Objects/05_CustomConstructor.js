// Объявляем конструктор
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Создаем объекты с помощью конструктора
var tom = new Person("Tom", "Watson");
var anna = new Person("Anna", "Petrova");

alert(tom.firstName + " " + tom.lastName);
alert(anna.firstName + " " + anna.lastName);
