// All JavaScript objects inherit the properties and methods from their prototype.
// Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
// Objects created with new Date() inherit the Date.prototype.
// The Object.prototype is on the top of the prototype chain.
// All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

var a = {};
var b = [];
var c = true;
var d = "Hello World";
var e = 123;
var f = new Date();
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// custom prototype
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
console.log(myFather.firstName + " is " + myFather.age)
console.log('Add a breakpoint on me');