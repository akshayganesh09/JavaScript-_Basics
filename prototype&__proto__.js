// What is Prototype?
// ----------------------

// Every function (constructor, class) has a property called prototye. Which is like a bagpack, that collects methods which can be shared along
// to its instances.

//e.g.

function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log(`Hello ${this.name}`);
    }
}

// Here if we look 'Person.prototye = { constructor: f Person(), [[prototye]]: { toString(), toLoacalString(), ... } }'
// So here the function 'Person' has a bagpack withit which contains all the properties which it inherits from 'Object.prototype'
// i.e.  Person.prototye.__proto__ = Object.prototype

// And if we create an Instance from Person i.e.

let p1 = new Person("Xavi");

// The Instance 'p1' inherit all the properties and methods of 'Person' function.
// i.e. 'p1 = { name: 'Xavi', greet: f(), [[prototype]]}

// __proto__
// ----------------

// __proto__ is the reference or pointer to access its prototype which is [[prototype]].

// so every object which is either created using object literals, constructors or classes has reference or pointer to its 
// prototype that is calle __proto__

// Instance Path
// --------------
// p1.__proto__ --> Person.prototype
// Person.prototype.__proto__ --> Object.prototype
// Object.prototype.__proto__ --> null or undefined.

// Function Path
// --------------
// Person.__proto__ --> Function.prototype
// Function.prototype.__proto__ --> Object.prototype
// Object.prototype.__proto__ --> null or undefined.