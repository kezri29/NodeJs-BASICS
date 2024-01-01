//in this part creating a server and parsing the data sent by request from browser is performed
//here we are going to see the difference between using writefilesync(synchronous) and writefile(asynchronous)
//blocking, non-blocking concepts are understood here

const http = require('http');
const files = require('fs');

const server = http.createServer(
    (req,res) =>{
        const url = req.url;
        const method = req.method;

        if(url === '/'){
            res.setHeader('Content-type','text/html');
            res.write('<html><head><title>Hi</title></head><body><form  action ="/message" method = "POST"><input type="text" name="summa"><input type="submit" value="send"></form></body></html>');
            return res.end();
        }

        //redirection part
        if(url ==='/message' && method =='POST'){

            const body = [];  //creating a empty array and pushing the buffer parts into it for parsing
            req.on('data',(chunk)=>{      //on method is used to read the data sent by req thru browser
                body.push(chunk);
                console.log(chunk);
            })

            return req.on('end',()=>{
                const parsedBody = Buffer.concat(body).toString();  //concating the buffer part of the array using Buffer and converting it to string for human readable language
                console.log(parsedBody);                            //async code
                const msg = parsedBody.split('=');
                files.writeFile('parsed.txt',msg[1],(err)=>{       //Asynchronously writes data to a file, replacing the file if it already exists.
                    res.setHeader('Location','/');  
                    res.statusCode = 302; 
                    return res.end();
                });
            })
        }
        //normal part
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Hello</title></head><body>Hi da kutty kunja</body></html>');
        res.end();
    }
)
server.listen(3000);


/*
while using writefilesync it block all the futher procedding code untill it finish writing its fils to the txt document. There is blocking in this case.
while using writefile it asynchronously writes file data while also performing non-blocking of other codes. There is no wait in this case.
*/