// Scope Chaning: JS scopes up to the chain to find the variable.
// If a variable is not present at the inner level of the function, JS searchs in its next scope (outer function), if still
// it didn't get the variable it looks to the global scope and stll not present, then it will throw a refference error.

function grandParent(x) {
  let a = 1;
  
  return function parent(y) {
    let b = 2;
    
    return function child(z) {
      return x+y+z+a+b;
    }
  }
}

const step1 = grandParent(10); // "grandParent" --> Takes argument(x) - 10 and variable(a) - 1
const step2 = step1(20); // "parent" -->  Takes argument(y) - 20 and variable(b) - 2
step2(30); // "child" --> Takes argument(z) - 30