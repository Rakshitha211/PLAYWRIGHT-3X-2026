function ValidateStatusCode(status){
    if(status>=200&& status<=300){
    console.log("request is fine");
}
}

const ValidateStatusCode_Exp= function(status){
    if(status>=200&& status<=300){
    console.log("request is fine");
}
}

const ValidateStatusCode_Arrw = (status) => {
if (status>=200&& status<=300)
    {
     console.log("request is fine");
}
}
ValidateStatusCode(200);
ValidateStatusCode_Exp(200);
ValidateStatusCode_Arrw(500);