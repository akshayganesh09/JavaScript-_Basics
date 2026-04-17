// Apply() - Allows an object to borrow method from another object.
// Immediatly invoked function and arguments are passed as an Array.
// use case: when we are not certain about the arguments. We can spread the arguments.

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

// Arguments can be spreaded...

let data = ["7 series", 2021, "petrol"];

function premiumSegments(data) {
  console.log(`Our premium segment vehicle: ${data}`);
}

premiumSegments.call(null, data);

// Real world use case.
let values = [1, 7, 2, 3];
// let x = Math.max(values); This fails because max() expects comma seperated values
let x = Math.max.apply(null, values);
console.log(x);


