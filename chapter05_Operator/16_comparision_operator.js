//comarision operator always retrun true, false- boolean value
let a=10;
let b=20;


console.log(a==b); //false
console.log(a!=b); //true

console.log(a>b); //false
console.log(a<b); //true

console.log(a>=b); //false
console.log(a<=b); //true           

//=, ==, ===, !=, !==, >, <, >=, <=

//= -> assignment operator  
//== -> equality operator (value comparison)
//=== -> strict equality operator (value and datatype comparison)
//!= -> not equal operator (value comparison)
//!== -> strict not equal operator (value and datatype comparison)

console.log(10=="10"); //true , loose comparison
console.log(10==="10"); //false, strict comparison

console.log(10!=20); //true
console.log(10!==20); //true

console.log(10!=10); //false
console.log(10!==10); //false

//strict check- we will check value and datatype both, 
// if both are same then it will return true otherwise false

//loose check- we will check only value, 
// if value is same then it will return true otherwise false

console.log(3==4); //false values are different
console.log(3!=4); //true values are different

console.log(3==3); //true values are same
console.log(3!=3); //false values are same

console.log(3===3); //true values and datatype are same
console.log(3!==3); //false values and datatype are same

console.log(3==="3"); //false values are same but datatype is different
console.log(3!=="3"); //true values are same but datatype is different

//console.log(3! ==="3"); doesnt exist.