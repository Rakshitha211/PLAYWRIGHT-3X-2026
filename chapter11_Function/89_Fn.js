//Immediately invoked function Expression(IIFE)
//They dont need to be called

function name1(){
console.log("hi");
}
name1();

//create a function without a name
//IIFE

(function(){

    console.log("anonymus function");
})();

(function(){
console.log("STATGING ENV!")
})
();

//cannot call this again because no return