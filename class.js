// Class: A class is just a syntactic sugar over constructor function.

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`${this.name}`);
    }
}

// why the term syntactic sugar over function?
// -------------------------------------------

// under the hood what JS does is like: 

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`${this.name}`);
}

// Classes are functions.
// Classes are not hoisted like functions. They live in temporal dead zone (TDZ).

// *** very important ***

// this depends on HOW function is called!!
// consider 2 examples...

const user = {
  name: "Akshay",
  greet() {
    console.log(this.name);
  }
};

user.greet();  // Output: "Akshay".
// Because --> this = user (here this will be wqual to use - Implicit binding: value of 'this' will be what ever to the left of dot (.) operator.)

// now

let u = user.greet;
u(); // Output: undefined

// Because --> Here user.greet is not executed, its just assigned to variable 'u'. And later u is executed 'u()'
// so, we can say that value of this in a function is determined by where the function is called. not where the function is written.