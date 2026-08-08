function doubleMe(a){
    return a*2;
}

const doubleA = a => a*2;
doubleA(10);

const getEnv = () => "staging";
console.log(getEnv());

//Multiline Arrow function

const getResult =(score) =>
{
    if (score>70) return "PASS";

    return "Fail";
}
console.log(getResult(78));

const getResult1 =(score) =>
{
    if (score>70) return true;
    else
    return false;
}

console.log(getResult(35));