//a function that is a person object

function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');

    //if there is no return statement JS Engine returns object created by new opperator which is built up by statements above
    // return  { greeting: 'i got in the way' };

}


// 'new' is an opperator  'new' creates an empty object AND points 'this' to the empty object,
// as long as Person() function does not return a value, JS Engine returns object created by new opperator

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Goodal');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());
