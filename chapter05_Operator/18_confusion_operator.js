console.log(""==0); //true, loose comparison
console.log(""===0); //false, strict comparison

console.log(null==undefined); //true, loose comparison
console.log(null===undefined); //false, strict comparison

console.log(0==false); //true, loose comparison
console.log(0===false); //false, strict comparison

console.log("0"==false); //true, loose comparison
console.log("0"===false); //false, strict comparison

console.log("0"==0); //true, loose comparison
console.log("0"===0); //false, strict comparison

console.log("1"==true); //true, loose comparison
console.log("1"===true); //false, strict comparison

console.log(1==true); //true, loose comparison
console.log(1===true); //false, strict comparison       