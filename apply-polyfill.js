function person (age) {
    console.log(`${this.name} - ${age}`);
}

person.apply({ name: "akshay" }, [28]); // Normal apply method.

// .apply() polyfill
//--------------------

Function.prototype.myApply = function(context, args) {
    context = context || globalThis;

    const uniqueKey = Symbol();
    context[uniqueKey] = this;

    const reslut = Array.isArray(args) ? context[uniqueKey](...args) : context[uniqueKey]();
    delete context[uniqueKey];

    return reslut;
}

// Now we can use

person.myApply({ name: "akshay" }, [28]);