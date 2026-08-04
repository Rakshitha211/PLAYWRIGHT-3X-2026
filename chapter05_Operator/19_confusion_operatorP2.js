//null vs undefined
console.log(null==undefined); //true, loose comparison
console.log(null===undefined); //false, strict comparison

//0 vs false
console.log(0==false); //true, loose comparison
console.log(0===false); //false, strict comparison

//"0" vs false
console.log("0"==false); //true, loose comparison
console.log("0"===false); //false, strict comparison

//"0" vs 0
console.log("0"==0); //true, loose comparison
console.log("0"===0); //false, strict comparison

//"1" vs true
console.log("1"==true); //true, loose comparison
console.log("1"===true); //false, strict comparison

//1 vs true
console.log(1==true); //true, loose comparison
console.log(1===true); //false, strict comparison       

//empty string, null, undefined, 0, false are considered 
// as falsy values in javascript.       

console.log(null ==0); //false, loose comparison
console.log(null ===0); //false, strict comparison

console.log(undefined ==0); //false, loose comparison
console.log(undefined ===0); //false, strict comparison

console.log(false ==0); //true, loose comparison
console.log(false ===0); //false, strict comparison

console.log("" ==0); //true, loose comparison
console.log("" ===0); //false, strict comparison        

console.log(null ==false); //false, loose comparison
console.log(null ===false); //false, strict comparison

console.log(undefined ==false); //false, loose comparison
console.log(undefined ===false); //false, strict comparison

console.log("" ==false); //true, loose comparison
console.log("" ===false); //false, strict comparison    

//console.log(null>==undefined); //true, loose comparison
//console.log(null>==undefined); //false, strict comparison   


console.log(null ==undefined); //true, loose comparison
console.log(null ===undefined); //false, strict comparison  
console.log (null ==0); //false, loose comparison
console.log (null ===0); //false, strict comparison

console.log (null>0); //false, loose comparison 
console.log (null>=0); //true, loose comparison

console.log(null==0||null>0); //false, loose comparison     
console.log(null===0||null>0); //false, strict comparison 