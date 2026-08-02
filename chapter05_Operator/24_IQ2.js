let environment="staging";
let baseURL= environment==="production"
?"https://api.production.com"
:"https://api.staging.com";

console.log(baseURL);