var person = new Object();

person["firstname"] = "Adam";
person["lastname"] = "Pasternack";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Atlanta";
person.address.state = "TX";

console.log(person.address.street);

var person1 = {
    firstname: 'Andy',
    lastname: 'Pasternack',
    address: {
        street: '87 Pearl Lane',
        city: 'New York',
        state: 'NY'
    }
}

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(person);
greet(person1);

greet({ firstname:'Mary', lastname: 'Doe'});