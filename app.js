const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/errors')

const app = express()

// global setup
// rendering engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// bodyParser
app.use(bodyParser.urlencoded({extended: false}))
// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000)
