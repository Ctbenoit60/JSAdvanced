// The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?
function wrap() {
  return function () {
    let car = {
      make: "Porsche",
      model: "911",
      year: 1964,
      description() {
        console.log(
          `This car is a ${this.make} ${this.model} from ${this.year}`
        );
      },
    };
    const clonedcar = { ...car };
    clonedcar.year = 1970;
    clonedcar.description();
  };
}
setTimeout(wrap(), 200);
// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function

// b) Change the year for the car by creating a clone of the original and overriding it

// c) Does the delayed description() call use the original values or the new values from
// b)? Why?
// The delayed description() call would still use the original values. 
// This is because the description method is not part of the cloned object. 
// The method is defined in the original car object and references the this context, 
// which remains bound to the original object. Even if you update the properties in the cloned object, 
// the method still references the original object's properties.


// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)
