// calle, apply & bind - are used for Function Borrowing.
// That is it allows an Object to use a method belonging to another object.

// Apply() - Allows an object to borrow method from another object.
// Immediatly invoked function and arguments are passed as an Array of values.
// use case: when we are not certain about the arguments.

const series3 = {
  make: "BMW",
  model: "330d",
  units: 1000
}

const series5 = {
  make: "BMW",
  model: "520d",
  units: 500
}

const lineUpCost = {
  segment: "sedan",
  cop: function(cost) {
    console.log(`${this.model} - cost per unit: ${cost}`);
  }
}

function inWareHouse(year, warehouse) {
  console.log(`Model ${this.model} - ${this.units} units available. year of manufacture: ${year}, ${warehouse} warehouse. `);
}

inWareHouse.apply(series3, [2015, "Chennai"]); // Here an Object (series3) is passed to a function. Making the function reusable.
inWareHouse.apply(series5, [2018, "Pune"]);

lineUpCost.cop.apply(series3, ["$400"]); // Here an Object (series3) is passed to a method of another Object (lineUpCost).
lineUpCost.cop.apply(series5, ["$700"]);

//Practical use case.

Math.max(2, 4, 1, 7);

// Suppose we have an Array of data 
let arr = [2, 4, 1, 7]
// with out doing...  
// Math.max(arr[0], arr[1], arr[2], arr[3], arr[4])

// we can do...

Math.max.apply(null, arr)