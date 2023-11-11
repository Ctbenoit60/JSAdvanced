// We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value


function randomDelay() {
    const delayTime = Math.floor(Math.random() * 20) + 1; 
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delayTime % 2 === 0) {
          resolve(`Delay of ${delayTime} seconds succeeded.`);
        } else {
          reject(`Delay of ${delayTime} seconds failed.`);
        }
      }, delayTime * 1000); // Convert seconds to milliseconds
    });
  }
  
  randomDelay()
    .then(message => console.log(message))
    .catch(errorMessage => console.error(errorMessage));
  