const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log('users middleware')
        return res.send(
            `<h1>Users:</h1>
            <ul>
                <li>User 1: Hanuman</li>
                <li>User 2: Gaechka</li>
                <li>User 3: Baratrum</li>
                <li>User 4: The Witch</li>
            </ul>
                `);
})

app.use('/', (req, res, next) => {
    console.log('home middleware')
    res.send('<h1>Please create new user</h1>')
})

app.listen(3000)
