//in this part the code from createserver-6 has been put here in order to be exported for a node module
//this is similar to external css concept

const files = require('fs');
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html><head><title>Hi</title></head><body><form  action ="/message" method = "POST"><input type="text" name="summa"><input type="submit" value="send"></form></body></html>');
        return res.end();
    }

    if (url === '/message' && method == 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=');
            files.writeFile('parsed.txt', msg[1], (err) => {
                res.setHeader('Location', '/');
                res.statusCode = 302;
                return res.end();
            });
        })
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html><head><title>Hello</title></head><body>Hi da kutty kunja</body></html>');
    res.end();

}

// module.exports = requestHandler;  //one way of exporting
module.exports = {handler:requestHandler,someText:'Hello'};  //exporting by using object method

