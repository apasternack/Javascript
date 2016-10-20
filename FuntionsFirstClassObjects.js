greet();

function greet() {
    console.log('hi');
}


var anonymousGreet = function() {
    console.log('hiiii'); 
}

cool = anonymousGreet;

cool.sneakyPropAddByRef = "Verbum tu Mater!";

anonymousGreet();

anonymousGreet.prop1 = 'word homie!';   

function log(a) {
    a();
}

log(function() {
    console.log('this is cool!');
    return true;
});

console.log(4);

// console.log(cool.sneakyPropAddByRef);

/* Function Statements VS function expression

    expression is a unit of code that results in a value

    function statement just does work

    function expresion results in a value

*/