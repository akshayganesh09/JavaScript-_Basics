// calle, apply & bind - are used for Function Borrowing.
// That is it allows an Object to use a method belonging to another object.

// Call() - Allows an object to borrow method from another object.
// Immediatly invoked function and arguments are passed as comma seperated values.
// use case: when we are certain about the arguments.

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

inWareHouse.call(series3, 2015, "Chennai"); // Here an Object (series3) is passed to a function. Making the function reusable.
inWareHouse.call(series5, 2018, "Pune");

lineUpCost.cop.call(series3, "$400"); // Here an Object (series3) is passed to a method of another Object (lineUpCost).
lineUpCost.cop.call(series5, "$700");

