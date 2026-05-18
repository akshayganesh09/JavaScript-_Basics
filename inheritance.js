// inheritance
//-------------

// It is a mechanism that allows one Object to share its property and methods to another object.

// Unlike class based Inheritance in other languages like C++/Java, 
// JavaScript uses Protype Inheritance.

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    sayAge() {
        console.log(this.age);
    }
}

// Here what happens is Student.prototype is set to Person.protype.

let s1 = new Student("rono", 28);

// So any Student object (instance) can get the properties or methods of its parent class, through Prototype Inheritance.

// *** Important ***
// In a Sub class constructor, you must call 'super()' before using 'this'
// Because super(arguments) will 1st set the value of this in its constructor, and that value is passed down to sub classes.

// In JavaScript, child class do not have its own 'this' binding. Calling super initilize parent constructor,
// which allocates memory for object instance and map this.