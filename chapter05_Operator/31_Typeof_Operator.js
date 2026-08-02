//type opertor

console.log(typeof 42); //number
console.log(typeof "Hello"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object (this is a known quirk in JavaScript)
console.log(typeof {}); //object
console.log(typeof []); //object (arrays are also considered objects in JavaScript)     
console.log(typeof function(){}); //function    
console.log(typeof Symbol("symbol")); //symbol
console.log(typeof BigInt(12345678901234567890n)); //bigint 
console.log(typeof NaN); //number (NaN is a special numeric value that represents "Not-a-Number")
console.log(typeof Infinity); //number (Infinity is a special numeric value that represents positive infinity)  
//console.lohg(typeof -Infinity); //number (negative infinity is also a special numeric value)
console.log(typeof new Date()); //object (Date objects are also considered objects in JavaScript)       
console.log(typeof 34.2);