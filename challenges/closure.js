// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/* The variable external is defined in the global scope and thus is accessible from anywhere in the program,
even from functions nested within functions. The variable internal is stored within the local variable environment
within myFunction() and cannot be accessed from anywhere outside of that function. A closure is happening
between nestedFunction() and the internal variable  which is definied within myFunction. Nested functions can 
look outside of their scope to seek out a variable they need. In this instance, a closure is specifically happening
between console.log(internal) and the internal variable within myFunction()'s scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  total = 0;
  function add() {
    for (let i = 0; i <= num; i++) {
      total += i;
    }
  }
  add();
  return total;
}
console.log(summation(4));