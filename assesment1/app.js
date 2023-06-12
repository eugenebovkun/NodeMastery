const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<hmtl>')
        res.write('<header><title>Home page. create user</title></header>')

        res.write('<h1>Please create new user</h1>')
        res.write('<form action="/create-user" method="post"><input name="userName" placeholder="user name" type="text"/><button type="submit">Save</button></form>')
        res.write('</hmtl>')
        return res.end()
    } else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<hmtl>')
        res.write('<header><title>List if users</title></header>')

        res.write('<h1>Users:</h1>')
        res.write('<ul>')
            res.write('<li>User 1: Hanuman</li>')
        res.write('<li>User 2: Gaechka</li>')
        res.write('<li>User 3: Baratrum</li>')
        res.write('<li>User 4: The Witch</li>')
        res.write('</ul>')
        res.write('</hmtl>')
        return res.end()
    } else if (url === '/create-user' && method === 'POST') {
        // get data
        const data = []

        req.on('data', (chunk) => {
            data.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(data).toString();
            const name = parsedBody.split('=')[1];
            console.log('new user name is ', name);

        });
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end()


    }
});



server.listen(3000);