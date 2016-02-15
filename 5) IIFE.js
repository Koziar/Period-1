/*
        IIFE - Immediately-Invoked Function Expressions
 It's a JavaScript function that runs as soon as it is defined.
 */

(function() {
    // the code here is executed once in its own scope
})();
/*
The first pair of parentheses (function(){...}) turns the code within (in this case, a function) into an expression,
and the second pair of parentheses (function(){...})() calls the function that results from that evaluated expression.
 */

/*
 The key to understanding design patterns such as immediately-invoked function expressions
  is to realize JavaScript has function scope (but not block scope)
  and passes values by reference inside a closure.
 */

/*
    Evaluation context
 A lack of block scope means that variables defined inside, for example,
 a for loop will have their definition "hoisted" to the top of the enclosing function.
 Evaluating a function which depends on variables modified by the outer function (including by iteration)
 can be difficult. We can see this without a loop if we update a value between defining and invoking the function.
 */
var v, getValue;
v = 1;
getValue = function() { return v; };
v = 2;

getValue(); // 2

//While the result may seem obvious when updating v manually, it can produce unintended results when getValue() is defined inside a loop.

var v, getValue;
v = 1;
getValue = (function(x) {
    return function() { return x; };
})(v);
v = 2;

getValue(); // 1

//Here the function passes v as an argument and is invoked immediately, preserving the inner function's execution context.

/*
 IIFEs are also useful for establishing private methods for accessible functions
 while still exposing some properties for later use.
 The following example comes from Alman's post on IIFEs.

 http://benalman.com/news/2010/11/immediately-invoked-function-expression/
 */

var counter = (function(){
    var i = 0;

    return {
        get: function(){
            return i;
        },
        set: function( val ){
            i = val;
        },
        increment: function() {
            return ++i;
        }
    };
})();

// 'counter' is an object with properties, which in this case happen to be
// methods.

counter.get(); // 0
counter.set( 3 );
counter.increment(); // 4
counter.increment(); // 5

/*
 If we attempt to access counter.i from the global environment, it will be undefined
 as it is enclosed within the invoked function and is not a property of counter.
 Likewise, if we attempt to access i it will result in an error as we have not declared i in the global environment.
 */






