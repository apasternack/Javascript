// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

// function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// IIFE - Immediately Invoked Function Expression
var greeting = function(name) {
    return 'Hello ' + name;
}('adam');

console.log(greeting); //var greeting is NOT a function, but the return value of the function


3;

"I am a string";

{
    name: 'john'
};


var firstname = 'thomas';
// parenthases trick JS parser so it does not throw an error since what is in the () is a function statement which the parser requires a name for
(function(name) {
    var greeting = 'inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firstname));

//This is a major tool in modern frameworks