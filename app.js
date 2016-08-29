var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var todoController = require('./controllers/todoController');

var port = process.env.NODE_PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');
// app.set('views', './public/views');

mongoose.connect(config.getDbConnectionString("mongo"));

setupController(app);
apiController(app);
todoController(app);

app.listen(port);