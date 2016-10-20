// function greet(firstname, lastname, language = 'sp') {  // for modern browsers, JS just added set default parameter feature
function greet(firstname, lastname, language, ...others) {

    language = language || 'en';

    if (arguments.length === 0) {
        console.log('Missing Parameters!');
        console.log('----------------');

    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('args 0: ' + arguments[0]);
    // console.log(others[2]);
    console.log('----------------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');
// greet('John', 'Doe', 'es', 'hey', 'yo');

