// Scope and Hoisting
// scope : the context in which variables are declared and can be accessed
//global scope
let name = "Pavan";

function greet() {
    console.log(name);
}

greet();
console.log(name);
// function scope
function test() {
    let age = 20;
    console.log(age);
}

test();

console.log(age); // ReferenceError
//Block scope
if (true) {
    let x = 10;
    const y = 20;
//Variables declared with let or const
//inside a block are limited to that block only.
    console.log(x);
    console.log(y);
}

console.log(x); // ReferenceError
// var is function scoped, not block scoped.
    var x = 10;
}

console.log(x);
//Hoisting describes 
// how JavaScript processes declarations before executing the code.
