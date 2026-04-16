// Closure: The inner function retains the access of a variable that was declared in outer function, 
// even after the outer function has finished execution.


function createBankAccount (initialDeposite) {
    let balance = initialDeposite;

    return {
        deposite: function(amount) {
            balance += amount;
        },

        withdraw: function(amount) {
            balance -= amount;
        },

        balance: function() {
            return balance;
        }
    }
}

let userA = createBankAccount(100); // At this point JS has finished executing "createBankAccount" function

console.log(userA);
userA.deposite(10); // But still it remembers the value "balance" which was declared inside "createBankAccount" 
// This is due to closure.

// ** The "Execution Context" of createBankAccount is popped off the Call Stack, but the Lexical Environment (the "backpack") stays in the Heap because userA is still holding onto it.


// Memory Implecation
//--------------------

// Normally when a function has finished execution, JS "Garbage Collectors" delete all the variables
// inside it to free up space. If a closure exists, the garbage collector cannot delete those
// variables because the inner function might still need them.

// Potential Issue: 
// 1. Memory Bloat
// 2. Memory Leake

// Best Practice: If no longer needed a closure - nullify the reference to the inner function.

userA = null;