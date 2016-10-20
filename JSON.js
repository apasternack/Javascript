var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var objectLiteral = {
    "firstname": 'Mary',
    "isAProgrammer": true
}

console.log(JSON.parse(JSON.stringify(objectLiteral)));

// console.log(objectLiteral);