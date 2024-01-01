//in this part creating a server and redirecting to the specified url is performed
const http = require('http');
const files = require('fs');

const server = http.createServer(
    (req,res) =>{
        const url = req.url;
        const method = req.method;

        if(url === '/'){
            res.setHeader('Content-type','text/html');
            res.write('<html><head><title>Hi</title></head><body><form action ="/message" method = "POST"><input type="text" name="summa"><input type="submit" value="send"></form></body></html>');
            return res.end();
        }
        //redirection part
        if(url ==='/message' && method =='POST'){
            files.writeFileSync('hi','Dummy');
            res.setHeader('Location','/');  //using Location we redirect the url to the / page
            res.statusCode = 302; //successful redirection msg
            return res.end();
        }
        //normal part
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Hello</title></head><body>Hi da kutty kunja</body></html>');
        res.end();
    }
)
server.listen(3000);