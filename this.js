// This Keyword in JavaScript

// `this` - The value of this is not determined by where the function is written, but by how the function is called.

function showName() {
  console.log("This refers to:", this.name || "The Global Window");
}


const personA = { name: "Alice", display: showName };
const personB = { name: "Bob", display: showName };

showName(); // Default binding.
// In standalone function - The value of this refers to the Global Object || undefined in Strict mode.

personA.display(); // Implicit binding.
// In Implicit binding - The value of this refers to whatever is to the left of the dot (.)

showName.call(personB); // Explicit binding.
// In Explicit binding - The value of this refers to the value inside the parenthesis.