//in this part creating a server and sending responses to specified url routes is performed
const http = require('http');
const server = http.createServer(
    (req,res) =>{
        const url = req.url;
        if(url === '/'){
            res.setHeader('Content-type','text/html');
            res.write('<html><head><title>Hi</title></head><body><form action="/message" method="POST"><input type="text" name="summa"><input type="submit" value="send"></form></body></html>');
            return res.end();
        }
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Hello</title></head><body>Hi da kutty kunja</body></html>');
        res.end();
    }
)
server.listen(3001);