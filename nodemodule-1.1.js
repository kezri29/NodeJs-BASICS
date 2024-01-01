//in this part the code from createserver-6 has been put into a separate file and is imported as a nodemodule
//using object method also we can export and use node module
const http = require('http');
const reqHandler = require('./nodemodule-1.2')
console.log(reqHandler.someText);
const server = http.createServer(reqHandler.handler);
server.listen(3000);