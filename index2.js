// The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.

// a) What order will the four tests below print in? Why?
// These will print in reverse order bc of the delayMsg function. The delay function delays the 
// execution of each call by however many milaseconds set. THe computer understands that there is a delay
// and moves on to the next line, or other syhronous code.

// b) Rewrite delayMsg as an arrow function

// c) Add a fifth test which uses a large delay time (greater than 10 seconds) // 10000

// d) Use clearTimeout to prevent the fifth test from printing at all.

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }

const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`);

let timeOut = setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds or 10000 ms')

// setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds or 10000 ms')
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
clearTimeout(timeOut)