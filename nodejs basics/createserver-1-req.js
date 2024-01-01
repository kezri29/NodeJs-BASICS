// in this part creating a server and getting requests will be performed

const http = require('http');
function rqListener(req,res){
    console.log(req);
}
const server = http.createServer(rqListener);
server.listen(3000);

//instead of using the go-to method of defining a function and then calling it we can use arrow functions(callback functions)

const server2 = http.createServer(
    (req,res)=>{
    console.log(req); //logs the entire request sent by browser
    console.log(req.url);  //specifies the url
    console.log(req.method);  //specifies the method (GET/POST)
    console.log(req.headers);  //specifies the header part of req sent by browser
}); 
server2.listen(3000);