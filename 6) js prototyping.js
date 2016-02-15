/*
        JS Prototyping
From JS period-1 exercises:
"Every JS function has a prototype property (this property is empty by default), and you can attach properties
and methods on ths prototype property. You can add methods and properties on an object's prototype property
to make those methods and properties available to all instances of that Object. [...]"
 */

/*
EXAMPLE from given exercises:
THE MAGIC OF CALLBACKS -> //3) Using the Prototype property to add new functionality to existing objects
 */
var namesArray = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

//creating a callback function
function isShortName(value, index, array){
    return value.length <= 3;
}
//...and another one here
function namesToUppercase(currentValue, index, array){
    return currentValue.toUpperCase();
}

Array.prototype.myFilter = function (callback){
    var tmp = [];
    this.forEach(function(element){
        if(callback(element))tmp.push(element);
    });
    return tmp;
};

Array.prototype.myMap = function (callback){
    var tmp = [];
    this.forEach(function(element){
        tmp.push(callback(element));
    });
    return tmp;
};

console.log("Initial array with names: " + namesArray.toString());
console.log("Names with length <= 3: " + namesArray.myFilter(isShortName).toString());
console.log("Names upper cased: " + namesArray.myMap(namesToUppercase).toString());


/*
We give array object new function
For example function below does the same as the map above, however it's not a prototype
so we can NOT do: namesArray.myMap2(namesToUppercase).toString();
 */
function myMap2(array, callback){
    var tmp = [];
    array.forEach(function(element){
        tmp.push(callback(element));
    });
    return tmp;
}

