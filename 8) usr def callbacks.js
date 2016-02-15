/*
        Callbacks
 Nearly everything in node uses callbacks.
 They weren't invented by node, they are just part of the JavaScript language.

 Callbacks are functions that are executed asynchronously, or at a later time.
 Instead of the code reading top to bottom procedurally, async programs may execute different functions
 at different times based on the order and speed that earlier functions like http requests
 or file system reads happen.

 source:    https://github.com/maxogden/art-of-node#callbacks
 */


// Examples from given exercises:

//The MAGIC OF CALLBACKS

var namesArray = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

//2.) Implement user defined functions that take callbacks as an argument

//creating a callback function
function isShortName(value, index, array){
    return value.length <= 3;
}
//...and another one
function namesToUppercase(currentValue, index, array){
    return currentValue.toUpperCase();
}

function myFilter(array, callback){
    var tmp = [];
    array.forEach(function(element){
        if(callback(element))tmp.push(element);
    });
    return tmp;
}

function myMap(array, callback){
    var tmp = [];
    array.forEach(function(element){
        tmp.push(callback(element));
    });
    return tmp;
}

console.log("My filter where shows only names of length <=3: " + myFilter(namesArray, isShortName).toString());
console.log("My map which uppercase all names: " + myMap(namesArray, namesToUppercase).toString());
console.log("-----------------");

//4.) More user defined functions with callbacks

var a = [1,2,3];
var b = [1,2,3];

function handleNumArrays(na1, na2, callback){
    var tmp = [];
    for(var i = 0; i < na1.length; i++)tmp.push(na1[i] + na2[i]);
    callback(tmp);
}
//--------

handleNumArrays(a,b,function(res){
    console.log(res.join(",")); // note: In this case .join(",") does exactly the same as .toString();
});

handleNumArrays(a,b,function(res){
    var sum = 0;
    for(var i = 0; i < res.length; i++)sum += res[i];
    console.log(sum);
});

handleNumArrays(a,b,function(res){
    console.log(res.map(function(currentValue){return currentValue *= 10;}).toString());
});
console.log("-----------------");
