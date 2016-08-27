var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.NODE_PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString("mongo"));

setupController(app);
apiController(app);

app.listen(port);