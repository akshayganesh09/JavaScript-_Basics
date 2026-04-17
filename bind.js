// bind() - allows an object to use method of another object.

// But bind() does not execute the function immediately, rather it creates a new function.
// That can be later called at some point of the time.
// Here just like call(), arrguments are passed as a comma seperated values.

function greetUserAfterSomeTime() {
  console.log(`Hello, good morning! I'm ${this.model} your AI assistant developed by ${this.make}`);
}

const obj1 = { model: "GEMINI", make: "Google" };
const obj2 = { model: "Chat GPT", make: "OpenAI" };

let greet1 = greetUserAfterSomeTime.bind(obj1);
let greet2 = greetUserAfterSomeTime.bind(obj2);

//Later at some point we are calling both the methods...
greet1();
greet2();

// Practical use case.

function multiply(a, b) {
    return a * b;
}

let double = multiply.bind(null, 2); // use bind to pass 1st argument (2), 
let tripple = multiply.bind(null, 3);

// Here bind creates a new function with one argument (2) and later this function call can be called with the second argument.

double(5);
tripple(5);