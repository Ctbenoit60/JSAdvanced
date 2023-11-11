// In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print
// their details

Person.prototype.toString = function () {
    return `${this.name}, is a ${this.age}, years old, ${this.gender}`
};
// b) Test your method by creating 2 different people using the below constructor function
// and printing them

const person2 = new Person('Corey Brown', 30, 'male')

const person3 = new Person('Christina Brown', 28, 'female')

function Person(name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
}

const person1 = new Person('James Brown', 73, 'male')
console.log('person1: '+person1) //prints person1: [object Object]
console.log('person2: '+person2)


// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.

Student.prototype.toString = function() {
    return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
};

const student1 = new Student('John Breaux', 20, 'male', '2023A');
console.log('student1: ' + student1); 

const student2 = new Student('Alice Hebert', 22, 'female', '2023B');
console.log('student2: ' + student2); 
