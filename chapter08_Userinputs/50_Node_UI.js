const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter a number:", (input) => {

    let num = Number(input);

    if(num%2===0){
console.log(num+ " is Even");
}
else{
    console.log(num+ " is odd");
}

});

//to run program - 
// node /Users/rakshitha/Documents/PlayWright-3X-2026/chapter08_Userinputs/50_Node_UI.js