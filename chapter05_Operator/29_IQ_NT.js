let statusCode = 404;
let category =
statusCode <300? "sucess" :
statusCode <400? "redirect" :   
statusCode <500? "client error" : "server error";
console.log(`status code: ${statusCode} - category: ${category}`);
