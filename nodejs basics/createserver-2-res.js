//in this part creating a server and sending responses will be performed
const http = require('http');

const server = http.createServer(
    (req,res) =>{
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Hello</title></head><body>Hi da kutty kunja</body></html>');
        res.end();
    }
)
server.listen(3000);