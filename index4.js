// The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

function printFibonacci(limit) {
    let a = 0;
    let b = 1;
    let count = 0;
  
    const intervalId = setInterval(() => {
      console.log(a);
  
      const nextFibonacci = a + b;
      a = b;
      b = nextFibonacci;
  
      count++;
  
      if (count === limit) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  

  printFibonacci(6);
  