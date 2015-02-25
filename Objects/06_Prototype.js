function Cat(name, breed) {
	this.name = name;
	this.breed = breed;
}

var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

Cat.prototype.meow = function() {
	return this.name + " Meow!!!";
}

alert(cheshire.meow() + gary.meow());
