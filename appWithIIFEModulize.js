(function(global, name) {
    var greeting = 'Hello';
    global.greeting = 'hello';
    console.log(greeting + ' ' + name);
}(window, 'John'));

console.log(greeting);