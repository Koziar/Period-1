/*
        "use strict"

 "use strict";  Defines that JavaScript code should be executed in "strict mode".
 It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
 It only matters to new compilers that "understand" the meaning of it.
 The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 With strict mode, you can not, for example, use undeclared variables.
 It is very useful because it changes previously accepted "bad syntax" into real errors.

 As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
 In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

 In normal JavaScript, a developer will not receive any error feedback
 assigning values to non-writable properties.

 In strict mode, any assignment to a non-writable property, a getter-only property,
 a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

 */

// ----Not allowed in strict mode:----

// Using a variable, without declaring it, is not allowed:
function ex1(){
    "use strict";
    x = 3.14;                // This causes an error (x is not defined)
}

// Using an object, without declaring it, is not allowed:
function ex2(){
    "use strict";
    x = {p1:10, p2:20};      // This causes an error (x is not defined)
}

//Declared inside a function, it has local scope (only the code inside the function is in strict mode):
function ex3(){
    x = 3.14;       // This will not cause an error.
    myFunction();

    function myFunction() {
        "use strict";
        y = 3.14;   // This causes an error (y is not defined)
    }
}

// Duplicating a parameter name is not allowed:
function ex4(){
    "use strict";
    function x(p1, p1) {};   // This causes an error
}
