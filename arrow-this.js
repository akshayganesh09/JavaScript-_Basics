// Arrow function do not have its own this, they inherit this value from their lexical/parent scope at the time they are defined.

// 1. Arrow function inside an Object.

const user = {
  name: "GEMINI",

  normalFn: function() {
    console.log(`Hello, Im ${this.name}`);
  },
  
  arrowFn: () => {
    console.log(`Hello, Im ${this.name}`); // output: undefined.
  }
}

user.normalFn();

// Why undefined?
// Here the arrow function inside an object will be hoisted to the Global scope, which gives global object or undefined in strict mode when called.

// 2. Arrow function inside an Objects method.

const person = {
  name: "Chat GPT",
  greet: function() {
    const innerArrow = () => {
      console.log(`Hello, Im ${this.name}`); // output: Hello, Im Chat GPT.
    }
    
    innerArrow();
  },
  
  greetNormalFn: function() {
    const normalFn = function() {
      console.log(`Hello, Im ${this.name}`); // output: undefined.
    }
    
    normalFn();
  }
}

person.greet();
person.greetNormalFn();

// Why this works?
// Here the Arrow function does not have its own this, there for it checks in its lexical scope, which is function greet. Function greet is Implicitly binded means, whatever object is there to the left of the dot is its this value. So here arrow function inherit this value from its parent.

// note: If we replace Arrow function in above with a Normal function - Then we get undefined.
// Because - Normal function has its own this and they get this from 4 different ways (standalone, implict binding, explicit binding & new), Here it will consider it self as a standalone function.

// 3. Arrow function and explicit binding.

const student = { name: "GEMINI", age: 27 };

const studentGreet = () => {
  console.log(`Hi, I'm ${this.name}`);
};

studentGreet.call(student); // output: undefined.

// why undefined: Because explicit binding does not work with Arrow function. Because Arrow function does not have its own this, so JavaScrit ignores the object you pass through call(), apply() or bind().

