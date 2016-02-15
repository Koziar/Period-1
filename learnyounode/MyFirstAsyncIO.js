/**
 * Created by Luke on 11.02.2016.
 */

var fs = require('fs');
var fileName = process.argv[2];
var lines = undefined;

function getNumberOfLines(callback){
    fs.readFile(fileName, function doneReading(err, fileContents){

        lines = fileContents.toString().split('\n').length - 1;

        callback();
    });
}

function logNumberOfLines(){
    console.log(lines);
}

getNumberOfLines(logNumberOfLines);
