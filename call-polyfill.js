// How .call() works under the hood?

// 'call' method is used to set the value of this to a function or method explicitly. Basiccally used to borrow a function.

function person (age) {
    console.log(`${this.name}-${age}`);
}

person.call({ name: "xavi" }, 26);

// What happens here?
// -------------------

// what JavaScript trys to do here is, it will try to add a new unique key the object which is passed as the argument.
// i.e.   { name: "xavi", uniqueKey:  }

// Now it sets the function which calls the 'call' method (i.e.  person.call() - person is  left side of the (.) dot so it will be 'this')
// to that uniqueKey
// { name: "xavi", uniqueKey: this } but here [this = person]
// therefor { name: "xavi", uniqueKey: person }
// After setting the function, now JS executes that function { name: "xavi", uniqueKey: person }[uniqueKey](arguments passed to the function)
// This execution now sets the value of this to the object to the left of the dot/bracket.

// Polyfill of .call()
//--------------------

Function.prototype.myCall = function (context, ...args) {
    // check obj Object is an object or not if not assign the global object.

    context = context || globalThis;

    // create a unique key
    const uniqueKey = Symbol();
    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);
    delete context[uniqueKey];

    return result;
}

// Now we can use this call polyfill.
person.myCall({ name: "xavi" }, 28);