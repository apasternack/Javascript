var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

//dont do this ever!!! for demo purposes only

john.__proto__ = person;

console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'jane'
}

jane.__proto__ = person;
console.log(jane.firstname);
console.log(jane.getFullName());
