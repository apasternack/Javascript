function greet(name) {
    
    if (name === 0) {

        name = 0;

    } else {

        name = name || '<your name here>';  

    }
    
    console.log('hello ' + name);   
}

greet('Adam');
greet();
greet(0);
greet('0');

