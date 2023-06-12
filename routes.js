const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form  action="/message" method="POST"><input name="message" type="text" placeholder="enter the message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk)
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txs', message, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end()
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Hanuman`s First Node Page</title></head>')
    res.write('<body><H1>Hello from my node js server</H1></body>')
    res.write('</html>')
    res.end()
}

exports.handler = requestHandler;

