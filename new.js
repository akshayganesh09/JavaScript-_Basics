// new - keyword is used create an object by using a Constructor function or Class.

// 1. Constructor Function...

function User(name) {
    this.name = name;
}

let u1 = new User("Xavi"); // new object is created - { name: "Xavi" }
let u2 = new User("David"); // new object is created - { name: "David" }

// 2. Class...

class Person{
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
    }
}

let p1 = new Person("Villa", 34);  
let p2 = new Person("Wyane", 34);

// When using new to create an Object - Sets the prototype of the Object to Person.prototype

p1.__proto__ // you will see empty object { }.

// If the class was like...

class Person{
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
    }

    welcome() {
        console.log(`Welcome ${this.userName}`);
    }
}

p1.__proto__ //  will be { welcome: f }.

// What is happening here...?

// When you create an Object using new keyword from a Constructor function or a Class. The object will be attached with a "prototype".
// If the class or generator function had any methods that will be attached to the prototype.

// i.e. Newly created Objects internal prototype (__proto__) is set to Person.prototype

Person.prototype  //  will be { welcome: f } itself.


// **** what `new` does internaly  ****.
// 1) Creates a new empty Object { }.
// 2) Sets the objects prototype (__proto__) to Person.prototype.
// 3) Calls the constructor function of (Person) with `this` bound to new Object { }.
// 4) Returns the Object. (unless constructor explicitly has any return statement). 