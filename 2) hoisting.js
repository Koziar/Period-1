/*
        Variable/function-Hoisting

 Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
 (to the top of the current script or the current function).
 In JavaScript, a variable can be declared after it has been used.
 */

// Function E1 gives the same result as function E2:

function E1(){
    x = 5; // Assign 5 to x

    console.log(x); // log x

    var x; // Declare x
}

function E2(){
    var x; // Declare x
    x = 5; // Assign 5 to x

    console.log(x); // log x
}

E1();
E2();

// Important to remember!!
// JavaScript only hoists declarations, not initializations.
// So function E3 does not give the same result as function E4:

function E3(){
    var x = 5; // Initialize x
    var y = 7; // Initialize y

    console.log(x + " " + y); // log x and y
}

function E4(){
    var x = 5; // Initialize x

    console.log(x + " " + y); // log x and y. Variable y has not been initialized so it's undefined

    var y = 7; // Initialize y. This value is never used
}


