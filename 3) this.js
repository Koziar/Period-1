/*
        this

 In JavaScript, the thing called "this", is the object that "owns" the JavaScript code.

 The value of "this", when used in a function, is the object that "owns" the function.
 The value of "this", when used in an object, is the object itself.

 The "this" keyword in an object constructor does not have a value! It is only a substitute for the new object.
 The value of "this" will become the new object when the constructor is used to create an object.

 */

// EXAMPLES in JS:

/*
    Global context
 In the global execution context (outside of any function),
 "this" refers to the global object, whether in strict mode or not.
 */

var foo = function() {
    console.log(this.document === document); // true

    // In web browsers, the window object is also the global object:
    console.log(this === window); // true

    this.a = 37;
    console.log(window.a); // 37

};

/*
    Function context
 Inside a function, the value of "this" depends on
 how the function is called.
 */

function f1(){
    return this;
}

f1() === window; // global object

/*
 In this case, the value of "this" is not set by the call.
 Since the code is not in strict mode, the value of "this" must always be an object
 so it defaults to the global object.
 */

function f2(){
    "use strict"; // see strict mode
    return this;
}

f2() === undefined;

/*
 In strict mode, the value of "this" remains at whatever it's set to when entering the execution context.
 If it's not defined, it remains undefined.
 It can also be set to any value, such as null or 42 or "I am not this".
 */
//----------------------------------------------------------------------------
/*
    As an object method
 When a function is called as a method of an object, its "this" is set to the object the method is called on.
 In the following example, when o.f() is invoked, inside the function "this" is bound to the o object.
 */
var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};

console.log(o.f()); // logs 37

// HOW "this" IN JS DIFFERS FROM WHAT WE KNOW FROM JAVA
/*
    In JavaScript, functions are objects,
    and the value of "this" depends on how a function is called.
    "this" always refers to the “owner” of the function we're executing,
    or rather, to the object that a function is a method of.
    --------------------------------------------------------------------
    In Java, this refers to the current instance object on which the method is executed.
    There is JVM and no interpretor
 */

