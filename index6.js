// Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.

// function multiply() {
//     var args = arguments; // arguments object holds all passed arguments
//     setTimeout(function () {
//       var result = 1;
//       for (var i = 0; i < args.length; i++) {
//         result *= args[i];
//       }
//       console.log(result);
//     }, 500);
//   }
  
function multiply(a, b, c) {
  console.log( a * b * c );
  }

  Function.prototype.delay = function(delayMs) {
    return (...anyNum) => {
      setTimeout(() => {
        this(...anyNum)
      }, delayMs)
    }
  }

  multiply.delay(500)(5, 5, 4); // prints 25 after 500 milliseconds


  
   // prints 25 after 500 milliseconds

// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters

// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.