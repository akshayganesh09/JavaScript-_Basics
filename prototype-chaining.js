// What is prototype
//-------------------
// Every function in JavaScript automatically gets a property called prototype.

function greet() {
    console.log("Hello...");
}

// This greet() function also has a prototype attached to it.

console.log(foo.prototype); // output: { constructor: ƒ foo() }
// This is what we get (so every function gets a prototype as a property attached to it automatically).

// Important - Arrow function does not have a prototype.

//  Constructor Function.
// ------------------------

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello ${this.name}`);
    }
}

let p1 = new Person("xavi", 23); // a new p1 object is created. { name: "xavi", age: 23, greet: f() }
// Here for every intsnces (p1, p2, p3, ...) a new greet() method is created. Which is not memory efficiant way.

// How to make it memory efficiant?
Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}

// Here for every Objects created using new Person(), will have a common shared greet() method. Prototype is the reason for this.
// i.e.
let p1 = new Person("Xavi", 24);
let p2 = new Person("Ricky", 27);
console.log(p1.greet === p2.greet); // True

// Class ( A class is a blue print to create an Object )
// -----------------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let p1 = new Person("xavi", 23); // a new p1 object is created. { name: "xavi", age: 23 }
// Here for every instance (p1, p2, p3, ...) only one greet method is created, because gree() automatically attachs to p1__proto__ or Person.prototype.


// prototyp inheritance
// ---------------------

let arr = [1, 2, 3];
let result = arr.map(x => x * 2);

// From where did 'arr' gets map() method?

// It is due to prototype inheritance:-
// 1. JS look into arr and checks any map() method is there or not.
// 2. If not found, then it moves to check in arr.__proto__ which is equal to Array.prototype. (It gets .map() method).
// 3. If still not found it checks in arr.__proto__.__proto__ which is (Object.prototype).
// 4. If still not found it returns undefined. 

