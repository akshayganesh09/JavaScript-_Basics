// A class is like an blue print which is used to create Objects.

class Person {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
    }

    greet() {
        console.log(`Hello ${this.userName}`);
    }
}

// Constructor: Is a function inside class that executes immediatly and only once when a class is invoked. It is used to initialise
// the new Objects properties.

// Constructor
// -------------

let p1 = new Person("xavi", 28);

// what happens inside a constructor?
// 1. new keyword creates a new empty object { }.
// 2. Links { }.__proto__ = Person.prototype.
// 3. Binds that { } with this, now this = { }.
// 4. Runs the constructor code, i.e. { }.username = name & { }.userAge = age.That is it will be now { username: xavi, userAge: 28 }.
// 5. Retuns this Object, i.e p1 = { username: xavi, userAge: 28 }


// greet(): Is a method inside the class, if an object is created using new Person(). Only the greet() method reference will be passed to the new Object.

// e.g if 10,000 instance is create using new Person class. There would be still only 1 greet method. All the 10,000 instance will have only the
// reference of greet(). 
// i.e. p1.greet() === p2.greet() (will be true).

// But when you create a function as its property.

class Person {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;

        this.greet = function () {
            console.log(`Hello ${this.userName}`);
        }
    }
}

// Here greet() function is defined as a property, so every time a new Object is created a new instance of the greet function will also be created.
// i.e. 10,000 objects created --> 10,000 instance of the same greet function will be created. which is not memory effient.

// But why this is introduced?
//-------------------------------
// Constuctor function runs only once. Suppose if we have any private property and need to calculate somthing based on this value in future. we can
// make use of this.

// e.g.

class Person {
    constructor(name, age) {
        const secretKey = "UX10897";
        this.userName = name;
        this.userAge = age;
        this.userWithId = function() {
            console.log(this.userName, secretKey)
        }


        this.greet = function () {
            console.log(`Hello ${this.userName}`);
        }
    }
}

// Here function userWithId creates a closure, constructor function runs immediatly but still 'userWithId' still has the hold of 'secretKey'.




// Memory efficiancy part.
// Every time you create an Object using new Person --> A memory is allocated to the new object, along with its properties.