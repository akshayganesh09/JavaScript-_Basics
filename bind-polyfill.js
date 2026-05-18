function person (age) {
    console.log(`${this.name} - ${age}`);
}

let x = person.bind({ name: "akshay" }, 28);
x(); // Bind creates a new function with permanant value of this. Which can be later executed.

// polyfill of .bind()
//--------------------------

// Bind returns a function.

Function.prototype.myBind = function(context, ...args) {
    let fn = this;
    return function (...newArgs) {
        return fn.apply(context, [...newArgs, ...args]);
    }
}