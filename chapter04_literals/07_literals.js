let age = "rakshitha"; //string literal
let age1 = 25;

let isStudent = true; //boolean literal

let name = null; //null literal

let person = {
    firstName: "Rakshitha", //string literal
    lastName: "Reddy", //string literal
    age: 25, //number literal
    isStudent: true //boolean literal
};

let numbers = [1, 2, 3, 4, 5]; //array literal

let add = function(a, b) { //function literal
    return a + b;
};

let regex = /ab+c/; //regular expression literal            

let undefinedValue = undefined; //undefined literal 

let pi=3.14159; //number literal
let pi2=3;     //number literal

//numeric literals can be represented in different formats,
//  such as decimal, hexadecimal, octal, and binary.    

//integer literals can be represented in decimal, hexadecimal, octal, and binary formats.

//typeof operator can be used to check the type of a literal.
console.log(typeof age); //string
console.log(typeof age1); //number
console.log(typeof isStudent); //boolean
console.log(typeof name); //object
console.log(typeof person); //object
console.log(typeof numbers); //object
console.log(typeof add); //function
console.log(typeof regex); //object
console.log(typeof undefinedValue); //undefined
console.log(typeof pi); //number
console.log(typeof pi2); //number