const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");


const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', 'views');

const users = [];
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/users', (req, res, next) => {
    res.render('users', {path: '/users', pageTitle: 'Users', users})
})

app.get('/', (req, res, next) => {
    res.render('home', {path: "/", pageTitle: 'Add User'})
})

app.post('/add-user', (req, res, next) => {
    const userName = req.body.name;
    console.log('add new user', {name: userName})
    users.push({ name: userName });
    res.status(302).redirect('/users')
})

app.listen(3000)
