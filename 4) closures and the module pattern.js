/*
        JavaScript Closures and the Module Pattern
 One of the most widely used design patterns in JavaScript is the module pattern.
 The module pattern makes use of one of the nicer features of JavaScript – closures
  – in order to give some control of the privacy of methods so that third party applications
  cannot access private data or overwrite it.
 */

/*
 Closures are a construct of the JavaScript language.
 Within JavaScript all variables are accessible from the global scope except variables
 that are declared within a function using the var keyword.

 --> (However without declaring variables and using 'use strict' expression we gonna get errors)--> for more look into 1)_use_strict.js
 */

variable1 = 1; // Global Scope
var variable2 = 2; // Not within a function: Global Scope

function funcName() {
    variable3 = 3; // No var keyword: Global Scope
    var variable4 = 4; // Local Scope only
}

/*
 Within a function, you also have access to the global scope and every other scope above the function that you are in.
 In other words an inner function has access to the variables that are within the function that wraps it.
 */

var globalvar = 1; // Global Scope

function outer() {
    var outervar = 2; // Scope is within outer()

    function inner() {
        var innervar = 3; // Scope is within inner()
        console.log(globalvar); // => 1
        console.log(outervar); // => 2
        console.log(innervar); // => 3
    }

    console.log(globalvar); // => 1
    console.log(outervar); // => 2
    console.log(innervar); // => Reference Error;
}

console.log(globalvar); // => 1
console.log(outervar); // => Reference Error
console.log(innervar); // => Reference Error

// Using Closures for the Module Pattern
/*
 By returning an object or variable and assigning it to a variable outside of the function,
 we can expose whatever we wish to the outside world, so we can have both public and private methods.
 */

var Module = (function() {
    // Following function is private, but can be accessed by the public functions
    function privateFunc() { /*...*/ };

    // Return an object that is assigned to Module
    return {
        publicFunc: function() {
            privateFunc(); // publicFunc has direct access to privateFunc
        }
    };
}());

//That’s essentially the module pattern right there.^




// http://www.joezimjs.com/javascript/javascript-closures-and-the-module-pattern/
// https://carldanley.com/js-module-pattern/