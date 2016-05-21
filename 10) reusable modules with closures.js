var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() { return privateCounter;}
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter2.increment();
counter2.increment();

console.log(counter1.value());
console.log(counter2.value());

counter1.decrement();
counter1.decrement();
console.log(counter1.value());

/////////////////////////////////////////////////////////

var personInfo = function(){
    var person = {name: "Lukas", age: 21};
    function setAge(val){
        person.age = val;
    }
    function setName(val){
        person.name = val;
    }
    function getInfo(){
        return person.name + " " + person.age;
    }
    return {
        setAgeFunc: function(val){setAge(val);},
        setNameFunc: function(val){setName(val);},
        getInfoFunc: function(){return getInfo();}
    }
};

console.log(personInfo().getInfoFunc());

//////////////////////////

// what is a closure?

function foo(x){
    var count = x;

    function bar(y){
        console.log(count + y);
    }
    bar(4); // will log 4 + x to the console;
}

foo(2); // logs 6 to the console

// another basic example:

var Westeror = function (king, deadCount) {
    var logKing = "The King of Westeros is " + king + ".";
    var goodKing = false;

    function logKingDeadCount() {
        if (deadCount < 10000 ){
            goodKing = true
        }else {
            goodKing = false;
        }
return logKing + "He is a " + (goodKing ? "Good King!" : "Bad King!");
    }

    this.useFunc = function () {
        return logKingDeadCount();
    }
}









