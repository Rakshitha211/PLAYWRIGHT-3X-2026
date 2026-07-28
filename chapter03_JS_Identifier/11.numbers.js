
//integer Literals can be represented in decimal, hexadecimal, octal, and binary formats.   
let decimal=42;
console.log(decimal); // 42

let binary=0b101010; // binary representation of 42
console.log(binary); // 42  

let octal=0o52; // octal representation of 42       
console.log(octal); // 42   

//Floating-point literals can be represented in decimal and scientific notation.
let decimalFloat=3.14;
console.log(decimalFloat); // 3.14

let scientificFloat=1.23e4; // 1.23 * 10^4
console.log(scientificFloat); // 12300

let negativeScientificFloat=-5.67e-3; // -5.67 * 10^-3
console.log(negativeScientificFloat); // -0.00567

//typeof operator can be used to check the type of a number literal.
console.log(typeof decimal); // number
console.log(typeof binary); // number
console.log(typeof octal); // number
console.log(typeof decimalFloat); // number
console.log(typeof scientificFloat); // number
console.log(typeof negativeScientificFloat); // number      